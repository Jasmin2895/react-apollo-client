import axios from "axios";
import {BASE_URL} from "./../constants"

const beforeRequest = (config) =>{
    console.log("config", config)
    let headers = {}
    let defaultHeaders = config.headers;
    if(config &&config.url != "/api/v1/login"){
        headers["auth-token"] = document.cookie["auth-token"];
    }
    
    // const currentTime = new Date().getTime();
    
    config.headers = {...headers, ...defaultHeaders}

    return config;
}

const createAxios = (baseURL) => {
    console.log("baseURL", baseURL)
    const axiosInstance = axios.create({
        baseURL
    })

    axiosInstance.interceptors.request.use((config) => (beforeRequest? beforeRequest(config): config), (error)=> Promise.reject(error));

    axiosInstance.interceptors.response.use(
        (response)=> response,
        (error)=> {
            const status = error.response?.status;
            if(status === 401){
                // delete cookie
                // redirect to login page
            } else if(status>= 403){
                console.error(`Backend Error [${error.response.status}] with API:`, error);
            }

            return Promise.reject(error);
        }
    )
    return axiosInstance;
}

export const graphqlNodeAxiosInstance = createAxios(BASE_URL);