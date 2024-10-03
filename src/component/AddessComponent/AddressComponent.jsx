import React from 'react'
import './AddressComponent.css'
import { Col, Row, Card, Button } from "antd";

function AddressComponent() {
    return (
        <Row className='userAddressCard'>
                <Col span={15}>
                    <div className='userAddressCard_info'>
                        <div>
                            <span>Huỳnh Huy Hòa | (+84) 335 177 644</span>
                        </div>
                        <div>
                            <span>Nhà Trọ Sinh Viên Toàn Khoa, Hẻm 68</span>
                        </div>
                        <div>
                            <span>Phường Hưng Lợi, Quận Ninh Kiều, Cần Thơ</span>
                        </div>
                    </div>
                </Col>
                <Col span={5} offset={4}>
                    <div className='userAddressCard_action'>
                        <div>
                            <a href="#">Cập nhật</a> |
                            <a href="#"> Xóa</a>
                        </div>
                        <div>
                            <button>Thiết lập mặc định</button>
                        </div>
                    </div>
                </Col>
        </Row>
    )
}

export default AddressComponent
