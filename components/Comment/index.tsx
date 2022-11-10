import * as React from "react";
import { banner } from "../img";

export interface CommentProps {}

const Comment = (props: CommentProps) => {
  return (
    <div className="--coment">
      <h3 className="--title">3 comments</h3>
      <div className="list_coment">
        <div className="--comentcustomer ">
          <div className="--item d-flex ">
            <div className="--avatar">
              <img src={banner.default.src} alt="" />
            </div>
            <div className="--txt">
              <div className="--top d-flex justify-content-between align-items-center">
                <div className="--name_customer">
                  <h6>Trịnh Tùng Anh</h6>
                  <div className="--time">
                    <i className="fa-regular fa-calendar"></i> 01/09/2022
                  </div>
                </div>
                <div className="--answer">
                  <i className="fa-solid fa-reply"></i>Trả lời
                </div>
              </div>
              <article>
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                được sử dụng như một văn bản
              </article>
            </div>
          </div>
          <div className="--item --feedback d-flex ">
            <div className="--avatar">
              <img src={banner.default.src} alt="" />
            </div>
            <div className="--txt">
              <div className="--top d-flex justify-content-between align-items-center">
                <div className="--name_customer">
                  <h6>Trịnh Tùng Anh</h6>
                  <div className="--time">
                    <i className=" potision fa-regular fa-calendar"></i>{" "}
                    01/09/2022
                  </div>
                </div>
                <div className="--answer">
                  <i className="fa-solid fa-reply"></i>Trả lời
                </div>
              </div>
              <article>
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                được sử dụng như một văn bản
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
