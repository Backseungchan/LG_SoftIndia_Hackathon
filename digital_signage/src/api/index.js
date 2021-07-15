import LS2Request from '@enact/webos/LS2Request';

function handleOnSuccess() {
    return true;
}
function handleOnFailure() {
    return false;
}

export const putKind = (owner) => {
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
        onSuccess: handleOnSuccess,
        onFailure: handleOnFailure
    });

    return result;
}

export const put = (owner, title, imageURL) => {
    const result = new LS2Request().send({
        service: 'luna://com.webos.service.db',
        method: 'put',
        parameters: {
            "objects": [{
                "_kind": `${owner}:1`,
                "title": `${title}`,
                "imageURL": `${imageURL}`
            }]
        },
        onSuccess: handleOnSuccess,
        onFailure: handleOnFailure
    });
    
    return result
}

export const find = (owner) => {
    const result = new LS2Request().send({
        service: 'luna://com.webos.service.db',
        method: 'find',
        parameters: {
            "query": { "from": `${owner}:1` }
        },
        onSuccess: getDataSuccess,
        onFailure: handleOnFailure
    });

    function getDataSuccess(res) {
        return res.results;
    }

    return result;
}