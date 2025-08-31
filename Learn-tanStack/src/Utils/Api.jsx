import React from 'react';
import axios from 'axios'

const Api = axios.create({
    // baseURL: "https://jsonplaceholder.typicode.com/"
        baseURL: "https://api.github.com/",


})
export default Api;