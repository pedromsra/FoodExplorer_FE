//configurações axios

import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-api-1s4u.onrender.com" //URL deve sempre ser maiusculo
});
