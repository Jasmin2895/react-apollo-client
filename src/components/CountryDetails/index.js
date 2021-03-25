import React,{useState, useCallback, useEffect} from "react";
import { Select, Button, Row, Col, Input, List, Avatar, Skeleton } from 'antd';
import { debounce } from "./../../utils/debounce"
import { postAddCountry } from "./../../apis/apiEndpoints"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import {graphql} from 'react-apollo'
// import { Layout } from "antd";  check if this is possible.
import "./index.scss";

const { Search } = Input;
const { Option } = Select;
const DisplaySearchResult = ({searchString}) => {
    let GET_COUNTRIES_BY_NAME = gql`
    {
        getCountries(name: "${searchString}") {
            name
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
    }
`
    const { loading, error, data } = useQuery(GET_COUNTRIES_BY_NAME)
    const [initLoading, setInitLoading] = useState(true)
    let listData = undefined
    if(data && data.getCountries) {
        listData = data.getCountries
    }

    console.log("data inside display search result", data)

    const handleAddCountry = async(data) => {
        console.log("data", data)
        let payload = {
            name: data.name,
            population: data.population,
            exchangeRate: data.exchangeRate === -1 ? 0: data.exchangeRate,
            currency: data.currencies[0].code
        }
        const response = await postAddCountry(payload)
        console.log("response", response)
    }
    

    return(<List
        className="search-items-list"
        itemLayout="horizontal"
        dataSource={listData}
        renderItem={item => {
            console.log("List item", item)
            return(
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar/>}
              title={<a href="https://ant.design">{item.name}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <List.Item>
                <Button type="primary" className="add-countries" onClick={()=>handleAddCountry(item)}>
                   Add Country +
                </Button>
          </List.Item>
          </List.Item>
          
        )}}
      />)
}






const CountryDetails = () => {
    const children = [];
    const [searchValue, setSearchValue] = useState('')
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
      }


    const onSearch = (value) =>{
        console.log(`selected ${value}`);
        setSearchValue(value);
        // using debounce concept to make functions calls.
    }
    const debounceOnSearch = useCallback(debounce("onSearch", 2000), [])

    const SearchCountries = () => {
        return(
            <>
        <Row className="search-countries">
            <Search placeholder="search countries by name" onSearch={onSearch} style={{ width: '60%' }} />
        </Row>  
        <Row>
            {<DisplaySearchResult searchString={searchValue}></DisplaySearchResult>}
        </Row>
        </>    
        )
    }    
    return(
       <>
        <main className="main-container">
            
            <div className="country-details">
                {SearchCountries()}
            </div>
        </main>
       </>
    )
}

export default CountryDetails;