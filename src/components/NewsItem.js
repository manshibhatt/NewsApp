import React from "react";
//rce
const NewsItem=(props)=> {
    let { title, description, imageurl, newsurl, author, date, source } =
      props; //here v r destructuring this.props is n object and vv wll pull out title dscrption from it
    return (
      <div className="card my-3">
     <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
        }}>
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
        <img
          src={
            !imageurl
              ? "https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"
              : imageurl
          }
          className="card-img-top"
          alt="..."
          style={{ height: "143px"}}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <h5 className="card-title">{title}<h6><span class="badge bg-secondary">{source}</span></h6></h5> */}
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "anonymous"} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsurl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    );
}

export default NewsItem;
