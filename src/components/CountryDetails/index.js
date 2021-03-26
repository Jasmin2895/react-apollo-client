import React, { useState, useCallback, useEffect } from 'react';
import { Select, Button, Row, Input, List, Avatar } from 'antd';
import { debounce } from './../../utils/debounce';
import { postAddCountry } from './../../apis/apiEndpoints';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Navbar from './../Navbar';
import './index.scss';

const { Search } = Input;
const DisplaySearchResult = ({ searchString }) => {
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
`;
    const { loading, error, data } = useQuery(GET_COUNTRIES_BY_NAME);
    let listData = undefined;
    if (data && data.getCountries) {
        listData = data.getCountries;
    }

    const handleAddCountry = async (data) => {
        let payload = {
            name: data.name,
            population: data.population,
            exchangeRate:
                data.exchangeRate === -1 ? 0 : data.exchangeRate,
            currency: data.currencies[0].code,
        };
        const response = await postAddCountry(payload);
        console.log('response', response);
    };

    return (
        <List
            className="search-items-list"
            itemLayout="horizontal"
            dataSource={listData}
            renderItem={(item) => {
                return (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar />}
                            title={
                                <a href="https://ant.design">
                                    {item.name}
                                </a>
                            }
                        />
                        <List.Item>
                            <Button
                                type="primary"
                                className="add-countries"
                                onClick={() => handleAddCountry(item)}
                            >
                                Add Country +
                            </Button>
                        </List.Item>
                    </List.Item>
                );
            }}
        />
    );
};

const CountryDetails = () => {
    const [searchValue, setSearchValue] = useState('');

    const onSearch = (value) => {
        setSearchValue(value);
        // using debounce concept to make functions calls.
    };
    // FIXME: route all the request from debounce function...
    const debounceOnSearch = useCallback(
        debounce('onSearch', 2000),
        [],
    );

    const SearchCountries = () => {
        return (
            <>
                <Row className="search-countries">
                    <Search
                        placeholder="search countries by name"
                        onSearch={onSearch}
                    />
                </Row>
                <Row>
                    <h3>Search Result</h3>
                    <DisplaySearchResult
                        searchString={searchValue}
                    ></DisplaySearchResult>
                </Row>
            </>
        );
    };
    return (
        <>
            <Navbar></Navbar>
            <main className="main-container">
                <div className="country-details">
                    {SearchCountries()}
                </div>
            </main>
        </>
    );
};

export default CountryDetails;
