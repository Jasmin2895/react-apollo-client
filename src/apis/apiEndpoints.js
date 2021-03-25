import { graphqlNodeAxiosInstance } from './index';

const API_ENDPOINTS = {
    LOGIN: '/api/v1/login',
    GRAPHQL: '/graphql',
    COUNTRY_DETAILS: '/api/v1/countryDetails',
};

export const postLoginAPI = async (name, password) => {
    console.log('postLoginAPI', name, password);
    try {
        const { data } = await graphqlNodeAxiosInstance.post(
            API_ENDPOINTS.LOGIN,
            {
                name,
                password,
            },
        );
        console.log('postLoginAPI', data);
        if (data) {
            document.cookie = `auth-token=${data.token}`;
            // window.cookie.set("auth-token", data.token)
        }
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

// add jwt as important header in all the APIs

export const postAddCountry = async (payload) => {
    console.log('payload', payload);
    const { data } = await graphqlNodeAxiosInstance.post(
        API_ENDPOINTS.COUNTRY_DETAILS,
        {
            ...payload,
        },
    );
    return data;
};

export const getCountryDetails = async () => {
    const { data } = await graphqlNodeAxiosInstance.get(
        API_ENDPOINTS.COUNTRY_DETAILS,
    );
    console.log('getCountryDetails', data);

    return data;
};

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
