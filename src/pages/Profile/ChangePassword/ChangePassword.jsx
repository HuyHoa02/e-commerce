import React from 'react'
import "./ChangePassword.css"
import { Col, Row, Card, Button } from "antd";
import { ShopOutlined, WechatOutlined } from '@ant-design/icons'
import ProfileSideBarComponent from '../../../component/profileSideBarComponent/profileSideBarComponent';

function ChangePassword() {
    return (
        <Card bordered={true}>
            <Row style={{ marginTop: '20px' }}>
                <ProfileSideBarComponent />
                <Col span={15} offset={1}>
                    <Card>
                        <Row style={{marginTop: '20px'}}>
                            <Col span={5}>
                                <span>Nhập mật khẩu cũ:</span>
                            </Col>
                            <Col span={15}>
                                <input type="text"  className="changePassword_Input" placeholder='Mật khẩu cũ...'/>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '20px'}}>
                            <Col span={5}>
                                <span>Nhập mật khẩu mới:</span>
                            </Col>
                            <Col span={15}>
                                <input type="text"  className="changePassword_Input" placeholder='Mật khẩu mới...'/>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '20px'}}>
                            <Col span={5}>
                                <span>Nhập lại mật khẩu mới:</span>
                            </Col>
                            <Col span={15}>
                                <input type="text"  className="changePassword_Input" placeholder='Xác nhận mật khẩu mới...'/>
                            </Col>
                        </Row>

                        <Row justify={'center'} style={{marginTop: '20px'}}>
                            <button className='changPassword_btn'>Xác nhận</button>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default ChangePassword
