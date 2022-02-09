import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItem from './NewsItem'
export class News extends Component {
 static defaultProps={
   country:'in',
   pageSize:8,
   category:'general',
 }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
 capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props);
    console.log("Hello I am a Constructor from news componenet");
    this.state={
      articles:[],
      loading:false,
      page:1,
      totalResults:0
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
}
async upDateNews(props){
  this.props.setProgress(10);
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
  let data=await fetch(url);
  this.props.setProgress(20);
  let parseData=await data.json() ;
  this.props.setProgress(30);
 this.setState({
   articles:parseData.articles,
  totalResults:parseData.totalResults
})
this.props.setProgress(100);
}
async componentDidMount(){

this.upDateNews();
}//component did mount run after the render methode
handleNextClick=async()=>{

if(this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize))
  {

  }
  else{
this.setState({page:this.state.page +1});
this.upDateNews();
}
}
fetchMoreData =async()=>{
  this.setState({
    page:this.state.page+1
  });
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
  let data=await fetch(url);
  let parseData=await data.json() ;
 this.setState({articles:this.state.articles.concat(parseData.articles),
  totalResults:parseData.totalResults});
}
handlePrevClick=async()=>{

this.setState({page:this.state.page -1});
this.upDateNews();
}
  render() {
    return (
         <>
        <h2>NewsMonkey - Top headings</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4 className='align-center' >Loading...</h4>}
        >
          <div className="container">
      <div className="row">
  
      {this.state.articles.map((element)=>{
      return <div className="col-md-4"key={element.url}>
         <NewsItem title={element.title?element.title.slice(0,45):""}  description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
         </div>
        })}
         
        </div>
        </div>
        </InfiniteScroll>
        </>
    )
  }
}
//These comments lines are written first then we wrap all the work in a function
export default News
