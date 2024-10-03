import React from 'react'
import { Row, Col, Card } from 'antd'
import "./CreateCategory.css"

function CreateCategory() {
  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <form action="#" className='createCategory__container'>
        <Row style={{alignSelf: 'center'}}>
          <h1 style={{color: 'var(--primary-color)'}}>TẠO LOẠI MẶT HÀNG</h1>
        </Row>
        <Row className='createCategory__input'>
          <Col span={5}>
            <span className='createCategory__input_span'>Tên cửa hàng </span>
          </Col>
          <Col span={15}>
            <input type="text" className='createCategory__input_input' placeholder='Tên cửa hàng...'/>
          </Col>
        </Row>
        <Row className='createCategory__input'>
          <Col span={5}>
            <span className='createCategory__input_span'>Mô tả </span>
          </Col>
          <Col span={15}>
            <input type="text" className='createCategory__input_input' placeholder='Mô tả...'/>
          </Col>
        </Row>
        <Row  style={{alignSelf: 'center'}}>
          <button className='createCategory__input_submit'>Tạo cửa hàng</button>
        </Row>
      </form>
    </div>
  )
}

export default CreateCategory
