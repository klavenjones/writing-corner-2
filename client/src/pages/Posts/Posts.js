import React, { Fragment, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import { PostItem } from "./PostItem";
import { getPosts } from "../../_actions";
import { connect } from "react-redux";

const Posts = ({
  auth: { isAuthenticated },
  history,
  getPosts,
  post: { postings }
}) => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [elements, setElements] = useState([]);
  const [perPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/admin");
    }
    getPosts();
  }, []);

  useEffect(() => {
    setPostings(postings);
  }, [postings]);

  useEffect(() => {
    setElementsOnCurrentPage();
  }, [posts]);

  useEffect(() => {
    setElementsOnCurrentPage();
  }, [offset, currentPage]);

  const setPostings = async articles => {
    setPosts(articles);
    setPageCount(Math.ceil(articles.length / perPage));
  };

  const setElementsOnCurrentPage = () => {
    let element = posts
      .slice(offset, offset + perPage)
      .map((post, i) => <PostItem key={i} posts={post} />);
    setElements(element);
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
      <main className="content content--index">
        {/* {posts.map((post, i) => (
          <PostItem key={i} posts={post} title={post.title} />
        ))} */}
        {elements}
        {paginationElement}
      </main>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    }
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export { PostsContainer as Posts };
