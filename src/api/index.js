import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import {BASE_URL} from "./../constants"
import axios from 'axios'

const GET_COUNTRIES_BY_NAME = gql`
    getCountries(name: "India") {
        capital,
        region,
        population,
        currencies {
        code,
        name,
        symbol
        },
        exchangeRate,
    }
`

const API_ENDPOINTS ={
    login: "/api/v1/login"
}


module.exports = {
    login: async(name, password) => {
        const {data} = await axios.post(`${BASE_URL}${API_ENDPOINTS}`, {
            name, password
        })

        console.log("data", data)
    }
}
