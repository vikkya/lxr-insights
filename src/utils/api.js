var axios = require('axios');

module.exports = {
    fetchData: function () {
        var encodedURI = window.encodeURI('http://192.168.0.78:8086/customer-analysis-data?buss-id=1429');
        
        return axios.get(encodedURI)
        .then(function(response){
            return response.data;
        }); 
    },
    aggregatedData: function(){
        var encodedURI = window.encodeURI('http://192.168.0.78:8086/aggreagted-info?buss-id=1429');
        return axios.get(encodedURI)
        .then(function(response){
            return response.data;
        })
    },
    clientInfo: function(){
        var encodedURI = window.encodeURI('http://192.168.0.78:8086/client-info');
        return axios.get(encodedURI)
        .then(function(response1){
            return response1.data;
        })
    },
    userData: function(){
        var encodedURI = window.encodeURI('https://vikkya94.auth0.com/api/v2/users/5a03f2e1b84acc463c6f5967');
        return axios.get(encodedURI)
        .then(function(responses){
            return responses.data;
        })
    }
};

