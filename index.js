const axios = require('axios');

module.exports = class Location {

    /**
     * Contructor
     * 
     * @param {string} key 
     */
    constructor(key) {
        this.key = key
    }

    /**
     * Returns Object
     * 
     * @param {number} latitude
     * @param {number} longitude
     * @param {string} type type i.e. hospitals, banks etc
     * @return {Promise} promise
     */
    async fetchNearbyLocations(latitude, longitude, type) {
        return axios.get(`https://maps.googleapis.com/maps/api/place/search/json?rankby=distance&keyword=${type}&location=${latitude},${longitude}&key=${this.key}&sensor=false&libraries=places`)
    }
};