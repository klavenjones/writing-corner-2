import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import { Input } from "../../../_components";

import { editPost } from "../../../_actions";
import FormValidator from "../../../_helpers/validation";

import dotenv from "dotenv";
dotenv.config();

const EditPostForm = ({ editPost }) => {
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
  const location = useLocation();
  const [text, setText] = useState(location.state.text);
  const [title, setTitle] = useState(location.state.title);
  const [errors, setErrors] = useState({});

  const handleEditorChange = (editorContent, editor) => {
    setText(editorContent);
  };

  const handleInputChange = e => {
    setTitle(e.target.value);
  };

  const onSubmit = e => {
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
      editPost(savedData, location.state.id);
    } else {
      setErrors(formValidation);
    }
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
