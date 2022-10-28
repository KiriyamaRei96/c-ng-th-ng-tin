import Image from "next/image";
import * as React from "react";
import UtilitiesWrapper from "./_component/styled/style";

export interface UtilitiesProps {}

const Utilities = (props: UtilitiesProps) => {
  return (
    <UtilitiesWrapper>
      <div id='uti'>
        <div className='utiMap'>
          <div className='container-fluid'>
            <h1 className='Title'>Tiện ích</h1>
            <div className='filter d-flex justify-content-between'>
              <div className='search'>
                <input type='text' placeholder='Nhập từ khóa tìm kiếm' />
                <i className='fa-solid fa-magnifying-glass'></i>
              </div>
              <div className='--filter d-flex'>
                <div className='--item d-flex align-items-center'>
                  <span>
                    <Image src={require("../../Asset/icon-11.svg")} alt='' />
                    Bộ lọc
                  </span>
                  <select name='' id=''>
                    <option value=''>Chọn huyện</option>
                  </select>
                  <select name='' id=''>
                    <option value=''>Loại địa điểm</option>
                  </select>
                </div>
                <div className='--item d-flex align-items-center'>
                  <span>
                    <Image src={require("../../Asset/icon-11.svg")} alt='' />
                    Sắp xếp
                  </span>
                  <select name='' id=''>
                    <option value=''>Chọn huyện</option>
                  </select>
                  <select name='' id=''>
                    <option value=''>Loại địa điểm</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='--content'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='list_utiMap'>
                    <div className='--item d-flex align-items-center justify-content-between'>
                      <div className='--txt'>
                        <h6>ATM Agribank - Thành phố Lai Châu</h6>
                        <ul>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-map2.svg")}
                                alt=''
                              />
                            </div>
                            <span>
                              35C4+9HW, Đường Không Tên, Sông Đà, Điện Biên
                            </span>
                          </li>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-12.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cách bạn 3km</span>
                          </li>
                        </ul>
                      </div>
                      <a className='arrow_hover' href=''>
                        <Image
                          src={require("../../Asset/navigation.svg")}
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='--item d-flex align-items-center justify-content-between'>
                      <div className='--txt'>
                        <h6>ATM Agribank - Thành phố Lai Châu</h6>
                        <ul>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-map2.svg")}
                                alt=''
                              />
                            </div>
                            <span>
                              35C4+9HW, Đường Không Tên, Sông Đà, Điện Biên
                            </span>
                          </li>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-12.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cách bạn 3km</span>
                          </li>
                        </ul>
                      </div>
                      <a className='arrow_hover' href=''>
                        <Image
                          src={require("../../Asset/navigation.svg")}
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='--item d-flex align-items-center justify-content-between'>
                      <div className='--txt'>
                        <h6>ATM Agribank - Thành phố Lai Châu</h6>
                        <ul>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-map2.svg")}
                                alt=''
                              />
                            </div>
                            <span>
                              35C4+9HW, Đường Không Tên, Sông Đà, Điện Biên
                            </span>
                          </li>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-12.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cách bạn 3km</span>
                          </li>
                        </ul>
                      </div>
                      <a className='arrow_hover' href=''>
                        <Image
                          src={require("../../Asset/navigation.svg")}
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='--item d-flex align-items-center justify-content-between'>
                      <div className='--txt'>
                        <h6>ATM Agribank - Thành phố Lai Châu</h6>
                        <ul>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-map2.svg")}
                                alt=''
                              />
                            </div>
                            <span>
                              35C4+9HW, Đường Không Tên, Sông Đà, Điện Biên
                            </span>
                          </li>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-12.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cách bạn 3km</span>
                          </li>
                        </ul>
                      </div>
                      <a className='arrow_hover' href=''>
                        <Image
                          src={require("../../Asset/navigation.svg")}
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='--item d-flex align-items-center justify-content-between'>
                      <div className='--txt'>
                        <h6>ATM Agribank - Thành phố Lai Châu</h6>
                        <ul>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-map2.svg")}
                                alt=''
                              />
                            </div>
                            <span>
                              35C4+9HW, Đường Không Tên, Sông Đà, Điện Biên
                            </span>
                          </li>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-12.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cách bạn 3km</span>
                          </li>
                        </ul>
                      </div>
                      <a className='arrow_hover' href=''>
                        <Image
                          src={require("../../Asset/navigation.svg")}
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='--item d-flex align-items-center justify-content-between'>
                      <div className='--txt'>
                        <h6>ATM Agribank - Thành phố Lai Châu</h6>
                        <ul>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-map2.svg")}
                                alt=''
                              />
                            </div>
                            <span>
                              35C4+9HW, Đường Không Tên, Sông Đà, Điện Biên
                            </span>
                          </li>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-12.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cách bạn 3km</span>
                          </li>
                        </ul>
                      </div>
                      <a className='arrow_hover' href=''>
                        <Image
                          src={require("../../Asset/navigation.svg")}
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='--item d-flex align-items-center justify-content-between'>
                      <div className='--txt'>
                        <h6>ATM Agribank - Thành phố Lai Châu</h6>
                        <ul>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-map2.svg")}
                                alt=''
                              />
                            </div>
                            <span>
                              35C4+9HW, Đường Không Tên, Sông Đà, Điện Biên
                            </span>
                          </li>
                          <li>
                            <div className='--icon'>
                              <Image
                                src={require("../../Asset/icon-12.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cách bạn 3km</span>
                          </li>
                        </ul>
                      </div>
                      <a className='arrow_hover' href=''>
                        <Image
                          src={require("../../Asset/navigation.svg")}
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='--map'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8466441825976!2d102.23802461470257!3d2.211509298388063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1ccd4f2e3ed%3A0x4a2e89fc42f51eaf!2sBan%20Sin%20Ho%20Trading!5e0!3m2!1svi!2s!4v1666683463879!5m2!1svi!2s'
                      width='600'
                      height='450'
                      style={{ border: "0" }}
                      // allowfullscreen=''
                      loading='lazy'
                      // referrerpolicy='no-referrer-when-downgrade'
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UtilitiesWrapper>
  );
};
export default Utilities;
