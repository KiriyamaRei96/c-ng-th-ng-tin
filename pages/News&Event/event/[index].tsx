import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import callApi from "../../../Api/Axios";
import BreadCrumb from "../../../components/BreadCrumb";
import EventsWrapper from "./_component/styled/stye";
export async function getServerSideProps(context) {
  const id = context.query?.index?.replace("detail~", "");

  const res = await callApi
    .get(`/v2/event_detail/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  const data = res.data;
  const page = await callApi
    .get("/v2/page/Events?locale=vi")
    .then((res) => res.data)
    .catch((err) => console.error(err));
  const eventsBanner = await page.data?.snippets?.find(
    (item) => item["snippet_name"] === "eventsBanner"
  );
  return {
    props: { data, eventsBanner },
  };
}
export interface EventDetailsProps {
  data: any;
  eventsBanner?: any;
}

const EventDetails = ({ data, eventsBanner }: EventDetailsProps) => {
  const router = useRouter();
  return (
    <EventsWrapper>
      <div id='detailevent'>
        <div className='Banner d-flex'>
          <img src={eventsBanner.image?.path} alt=''></img>
          <div className='--Item'>
            <h1>{eventsBanner.title}</h1>
            <BreadCrumb />
          </div>
        </div>
        <div className='detaileventContent detailnewsContent'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-9'>
                <div className='--left'>
                  <div className='subTitle'>Chi tiết tin tức</div>
                  <h2 className='--title'>{data.title}</h2>
                  <div className='--note d-flex'>
                    <div className='--item'>
                      <span>84 đánh giá</span>
                    </div>
                    <div className='--item'>
                      <i className='fa-regular fa-calendar'></i>
                      <span>{data.date}</span>
                    </div>
                    <div className='--item'>
                      <i className='fa-regular fa-eye'></i>
                      <span>268</span>
                    </div>
                  </div>
                  <div className='--des'>{data.description}</div>
                  <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                  <div className='--backshare d-flex justify-content-between'>
                    <a onClick={() => router.back()} className='--back'>
                      <Image src={require("./_asset/icon-back.svg")} alt='' />{" "}
                      Quay lại sự kiện
                    </a>
                    <ul>
                      <li>Chia sẻ:</li>
                      <li>
                        <a href=''>
                          <Image src={require("./_asset/icon-tw.svg")} alt='' />
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <Image src={require("./_asset/icon-fb.svg")} alt='' />
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <Image src={require("./_asset/icon-in.svg")} alt='' />
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <Image src={require("./_asset/icon-gg.svg")} alt='' />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='--coment'>
                    <h3 className='--title'>3 comments</h3>
                    <div className='list_coment'>
                      <div className='--comentcustomer '>
                        <div className='--item d-flex '>
                          <div className='--avatar'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/965d/8058/60ff1e1f9652e4ea4a3b63dc958178ac?Expires=1667779200&Signature=dVbRRWT53Q7bsXXwgSDAlS7MmM6Sp8qiNVZ7HI0iPb0Ov10UH16omt4FuuzVG8ntFrpbK4yyg9HT-tPb7LYTrQ3Rq9c6SYTvbb-3CCsOjI~-tDSPxc4spCDQ8aiOTNdKVOd8zEd708MZWUbOT7uRgM91OhUUNyJ9DPsG2JYLFA1MwevZHe2uUGk1HM4wxjI-VFnhKE8rea3Nfgze-oEHuxfvHo-fYtIS~0Do5B52donmyWQD7imTS6UNP9VNwoxkqcIxizllapA4zLe0h~A8ftb8ktcqYOOFXV4lOU3X95xiR3e14aSBMxDq0ByE8EXavMBoM2IEWF4fLgLqFlH0tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--top d-flex justify-content-between align-items-center'>
                              <div className='--name_customer'>
                                <h6>Trịnh Tùng Anh</h6>
                                <div className='--time'>
                                  <i className='fa-regular fa-calendar'></i>{" "}
                                  01/09/2022
                                </div>
                              </div>
                              <div className='--answer'>
                                <i className='fa-solid fa-reply'></i>Trả lời
                              </div>
                            </div>
                            <article>
                              Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả,
                              được dùng vào việc trình bày và dàn trang phục vụ
                              cho in ấn. Lorem Ipsum đã được sử dụng như một văn
                              bản
                            </article>
                          </div>
                        </div>
                        <div className='--item --feedback d-flex '>
                          <div className='--avatar'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/965d/8058/60ff1e1f9652e4ea4a3b63dc958178ac?Expires=1667779200&Signature=dVbRRWT53Q7bsXXwgSDAlS7MmM6Sp8qiNVZ7HI0iPb0Ov10UH16omt4FuuzVG8ntFrpbK4yyg9HT-tPb7LYTrQ3Rq9c6SYTvbb-3CCsOjI~-tDSPxc4spCDQ8aiOTNdKVOd8zEd708MZWUbOT7uRgM91OhUUNyJ9DPsG2JYLFA1MwevZHe2uUGk1HM4wxjI-VFnhKE8rea3Nfgze-oEHuxfvHo-fYtIS~0Do5B52donmyWQD7imTS6UNP9VNwoxkqcIxizllapA4zLe0h~A8ftb8ktcqYOOFXV4lOU3X95xiR3e14aSBMxDq0ByE8EXavMBoM2IEWF4fLgLqFlH0tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--top d-flex justify-content-between align-items-center'>
                              <div className='--name_customer'>
                                <h6>Trịnh Tùng Anh</h6>
                                <div className='--time'>
                                  <i className=' potision fa-regular fa-calendar'></i>{" "}
                                  01/09/2022
                                </div>
                              </div>
                              <div className='--answer'>
                                <i className='fa-solid fa-reply'></i>Trả lời
                              </div>
                            </div>
                            <article>
                              Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả,
                              được dùng vào việc trình bày và dàn trang phục vụ
                              cho in ấn. Lorem Ipsum đã được sử dụng như một văn
                              bản
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='--right cardbook'>
                  <div className='--schedule '>
                    <h3>Đặt chuyến đi của bạn</h3>
                    <div className='--tab d-flex '>
                      <div className='--item active'>Khách sạn</div>
                      <div className='--item'>Thuê xe</div>
                      <div className='--item'>Xe Buýt</div>
                    </div>
                    <div className='form'>
                      <div className='form-group'>
                        <label htmlFor=''>Điểm đến: </label>
                        <div className='--select'>
                          <div className='--icon'>
                            <i className='potision fa-solid fa-location-dot'></i>
                          </div>
                          <select className='form-control' name='' id=''>
                            <option value=''>Hà Giang</option>
                          </select>
                          <i className='fa-sharp fa-solid fa-chevron-down'></i>
                        </div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor=''>Check - in: </label>
                        <div className='--select'>
                          <div className='--icon'>
                            <i className=' potision fa-regular fa-calendar'></i>
                          </div>
                          <select className='form-control' name='' id=''>
                            <option value=''>10/11/2022</option>
                          </select>
                          <i className='fa-sharp fa-solid fa-chevron-down'></i>
                        </div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor=''>With:</label>
                        <div className='--select'>
                          <div className='--icon'>
                            <i className=' potision fa-regular fa-calendar'></i>
                          </div>
                          <select className='form-control' name='' id=''>
                            <option value=''>1 đêm</option>
                          </select>
                          <i className='fa-sharp fa-solid fa-chevron-down'></i>
                        </div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor=''>Điểm đến: </label>
                        <div className='--select'>
                          <div className='--icon'>
                            <i className='potision fa-regular fa-pen-to-square'></i>
                          </div>
                          <select className='form-control' name='' id=''>
                            <option value=''>Booking.com</option>
                          </select>
                          <i className='fa-sharp fa-solid fa-chevron-down'></i>
                        </div>
                      </div>
                    </div>
                    <button className='button_1 button_hover1'>
                      <i className='fa-sharp fa-solid fa-magnifying-glass'></i>{" "}
                      Tìm kiếm
                    </button>
                  </div>
                  <div className='--map'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8466441825976!2d102.23802461470257!3d2.211509298388063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1ccd4f2e3ed%3A0x4a2e89fc42f51eaf!2sBan%20Sin%20Ho%20Trading!5e0!3m2!1svi!2s!4v1666683463879!5m2!1svi!2s'
                      width='600'
                      height='450'
                      style={{ border: "0" }}
                      //   allowfullscreen=""
                      loading='lazy'
                      //   referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className='--endow'>
                    <div className='--img'>
                      <img
                        src='https://s3-alpha-sig.figma.com/img/f570/c2d2/3e50b9868c59964376c583f10ec6c7eb?Expires=1667779200&Signature=Bb0XJrPxHSWaitVZU623G4aEFeIUP-W906CmsydKLgnAUH95qEh4x8hiUpv3tHTxW5kk5J-rsrpbPjlVLRclxApTBzc0rTdEvAD4z3GwKQdttsrLD~9s2iaEOkFQLDOAxyuO4VJ2V96wiwYSrGDu9mXLiFTVy07yFK33BqaIVQtDFInqeGSsJl9jmHVMGdrqBUADeleiLmaughRsd4s9SS6frk7NrfVfynQxadOVzdwMFuPUnEuTJzdTYyBkVYfKz5Y1T9xGEoL3JFMcyg1zOAt~scDSxennAeiBTlRiO5E4QlRVssJvzCLUvVmEAjzszoamjP2OMdd2DaM8q3F9vA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                        alt=''
                      />
                    </div>
                    <div className='--txt'>
                      <span>Kỳ nghỉ vui vẻ</span>
                      <h2>Đặt phòng ngay</h2>
                      <div className='--des'>
                        Giảm giá 15% cho tất cả các đặt phòng
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EventsWrapper>
  );
};
export default EventDetails;
