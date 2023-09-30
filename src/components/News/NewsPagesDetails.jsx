import React from 'react'
import './blog-post.css'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NewsPagesDetails = () => {
  const { id } = useParams();
  const newsData = useSelector((state) => state.cartreducer.newsData);

  const selectedNewsItem = newsData.find((item) => item.id === parseInt(id, 10));

  if (!selectedNewsItem) {
    return <div>News not found</div>;
  }

  return (
    <main>
      <div className="container pb-5">
        <div className="breadcrumb-box">
          <div className="breadcrumb-inner">
            <div className="left">
              <a
                className="home"
                href="#"
              >
                Home
              </a>
              <span className="navigation-pipe" />
              Blog
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 mb-4">
            <article>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='images-post'> <img
                    src={selectedNewsItem.imageUrl}
                    title={selectedNewsItem.title}

                    className="img-fluid img-thumbnail mb-3"
                  />

                  </div>
                </div>
                <div className='col-lg-8'>
                  <ul className="post-meta list-inline">
                    <h5 className='text-uppercase'>{selectedNewsItem.title}</h5>

                    <li className="list-inline-item">
                      <i className="fa-regular fa-circle-user" /> <a href="#">John Doe</a>
                    </li>
                    <li className="list-inline-item">
                      <i className="fa-regular fa-calendar" /> <a href="#">29 June 2023</a>
                    </li>
                    <li className="list-inline-item  ">
                      <i className="fa-solid fa-tags" /> <a href="#">OrganicFood</a>
                    </li>
                  </ul>
                </div>
              </div>



              <div className="post-content">


                <p>
                  {selectedNewsItem.content}
                </p>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                  aliquet nec, vulputate eget, arcu. In enim justo,{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                  aliquet nec, vulputate eget, arcu. In enim justo,{" "}
                </p>
                <ul className="list-inline share-buttons">
                  <li className="list-inline-item">Share Post:</li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="social-icon-sm si-dark si-colored-facebook si-gray-round"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="social-icon-sm si-dark si-colored-twitter si-gray-round"
                    >
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="social-icon-sm si-dark si-colored-linkedin si-gray-round"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
                <hr className="my-3" />
                <h4 className="mb-3 text-uppercase font-weight-bold">About Author</h4>
                <div className="media mb-3 d-flex">
                  <i className="me-3  fa fa-user-circle fa-5x text-primary" />
                  <div className="media-body">
                    <h5 className="mt-0 font-weight-bold">Jane Doe</h5> Cras sit amet
                    nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                    viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </div>
                <hr className="my-3" />
                <h4 className="mb-3 text-uppercase font-weight-bold">Comments</h4>
                <div className="media mb-3 d-flex">
                  <i className=" me-3 fa-regular fa-circle-user fa-3x" />
                  <div className="media-body">
                    <h5 className="mt-0 font-weight-bold clearfix">
                      <a href="#" className="float-end">
                        Reply
                      </a>
                      Jane Doe
                    </h5>{" "}
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                    felis in faucibus.
                  </div>
                </div>
                <div className="media mb-3 d-flex ">
                  <i className="me-3 fa-regular fa-circle-user fa-3x" />
                  <div className="media-body">
                    <h5 className="mt-0 font-weight-bold clearfix">
                      <a href="#" className="float-end">
                        Reply
                      </a>
                      <p>Jane Doe</p>
                    </h5>{" "}
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                    felis in faucibus.
                  </div>
                </div>
                <div className="media mb-3 d-flex">
                  <i className=" me-3 fa-regular fa-circle-user fa-3x" />
                  <div className="media-body">
                    <h5 className="mt-0 font-weight-bold clearfix">
                      <a href="#" className="float-end">
                        Reply
                      </a>
                      Jane Doe
                    </h5>{" "}
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                    felis in faucibus.
                  </div>
                </div>
                <hr className="my-3" />
                <h4 className="mb-3 text-uppercase font-weight-bold">
                  Post a comment
                </h4>
                <form role="form">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="john@doe.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label">
                      Comment
                    </label>
                    <textarea
                      className="form-control"
                      id="comment"
                      rows={5}
                      placeholder="Comment"
                      defaultValue={""}
                    />
                  </div>
                  <div className="clearfix float-right">
                    <button type="button" className="btn btn-green btn-lg">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </article>
          </div>
          <div className="col-md-3 mb-4">
            <div className="mb-4">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-describedby="basic-addon2"
                  />
                  <button
                    className="btn btn-green"
                    type="button"
                    id="basic-addon2"
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
            <div className="mb-4">
              <h4 className="sidebar-title">Categories</h4>
              <ul className="list-unstyled categories">
                <li>
                  <a href="#">Spice</a>
                </li>
                <li>
                  <a href="#">Sale</a>
                </li>

                <li>
                  <a href="#">Top Rating</a>
                </li>
                <li>
                  <a href="#">Trending</a>
                </li>
                <li>
                  <a href="#">Newest Properties</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="sidebar-title">Latest News</h4>
              <ul className="list-unstyled">
                {newsData.map((newsItem) => (
                  <li key={newsItem.id} className="media">
                    <img
                      className="me-3 img-fluid"
                      width={64}
                      src={newsItem.imageUrl}
                      title={newsItem.title}
                    />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1 text-truncate">
                        <Link to={`/blog/${newsItem.id}`} >{newsItem.title}</Link>
                      </h5>{" "}
                      {newsItem.date}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}

export default NewsPagesDetails
