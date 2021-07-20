import axios from "axios";
import LS2Request from '@enact/webos/LS2Request';

const API = axios.create({ baseURL: 'https://digital-signage-lgsi.herokuapp.com/' });

export const getData = () => API.get('/data');

export const createData = (data) => API.post('/data', data);

export const deleteData = (id) => API.post(`data/${id}`);

export const putKind = (owner, success, failure) => {
        new LS2Request().send({
        service: 'luna://com.webos.service.db',
        method: 'putKind',
        parameters: {
            "id": `${owner}:1`,
            "owner": `${owner}`,
            "schema": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string"
                    },
                    "imageURL": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    }
                }
            },
            "indexes": [
                {
                    "name": "titleList",
                    "props": [{
                            "name": "title"
                    }]
                }
            ]
        },
        onSuccess: success,
        onFailure: failure
    });
}

export const put = (item, success, failure) => {
    new LS2Request().send({
        service: 'luna://com.webos.service.db',
        method: 'put',
        parameters: {
            "objects": [item]
        },
        onSuccess: success,
        onFailure: failure
    });
}

export const find = (owner, success, failure) => {
    new LS2Request().send({
        service: 'luna://com.webos.service.db',
        method: 'find',
        parameters: {
            "query": { "from": `${owner}:1` }
        },
        onSuccess: success,
        onFailure: failure
    });
}

export const del = (_id, success, failure) => {
    new LS2Request().send({
        service: 'luna://com.webos.service.db',
        method: 'del',
        parameters: {
            "ids" :[`${_id}`]
        },
        onSuccess: success,
        onFailure: failure
    });
}

export const speak = (text, success, failure) => {
    new LS2Request().send({
        service: 'luna://com.webos.service.tts',
        method: 'speak',
        parameters: {
            "text": `${text}`
        },
        onSuccess: success,
        onFailure: failure
    });
}