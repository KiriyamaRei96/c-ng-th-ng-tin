import { useRouter } from "next/router";
import React from "react";
import callApi from "../../Api/Axios";
import BreadCrumb from "../../components/BreadCrumb";
import ContactWrapper from "./_component/styled/Style";

export async function getServerSideProps(context) {
  const page = await callApi
    .get(`/v2/page/Contact?locale=vi`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  const banner =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "banner"
    )) || null;
  return {
    props: {
      banner,
    },
  };
}
const Contact = ({ banner }) => {
  const router = useRouter();
  return (
    <ContactWrapper>
      <div id='contact'>
        <div className='Banner d-flex'>
          <img src={banner.image?.path} alt=''></img>
          <div className='--Item'>
            <h1>{banner.title}</h1>
            <BreadCrumb />
          </div>
        </div>
        <div className='contactForm'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='--left'>
                  <ul>
                    <li>
                      <h4 className='--title'>
                        Sở Văn hóa Thể thao và Du lịch Lai Châu
                      </h4>
                      <span>
                        <i className='fa-solid fa-location-dot'></i> Phòng Quản
                        lý Du lịch - Tầng 6, Nhà D, Khu Trung tâm hành chính
                        chính trị tỉnh Lai Châu, phường Tân Phong, thành phố Lai
                        Châu, tỉnh Lai Châu
                      </span>
                    </li>
                    <li>
                      <span>Email</span>
                      <a href=''>
                        <i className='fa-solid fa-envelope'></i>
                        pqldl.sovhttdl@laichau.gov.vn
                      </a>
                    </li>
                    <li>
                      <span>Hotline</span>
                      <a href=''>
                        <i className='fa-solid fa-phone'></i>0213.3877.727
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='--right'>
                  <h4 className='--title'>Để lại câu hỏi</h4>
                  <span>
                    Nếu bạn có bất kỳ câu hỏi nào về du lịch Lai Châu, vui lòng
                    liên hệ với chúng tôi hoặc để lại câu hỏi bên dưới.
                  </span>
                  <div className='form'>
                    <div className='form-group'>
                      <input type='text' placeholder='Họ và tên' />
                    </div>
                    <div className='form-group'>
                      <input type='text' placeholder='Số điện thoại' />
                    </div>
                    <div className='form-group'>
                      <input type='text' placeholder='Email' />
                    </div>
                    <div className='form-group'>
                      <input type='text' placeholder='Nội dung' />
                    </div>
                  </div>
                  <button className='button_1 button_hover1'>
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
