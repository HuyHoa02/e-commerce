import React from 'react'
import './ProfilePage.css'
import { Col, Row, Card, Button } from "antd";
import ProfileSideBarComponent from '../../../component/profileSideBarComponent/profileSideBarComponent';

function ProfilePage() {
    return (
        <Card bordered={true}>
            <Row style={{ marginTop: '20px' }}>
                <ProfileSideBarComponent />
                <Col span={15} offset={1}>
                    <Card>
                        <form className='profileForm' action="#">
                            <h2>Hồ Sơ Của Tôi</h2>
                            <div><span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span></div>
                            <hr />
                            <Row>
                                <Col span={5} offset={1}>
                                    <div><span>Tên đăng nhập: </span></div>
                                    <div><span>Tên</span></div>
                                    <div><span>Email</span></div>
                                    <div>Số Điện Thoại</div>
                                    <div>Giới Tính</div>
                                    <div>Ngày Sinh</div>
                                </Col>
                                <Col span={15} offset={2}>
                                    <div><span>Huỳnh Huy Hòa</span></div>
                                    <div><input type="text" className='profileForm__nameInput' /></div>
                                    <div>huynhhuyhoatt@gmail.com <a href="#">Thay đổi</a></div>
                                    <div>0335177644 <a href="#">Thay đổi</a></div>
                                    <div>
                                        <input type="radio" className='genderRadio' name="gender" id="Male" /> Nam
                                        <input type="radio" className='genderRadio' name="gender" id="Female" /> Nữ
                                        <input type="radio" className='genderRadio' name="gender" id="Others" /> Khác
                                    </div>
                                    <div><span>02/02/2003</span><a href="#"> Thay đổi</a></div>
                                </Col>
                            </Row>
                            <div className='profileForm__submit'>
                                <button className='profileForm__submitButton'>Lưu</button>
                            </div>
                        </form>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default ProfilePage
