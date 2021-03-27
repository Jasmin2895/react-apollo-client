import React from 'react';
import { Menu, Row, Col } from 'antd';
import './index.scss';

// const { SubMenu, ItemGroup, Item } = Menu;

const Navbar = () => {
    return (
        <nav className="navbar">
            <Row className="navbar-items">
                <Col span={3} className="navbar-item">
                    <a href="/country-details">Country Details</a>
                </Col>
                <Col span={6} className="navbar-item">
                    <a href="/saved-country-list">
                        Selected Country List
                    </a>
                </Col>
                <Col className="navbar-item logout" span={14}>
                    <a href="/">Logout</a>
                </Col>
            </Row>
        </nav>
    );
};

export default Navbar;
