import React from 'react'
import { Col, Row, Card, Button } from "antd";
import ProfileSideBarComponent from '../../../component/profileSideBarComponent/profileSideBarComponent';
import './UserAddressPage.css'
import { PlusOutlined } from '@ant-design/icons'
import AddressComponent from '../../../component/AddessComponent/AddressComponent';

function UserAddressPage() {
    return (
        <Card>
            <Row style={{ marginTop: '20px' }}>
                <ProfileSideBarComponent />
                <Col span={15} offset={1}>
                    <Card>
                        <div className='addressCard__header'>
                            <div>
                                <span>Địa chỉ của tôi</span>
                            </div>
                            <div className='addressCard__header_addAdress'>
                                <button className=''><PlusOutlined /> Thêm địa chỉ mới</button>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <div className='addressCard__body'>
                            <div>
                                <span>Địa chỉ</span>
                            </div>

                            <AddressComponent/>
                            <AddressComponent/>
                            <AddressComponent/>
                            
                        </div>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default UserAddressPage
