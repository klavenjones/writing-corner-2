import React, { Fragment } from "react";

export const PostItem = ({ posts: { title } }) => {
  return (
    <Fragment>
      <div className="post-item">
        <h5 className="post-item__title">{title}</h5>
        <div className="post-item__edit">
          <button>
            <i className="fas fa-pen"></i>
          </button>
          <button>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
