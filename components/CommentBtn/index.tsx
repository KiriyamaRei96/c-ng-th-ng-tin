import { Form, Modal } from "antd";
import React, { memo, ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../ReduxStore/hooks";

export interface CommentBtnProps {
  children: ReactElement;
  id: string | number;
  parentId?: string | number;
  reply?: string;
}

const CommentBtn = ({ children, id, parentId, reply }: CommentBtnProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (reply) {
      form.setFieldValue("content", `@${reply} `);
    }
  }, [reply]);
  return (
    <div className='commentBtn'>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        {children}
      </div>
      <Modal
        destroyOnClose
        title={reply ? <h3>Phản hồi bình luận</h3> : <h3>Để lại bình luận</h3>}
        footer={null}
        open={open}
        onCancel={() => setOpen(false)}
        width='676px'
        className='comment-modal'
      >
        <Form
          onFinish={(value) => {
            const data = new FormData();
            data.append("name", value.name);
            data.append("content", value.content);
            data.append("postsId", id.toString());
            data.append("parent_id", parentId ? parentId?.toString() : "");
            const payload = { data: data, id };
            dispatch({
              type: "CREATE_COMMENT",
              payload,
            });
            setOpen(false);
          }}
          layout='vertical'
          className='d-flex comment-form'
          form={form}
        >
          <Form.Item
            label='Tên của bạn:'
            name='name'
            rules={[
              { required: true, message: "Không được bỏ trống trường này!" },
            ]}
          >
            <input type='text' placeholder='Tên của bạn' />
          </Form.Item>

          <Form.Item
            label='Nội dung bình luận:'
            name='content'
            rules={[
              { required: true, message: "Không được bỏ trống trường này!" },
            ]}
          >
            <textarea className='--content' placeholder='Nội dung bình luận' />
          </Form.Item>
          <button type='submit'>Đăng bình luận</button>
        </Form>
      </Modal>
      {/* {open ? (
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="Modal"
        ></div>
      ) : (
        false
      )} */}
    </div>
  );
};
export default memo(CommentBtn);
