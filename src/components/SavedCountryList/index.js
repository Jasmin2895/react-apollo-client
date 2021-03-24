import React from "react";
import { Table, Tag } from 'antd';



const SavedCountryList = () => {

    const bottom = "bottomCenter";
    const columns = [
        {
            title: 'Country Name',
            dataIndex: 'countryName',
            key: 'countryName',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Population',
            dataIndex: 'population',
            key: 'population',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Currency',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
            <span>
                {tags.map(tag => {
                let color = 'green';
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
            // render: (text, record) => (
            // <Space size="middle">
            //     <a>Invite {record.name}</a>
            //     <a>Delete</a>
            // </Space>
            // ),
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

    return(<div>
        <Table
            columns={columns}
            pagination={{ position: [bottom] }}
            dataSource={data}
        />
    </div>)
}
export default SavedCountryList;