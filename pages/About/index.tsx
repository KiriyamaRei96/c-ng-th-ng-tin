import { useRouter } from "next/router";
import * as React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import AboutWrapper from "./_component/styled/style";
import icon7 from "./_Asset/icon-7.svg";
import forest from "./_Asset/ic_forest.svg";
import forest2 from "./_Asset/ic_forest(2).svg";
import forest3 from "./_Asset/ic_forest(3).svg";
import forest4 from "./_Asset/ic_forest(4).svg";
import Slider from "react-slick";
import { DollarOutlined } from "@ant-design/icons";
export interface AboutProps {}
const About = (props: AboutProps) => {
  const router = useRouter();
  return (
    <AboutWrapper>
      <div id="about">
        <div className="Banner d-flex">
          <img
            src="https://s3-alpha-sig.figma.com/img/4240/6d23/5929410165f69cffef9df49d39f6d165?Expires=1667779200&Signature=DK5EvCM9TWgrO7RMyyBy6ltzu3AIblUQ0WYHsAEkluiNQtExRRRwpRMZ0bEmq-nBbRHxptpEZH7LwQNogIwBNIMGmVab2kXvdmIfPbKuoAJD95HDbArLS1D5IUCoJUbLKm2ipvhKbbsSGaAD93Ru5EqFrOrEO6xSculexI1m1QmS~kLvedHott6IeiSe2u9rYE4OABPbF6j8PmEJrAC6pLmuO7vib1BgByxsfEJyWjBt2kaMsMAlGkUDHLdDsjRGmcT4e-sCk54LZDU61SZIaTQNu81-haX9KObkxPkEKugJSOu5szCczdUT8a8KK8jH6uswG0KP3WrpyXi8sTkqUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          ></img>
          <div className="--Item">
            <h1>Về lai châu</h1>
            <BreadCrumb router={router.asPath} />
          </div>
        </div>
        <div className="aboutIntro">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="--left">
                  <div className="--video">
                    <div className="--img">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/6d5b/d3de/b990f594c6446c41e8a90df549de7cfe?Expires=1667779200&Signature=WmrDI4jMcYuOvXKCtY3LPm5BFi7J~CfwR~6Z2DzwAy2c84-OBmgntSSDRBM1ePYmXOVsttBCByQp2haHqwRshPPKhLRRuULMnZaF6h-tr8AQsN3gzThiFIMYaBKuIaSYW9eErIgL12Pjr9Kh83v8pgCFrW8hjQCeSutbaRnos6bdcsvHls7dGCzJjl7mr4NIKuL0K8qwWrYem0fgMsFHaaZtdcjkkpsxtg5vhqQ8JJsrSUrzRFC8og0E32vDrlj9nHvuCfJtdsJX6XHHyckANJyR3AVLRvZ1XLrACkqo5aBPi8Tvx71na2D1WcnSGFbt-6TbuwsWg9UbRMhFhmz4Dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                      />
                    </div>
                    <a href="" className="play">
                      <i className="fa-solid fa-play"></i>
                    </a>
                  </div>
                  <div className="--card ">
                    <div className="--icon">
                      <img src={icon7.src} alt="" />
                    </div>
                    <h4>
                      Cổng Thông Tin
                      <br /> Du lịch Tỉnh Lai Châu
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="--content">
                  <div className="subTitle">KHám phá Lai Châu</div>
                  <h1 className="Title">
                    Lai Châu Sự hùng vĩ của núi rừng Tây Bắc
                  </h1>
                  <div className="--des">
                    Lai Châu là tỉnh biên giới phía Tây Bắc của Tổ quốc, cách
                    Thủ đô Hà Nội 385 km về phía Đông Nam. Nơi đây vừa hoang sơ,
                    đầy thử thách lại có hẳn một thiên đường chạm tới mây trời
                    cực ấn tượng.{" "}
                  </div>
                  <article>
                    Lai Châu là tỉnh biên giới phía Tây Bắc của Tổ quốc, cách
                    Thủ đô Hà Nội 385 km về phía Đông Nam. Nơi đây vừa hoang sơ,
                    đầy thử thách lại có hẳn một thiên đường chạm tới mây trời
                    cực ấn tượng.{" "}
                  </article>
                  <a className="button_2 button_hover2" href="">
                    Liên Hệ ngay{" "}
                    <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="list_aboutIntro d-flex">
              <div className="--item d-flex">
                <div className="--icon">
                  <img src={forest.src} alt="" />
                </div>
                <div className="--txt d-flex flex-column justify-content-center">
                  <h4>16,284+</h4>
                  <span>Chuyến du lịch và nghỉ lễ</span>
                </div>
              </div>
              <div className="--item d-flex">
                <div className="--icon">
                  <img src={forest2.src} alt="" />
                </div>
                <div className="--txt d-flex flex-column justify-content-center">
                  <h4>16,284+</h4>
                  <span>Chuyến du lịch và nghỉ lễ</span>
                </div>
              </div>
              <div className="--item d-flex">
                <div className="--icon">
                  <img src={forest3.src} alt="" />
                </div>
                <div className="--txt d-flex flex-column justify-content-center">
                  <h4>16,284+</h4>
                  <span>Chuyến du lịch và nghỉ lễ</span>
                </div>
              </div>
              <div className="--item d-flex">
                <div className="--icon">
                  <img src={forest4.src} alt="" />
                </div>
                <div className="--txt d-flex flex-column justify-content-center">
                  <h4>16,284+</h4>
                  <span>Chuyến du lịch và nghỉ lễ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutDiscover">
          <div className="container-fluid">
            <div className="subTitle text-center">KHám phá Lai Châu</div>
            <h1 className="Title text-center">Độc đáo Lai Châu</h1>
            <Slider
              {...{
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows: false,
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
              className="list_aboutDiscover"
            >
              <div>
                <div className="--warpper">
                  <div className="--item">
                    <div className="--img img_hover">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/936a/03f0/14a029a97ca1d1ac5425c55c7e79af87?Expires=1667779200&Signature=MnhOX-tvGHcyi~0gqSrq5c9eKeeGjUYXWa5Z2WGr7Wi95lGMCGTcnLeGfM3L-Q0SgWFy9dkTzHsLDr1EALZlkjZZCQSqdtcR8z9rlQs0ooRL-wBdrBUDjug3qeAK6T1gZCZM1ljNEsumy6JvIr1LaFJ~F~6xORmJ1KS8WJJgetFO6M-J4Fc9tUKBpz37i-JVUf2swa6hqP2X2jWy8PwR211g79avSCUJpePKLs56qi3SixpfzBXkLIW155ibakYVBXzD0UBBF70T~5rSDsinUfdOA98uoBSi01ynW1qLXyTGXjNN58luftqh~V3D-vB1qb7wxjAwWghGLir41jY-qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                      />
                    </div>
                    <div className="--txt">
                      <h4>Món ăn đặc trưng</h4>
                      <a href="">
                        Xem chi tiết
                        <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="--warpper">
                  <div className="--item">
                    <div className="--img img_hover">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/936a/03f0/14a029a97ca1d1ac5425c55c7e79af87?Expires=1667779200&Signature=MnhOX-tvGHcyi~0gqSrq5c9eKeeGjUYXWa5Z2WGr7Wi95lGMCGTcnLeGfM3L-Q0SgWFy9dkTzHsLDr1EALZlkjZZCQSqdtcR8z9rlQs0ooRL-wBdrBUDjug3qeAK6T1gZCZM1ljNEsumy6JvIr1LaFJ~F~6xORmJ1KS8WJJgetFO6M-J4Fc9tUKBpz37i-JVUf2swa6hqP2X2jWy8PwR211g79avSCUJpePKLs56qi3SixpfzBXkLIW155ibakYVBXzD0UBBF70T~5rSDsinUfdOA98uoBSi01ynW1qLXyTGXjNN58luftqh~V3D-vB1qb7wxjAwWghGLir41jY-qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                      />
                    </div>
                    <div className="--txt">
                      <h4>Món ăn đặc trưng</h4>
                      <a href="">
                        Xem chi tiết
                        <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div>
                <div className="--warpper">
                  <div className="--item">
                    <div className="--img img_hover">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/936a/03f0/14a029a97ca1d1ac5425c55c7e79af87?Expires=1667779200&Signature=MnhOX-tvGHcyi~0gqSrq5c9eKeeGjUYXWa5Z2WGr7Wi95lGMCGTcnLeGfM3L-Q0SgWFy9dkTzHsLDr1EALZlkjZZCQSqdtcR8z9rlQs0ooRL-wBdrBUDjug3qeAK6T1gZCZM1ljNEsumy6JvIr1LaFJ~F~6xORmJ1KS8WJJgetFO6M-J4Fc9tUKBpz37i-JVUf2swa6hqP2X2jWy8PwR211g79avSCUJpePKLs56qi3SixpfzBXkLIW155ibakYVBXzD0UBBF70T~5rSDsinUfdOA98uoBSi01ynW1qLXyTGXjNN58luftqh~V3D-vB1qb7wxjAwWghGLir41jY-qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                      />
                    </div>
                    <div className="--txt">
                      <h4>Món ăn đặc trưng</h4>
                      <a href="">
                        Xem chi tiết
                        <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div>
                <div className="--warpper">
                  <div className="--item">
                    <div className="--img img_hover">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/936a/03f0/14a029a97ca1d1ac5425c55c7e79af87?Expires=1667779200&Signature=MnhOX-tvGHcyi~0gqSrq5c9eKeeGjUYXWa5Z2WGr7Wi95lGMCGTcnLeGfM3L-Q0SgWFy9dkTzHsLDr1EALZlkjZZCQSqdtcR8z9rlQs0ooRL-wBdrBUDjug3qeAK6T1gZCZM1ljNEsumy6JvIr1LaFJ~F~6xORmJ1KS8WJJgetFO6M-J4Fc9tUKBpz37i-JVUf2swa6hqP2X2jWy8PwR211g79avSCUJpePKLs56qi3SixpfzBXkLIW155ibakYVBXzD0UBBF70T~5rSDsinUfdOA98uoBSi01ynW1qLXyTGXjNN58luftqh~V3D-vB1qb7wxjAwWghGLir41jY-qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                      />
                    </div>
                    <div className="--txt">
                      <h4>Món ăn đặc trưng</h4>
                      <a href="">
                        Xem chi tiết
                        <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div>
                <div className="--warpper">
                  <div className="--item">
                    <div className="--img img_hover">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/936a/03f0/14a029a97ca1d1ac5425c55c7e79af87?Expires=1667779200&Signature=MnhOX-tvGHcyi~0gqSrq5c9eKeeGjUYXWa5Z2WGr7Wi95lGMCGTcnLeGfM3L-Q0SgWFy9dkTzHsLDr1EALZlkjZZCQSqdtcR8z9rlQs0ooRL-wBdrBUDjug3qeAK6T1gZCZM1ljNEsumy6JvIr1LaFJ~F~6xORmJ1KS8WJJgetFO6M-J4Fc9tUKBpz37i-JVUf2swa6hqP2X2jWy8PwR211g79avSCUJpePKLs56qi3SixpfzBXkLIW155ibakYVBXzD0UBBF70T~5rSDsinUfdOA98uoBSi01ynW1qLXyTGXjNN58luftqh~V3D-vB1qb7wxjAwWghGLir41jY-qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                      />
                    </div>
                    <div className="--txt">
                      <h4>Món ăn đặc trưng</h4>
                      <a href="">
                        Xem chi tiết
                        <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div>
                <div className="--warpper">
                  <div className="--item">
                    <div className="--img img_hover">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/936a/03f0/14a029a97ca1d1ac5425c55c7e79af87?Expires=1667779200&Signature=MnhOX-tvGHcyi~0gqSrq5c9eKeeGjUYXWa5Z2WGr7Wi95lGMCGTcnLeGfM3L-Q0SgWFy9dkTzHsLDr1EALZlkjZZCQSqdtcR8z9rlQs0ooRL-wBdrBUDjug3qeAK6T1gZCZM1ljNEsumy6JvIr1LaFJ~F~6xORmJ1KS8WJJgetFO6M-J4Fc9tUKBpz37i-JVUf2swa6hqP2X2jWy8PwR211g79avSCUJpePKLs56qi3SixpfzBXkLIW155ibakYVBXzD0UBBF70T~5rSDsinUfdOA98uoBSi01ynW1qLXyTGXjNN58luftqh~V3D-vB1qb7wxjAwWghGLir41jY-qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                      />
                    </div>
                    <div className="--txt">
                      <h4>Món ăn đặc trưng</h4>
                      <a href="">
                        Xem chi tiết
                        <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div>
                <div className="--warpper">
                  <div className="--item">
                    <div className="--img img_hover">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/936a/03f0/14a029a97ca1d1ac5425c55c7e79af87?Expires=1667779200&Signature=MnhOX-tvGHcyi~0gqSrq5c9eKeeGjUYXWa5Z2WGr7Wi95lGMCGTcnLeGfM3L-Q0SgWFy9dkTzHsLDr1EALZlkjZZCQSqdtcR8z9rlQs0ooRL-wBdrBUDjug3qeAK6T1gZCZM1ljNEsumy6JvIr1LaFJ~F~6xORmJ1KS8WJJgetFO6M-J4Fc9tUKBpz37i-JVUf2swa6hqP2X2jWy8PwR211g79avSCUJpePKLs56qi3SixpfzBXkLIW155ibakYVBXzD0UBBF70T~5rSDsinUfdOA98uoBSi01ynW1qLXyTGXjNN58luftqh~V3D-vB1qb7wxjAwWghGLir41jY-qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                      />
                    </div>
                    <div className="--txt">
                      <h4>Món ăn đặc trưng</h4>
                      <a href="">
                        Xem chi tiết
                        <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div>
                <div className="--warpper">
                  <div className="--item">
                    <div className="--img img_hover">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/936a/03f0/14a029a97ca1d1ac5425c55c7e79af87?Expires=1667779200&Signature=MnhOX-tvGHcyi~0gqSrq5c9eKeeGjUYXWa5Z2WGr7Wi95lGMCGTcnLeGfM3L-Q0SgWFy9dkTzHsLDr1EALZlkjZZCQSqdtcR8z9rlQs0ooRL-wBdrBUDjug3qeAK6T1gZCZM1ljNEsumy6JvIr1LaFJ~F~6xORmJ1KS8WJJgetFO6M-J4Fc9tUKBpz37i-JVUf2swa6hqP2X2jWy8PwR211g79avSCUJpePKLs56qi3SixpfzBXkLIW155ibakYVBXzD0UBBF70T~5rSDsinUfdOA98uoBSi01ynW1qLXyTGXjNN58luftqh~V3D-vB1qb7wxjAwWghGLir41jY-qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                      />
                    </div>
                    <div className="--txt">
                      <h4>Món ăn đặc trưng</h4>
                      <a href="">
                        Xem chi tiết
                        <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="aboutWhy">
          <div className="container-fluid">
            <div className="subTitle text-center">Tại sao chọn Lai Châu</div>
            <h1 className="Title text-center">
              Những tiện ích khi du lịch Lai Châu đem lại
            </h1>
            <div className="list_Why">
              <div className="--item">
                <div className="--top">
                  <i className="fa-solid fa-coins"></i>

                  <h4>Giá tốt nhất</h4>
                </div>
                <div className="--des">
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className="--number">01</div>
              </div>
              <div className="--item">
                <div className="--top">
                  <i className="fa-solid fa-map-location-dot"></i>
                  <h4>Nhiều lựa chọn các chuyến tham quan</h4>
                </div>
                <div className="--des">
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className="--number">02</div>
              </div>
              <div className="--item">
                <div className="--top">
                  <i className="fa-solid fa-check-to-slot"></i>
                  <h4>Nhà điều hành tour đủ điều kiện</h4>
                </div>
                <div className="--des">
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className="--number">03</div>
              </div>
              <div className="--item">
                <div className="--top">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <h4>Hướng dẫn viên chuyên nghiệp</h4>
                </div>
                <div className="--des">
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className="--number">04</div>
              </div>
              <div className="--item">
                <div className="--top">
                  <i className="fa-solid fa-circle-check"></i>
                  <h4>Đặt chỗ nhanh</h4>
                </div>
                <div className="--des">
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className="--number">05</div>
              </div>
              <div className="--item">
                <div className="--top">
                  <i className="fa-solid fa-baseball"></i>
                  <h4>Nhiều khu vui chơi</h4>
                </div>
                <div className="--des">
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className="--number">06</div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutBlock">
          <div className="--img">
            <img
              src="https://s3-alpha-sig.figma.com/img/a052/dbf6/8be9085bc3335501c2ae0c31e2357253?Expires=1667779200&Signature=QejIgHalLMIvyOcjjVGJjlcZ4X~6zhD2PEAjs4VjHPKtHiW6WnVycBx~1s5zU1M4CpaghtS2BwM89-2GEDtiRGC78ktXZgHFyeWpXPM-5BXI-~QJnorOpzsWrxXNwwnywwgWRFVnm5Xfy0LKI8hRZx3KQvUBY~X1-DW-q9LdLiVYxQhg2Dh8ExMSMOEwlbgnWYfEie1oGODmsf~8~p6RcB3qCT7kRf-egdEMQgaHTE~hmUVQu~piwN5WD3FmNUEMDcJNKfioMg2fnQ2LOBL1-PF-Kg2oa2-rTdFFOFtNtA9BfB44kjxKVdhqYNxxTVEWhIoYJ59~06WHOeiJLpKa3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
          </div>
          <div className="--txt">
            <h1 className="Title">Lai Châu núi rừng Tây Bắc</h1>
            <a href="">
              Khám phá ngay<i className="fa-solid ms-2 fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};
export default About;
