import React from 'react'

function FooterComponent() {
  return (
    <div>
      <footer className="footer">
        <div className="grid wide footer__content">
          <div className="row">
            <div className="col l-2-4 m-4 c-6">
              <h3 className="footer__heading">CHĂM SÓC KHÁCH HÀNG</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#" className="footer-item__link">Trung Tâm Trợ Giúp</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">Hướng Dẫn Mua Hàng</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link"
                    >Chính Sách Vận Chuyển</a
                  >
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-4 c-6">
              <h3 className="footer__heading">VỀ CHÚNG TÔI</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#" className="footer-item__link">Giới Thiệu Về Shop</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">Tuyển Dụng</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">Điều Khoản Shop</a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-4 c-6">
              <h3 className="footer__heading">DANH MỤC</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#" className="footer-item__link">Cứt</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">Đầu buồi</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">ôn lằn</a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-4 c-6">
              <h3 className="footer__heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    <i className="footer-item__icon fab fa-facebook-square"></i>
                    Facebook</a
                  >
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    <i className="footer-item__icon fab fa-instagram-square"></i>
                    Instagram</a
                  >
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    <i className="footer-item__icon fab fa-linkedin"></i>
                    Linkedin</a
                  >
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-8 c-12">
              <h3 className="footer__heading">VÀO CỬA HÀNG TRÊN ỨNG DỤNG</h3>
              <div className="footer__download">
                <img
                  src="/qr_code.png"
                  alt="Download QR"
                  className="footer__dowload-qr"
                />
                <div className="footer__download-apps">
                  <a href="#" className="footer__download-app-link">
                    <img
                      src="/google_play.png"
                      alt="Google Play"
                      className="footer__download-app-img"
                    />
                  </a>
                  <a href="#" className="footer__download-app-link">
                    <img
                      src="/appstore.png"
                      alt="App store"
                      className="footer__download-app-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="grid wide">
            <p className="footer__text">
              © 2020 Huấn Hoa Hồng - Không làm mà đòi có ăn chỉ có ăn đầu bùi ăn
              cứt
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FooterComponent
