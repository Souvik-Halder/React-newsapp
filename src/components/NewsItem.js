import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
     
    let  {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div className='my-3'>
          <div className="card">
      <img src= {imageUrl==null?"https://st1.bgr.in/wp-content/uploads/2022/02/GTA-V-PS5-XBox.jpg":imageUrl}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}..</p>
        <p className="card-text"><small >Author:- {author==null?"Unknown":author}</small></p>
        <p className="card-text"><small > Date:- {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} className="btn btn-dark">Read More</a>
      </div>
    </div>
      </div>
    )
  }
}

export default NewsItem
