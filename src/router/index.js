import React,{Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";

import Index from "../view/index/index";
import Book from "../view/book/index";
import About from "../view/about/index";
import Details from "../view/details/index";
import User from "../view/user/index";

//Redirect  重定向     Switch的作用跟普通switch差不多  在路由中当匹配到一个路径时，剩下的就不匹配了
//首页里还有子路由 怎么跑起来
 
class RouterIndex extends React.Component{
    render(){
        return(
           //  path='/'当访问根目录时  exact严格匹配  render重定向 到首页index
                <Switch>
                    <Route path='/' exact render = {()=>(
                        <Redirect to="/index"/>
                    )} />
                    <Route path="/index" Component={Index}/>
                    <Route path="/book" Component={Book}/>
                    <Route path="/about" Component={About}/>
                    <Route path="/details" Component={Details}/>
                    <Route path="/user" Component={User}/>
                </Switch>      
        );
    }
}

export default RouterIndex;