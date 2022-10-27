import { useRouter } from "next/router";
import * as React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import NewsDetailWarpper from "./_component/style/styled";

export interface NewsDetailProps {}
// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: false, // can also be true or 'blocking'
//   };
// }
// export async function getStaticProps(context) {
//   return {
//     // Passed to the page component as props
//     props: {},
//   };
// }
const NewsDetail = (props: NewsDetailProps) => {
  const router = useRouter();
  console.log(router);
  return (
    <NewsDetailWarpper>
      <div id="detailnews">
        <div className="Banner d-flex">
          <img
            src="https://s3-alpha-sig.figma.com/img/e3df/aa8e/d78f505aded9934305676894ff52265d?Expires=1667779200&Signature=bMTTHii0BMQSGCNrfbsYwFXMuvR0qmnCN7WbqwhNFtsRsPq1GWxZ4Izs0C05SL6R-dGvV9V8AAuLeSXZe76MKK2nq1bM25FQg6uktzMZlgk~TmOXcfO4OYNJ4MgPBrnNpDetpV2HHIBc9rXTDrQK4OLEHAN5iMa5FvAKg0yEcSRu1lX7dyKle-3T1bLRJwZuvzvxMMcrAjIdRHLlJRYUxWzrOM3r6I24VULvIVZglZ7Q6N~5BPe~LP41X8rOHd9Xrf8yi69WmwxyMGp1f7vJIUe9D9IN3OmsOSQk9B7f45jNOdnyRUBcjoSrPi81CqmPqlGAV73yzqw3OZ2lD-ZLmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          ></img>
          <div className="--Item">
            <h1>Tin tức </h1>
            <BreadCrumb />
          </div>
        </div>
        <div className="detailnewsContent">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <div className="--left">
                  <div className="subTitle">Chi tiết tin tức</div>
                  <h2 className="--title">
                    Cầu Kính Rồng Mây “Kỳ Quan Tiên Cảnh Của Đất Trời Lai Châu”{" "}
                  </h2>
                  <div className="--note d-flex">
                    <div className="--item">
                      <a href="">
                        <span>32 Bình luận</span>
                      </a>
                    </div>
                    <div className="--item">
                      <span>84 đánh giá</span>
                    </div>
                    <div className="--item">
                      <i className="fa-regular fa-calendar"></i>
                      <span>01/09/2022</span>
                    </div>
                    <div className="--item">
                      <i className="fa-regular fa-eye"></i>
                      <span>268</span>
                    </div>
                  </div>
                  <div className="--des">
                    Cầu kính Rồng Mây được xem là công trình cầu kính cao nhất
                    Việt Nam tính đến thời điểm hiện tại. Công trình này tọa lạc
                    trên đỉnh đèo Ô Quy Hồ thuộc địa phận huyện Tam Đường của
                    tỉnh Lai Châu. Nơi đây còn được mệnh danh là Cổng trời trên
                    đỉnh Ô Quy Hồ.
                  </div>
                  <article>
                    Chủ tịch UBND tỉnh Quảng Trị Võ Văn Hưng vừa ký quyết định
                    số 1355/QĐ-UBND ngày 20/5/2022 về việc thành lập Khu công
                    nghiệp (KCN) Tây Bắc Hồ Xá, huyện Vĩnh Linh, tỉnh Quảng Trị.
                    Theo đó, KCN Tây Bắc Hồ Xá có diện tích 214,77 ha nằm trên
                    địa bàn các xã zVĩnh Long và xã Vĩnh Chấp, huyện Vĩnh Linh,
                    do Công ty cổ phần Quang Anh Quảng Trị làm chủ đầu tư với
                    tổng vốn đầu tư 925 tỷ đồng. Thời hạn hoạt động của KCN 50
                    năm kể từ ngày được cấp Quyết định chủ trương đầu tư (từ
                    ngày 19/3/2021 đến ngày 19/3/2071).
                  </article>
                </div>
              </div>
              <div className="col-md-3">
                <div className="--right">
                  <h3 className="--titlenews">Bài viết liên quan</h3>
                  <div className="othernews">
                    <div className="--item ">
                      <div className="--img img_hover">
                        <a href="">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/7d10/7f3e/f0d097eefc764a35401b8598baff00f2?Expires=1667779200&Signature=XXCJylS3XMuqjfJnpYBxupOW3oOJVi6lUtOdMyabsNO~88XnKrLU74~M0D~TRxndeU3Z-C1JwrGCGUaoDN9FaZT-CK0rnmJ4wgV3LJILF-EJEcaDz9KzUx8ybGuX1nvkLCQSB0FX67I0onqVEIHOmIF82bhQDGgsMvNlRwbgszpQqiYeXk7dWbz22rPLTPKq0SHlaXa-r2R3iAI6xxWQC4~kiTi6a4puog5Z4wc1qtk9C5KDQrLERc02JzsaB8Vejq3tAQEuqOvxl-cvpLexQdB8bT0LlqaZ7LQfieCXGJvL5bMwVY~C1gY6fjsK5IOXIQWti0eJam50VZ2WqZGkzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt=""
                          />
                        </a>
                      </div>
                      <h5>
                        <a href="">
                          Khu du lịch Cầu kính Rồng Mây chuẩn bị khởi công lắp
                          đặt
                        </a>
                      </h5>
                    </div>
                    <div className="--item ">
                      <div className="--img img_hover">
                        <a href="">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/7d10/7f3e/f0d097eefc764a35401b8598baff00f2?Expires=1667779200&Signature=XXCJylS3XMuqjfJnpYBxupOW3oOJVi6lUtOdMyabsNO~88XnKrLU74~M0D~TRxndeU3Z-C1JwrGCGUaoDN9FaZT-CK0rnmJ4wgV3LJILF-EJEcaDz9KzUx8ybGuX1nvkLCQSB0FX67I0onqVEIHOmIF82bhQDGgsMvNlRwbgszpQqiYeXk7dWbz22rPLTPKq0SHlaXa-r2R3iAI6xxWQC4~kiTi6a4puog5Z4wc1qtk9C5KDQrLERc02JzsaB8Vejq3tAQEuqOvxl-cvpLexQdB8bT0LlqaZ7LQfieCXGJvL5bMwVY~C1gY6fjsK5IOXIQWti0eJam50VZ2WqZGkzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt=""
                          />
                        </a>
                      </div>
                      <h5>
                        <a href="">
                          Khu du lịch Cầu kính Rồng Mây chuẩn bị khởi công lắp
                          đặt
                        </a>
                      </h5>
                    </div>
                    <div className="--item ">
                      <div className="--img img_hover">
                        <a href="">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/7d10/7f3e/f0d097eefc764a35401b8598baff00f2?Expires=1667779200&Signature=XXCJylS3XMuqjfJnpYBxupOW3oOJVi6lUtOdMyabsNO~88XnKrLU74~M0D~TRxndeU3Z-C1JwrGCGUaoDN9FaZT-CK0rnmJ4wgV3LJILF-EJEcaDz9KzUx8ybGuX1nvkLCQSB0FX67I0onqVEIHOmIF82bhQDGgsMvNlRwbgszpQqiYeXk7dWbz22rPLTPKq0SHlaXa-r2R3iAI6xxWQC4~kiTi6a4puog5Z4wc1qtk9C5KDQrLERc02JzsaB8Vejq3tAQEuqOvxl-cvpLexQdB8bT0LlqaZ7LQfieCXGJvL5bMwVY~C1gY6fjsK5IOXIQWti0eJam50VZ2WqZGkzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt=""
                          />
                        </a>
                      </div>
                      <h5>
                        <a href="">
                          Khu du lịch Cầu kính Rồng Mây chuẩn bị khởi công lắp
                          đặt
                        </a>
                      </h5>
                    </div>
                    <div className="--item ">
                      <div className="--img img_hover">
                        <a href="">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/7d10/7f3e/f0d097eefc764a35401b8598baff00f2?Expires=1667779200&Signature=XXCJylS3XMuqjfJnpYBxupOW3oOJVi6lUtOdMyabsNO~88XnKrLU74~M0D~TRxndeU3Z-C1JwrGCGUaoDN9FaZT-CK0rnmJ4wgV3LJILF-EJEcaDz9KzUx8ybGuX1nvkLCQSB0FX67I0onqVEIHOmIF82bhQDGgsMvNlRwbgszpQqiYeXk7dWbz22rPLTPKq0SHlaXa-r2R3iAI6xxWQC4~kiTi6a4puog5Z4wc1qtk9C5KDQrLERc02JzsaB8Vejq3tAQEuqOvxl-cvpLexQdB8bT0LlqaZ7LQfieCXGJvL5bMwVY~C1gY6fjsK5IOXIQWti0eJam50VZ2WqZGkzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt=""
                          />
                        </a>
                      </div>
                      <h5>
                        <a href="">
                          Khu du lịch Cầu kính Rồng Mây chuẩn bị khởi công lắp
                          đặt
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NewsDetailWarpper>
  );
};
export default NewsDetail;
