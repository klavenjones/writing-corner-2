import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { PostItem } from "./";

import { stores } from "../../../_helpers";
import { getPosts, deletePost } from "../../../_actions";

import { connect } from "react-redux";

const PostList = ({ url, getPosts, post: { postings }, history }) => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [elements, setElements] = useState([]);
  const [perPage, setPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    console.log("Line 21 Fired");
    getPosts();
  }, []);

  useEffect(() => {
    console.log("Line 26 Fired");
    setPostings(postings);
  }, [postings]);

  useEffect(() => {
    console.log("Line 27 Fired");
    setElementsOnCurrentPage();
  }, [posts]);

  // useEffect(() => {
  //   console.log("Line 33");
  //   getPosts();
  // }, [elements]);

  useEffect(() => {
    console.log("Line 34 Fired");
    setElementsOnCurrentPage();
  }, [offset, currentPage]);

  const setPostings = async articles => {
    setPosts(articles);
    setPageCount(Math.ceil(articles.length / perPage));
  };

  const setElementsOnCurrentPage = () => {
    let element = posts
      .slice(offset, offset + perPage)
      .map((post, i) => (
        <PostItem key={i} posts={post} url={url} onDelete={handleDelete} />
      ));
    setElements(element);
  };

  const handleDelete = id => {
    stores.dispatch(deletePost(id));
    getPosts();
  };

  const handlePageClick = articles => {
    const selectedPage = articles.selected;
    const offSet = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(offSet);
  };

  let olderPosts = (
    <div>
      <i className="fas fa-chevron-left"></i>
      Older Posts
    </div>
  );

  let newerPosts = (
    <div>
      Newer Posts
      <i className="fas fa-chevron-right"></i>
    </div>
  );

  let paginationElement;
  if (pageCount > 1) {
    paginationElement = (
      <ReactPaginate
        previousLabel={currentPage !== 0 ? olderPosts : ""}
        nextLabel={currentPage !== pageCount - 1 ? newerPosts : ""}
        pageRangeDisplayed={pageCount}
        marginPagesDisplayed={pageCount}
        breakLabel={<span className="gap">...</span>}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        onPageChange={handlePageClick.bind(this)}
        forcePage={currentPage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__older"}
        nextLinkClassName={"pagination__newer"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    );
  }

  return (
    <Fragment>
      <div className="post-list">
        <p className="post-list__title">Blog Posts</p>
        <div className="post-items">
          {/* {posts.map((post, i) => (
            <PostItem key={i} posts={post} url={url} />
          ))} */}
          {elements}
          {paginationElement}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    }
  };
};

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export { PostListContainer as PostList };
