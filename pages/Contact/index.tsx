import { useRouter } from "next/router";
import React from "react";
import callApi from "../../Api/Axios";
import BreadCrumb from "../../components/BreadCrumb";
import { store } from "../../ReduxStore/store";
import Left from "./_component/Left";
import ContactWrapper from "./_component/styled/Style";

export async function getServerSideProps(context) {
  const language = store.getState().global.language;

  const page = await callApi
    .get(`/v2/page/Contact?locale=${language}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  const banner =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "banner"
    )) || null;
  const left =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "left"
    )) || null;

  return {
    props: {
      banner,
      left,
    },
  };
}
const Contact = ({ banner, left }) => {
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
                <Left article={left?.articles} />
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
