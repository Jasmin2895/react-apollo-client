import { graphqlNodeAxiosInstance } from "./index"

const API_ENDPOINTS = {
    LOGIN: "/api/v1/login",
    GRAPHQL: "/graphql"
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
    return data;
}

// export const getCountriesDetails = (name)=>{
//       let GET_COUNTRIES_BY_NAME = gql`
//       {
//         getCountries(name: "${name}") {
//             capital,
//             region,
//             population,
//             currencies {
//               code,
//               name,
//               symbol
//             },
//             exchangeRate,
//           }
//       }
//     `
//   return GET_COUNTRIES_BY_NAME;
// }