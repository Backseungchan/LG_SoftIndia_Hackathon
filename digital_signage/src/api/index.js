import axios from "axios";
import LS2Request from '@enact/webos/LS2Request';

export const getData = () => axios.get('https://digital-signage-lgsi.herokuapp.com/data');

export const createData = (data) => axios.post('https://digital-signage-lgsi.herokuapp.com/data', data);

export const deleteData = (id) => axios.delete(`https://digital-signage-lgsi.herokuapp.com/data/${id}`);

export const speak = (text, success, failure) => {
    new LS2Request().send({
        service: 'luna://com.webos.service.tts',
        method: 'speak',
        parameters: {
            "text": text
        },
        onSuccess: success,
        onFailure: failure
    });
}