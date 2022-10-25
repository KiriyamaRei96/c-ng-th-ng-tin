import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";
import BreadCrumb from "../../components/BreadCrumb";
import { NewsWrapper } from "./_component/Styled/Styled";

export interface NewsEventProps {}

const NewsEvent = (props: NewsEventProps) => {
  const router = useRouter();
  return (
    <NewsWrapper>
      <div id='News-Event'>
        <div className='Banner d-flex'>
          <img
            src='https://s3-alpha-sig.figma.com/img/e3df/aa8e/d78f505aded9934305676894ff52265d?Expires=1667779200&Signature=bMTTHii0BMQSGCNrfbsYwFXMuvR0qmnCN7WbqwhNFtsRsPq1GWxZ4Izs0C05SL6R-dGvV9V8AAuLeSXZe76MKK2nq1bM25FQg6uktzMZlgk~TmOXcfO4OYNJ4MgPBrnNpDetpV2HHIBc9rXTDrQK4OLEHAN5iMa5FvAKg0yEcSRu1lX7dyKle-3T1bLRJwZuvzvxMMcrAjIdRHLlJRYUxWzrOM3r6I24VULvIVZglZ7Q6N~5BPe~LP41X8rOHd9Xrf8yi69WmwxyMGp1f7vJIUe9D9IN3OmsOSQk9B7f45jNOdnyRUBcjoSrPi81CqmPqlGAV73yzqw3OZ2lD-ZLmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            alt=''
          ></img>
          <div className='--Item'>
            <h1>Tin tức và Sự kiện</h1>
            <BreadCrumb router={router.asPath} />
          </div>
        </div>
        <div className='News'>
          <div className='--hotNews'>
            <h3>Tin tức nổi bật</h3>
            <Slider
              {...{
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                nextArrow: (
                  <div>
                    <i className='fa-solid nextarrow arrow arrow_hover  fa-arrow-right-long'></i>
                  </div>
                ),

                prevArrow: (
                  <div>
                    <i className='fa-solid prevarrow arrow arrow_hover  fa-arrow-left-long'></i>
                  </div>
                ),
              }}
              className='--hotSlider'
            >
              <div className='--item d-flex'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/842f/57d6/9ac9ec4c2818cca45755f4c542e72473?Expires=1667779200&Signature=dlzEQTq8Y4fF~D2AWNlHzViJdGWd1Gu9OfS0yKohQ-yy8~7hMqXz8pB69rCUES0SlxsAOKJOr3aEV-f-u0NDJtZQKvdLOYI6QfyRucymH3e3nu1DD1u-ZwOh9nf8qqynO6~E555wC0BY1lLdz~0b6DLvgb-FvUxUrOo8S5-8oI3mNTqqdqSlBY5XN4erlI6jNzYNe8iApnr2ekpnPC0aYWYAFO3ptWkbmdNxwkPRRM801LlWoFx5GEe1mLKhmfQqu6ApQBbElVb~FbOWPWeGMrsxBc~mzf0XAR~bkYNIT0L5LwsWNoAMFu7tPBrMT7oXqr~64W7iaJYSsUeWpZDckw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  alt=''
                />
                <div>
                  <div className='Info d-flex'>
                    <span className='type'>Du lịch</span>
                    <i className='fa-solid fa-circle divider'></i>
                    <span className='date'>
                      <i className='fa-solid fa-calendar-days'></i>
                      01/09/2022
                    </span>
                    <i className='fa-solid fa-circle divider'></i>
                    <span className='view'>
                      <i className='fa-solid fa-eye'></i>
                      268
                    </span>
                  </div>
                  <h4>
                    Cầu Kính Rồng Mây “Kỳ Quan Tiên Cảnh Của Đất Trời Lai Châu”
                  </h4>
                  <div className='divider'></div>
                  <span>
                    Đến với Cầu kính Rồng Mây, du khách sẽ không khỏi choáng
                    ngợp trước cảnh sắc tuyệt đẹp của thiên nhiên hùng vĩ của
                    mảnh đất nơi ven trời Tây Bắc – Lai Châu được nhìn ở độ cao
                    hơn 2.000m so với mực nước biển và trải nghiệm cảm giác “ú
                    tim” khi đi trên toàn bộ mặt cầu được làm bằng kính chịu lực
                    trong suốt
                  </span>

                  <Link href=''>
                    <a className='button_2 button_hover2'>
                      Xem chi tiết
                      <i className='fa-sharp ms-2 fa-solid fa-arrow-right-long'></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='--item d-flex'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/842f/57d6/9ac9ec4c2818cca45755f4c542e72473?Expires=1667779200&Signature=dlzEQTq8Y4fF~D2AWNlHzViJdGWd1Gu9OfS0yKohQ-yy8~7hMqXz8pB69rCUES0SlxsAOKJOr3aEV-f-u0NDJtZQKvdLOYI6QfyRucymH3e3nu1DD1u-ZwOh9nf8qqynO6~E555wC0BY1lLdz~0b6DLvgb-FvUxUrOo8S5-8oI3mNTqqdqSlBY5XN4erlI6jNzYNe8iApnr2ekpnPC0aYWYAFO3ptWkbmdNxwkPRRM801LlWoFx5GEe1mLKhmfQqu6ApQBbElVb~FbOWPWeGMrsxBc~mzf0XAR~bkYNIT0L5LwsWNoAMFu7tPBrMT7oXqr~64W7iaJYSsUeWpZDckw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  alt=''
                />
                <div>
                  <div className='Info d-flex'>
                    <span className='type'>Du lịch</span>
                    <i className='fa-solid fa-circle divider'></i>
                    <span className='date'>
                      <i className='fa-solid fa-calendar-days'></i>
                      01/09/2022
                    </span>
                    <i className='fa-solid fa-circle divider'></i>
                    <span className='view'>
                      <i className='fa-solid fa-eye'></i>
                      268
                    </span>
                  </div>
                  <h4>
                    Cầu Kính Rồng Mây “Kỳ Quan Tiên Cảnh Của Đất Trời Lai Châu”
                  </h4>
                  <div className='divider'></div>
                  <span>
                    Đến với Cầu kính Rồng Mây, du khách sẽ không khỏi choáng
                    ngợp trước cảnh sắc tuyệt đẹp của thiên nhiên hùng vĩ của
                    mảnh đất nơi ven trời Tây Bắc – Lai Châu được nhìn ở độ cao
                    hơn 2.000m so với mực nước biển và trải nghiệm cảm giác “ú
                    tim” khi đi trên toàn bộ mặt cầu được làm bằng kính chịu lực
                    trong suốt
                  </span>

                  <Link href=''>
                    <a className='button_2 button_hover2'>
                      Xem chi tiết
                      <i className='fa-sharp ms-2 fa-solid fa-arrow-right-long'></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='--item d-flex'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/842f/57d6/9ac9ec4c2818cca45755f4c542e72473?Expires=1667779200&Signature=dlzEQTq8Y4fF~D2AWNlHzViJdGWd1Gu9OfS0yKohQ-yy8~7hMqXz8pB69rCUES0SlxsAOKJOr3aEV-f-u0NDJtZQKvdLOYI6QfyRucymH3e3nu1DD1u-ZwOh9nf8qqynO6~E555wC0BY1lLdz~0b6DLvgb-FvUxUrOo8S5-8oI3mNTqqdqSlBY5XN4erlI6jNzYNe8iApnr2ekpnPC0aYWYAFO3ptWkbmdNxwkPRRM801LlWoFx5GEe1mLKhmfQqu6ApQBbElVb~FbOWPWeGMrsxBc~mzf0XAR~bkYNIT0L5LwsWNoAMFu7tPBrMT7oXqr~64W7iaJYSsUeWpZDckw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  alt=''
                />
                <div>
                  <div className='Info d-flex'>
                    <span className='type'>Du lịch</span>
                    <i className='fa-solid fa-circle divider'></i>
                    <span className='date'>
                      <i className='fa-solid fa-calendar-days'></i>
                      01/09/2022
                    </span>
                    <i className='fa-solid fa-circle divider'></i>
                    <span className='view'>
                      <i className='fa-solid fa-eye'></i>
                      268
                    </span>
                  </div>
                  <h4>
                    Cầu Kính Rồng Mây “Kỳ Quan Tiên Cảnh Của Đất Trời Lai Châu”
                  </h4>
                  <div className='divider'></div>
                  <span>
                    Đến với Cầu kính Rồng Mây, du khách sẽ không khỏi choáng
                    ngợp trước cảnh sắc tuyệt đẹp của thiên nhiên hùng vĩ của
                    mảnh đất nơi ven trời Tây Bắc – Lai Châu được nhìn ở độ cao
                    hơn 2.000m so với mực nước biển và trải nghiệm cảm giác “ú
                    tim” khi đi trên toàn bộ mặt cầu được làm bằng kính chịu lực
                    trong suốt
                  </span>

                  <Link href=''>
                    <a className='button_2 button_hover2'>
                      Xem chi tiết
                      <i className='fa-sharp ms-2 fa-solid fa-arrow-right-long'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
          <div className='---catalog'></div>
        </div>
        <div className='Events'>
          <div className='--title '>
            <span>Tin Tức du lịch Lai Châu</span>
          </div>
          <Slider
            {...{
              className: "eventsSlider",
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: true,
              nextArrow: (
                <div>
                  <i className='fa-solid nextarrow arrow arrow_hover  fa-arrow-right-long'></i>
                </div>
              ),

              prevArrow: (
                <div>
                  <i className='fa-solid prevarrow arrow arrow_hover  fa-arrow-left-long'></i>
                </div>
              ),
            }}
          >
            <div>
              <div className='--item'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/69b6/ebad/83aac927ca294ee2cfec3e01530e160c?Expires=1667779200&Signature=bsXwVcbaW39MSqGXgRMG2I0Espt5m4AbuG6pnaeAKl0Z-zJBG~~rUjeW2gzIMKyVWH2hLqBmAqfo6ur533P-4fY6aovpBB7dGFDDjJWhOEI8TJCN0F7vxr1VDyHtPCnjIcAtz8Ioa2Z1SDUSqRoq28sf6BqxL7u3QwXbUfazZUxaeRv6NM~sVRXuvUQ1J1HJT7KSM9QU6ts1vFncatiYBWkBsktprGDTlWaTt4wRX7mRzLheD6FcP0ch9UNrzBTu5fAc8Izojr3u~WMouXMHtrLN~LiW7h5oaNrMUjkbdgN4ReZ-0mJuNHn3kTyojTt6IlJTviDMqeJe1GeK9aNycw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  alt=''
                />
                <div>
                  <span className='--tag d-flex'>Sự kiện nổi bật</span>
                  <h5>
                    Cầu Kính Rồng Mây “Kỳ Quan Tiên Cảnh Của Đất Trời Lai Châu”
                  </h5>
                  <div className='Info'>
                    <span className='date'>
                      <i className='fa-solid fa-calendar-days'></i>
                      Diễn ra ngày 11/12/2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='--item'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/69b6/ebad/83aac927ca294ee2cfec3e01530e160c?Expires=1667779200&Signature=bsXwVcbaW39MSqGXgRMG2I0Espt5m4AbuG6pnaeAKl0Z-zJBG~~rUjeW2gzIMKyVWH2hLqBmAqfo6ur533P-4fY6aovpBB7dGFDDjJWhOEI8TJCN0F7vxr1VDyHtPCnjIcAtz8Ioa2Z1SDUSqRoq28sf6BqxL7u3QwXbUfazZUxaeRv6NM~sVRXuvUQ1J1HJT7KSM9QU6ts1vFncatiYBWkBsktprGDTlWaTt4wRX7mRzLheD6FcP0ch9UNrzBTu5fAc8Izojr3u~WMouXMHtrLN~LiW7h5oaNrMUjkbdgN4ReZ-0mJuNHn3kTyojTt6IlJTviDMqeJe1GeK9aNycw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  alt=''
                />
                <div>
                  <span className='--tag d-flex'>Sự kiện nổi bật</span>
                  <h5>
                    Cầu Kính Rồng Mây “Kỳ Quan Tiên Cảnh Của Đất Trời Lai Châu”
                  </h5>
                  <div className='Info'>
                    <span className='date'>
                      <i className='fa-solid fa-calendar-days'></i>
                      Diễn ra ngày 11/12/2022
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div>
              <div className='--item'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/69b6/ebad/83aac927ca294ee2cfec3e01530e160c?Expires=1667779200&Signature=bsXwVcbaW39MSqGXgRMG2I0Espt5m4AbuG6pnaeAKl0Z-zJBG~~rUjeW2gzIMKyVWH2hLqBmAqfo6ur533P-4fY6aovpBB7dGFDDjJWhOEI8TJCN0F7vxr1VDyHtPCnjIcAtz8Ioa2Z1SDUSqRoq28sf6BqxL7u3QwXbUfazZUxaeRv6NM~sVRXuvUQ1J1HJT7KSM9QU6ts1vFncatiYBWkBsktprGDTlWaTt4wRX7mRzLheD6FcP0ch9UNrzBTu5fAc8Izojr3u~WMouXMHtrLN~LiW7h5oaNrMUjkbdgN4ReZ-0mJuNHn3kTyojTt6IlJTviDMqeJe1GeK9aNycw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  alt=''
                />
                <div>
                  <span className='--tag d-flex'>Sự kiện nổi bật</span>
                  <h5>
                    Cầu Kính Rồng Mây “Kỳ Quan Tiên Cảnh Của Đất Trời Lai Châu”
                  </h5>
                  <div className='Info'>
                    <span className='date'>
                      <i className='fa-solid fa-calendar-days'></i>
                      Diễn ra ngày 11/12/2022
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div>
              <div className='--item'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/69b6/ebad/83aac927ca294ee2cfec3e01530e160c?Expires=1667779200&Signature=bsXwVcbaW39MSqGXgRMG2I0Espt5m4AbuG6pnaeAKl0Z-zJBG~~rUjeW2gzIMKyVWH2hLqBmAqfo6ur533P-4fY6aovpBB7dGFDDjJWhOEI8TJCN0F7vxr1VDyHtPCnjIcAtz8Ioa2Z1SDUSqRoq28sf6BqxL7u3QwXbUfazZUxaeRv6NM~sVRXuvUQ1J1HJT7KSM9QU6ts1vFncatiYBWkBsktprGDTlWaTt4wRX7mRzLheD6FcP0ch9UNrzBTu5fAc8Izojr3u~WMouXMHtrLN~LiW7h5oaNrMUjkbdgN4ReZ-0mJuNHn3kTyojTt6IlJTviDMqeJe1GeK9aNycw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  alt=''
                />
                <div>
                  <span className='--tag d-flex'>Sự kiện nổi bật</span>
                  <h5>
                    Cầu Kính Rồng Mây “Kỳ Quan Tiên Cảnh Của Đất Trời Lai Châu”
                  </h5>
                  <div className='Info'>
                    <span className='date'>
                      <i className='fa-solid fa-calendar-days'></i>
                      Diễn ra ngày 11/12/2022
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div>
              <div className='--item'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/69b6/ebad/83aac927ca294ee2cfec3e01530e160c?Expires=1667779200&Signature=bsXwVcbaW39MSqGXgRMG2I0Espt5m4AbuG6pnaeAKl0Z-zJBG~~rUjeW2gzIMKyVWH2hLqBmAqfo6ur533P-4fY6aovpBB7dGFDDjJWhOEI8TJCN0F7vxr1VDyHtPCnjIcAtz8Ioa2Z1SDUSqRoq28sf6BqxL7u3QwXbUfazZUxaeRv6NM~sVRXuvUQ1J1HJT7KSM9QU6ts1vFncatiYBWkBsktprGDTlWaTt4wRX7mRzLheD6FcP0ch9UNrzBTu5fAc8Izojr3u~WMouXMHtrLN~LiW7h5oaNrMUjkbdgN4ReZ-0mJuNHn3kTyojTt6IlJTviDMqeJe1GeK9aNycw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  alt=''
                />
                <div>
                  <span className='--tag d-flex'>Sự kiện nổi bật</span>
                  <h5>
                    Cầu Kính Rồng Mây “Kỳ Quan Tiên Cảnh Của Đất Trời Lai Châu”
                  </h5>
                  <div className='Info'>
                    <span className='date'>
                      <i className='fa-solid fa-calendar-days'></i>
                      Diễn ra ngày 11/12/2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </NewsWrapper>
  );
};
export default NewsEvent;
