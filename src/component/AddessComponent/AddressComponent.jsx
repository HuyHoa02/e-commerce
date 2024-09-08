import React from 'react'
import './AddressComponent.css'
function AddressComponent() {
    return (
        <div className='userAddressCard'>
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
            <div className='userAddressCard_action'>
                <div>
                    <a href="#">Cập nhật</a> |
                    <a href="#"> Xóa</a>
                </div>
                <div>
                    <button>Thiết lập mặc định</button>
                </div>
            </div>
        </div>
    )
}

export default AddressComponent
