import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> { 
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,settotalResults]=useState(0)

  // const articles=[]
  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  
  const updateNews= async()=>{ 
    //at the time of loading
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; //fetches news from api through this url
    // setState({ loading: true });
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);

    setArticles(parseData.articles)
    setLoading(false)
    settotalResults(parseData.totalResults)

    console.log(parseData);
    props.setProgress(100);
  }

  useEffect(()=>{ 
    document.title = `NewsMonkey-${capitalizeFirstLetter(props.category)}`;
    updateNews(); 
    //eslint-disable-next-line
  },[])

  // similar to componentdid mount here it will listen to an empty array to have effect

  const fetchMoreData = async() => {
  //  setState({page:state.page+1}) 
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`; //fetches news from api through this url
  setPage(page+1)
   let data = await fetch(url);
   let parseData = await data.json();
   console.log(parseData); 
   setArticles(articles.concat(parseData.articles))
   settotalResults(parseData.totalResults)
   setLoading(false)
  //  setState({
  //    articles: state.articles.concat(parseData.articles), 
  //    totalResults: parseData.totalResults,
  //    loading: false
  //  });
  };

    return (
    <>
        <h1 className="text-center" style={{margin:'30px 0px',marginTop:'90px'}}>NewsMonkey-Top {capitalizeFirstLetter(props.category)} HeadLines</h1>
        {loading&&<Spinner/>}
          {/* {state.articles.map((element)=>{console.log(element)})} */}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
         >
          <div className="container">
        <div className="row">
        {  articles.map((element) => { 
            console.log(element.name)
            return(
              <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title} 
                  source={element.source.name} 
                  description={element.description}
                  // title={element.title?element.title.slice(0,45):""}
                  // description={element.description?element.description.slice(0,88):""}
                  imageurl={element.urlToImage}
                  newsurl={element.url} 
                  author={element.author}
                  date={element.publishedAt} 
                />
              </div>
             );
          })}
        </div> 
        </div>
        </InfiniteScroll>
      </>
    );
}

News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general'
} 
News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category: PropTypes.string
}
export default News;
