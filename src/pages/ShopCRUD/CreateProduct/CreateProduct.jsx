import React from 'react'
import { Row, Col, Card } from 'antd'
import "./CreateProduct.css"

function CreateProduct() {
  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <form action="#" className='createProduct__container'>
        <Row style={{alignSelf: 'center'}}>
          <h1 style={{color: 'var(--primary-color)'}}>TẠO MẶT HÀNG</h1>
        </Row>
        <Row className='createProduct__input'>
          <Col span={5}>
            <span className='createProduct__input_span'>Tên mặt hàng </span>
          </Col>
          <Col span={15} offset={1}>
            <input type="text" className='createProduct__input_input' placeholder='Tên cửa hàng...'/>
          </Col>
        </Row>
        <Row className='createProduct__input'>
          <Col span={5}>
            <span className='createProduct__input_span'>Mô tả </span>
          </Col>
          <Col span={15} offset={1}>
            <input type="text" className='createProduct__input_input' placeholder='Mô tả...'/>
          </Col>
        </Row>
        <Row className='createProduct__input'>
          <Col span={5}>
            <span className='createProduct__input_span'>Số lượng có sẵn </span>
          </Col>
          <Col span={15} offset={1}>
            <input type="number" className='createProduct__input_input' min={1}/>
          </Col>
        </Row>
        <Row className='createProduct__input'>
          <Col span={5}>
            <span className='createProduct__input_span'>Giá tối thiểu</span>
          </Col>
          <Col span={15} offset={1}>
            <input type="number" className='createProduct__input_input' min={1}/>
          </Col>
        </Row>
        <Row className='createProduct__input'>
          <Col span={5}>
            <span className='createProduct__input_span'>Giá tối đa </span>
          </Col>
          <Col span={15} offset={1}>
            <input type="number" className='createProduct__input_input' min={1}/>
          </Col>
        </Row>
        <Row className='createProduct__input'>
          <Col span={5}>
            <span className='createProduct__input_span'>Mã loại mặt hàng</span>
          </Col>
          <Col span={15} offset={1}>
            <input type="text" className='createProduct__input_input' placeholder='Mã loại mặt hàng' min={1}/>
          </Col>
        </Row>
        <Row  style={{alignSelf: 'center'}}>
          <button className='createProduct__input_submit'>Tạo mặt hàng</button>
        </Row>
      </form>
    </div>
  )
}

export default CreateProduct
