import React from "react";
import commentSelector from "../../ReduxStore/commentSlice/slice";
import { useAppSelector } from "../../ReduxStore/hooks";
import { banner, comment, iconTime } from "../img";
import { v4 as uuid } from "uuid";
import CommentBtn from "../CommentBtn";

export interface CommentProps {
  id: string | number;
}

const Comment = ({ id }: CommentProps) => {
  const commentArr = useAppSelector(commentSelector).commentArr;

  return (
    <div className="--coment">
      <div className="d-flex --top">
        <h3 className="--title">{commentArr?.length} comments</h3>
        <CommentBtn id={id}>
          <button>
            <img src={comment.default.src} alt="" /> Viết bình luận
          </button>
        </CommentBtn>
      </div>

      <div className="list_coment">
        {commentArr?.map((comment) => (
          <div key={uuid()} className="--comentcustomer ">
            <div className="--item d-flex ">
              <div className="--avatar">
                <img src={banner.default.src} alt="" />
              </div>
              <div className="--txt">
                <div className="--top d-flex justify-content-between align-items-center">
                  <div className="--name_customer">
                    <h6>{comment?.nameUser}</h6>
                    <div className="--time">
                      <img src={iconTime.default.src} alt="" />{" "}
                      {comment.creationDate}
                    </div>
                  </div>
                  <CommentBtn
                    reply={comment?.nameUser}
                    parentId={comment?.id}
                    id={id}
                  >
                    <div className="--answer">
                      <i className="fa-solid fa-reply"></i>Trả lời
                    </div>
                  </CommentBtn>
                </div>
                <article>{comment?.content}</article>
              </div>
            </div>
            {comment?.children.map((cmt) => (
              <div key={uuid()} className="--item --feedback d-flex ">
                <div className="--avatar">
                  <img src={banner.default.src} alt="" />
                </div>
                <div className="--txt">
                  <div className="--top d-flex justify-content-between align-items-center">
                    <div className="--name_customer">
                      <h6>{cmt.nameUser}</h6>
                      <div className="--time">
                        <img src={iconTime.default.src} alt="" />
                        {cmt.creationDate}
                      </div>
                    </div>
                    <CommentBtn
                      reply={cmt?.nameUser}
                      parentId={comment?.id}
                      id={id}
                    >
                      <div className="--answer">
                        <i className="fa-solid fa-reply"></i>Trả lời
                      </div>
                    </CommentBtn>
                  </div>
                  <article>{cmt.content}</article>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comment;
