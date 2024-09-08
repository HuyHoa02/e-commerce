import React from 'react'
import { Col, Row, Card, Button } from "antd";
import { PlusOutlined, MessageOutlined, ShopOutlined, UserAddOutlined, UsergroupAddOutlined, StarOutlined, WechatOutlined, UserOutlined } from '@ant-design/icons'
import "./SellerPage.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SellerPage() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 400 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 400, min: 0 },
            items: 1
        }
    };

    const vouchers = [
        {
            discount: '3%',
            atLeast: '99k',
            date: '31.10.2024'
        },
        {
            discount: '4%',
            atLeast: '99k',
            date: '31.10.2024'
        },
        {
            discount: '5%',
            atLeast: '99k',
            date: '31.10.2024'
        },
        {
            discount: '6%',
            atLeast: '99k',
            date: '31.10.2024'
        },
        {
            discount: '7%',
            atLeast: '99k',
            date: '31.10.2024'
        },
        {
            discount: '8%',
            atLeast: '99k',
            date: '31.10.2024'
        },
        {
            discount: '9%',
            atLeast: '99k',
            date: '31.10.2024'
        },
    ]

    return (
        <div>
            <Row style={{ marginTop: 20 }}>
                <Col span={5} offset={1}>
                    <Card
                        hoverable
                        className='sellerCoverImg'
                    >
                        <Row>
                            <Col span={5}>
                                <div >
                                    <img src="https://down-cvs-vn.img.susercontent.com/1a742f4118c6330aff6b67306d5bf847_tn.webp" className='sellerAvatar' alt="" />
                                </div>
                            </Col>
                            <Col span={19}>
                                <div className='sellerCoverTitle'>
                                    <span className='title'>Sách Sbooks - Chính Hãng</span>
                                    <div>
                                        <span className='seller__greendot'></span>
                                        <span style={{ color: '#fff' }}>Online</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10} offset={1}>

                                <Button className='sellerCover__button'> <PlusOutlined /> THEO DÕI</Button>
                            </Col>
                            <Col span={10} offset={1}>
                                <Button className='sellerCover__button'> <MessageOutlined /> CHAT</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={15} offset={2}>
                    <Card style={{ height: '140px' }} bordered={false}>
                        <Row>
                            <Col span={10} offset={1}><ShopOutlined />  Sản Phẩm: 394</Col>
                            <Col span={10} offset={1}> <UsergroupAddOutlined /> Người Theo Dõi: 1314</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={10} offset={1}><UserAddOutlined /> Đang Theo: 12</Col>
                            <Col span={10} offset={1}><StarOutlined /> Đánh Giá: 4.9</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={10} offset={1}><WechatOutlined /> Tỉ Lệ Phản Hồi Chat: 98%</Col>
                            <Col span={10} offset={1}><UserOutlined /> Tham Gia: 2019</Col>
                        </Row>
                    </Card>
                </Col>

            </Row>
            <Row style={{ marginTop: '20px' }}>
                <Col span={5} offset={2}>TẤT CẢ SẢN PHẨM</Col>
                <Col span={5}>BÁN CHẠY</Col>
                <Col span={5}>SẢN PHẨM MỚI</Col>
                <Col span={5}>SẢN PHẨM ĐÁNG CHÚ Ý</Col>
            </Row>
            <br />
            <Row style={{ marginTop: '50px' }}>
                <Col span={20} offset={2}>
                    <h2>😍Voucher Siêu Hot Từ SBOOKS 😍</h2>
                    <Carousel responsive={responsive}>
                        {vouchers.map(voucher => {
                            return (
                                <Row className='sellerVoucher' align="middle">
                                    <Col span={15}>
                                        <div >
                                            <p>Giảm {voucher.discount}</p>
                                            <p>Đơn Tối Thiếu{voucher.atLeast}</p>
                                            <p>HSD: {voucher.date}</p>
                                        </div>
                                    </Col>
                                    <Col span={5}>
                                        <button className='voucherButton'>Lưu</button>
                                    </Col>
                                </Row>
                            )
                        })}
                    </Carousel>
                </Col>
            </Row>
            <br />
            <Row>
                <Col span={20} offset={2}>
                    <h3>GỢI Ý CHO BẠN</h3>
                </Col>
            </Row>
        </div>
    )
}

export default SellerPage
