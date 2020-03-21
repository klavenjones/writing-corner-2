import React, { Fragment, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { PostItem } from "./PostItem";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [elements, setElements] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const postings = [
    {
      id: 1,
      title: "We testing our software",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap "
    },
    {
      id: 2,
      title: "Im coding",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
    },
    {
      id: 3,
      title: "We still testing our software",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea"
    },
    {
      id: 4,
      title: "We testing our software",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap "
    },
    {
      id: 5,
      title: "Im coding",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
    },
    {
      id: 6,
      title: "We still testing our software",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea"
    },
    {
      id: 7,
      title: "We testing our software",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap "
    },
    {
      id: 8,
      title: "Im coding",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
    },
    {
      id: 9,
      title: "We still testing our software",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea"
    },
    {
      id: 10,
      title: "We testing our software",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap "
    },
    {
      id: 11,
      title: "Im coding",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
    },
    {
      id: 12,
      title: "We still testing our software",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea"
    }
  ];

  useEffect(() => {
    setPostings(postings);
  }, []);

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
      .map(( post, i) => <PostItem key={i} posts={post} />);

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
