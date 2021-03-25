import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Alert, Card, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { postLoginAPI } from './../../apis/apiEndpoints';
import 'antd/dist/antd.css';
import './index.scss';

const Login = () => {
    const history = useHistory();
    const [error, setError] = useState(false);
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const data = await postLoginAPI(
            values.username,
            values.password,
        );
        console.log('login result', data);
        // change to success message from server.
        if (data) {
            history.push('/countryDetails');
        } else {
            setError(true);
        }
    };

    return (
        <div>
            <Row className="app-name">
                <h1>AnyFin Technical Assignment</h1>
            </Row>
            <Card className="login-card">
                <Form
                    name="normal_login"
                    className="login-card-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                            className="username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                            className="password"
                        />
                    </Form.Item>
                    {error ? (
                        <Form.Item className="error-msg">
                            <Alert
                                message="Error"
                                description="Incorrect Login credentials. Please verify your username and password!"
                                type="error"
                                showIcon
                            />
                        </Form.Item>
                    ) : (
                        ''
                    )}
                    <Form.Item className="action">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            LOGIN
                        </Button>
                        {/* Or <a href="">register now!</a> */}
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
