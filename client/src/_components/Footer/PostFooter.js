import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export const PostFooter = () => {
  return (
    <Fragment>
      <footer className="post__footer">
        <section className="post__author">
          <h1>
            <Link to="/">Curtis Jones</Link>
          </h1>
          <div className="post__bio">
            Curtis Jones is a creative writer who loves to write poems and short
            stories for his audience.
          </div>
        </section>
        <section className="post__share">
          <h1>Connect</h1>
          <a
            className="post__share-link"
            href="https://www.facebook.com/Curtissillo27"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443v1.581z"
                fillRule="evenodd"
              />
              <rect
                x="0"
                y="0"
                width="20"
                height="20"
                fill="rgba(0, 0, 0, 0)"
              />
            </svg>
          </a>
          <a
            className="post__share-link"
            href="https://www.instagram.com/writingsilhouette/"
            // onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
            >
              <path
                d="M13 10a3 3 0 1 1-6 0c0-.171.018-.338.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049c.031.162.049.329.049.5zm-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12zm2.4-4.1h1.199a.301.301 0 0 0 .301-.3V6.401a.301.301 0 0 0-.301-.301H12.4a.301.301 0 0 0-.301.301V7.6c.001.165.136.3.301.3zM10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4zm5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111v7.778z"
                fillRule="evenodd"
              />
              <rect
                x="0"
                y="0"
                width="20"
                height="20"
                fill="rgba(0, 0, 0, 0)"
              />
            </svg>
          </a>
          <a
            className="post__share-link"
            href="https://writingsilhouette.tumblr.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.577 13.741a5.508 5.508 0 0 1-1.066.395a4.543 4.543 0 0 1-1.031.113c-.42 0-.791-.055-1.114-.162a2.373 2.373 0 0 1-.826-.459a1.651 1.651 0 0 1-.474-.633c-.088-.225-.132-.549-.132-.973V9.16H6.918V7.846c.359-.119.67-.289.927-.512c.257-.221.464-.486.619-.797c.156-.31.263-.707.322-1.185h1.307v2.35h2.18V9.16h-2.18v2.385c0 .539.028.885.085 1.037a.7.7 0 0 0 .315.367c.204.123.437.185.697.185c.466 0 .928-.154 1.388-.461v1.468z"
                fillRule="evenodd"
              />
              <rect
                x="0"
                y="0"
                width="20"
                height="20"
                fill="rgba(0, 0, 0, 0)"
              />
            </svg>
          </a>
        </section>
      </footer>
    </Fragment>
  );
};
