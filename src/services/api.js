//configurações axios

import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3021" //URL deve sempre ser maiusculo
});
