import { useRouter } from "next/router";
import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { ContactWrapper } from "./_component/styled/Style";

export interface ContactProps {}

const Contact = (props: ContactProps) => {
  const router = useRouter();
  return (
    <ContactWrapper>
      <div id="contact">
        <div className="Banner d-flex">
          <img
            src="https://s3-alpha-sig.figma.com/img/3a35/a49e/e99b654b2087919d526c9db8e2090ce1?Expires=1667779200&Signature=XiGVhj5muIzgvLuOIjuKXPwcYD1SO3Z34vJIlzvVu9109mIWXwGyEEqEM~4wt6P4-U35jtIihcwInBBPjpDVs-bnDrd3b~5zpYbfKQmXdQTC7mfiEeC6Wv7TNDX5kww~qZPcJFHK7EVeK1ySxnHWf0gcxzMK6D~QWqngW1Ee2kcava77VFksc9BqBzNs8VXo3pNN9dckCoGlKBRkSKlUUSfnOAXsuDr70UKOVh5fN5~W38PQxmDqhGpsqllQWBpguj~3C~r3b-sNE67LRErRGxpn8-uLdTTtgePWqm8EavyPHJpAdkIOS9U~PXCBETFXijxWOvecT98SBkqoEDn0tQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          ></img>
          <div className="--Item">
            <h1>Tin tức và Sự kiện</h1>
            <BreadCrumb router={router.asPath} />
          </div>
        </div>
        <div className="contactForm">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="--left">
                  <ul>
                    <li>
                      <h4 className="--title">
                        Sở Văn hóa Thể thao và Du lịch Lai Châu
                      </h4>
                      <span>
                        <i className="fa-solid fa-location-dot"></i> Phòng Quản
                        lý Du lịch - Tầng 6, Nhà D, Khu Trung tâm hành chính
                        chính trị tỉnh Lai Châu, phường Tân Phong, thành phố Lai
                        Châu, tỉnh Lai Châu
                      </span>
                    </li>
                    <li>
                      <span>Email</span>
                      <a href="">
                        <i className="fa-solid fa-envelope"></i>
                        pqldl.sovhttdl@laichau.gov.vn
                      </a>
                    </li>
                    <li>
                      <span>Hotline</span>
                      <a href="">
                        <i className="fa-solid fa-phone"></i>0213.3877.727
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="--right">
                  <h4 className="--title">Để lại câu hỏi</h4>
                  <span>
                    Nếu bạn có bất kỳ câu hỏi nào về du lịch Lai Châu, vui lòng
                    liên hệ với chúng tôi hoặc để lại câu hỏi bên dưới.
                  </span>
                  <div className="form">
                    <div className="form-group">
                      <input type="text" placeholder="Họ và tên" />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Số điện thoại" />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Nội dung" />
                    </div>
                  </div>
                  <button className="button_1 button_hover1">
                    Gửi tin nhắn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};
export default Contact;
