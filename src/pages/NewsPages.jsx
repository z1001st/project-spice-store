import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NewsPages = () => {






    const newsData = useSelector((state) => state.cartreducer.newsData);
    const [popularPosts, setPopularPosts] = useState([]);
    const getPopularPosts = () => {
        const popularPostsData = newsData.slice(0, 5);
        setPopularPosts(popularPostsData);
    };

    useEffect(() => {
        getPopularPosts();
    }, []);
    return (







        <main className="container">

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
                        News
                    </div>
                </div>
            </div>
            <div className="container bootstrap snippets bootdey">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {newsData.map((newsItem) => (
                                <div key={newsItem.id} className="panel blog-container col-lg-4 col-md-6 col-6">
                                    <div className="panel-body">
                                        <div className="image-wrapper">
                                            <Link to={`/blog/${newsItem.id}`} className="image-wrapper image-zoom cboxElement">
                                                <img
                                                    className="img-fluid img-thumbnail"
                                                    src={newsItem.imageUrl}
                                                    title={`Photo of ${newsItem.title}`}
                                                />
                                                <div />
                                            </Link>
                                        </div>

                                        <h6 className='text-black mt-2 pb-2'>{newsItem.title}</h6>
                                        <p className="m-top-sm m-bottom-sm text-truncate-9">
                                            {newsItem.content}
                                        </p>
                                        <Link to={`/blog/${newsItem.id}`} className="image-wrapper image-zoom cboxElement">
                                            <i className="fa fa-angle-double-right" /> Continue reading
                                        </Link>
                                        <span
                                            className="post-like text-muted tooltip-test"
                                            data-toggle="tooltip"
                                            data-original-title="I like this post!"
                                        ></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h6 className="headline text-muted">
                            POPULAR POST
                            <span className="line" />
                        </h6>

                        {popularPosts.map((post) => (
                            <Link to="/blog" key={post.id} className="media popular-post">
                                <a className="pull-left" href="#">
                                    <img
                                        src={post.imageUrl}
                                        title={`Popular Post - ${post.title}`}
                                    />
                                </a>
                                <div className="media-body">
                                    <p className="text-truncate">   {post.title}
                                    </p>
                                </div>
                            </Link>
                        ))}





                    </div>
                </div>
            </div>
        </main>

    )
}

export default NewsPages
