import React, { Component } from 'react';
import MainFooter from "./view/main-footer";
import MainHeader from "./view/main-header";
import RouterIndex from "./router/index";
import  "./view/index.css";

class App extends React.Component {
  render() {
    return <div className="pageWrap">
          <MainHeader/>
          <main className="main">
              <RouterIndex/>
          </main>
           <MainFooter/> 
    </div>
  }
}

export default App;
