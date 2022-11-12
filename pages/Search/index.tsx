import * as React from "react";
import callApi from "../../Api/Axios";
import BreadCrumb from "../../components/BreadCrumb";
import { iconMap2 } from "../../components/img";
import SearchWrapper from "./_component/styled/style";

export async function getServerSideProps(context) {
  const res = await callApi
    .get(`/v2/page/Search?locale=${context.locale}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  const banner = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "banner"
  );

  return {
    props: {
      banner,
    },
  };
}
const Search = ({ banner }) => {
  return (
    <SearchWrapper>
      <div id="search">
        <div className="Banner d-flex">
          <img src={banner?.image?.path} alt=""></img>
          <div className="--Item">
            <h1>{banner.title}</h1>
            <BreadCrumb />
          </div>
        </div>
        <div className="searchContent">
          <div className="container-fluid">
            <h1 className="Title">26 địa điểm du lịch được tìm thấy</h1>
            <div className="filter d-flex justify-content-between align-items-center">
              <div className="search">
                <input type="text" placeholder="Nhập từ khóa tìm kiếm" />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="select">
                <span>Sắp xếp</span>
                <select name="" id="">
                  <option value="">Gần nhất</option>
                </select>
              </div>
            </div>
            <div className="--tab d-flex">
              <div className="--item-tab active">
                Tất Cả <span>(20)</span>
              </div>
              <div className="--item-tab">
                Thiên nhiên <span> (15)</span>
              </div>
              <div className="--item-tab">
                Di tích lịch sử <span>(15)</span>
              </div>
            </div>
            <div className=" list_discover">
              <div className="row">
                <div className="col-md-4">
                  <div className="--item img_hover">
                    <a href="">
                      <div className="--img">
                        <img src="../img/banner.png" alt="" />
                      </div>
                      <div className="--txt">
                        <div className="--type">Đèo - Núi</div>
                        <h4>Đèo Ô Quy Hồ</h4>
                        <div className="--location ">
                          <img src={iconMap2?.default?.src} alt="" />
                          <span>Huyện Tam Đường</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SearchWrapper>
  );
};
export default Search;
