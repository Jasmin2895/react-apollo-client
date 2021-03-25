import React, {useEffect, useState} from "react";
import { Table, Tag, Input, Row, Button } from 'antd';
import { getCountryDetails } from "./../../apis/apiEndpoints"


const SavedCountryList = () => {
    const [countriesData, updateCountriesData] = useState([])
    const [inputVal, setInputVal] = useState(0)
    const bottom = "bottomCenter";
    useEffect(()=> {
        async function getCountriesList() {
            const data = await getCountryDetails();
            console.log("getCountriesList", data)
            updateCountriesData(data)
        }
        getCountriesList();
    },[])
    const columns = [
        {
            title: 'Country Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
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
            render: currency => (
                <Tag color="green" key={currency}>
                    {currency}
                </Tag>
            ),
        },
        {
            title: 'Converted Amount',
            dataIndex: 'exchangeRate',
            render: exchangeRate => {
                let val = exchangeRate * inputVal;
                return(<Tag color="geekblue">{val}</Tag>)
            },
        },
    ];

    const onChange = (event) => {
        let value = event.target.value
        setInputVal(value)
    }

    return(<div>
        <Row className="calculate-cost">
            <Input placeholder="Enter the value in number..."  style={{ width: 400 }} onPressEnter={(e)=> onChange(e)}/>
        </Row>
        <Table
            columns={columns}
            pagination={{ position: [bottom] }}
            dataSource={countriesData}
        />
    </div>)
}
export default SavedCountryList;