import Link from "next/link";
import React from "react";

const FooterForm = ({ footerForm }) => {
  const facebook = footerForm?.articles?.find(
    (item) => item.title === "facebook"
  );
  const twitter = footerForm?.articles?.find(
    (item) => item.title === "twitter"
  );
  const instagram = footerForm?.articles?.find(
    (item) => item.title === "instagram"
  );
  const google = footerForm?.articles?.find((item) => item.title === "google");

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
            <Link href={facebook?.link ? facebook?.link : ""}>
              <a>
                <i className='fa-brands fa-facebook'></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href={twitter?.link ? twitter?.link : ""}>
              <a>
                <i className='fa-brands fa-twitter'></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href={instagram?.link ? instagram?.link : ""}>
              <a>
                <i className='fa-brands fa-instagram'></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href={google?.link ? google?.link : ""}>
              <a>
                <i className='fa-brands fa-google'></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FooterForm;
