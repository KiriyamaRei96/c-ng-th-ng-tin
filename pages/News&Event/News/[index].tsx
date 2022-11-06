import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import callApi from "../../../Api/Axios";
import BreadCrumb from "../../../components/BreadCrumb";
import NewsDetailWarpper from "./_component/style/styled";

export async function getServerSideProps(context) {
  const id = context.query?.index?.replace("detail~", "");

  const res = await callApi
    .get(`/v2/news_detail/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  const data = res.data;

  return {
    props: { data },
  };
}
export interface NewsDetailProps {
  data: any;
}

const NewsDetail = ({ data }: NewsDetailProps) => {
  const router = useRouter();

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
                  <h2 className="--title">{data.title}</h2>
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
                      <span>{data.date}</span>
                    </div>
                    <div className="--item">
                      <i className="fa-regular fa-eye"></i>
                      <span>268</span>
                    </div>
                  </div>
                  <div className="--des">{data.description}</div>
                  <div dangerouslySetInnerHTML={{ __html: data.content }}></div>

                  <div className="--backshare d-flex justify-content-between">
                    <a onClick={() => router.back()} className="--back">
                      <Image
                        src={require("../../../Asset/icon-back.svg")}
                        alt=""
                      />{" "}
                      Quay lại sự kiện
                    </a>

                    <ul>
                      <li>Chia sẻ:</li>
                      <li>
                        <a href="">
                          <Image
                            src={require("../../../Asset/icon-tw.svg")}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <Image
                            src={require("../../../Asset/icon-fb.svg")}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <Image
                            src={require("../../../Asset/icon-in.svg")}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <Image
                            src={require("../../../Asset/icon-gg.svg")}
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
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
