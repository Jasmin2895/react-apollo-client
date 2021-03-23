import { graphqlNodeAxiosInstance } from "./index"

const API_ENDPOINTS ={
    LOGIN: "/api/v1/login"
}

export const postLoginAPI = async(name, password) => {
    console.log("postLoginAPI", name, password)
    const {data} = await graphqlNodeAxiosInstance.post(API_ENDPOINTS.LOGIN, {
        name, password
    })
    if(data) {
        document.cookie = `auth-token=${data.token}`
        // window.cookie.set("auth-token", data.token)
    }
    console.log("data", data);
}