import LS2Request from '@enact/webos/LS2Request';

export const putKind = (owner, success, failure) => {
    const result = new LS2Request().send({
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

    return result;
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