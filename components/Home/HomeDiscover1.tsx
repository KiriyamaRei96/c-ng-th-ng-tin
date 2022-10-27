import Link from "next/link";
import * as React from "react";
import Slider from "react-slick";

export interface HomeDiscover1Props {
  banner: any;
  iconTime: any;
  iconMap2: any;
}

const HomeDiscover1 = ({ banner, iconTime, iconMap2 }: HomeDiscover1Props) => {
  return (
    <Slider
      {...{
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,

        nextArrow: (
          <div>
            <i className="fa-solid nextarrow arrow arrow_hover  fa-arrow-right-long"></i>
          </div>
        ),
        prevArrow: (
          <div>
            <i className="fa-solid prevarrow arrow arrow_hover  fa-arrow-left-long"></i>
          </div>
        ),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }}
      className="row"
    >
      <div className="col-md-3">
        <Link href="/News&Event/News/1">
          <div className="--item">
            <div className="--img img_hover">
              <a href="">
                {" "}
                <img src={banner.src} alt="" />
              </a>
            </div>
            <div className="--txt">
              <a href="">
                <h4>Lịch trình 2 ngày 1 đêm tại Lai Châu</h4>
              </a>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                pellentesque urna.
              </article>
              <div className="--bot">
                <div className="--time">
                  <div className="--icon">
                    <img src={iconTime.src} alt="" />
                  </div>
                  <span>2N1Đ</span>
                </div>
                <div className="--location">
                  <div className="--icon">
                    <img src={iconMap2.src} alt="" />
                  </div>
                  <span>3 Điểm đến</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-md-3">
        <Link href="/News&Event/News/1">
          <div className="--item">
            <div className="--img img_hover">
              <a href="">
                {" "}
                <img src={banner.src} alt="" />
              </a>
            </div>
            <div className="--txt">
              <a href="">
                <h4>Lịch trình 2 ngày 1 đêm tại Lai Châu</h4>
              </a>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                pellentesque urna.
              </article>
              <div className="--bot">
                <div className="--time">
                  <div className="--icon">
                    <img src={iconTime.src} alt="" />
                  </div>
                  <span>2N1Đ</span>
                </div>
                <div className="--location">
                  <div className="--icon">
                    <img src={iconMap2.src} alt="" />
                  </div>
                  <span>3 Điểm đến</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>{" "}
      <div className="col-md-3">
        <Link href="/News&Event/News/1">
          <div className="--item">
            <div className="--img img_hover">
              <a href="">
                {" "}
                <img src={banner.src} alt="" />
              </a>
            </div>
            <div className="--txt">
              <a href="">
                <h4>Lịch trình 2 ngày 1 đêm tại Lai Châu</h4>
              </a>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                pellentesque urna.
              </article>
              <div className="--bot">
                <div className="--time">
                  <div className="--icon">
                    <img src={iconTime.src} alt="" />
                  </div>
                  <span>2N1Đ</span>
                </div>
                <div className="--location">
                  <div className="--icon">
                    <img src={iconMap2.src} alt="" />
                  </div>
                  <span>3 Điểm đến</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>{" "}
      <div className="col-md-3">
        <Link href="/News&Event/News/1">
          <div className="--item">
            <div className="--img img_hover">
              <a href="">
                {" "}
                <img src={banner.src} alt="" />
              </a>
            </div>
            <div className="--txt">
              <a href="">
                <h4>Lịch trình 2 ngày 1 đêm tại Lai Châu</h4>
              </a>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                pellentesque urna.
              </article>
              <div className="--bot">
                <div className="--time">
                  <div className="--icon">
                    <img src={iconTime.src} alt="" />
                  </div>
                  <span>2N1Đ</span>
                </div>
                <div className="--location">
                  <div className="--icon">
                    <img src={iconMap2.src} alt="" />
                  </div>
                  <span>3 Điểm đến</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>{" "}
      <div className="col-md-3">
        <Link href="/News&Event/News/1">
          <div className="--item">
            <div className="--img img_hover">
              <a href="">
                {" "}
                <img src={banner.src} alt="" />
              </a>
            </div>
            <div className="--txt">
              <a href="">
                <h4>Lịch trình 2 ngày 1 đêm tại Lai Châu</h4>
              </a>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                pellentesque urna.
              </article>
              <div className="--bot">
                <div className="--time">
                  <div className="--icon">
                    <img src={iconTime.src} alt="" />
                  </div>
                  <span>2N1Đ</span>
                </div>
                <div className="--location">
                  <div className="--icon">
                    <img src={iconMap2.src} alt="" />
                  </div>
                  <span>3 Điểm đến</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Slider>
  );
};
export default HomeDiscover1;
