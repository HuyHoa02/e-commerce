import React from 'react'
import { Card, Row, Col, Flex } from "antd"
import "./VerifyEmailPage.css"

function VerifyEmailPage() {
  return (
    <Flex justify={'center'} align={'center'} style={{height: '100vh'}}>
        <Card className='verifyEmail__card' >
            <Row justify={'center'}>
                <h1>Nhập Mã Xác Thực Email</h1>
            </Row>
            <Row >
                <input type="text" className='verifyEmail__input'/>
            </Row>
            <Row justify={'center'}>
                <a href="#">Bạn chưa nhận được mã xác thực?</a>
            </Row>
            <Row justify={'center'}>
                <button className='verifyEmail__submit'>Xác Nhận</button>
            </Row>
        </Card>
    </Flex>
  )
}

export default VerifyEmailPage
