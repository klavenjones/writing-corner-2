import React, { Fragment, useState, useEffect } from "react";
import { Input } from "../../../_components";
import { Editor } from "@tinymce/tinymce-react";
import { Redirect } from "react-router-dom";
import { addPost } from "../../../_actions";
import { connect } from "react-redux";

import FormValidator from "../../../_helpers/validation";

import dotenv from "dotenv";
dotenv.config();

const NewPostForm = ({ addPost }) => {
  //SET UP FORM CRITERIA
  const validator = new FormValidator([
    {
      field: "title",
      method: "isEmpty",
      validWhen: false,
      message: "Title is required."
    },
    {
      field: "text",
      method: "isEmpty",
      validWhen: false,
      message: "This entry cannot be empty"
    }
  ]);

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({});

  const handleEditorChange = (editorContent, editor) => {
    setText(editorContent);
  };

  const handleInputChange = e => {
    setTitle(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    setErrors({});
    const data = {
      title,
      text
    };
    //handle validation
    const formValidation = validator.validate(data);
    if (formValidation.isValid) {
      let savedData = {
        title,
        text: text
      };
      addPost(savedData);
    } else {
      setErrors(formValidation);
    }
  };

  return (
    <Fragment>
      <p className="post-list__title">Add New Post</p>
      <form onSubmit={onSubmit} className="admin-form">
        <div className="input-group">
          <label htmlFor="title">Title</label>

          <Input
            id="title"
            type="text"
            name="title"
            value={title}
            error={Object.keys(errors).length > 0 ? errors.title.message : ""}
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
          {errors.text && (
            <div className="invalid-feedback">{errors.text.message}</div>
          )}
        </div>
        <div className="input-group">
          <button className="admin-form__submit full-width">Save Post</button>
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
    addPost: data => {
      dispatch(addPost(data));
    }
  };
};

const NewPostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostForm);

export { NewPostFormContainer as NewPostForm };
