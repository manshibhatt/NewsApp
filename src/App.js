
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//rcc class based component

import React, {Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"; 
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App=()=> { 
  // c='John'; //class variable
  //state is an object
  const pageSize=6; 
  const apiKey="bc46b2505e334ec2b2752d07b164e924";
  // state={
  //   progress:0
  // }
  const[progress,setProgress]=useState(0)
  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
    return (
      <div>
        <Router>
          {/* Hello my first class based component of {c} */}
        <LoadingBar
        color='#f11946'
        progress={progress} 
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Navbar/>
        {/* <News pageSize={5} country="in" category="sports"/> */}
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>} /> 
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} /> 
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>} /> 
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>} /> 
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>} /> 
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>} /> 
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>} /> 
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>} /> 
        </Routes>
        </Router>
      </div>
    )
}
export default App
