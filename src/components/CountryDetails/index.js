import React,{useState} from "react";
import { Table, Tag, Radio, Space } from 'antd';
import CountryTable from "./CountryTable";
// import { Layout } from "antd";  check if this is possible.
import "./index.scss";

const CountryDetails = () => {
    const [bottom, setBottom] = useState('bottomCenter')
    const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
        <span>
            {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                {tag.toUpperCase()}
                </Tag>
            );
            })}
        </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
        </Space>
        ),
    },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const countryList = () => {
        return( <div>
            <Table
              columns={columns}
              pagination={{ position: [bottom] }}
              dataSource={data}
            />
          </div>)
    }
    return(
       <>
        <main className="main-container">
            <div className="country-details">
                <CountryTable/>
            </div>
        </main>
       </>
    )
}

export default CountryDetails;