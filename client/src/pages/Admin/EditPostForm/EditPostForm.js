import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import { Input } from "../../../_components";

import { editPost } from "../../../_actions";

import dotenv from "dotenv";
dotenv.config();

const EditPostForm = ({ editPost }) => {
  const location = useLocation();
  const [text, setText] = useState(location.state.text);
  const [title, setTitle] = useState(location.state.title);

  console.log(location.state);

  const handleEditorChange = (editorContent, editor) => {
    setText({ text: editorContent });
    console.log(text);
  };

  const handleInputChange = e => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onSubmit = e => {
    e.preventDefault();
    const data = {
      title,
      text: text
    };
    editPost(data, location.state.id);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit} className="admin-form">
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            type="text"
            name="title"
            value={title}
            className="full-width"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="Post">Post</label>
          <Editor
            apiKey={process.env.REACT_APP_TINY_API}
            initialValue={text}
            textareaName="Post"
            init={{
              height: 500,
              menubar: false,
              selector: "textarea",
              toolbar_mode: "wrap",
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount"
              ],
              toolbar:
                "formatselect | bold italic underline code | alignleft aligncenter alignright alignjustify | bullist numlist | preview | undo redo | removeformat"
            }}
            onEditorChange={handleEditorChange}
          />
        </div>
        <div className="input-group">
          <button className="admin-form__submit full-width">Edit Post</button>
        </div>
      </form>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    editPost: (data, id) => {
      dispatch(editPost(data, id));
    }
  };
};

const EditPostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostForm);

export { EditPostFormContainer as EditPostForm };
