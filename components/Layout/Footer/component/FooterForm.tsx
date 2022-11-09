import React from "react";

const FooterForm = ({ footerForm }) => {
  return (
    <div className='footer_form'>
      <h4 className='--title'>{footerForm?.title}</h4>
      <div className='--des'>{footerForm?.subTitle}</div>
      <div className='--email'>
        <input type='text' placeholder='email' />
        <button>
          <i className='fa-solid fa-arrow-right-long'></i>
        </button>
      </div>
      <div className='--follow'>
        <span>Kết nối:</span>
        <ul>
          <li>
            <a href=''>
              <i className='fa-brands fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className='fa-brands fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className='fa-brands fa-instagram'></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className='fa-brands fa-google'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FooterForm;
