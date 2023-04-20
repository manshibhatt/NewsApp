/*
so here w be making notes of news api

so for prop componet snipppet type rcep
else fro simple type rce 
v  have 3 components  
navbar 
news 
newsitem //it resides inside news

fetch a news api 
get its sample response
here v take top headlines wherw keyword q=moon 

add news card in newsitem

props making title and desc by this.props 

styling style of news card 
{} represents js {{}} js object 

to make constructor in class based component we use super() constructor

targer={_blank} opens a new tab 

constructrdidmount runs after render 

async function in its body can wait for some promises to resolve 
d-flex justify-content-between flex
navbar-dark bg-dark darekns navbar
btn-dark" darkens button 

pagrSize sets the number of articlea u want to see on a page 

key ="" tells to remount it 



formatting date objects
a="2023-04-12T10:00:00Z"
'2023-04-12T10:00:00Z'
d=new Date(a);
Wed Apr 12 2023 15:30:00 GMT+0530 (India Standard Time)
d.get
undefined
d.getDate
ƒ getDate() { [native code] }
d.getDate()
12
d.toGMT
undefined
d.toGMTString()
'Wed, 12 Apr 2023 10:00:00 GMT'
d.toUTCString()
'Wed, 12 Apr 2023 10:00:00 GMT' 

to set title 
use props in constructor 

problem of horizontal bar solved by removing container my-3 class 


in function based
useState(0) returns a tuple where the first parameter count is the current state of the counter and setCounter is the method that will allow us to update the counter's state.

since we wannt to keep  aur apikey private we'll take it from .env.local that is environment variable 


*/

import { click } from "@testing-library/user-event/dist/click"
import { Prev } from "react-bootstrap/esm/PageItem"

react hooks
features of class based components in function based components
it allows you to use state
hooks are functions which "hook into" react state and lifecycle features from function components 

commonly used react hooks
useState
useEffect
useContext
useRef  



buttton in js next and Prev      
  {/* <div className="container d-flex justify-content-between">
<button
  disabled={this.state.page <= 1}
  type="button"
  className="btn btn-dark"
  onClick={this.handlePrevClick}
>
  {" "}
  &larr; Previous
</button>
<button
  disabled={
    this.state.page + 1 >
    Math.ceil(this.state.totalResults / this.props.pageSize)
  }
  type="button"
  className="btn btn-dark"
  onClick={this.handleNextClick}
>
  Next &rarr;
</button>
</div> */}

handle next and prev click /* handlePrevClick = async () => {
    // console.log("previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc46b2505e334ec2b2752d07b164e924&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`; //fetches news from api through this url
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading: false
    // }); 
    this.setState({page: this.state.page-1});
    this.updateNews();
  };
  handleNextClick = async () => {
    console.log("next");
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc46b2505e334ec2b2752d07b164e924&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`; //fetches news from api through this url
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parseData = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parseData.articles,
    //     loading: false
    //   });
    // }
    this.setState({page: this.state.page+1}) ;
    this.updateNews();
  };*/ 
  38 vdo class based  

react coomponet lifecycle 
mount - birth 
update - growth 
unmount -death of component 

methods 
componentDidMount run after component output has been rendered to the DOM
componentDidUpdate updates the DOM in response to state or prop  changes
componentWillUNmount is called before before the compponent is unmounted or destroyed

 // async componentDidMount() {
  //   this.updateNews()
  // }