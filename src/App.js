import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
      <div className="container">
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}
    
      />
        <Navbar/>
      
        <Routes>
        <Route path="/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key={"general"} category="general" country="in"/>} />
        <Route path="/Business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key={"business"} category="business" country="in"/>} />
        <Route path="/Entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key={"entertainment"} category="entertainment" country="in"/>} />
        <Route path="/Health" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key={"health"} category="health" country="in"/>} />
        <Route path="/Science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key={"science"} category="science" country="in"/>} />
        <Route path="/Technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key={"technology"}category="technology" country="in"/>} />
        <Route path="/Sports" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key={"sports"} category="sports" country="in"/>} />
        <Route path="/General" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key={"general"}category="general" country="in"/>} />
      </Routes>
       </div>
       </Router>
    )
  }
}

