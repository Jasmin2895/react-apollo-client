import { graphqlNodeAxiosInstance } from './index';

const API_ENDPOINTS = {
    LOGIN: '/api/v1/login',
    GRAPHQL: '/graphql',
    COUNTRY_DETAILS: '/api/v1/countryDetails',
};

export const postLoginAPI = async (name, password) => {
    try {
        const { data } = await graphqlNodeAxiosInstance.post(
            API_ENDPOINTS.LOGIN,
            {
                name,
                password,
            },
        );
        if (data) {
            document.cookie = `auth-token=${data.token}`;
            // window.cookie.set("auth-token", data.token)
        }
        return data;
    } catch (error) {
        console.error('error', error);
    }
};

// FIXME: add jwt as important header in all the APIs

export const postAddCountry = async (payload) => {
    try {
        const { data } = await graphqlNodeAxiosInstance.post(
            API_ENDPOINTS.COUNTRY_DETAILS,
            {
                ...payload,
            },
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getCountryDetails = async () => {
    try {
        const { data } = await graphqlNodeAxiosInstance.get(
            API_ENDPOINTS.COUNTRY_DETAILS,
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};
