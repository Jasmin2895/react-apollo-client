import React, {useState} from "react";
import { Menu, Row, Col } from 'antd';
import "./index.scss";
import { Route } from "react-router";


const { SubMenu , ItemGroup, Item } = Menu;


const Navbar = () => {
    const RightMenuOptions = () => {
        return(
            <Menu>
                <Item key="mail">
                    <a href="">Signin</a>
                </Item>
            </Menu>
        )
    }

    const LeftMenuOptions = () => {
        return(
            <Menu>
                <Item key="mail">
                    <a href="">Home</a>
                </Item>
            </Menu>
        )
    }


    return(
        <nav className="menu-bar">
            <Row>
                <Col span={6}>
                    <a href="">Home</a>
                </Col>
                <Col span={6}>
                    <a href="/savedCountryList">Selected Country List</a>
                </Col>
                <Col className="menuCon" span={12}>
                    <a href="">Sign In</a>
                </Col>
            </Row>
        </nav>
    )
}


export default Navbar;