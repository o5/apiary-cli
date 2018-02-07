const axios = require('axios');

class Client {
    constructor(apiHost, bearer, token) {
        axios.defaults.baseURL = apiHost;

        axios.defaults.headers.common.authorization = `bearer ${bearer}`;
        axios.defaults.headers.common.authentication = `Token ${token}`;
    }

    async getUserApiList() {
        const response = await axios.get('/me/apis');
        return response.data;
    }

    async publishBlueprint(apiSubDomain, stdin) {
        await axios.post(`/blueprint/publish/${apiSubDomain}`, { code: stdin });
    }
}

module.exports = Client;
