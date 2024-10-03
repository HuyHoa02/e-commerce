import React from 'react'
import { FacebookOutlined, InstagramOutlined, BellOutlined, QuestionCircleOutlined, SearchOutlined, DownOutlined, CheckOutlined, ShoppingCartOutlined } from '@ant-design/icons'


function HeaderComponent() {
  return (
    <div>
      <header className="header">
        <div className="grid wide">
          <nav className="header__navbar hide-on-mobile-tablet">
            <ul className="header__navbar-list">
              <li
                className="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate"
              >
                ăn đầu buồi ăn cứt
                <div className="header__qr">
                  <img
                    src="/qr_code.png"
                    alt="QR Code"
                    className="header__qr-img"
                  />
                  <div className="header__qr-apps">
                    <a href="" className="header__qr-link">
                      <img
                        src="/google_play.png"
                        alt="Google Play"
                        className="header__qr-download-img"
                      />
                    </a>
                    <a href="" className="header__qr-link">
                      <img
                        src="/appstore.png"
                        alt="App Store"
                        className="header__qr-download-img"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="header__navbar-item">
                <span className="header__navbar-title--no-pointer">Kết nối</span>

                <a href="" className="header__navbar-icon-link">
                  <FacebookOutlined className='header__navbar-icon' />
                </a>
                <a href="" className="header__navbar-icon-link">
                  <InstagramOutlined className='header__navbar-icon' />
                </a>
              </li>
            </ul>
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__navbar-item--has-notify">
                <a href="" className="header__navbar-item-link">
                  <BellOutlined className='header__navbar-icon' />
                  Thông báo
                </a>
                <div className="header__notify">
                  <header className="header__notify-header">
                    <h3>Thông báo mới nhận</h3>
                  </header>
                  <ul className="header__notify-list">
                    <li className="header__notify-item header__notify-item--viewed">
                      <a href="" className="header__notify-link">
                        <img
                          src="https://img.tickid.vn/photos/resized/200x120/83-1574758841-myphamohui-lgvina.png"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name"
                          >Mỹ phẩm Ohui chính hãng</span
                          >
                          <span className="header__notify-description"
                          >Mô tả mỹ phẩm Ohui chính hãng</span
                          >
                        </div>
                      </a>
                    </li>
                    <li className="header__notify-item">
                      <a href="" className="header__notify-link">
                        <img
                          src="https://img.tickid.vn/photos/resized/200x120/83-1580794352-myphamohui-lgvina.png"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name"
                          >Xác thực chính hãng nguồn gốc các sản phẩm
                            Ohui</span
                          >
                          <span className="header__notify-description"
                          >Xác thực chính hãng nguồn gốc các sản phẩm
                            Ohui</span
                          >
                        </div>
                      </a>
                    </li>
                    <li className="header__notify-item">
                      <a href="" className="header__notify-link">
                        <img
                          src="https://img.tickid.vn/photos/resized/200x120/83-1576046204-myphamohui-lgvina.png"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name"
                          >Sale Sốc bộ dưỡng Ohui The First Tái tạo trẻ hóa da
                            SALE OFF 70%</span
                          >
                          <span className="header__notify-description"
                          >Siêu sale duy nhất 3 ngày 11-13/12/2019</span
                          >
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="header__notify-footer">
                    <a href="" className="header__notify-footer-btn">Xem tất cả</a>
                  </div>
                </div>
              </li>
              <li className="header__navbar-item">
                <a href="" className="header__navbar-item-link">
                  <QuestionCircleOutlined className='header__navbar-icon' />

                  Trợ giúp
                </a>
              </li>
              <li className="header__navbar-item header__navbar-user">
                <img
                  src="/user_avatar.png"
                  alt=""
                  className="header__navbar-user-img"
                />
                <span className="header__navbar-user-name">
                  Tín Phạm
                </span>
                <ul className="header__navbar-user-menu">
                  <li className="header__navbar-user-item">
                    <a href="">Tài khoản của tôi</a>
                  </li>
                  <li className="header__navbar-user-item">
                    <a href="">Địa chỉ của tôi</a>
                  </li>
                  <li className="header__navbar-user-item">
                    <a href="">Đơn mua</a>
                  </li>
                  <li
                    className="header__navbar-user-item header__navbar-user-item--separate"
                  >
                    <a href="">Đăng xuất</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="header-with-search">
            <label htmlFor="mobile-search-checkbox" className="header__mobile-search">
              <SearchOutlined className='header__mobile-search-icon' />
            </label>

            <div className="header__logo hide-on-tablet">
              <a href="/" className="header__logo-link">
                <img src="/public/WeshopLogoB.png" className="header__logo-img" alt="" />
              </a>
            </div>
            <input
              type="checkbox"
              hidden
              id="mobile-search-checkbox"
              className="header__search-checkbox"
            />
            <div className="header__search ">
              <div className="header__search-input-wrap">
                <input
                  type="text"
                  className="header__search-input"
                  placeholder="Nhập để tìm kiếm sản phẩm"
                />

                <div className="header__search-history">
                  <h3 className="header__search-history-heading">
                    Lịch sử tìm kiếm
                  </h3>
                  <ul className="header__search-history-list">
                    <li className="header__search-history-item">
                      <a href="">Ăn đầu buồi</a>
                    </li>
                    <li className="header__search-history-item">
                      <a href="">Ăn cứt</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header__search-select">
                <span className="header__search-select-label">Trong shop</span>
                <DownOutlined className='header__search-select-icon' />

                <ul className="header__search-option">
                  <li
                    className="header__search-option-item header__search-option-item--active"
                  >
                    <span>Trong shop</span>
                    <CheckOutlined />
                  </li>
                  <li className="header__search-option-item">
                    <span>Ngoài shop</span>
                    <CheckOutlined />
                  </li>
                </ul>
              </div>
              <button className="header__search-btn">
              <SearchOutlined />
              </button>
            </div>

            <div className="header__cart">
              <div className="header__cart-wrap">
                <ShoppingCartOutlined className="header__cart-icon" />
                <span className="header__cart-notice">3</span>
                <div className="header__cart-list ">
                  <img
                    src="/public/no-cart.png"
                    alt="No Cart"
                    className="header__cart-no-cart-img"
                  />
                  <span className="header__cart-list-no-cart-msg">
                    Chưa có sản phẩm
                  </span>
                  <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                  <ul className="header__cart-list-item">
                    <li className="header__cart-item">
                      <img
                        src="https://img.tickid.vn/photos/resized/320x/83-1580889448-myphamohui-lgvina.png"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                            Set sữa rửa mặt Ohui Prime sữa rửa mặt Ohui Prime
                            sữa rửa mặt Ohui Prime
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price"
                            >2.000.000đ</span
                            >
                            <span className="header__cart-item-multiply">x</span>
                            <span className="header__cart-item-qnt">2</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-description"
                          >Phân loại : Bạc</span
                          >
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>
                    <li className="header__cart-item">
                      <img
                        src="https://img.tickid.vn/photos/resized/320x/83-1580887317-myphamohui-lgvina.png"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                            Set dưỡng ẩm whoo vàng
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price"
                            >3.105.000đ
                            </span>
                            <span className="header__cart-item-multiply">x</span>
                            <span className="header__cart-item-qnt">1</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-description"
                          >Phân loại : Cứt</span
                          >
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>
                    <li className="header__cart-item">
                      <img
                        src="https://img.tickid.vn/photos/resized/320x/83-1580884899-myphamohui-lgvina.png"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                            Set kem mắt hoàn lưu cao cấp
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price"
                            >11.610.000đ
                            </span>
                            <span className="header__cart-item-multiply">x</span>
                            <span className="header__cart-item-qnt">3</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-description"
                          >Phân loại : Tinh hoa
                          </span>
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>
                    <li className="header__cart-item">
                      <img
                        src="https://img.tickid.vn/photos/resized/320x/83-1580889448-myphamohui-lgvina.png"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                            Set sữa rửa mặt Ohui Prime
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price"
                            >2.000.000đ</span
                            >
                            <span className="header__cart-item-multiply">x</span>
                            <span className="header__cart-item-qnt">2</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-description"
                          >Phân loại : Bạc</span
                          >
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>
                    <li className="header__cart-item">
                      <img
                        src="https://img.tickid.vn/photos/resized/320x/83-1580887317-myphamohui-lgvina.png"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                            Set dưỡng ẩm whoo vàng
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price"
                            >3.105.000đ
                            </span>
                            <span className="header__cart-item-multiply">x</span>
                            <span className="header__cart-item-qnt">1</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-description"
                          >Phân loại : Cứt</span
                          >
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>
                    <li className="header__cart-item">
                      <img
                        src="https://img.tickid.vn/photos/resized/320x/83-1580884899-myphamohui-lgvina.png"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                            Set kem mắt hoàn lưu cao cấp
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price"
                            >11.610.000đ
                            </span>
                            <span className="header__cart-item-multiply">x</span>
                            <span className="header__cart-item-qnt">3</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-description"
                          >Phân loại : Tinh hoa
                          </span>
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <a href="#" className="header__cart-view-cart btn btn--primary"
                  >Xem giỏ hàng</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HeaderComponent
