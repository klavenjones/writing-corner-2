import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

import dotenv from "dotenv";
dotenv.config();

export const EditPostForm = props => {
  const location = useLocation();
  const [content, setContent] = useState(location.state.content);
  const [title, setTitle] = useState(location.state.title);

  console.log(location.state);

  const handleEditorChange = (editorContent, editor) => {
    setContent({ content: editorContent });
    console.log(content);
  };

  const handleInputChange = e => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(content);
    console.log(title);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit} className="admin-form">
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            className="full-width"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input-group">
          <label htmlFor="Post">Post</label>
          <Editor
            apiKey={process.env.REACT_APP_TINY_API}
            initialValue={content}
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
          <button className="admin-form__submit full-width">Save Post</button>
        </div>
      </form>
    </Fragment>
  );
};
