import React,{useState} from "react";
import { Select, Button, Row, Col } from 'antd';
import CountryTable from "./CountryTable";
// import { Layout } from "antd";  check if this is possible.
import "./index.scss";

const { Option } = Select;

const CountryDetails = () => {
    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
      }

    const handleChange = (value) =>{
        console.log(`selected ${value}`);
    }
    const SearchCountries = () => {
        return(
        <Row className="search-countries">
            <Select mode="tags" style={{ width: '40%' }} placeholder="Search Countries" onChange={handleChange}>
                {children}
            </Select>
        
            <Button type="primary" className="add-countries">
                Add Countries +
            </Button>
        </Row>       
        )
    }    
    return(
       <>
        <main className="main-container">
            
            <div className="country-details">
                {SearchCountries()}
                <CountryTable/>
            </div>
        </main>
       </>
    )
}

export default CountryDetails;