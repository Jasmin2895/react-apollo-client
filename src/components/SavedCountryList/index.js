import React, { useEffect, useState } from 'react';
import { Table, Tag, Input, Row } from 'antd';
import { getCountryDetails } from './../../apis/apiEndpoints';
import Navbar from './../Navbar';

import './index.scss';

const SavedCountryList = () => {
    const [countriesData, updateCountriesData] = useState([]);
    const [inputVal, setInputVal] = useState(0);
    const bottom = 'bottomCenter';
    useEffect(() => {
        async function getCountriesList() {
            const data = await getCountryDetails();
            updateCountriesData(data);
        }
        getCountriesList();
    }, []);
    const columns = [
        {
            title: 'Country Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Population',
            dataIndex: 'population',
            key: 'population',
        },
        {
            title: 'Exchange Rate',
            dataIndex: 'exchangeRate',
            key: 'exchangeRate',
        },
        {
            title: 'Currency',
            key: 'currency',
            dataIndex: 'currency',
            render: (currency) => (
                <Tag color="green" key={currency}>
                    {currency}
                </Tag>
            ),
        },
        {
            title: 'Converted Amount',
            dataIndex: 'exchangeRate',
            render: (exchangeRate) => {
                let val = exchangeRate * inputVal;
                return <Tag color="geekblue">{val}</Tag>;
            },
        },
    ];

    const onChange = (event) => {
        let value = event.target.value;
        setInputVal(value);
    };

    return (
        <>
            <Navbar></Navbar>
            <main className="main-container">
                <Row className="calculate-cost">
                    <h3>Enter value</h3>
                    <Input
                        min={1}
                        placeholder="Enter value in number..."
                        className="calculate-cost-input"
                        style={{ width: 400 }}
                        onPressEnter={(e) => onChange(e)}
                    />
                </Row>
                <Table
                    className="country-rate-table"
                    columns={columns}
                    pagination={{ position: [bottom] }}
                    dataSource={countriesData}
                />
            </main>
        </>
    );
};
export default SavedCountryList;
