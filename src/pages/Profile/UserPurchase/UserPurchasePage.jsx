import React from 'react'
import "./UserPurchasePage.css"
import { Col, Row, Card, Button } from "antd";
import { ShopOutlined, WechatOutlined } from '@ant-design/icons'
import ProfileSideBarComponent from '../../../component/profileSideBarComponent/profileSideBarComponent';
function UserPurchasePage() {
    return (
        <Card bordered={true}>
            <Row style={{ marginTop: '20px' }}>
                <ProfileSideBarComponent />
                <Col span={15} offset={1}>
                    <Card style={{boxSizing: 'border-box'}}>
                        <Row>
                            <Col span={3} className='orderState active'>Tất cả</Col>
                            <Col span={4} className='orderState'>Chờ thanh toán</Col>
                            <Col span={3} className='orderState'>Vận chuyển</Col>
                            <Col span={4} className='orderState'>Chờ giao hàng</Col>
                            <Col span={3} className='orderState'>Hoàn thành</Col>
                            <Col span={3} className='orderState'>Đã hủy</Col>
                            <Col span={4} className='orderState'>Trả hàng/Hoàn tiền</Col>
                        </Row>
                    </Card>
                    <input className='purchaseLookup' type="text" name="" id="" placeholder='Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc tên sản phẩm' />
                    <Card>
                        <Row>
                            <Col span={4}><ShopOutlined /> La Roche Posay-VN</Col>
                            <Col span={3}><button className='chatButton colored'><WechatOutlined /> Chat</button></Col>
                            <Col span={3}><button className='chatButton'><ShopOutlined />Xem shop</button></Col>
                            <Col span={4} offset={8}>HOÀN THÀNH</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col span={4} ><img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m07ja1zb765p1b_tn" alt="" width={100}/></Col>
                            <Col span={16} style={{minWidth:'500px'}}>
                                <Row  className='productInfo'>
                                    Kem chống nắng La Roche-Posay Anthelios UV Mune 400 Kiểm soát Dầu SPF50+
                                </Row>
                                <Row>
                                    Phân loại hàng 50ml
                                </Row>
                                <Row>
                                    X1
                                </Row>
                                <Row>
                                    <div>Trả hàng miễn phí trong 15 ngày</div>
                                </Row>
                            </Col>
                            <Col span={4} className='productPrice'>
                                105.000đ
                            </Col>
                        </Row>
                        <hr />
                        <Row>Thành tiền: 1.290.000đ</Row>
                        <Row>
                            <Col span={9}></Col>
                            <Col span={5}><button className='userPurchase__btn'>Mua lại</button></Col>
                            <Col span={5}><button className='userPurchase__btn colored'>Xem chi tiết đơn hàng</button></Col>
                            <Col span={5}><button className='userPurchase__btn'>Liên hện người bán</button></Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default UserPurchasePage
