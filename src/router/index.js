import React, {Component} from "react";
import {Switch,Route, Redirect} from "react-router-dom";

import Index from "../view/index/index";
import Book from "../view/book/index";
import About from "../view/about/index";
import User from "../view/user/index";
import Details from "../view/details/index";

//Redirect  重定向     Switch的作用跟普通switch差不多  在路由中当匹配到一个路径时，剩下的就不匹配了
                    //首页里还有子路由 怎么跑起来
                     //  path='/'当访问根目录时  exact严格匹配  render重定向 到首页index

class RouterIndex extends Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(
                    <Redirect to="/index/all" />
                )} />
                <Route path="/index/:id" component={Index}/>
                <Route path="/book" component={Book}/> 
                <Route path="/about" component={About}/>
                <Route path="/user/:id" component={User}/>
                <Route path="/details/:id" component={Details}/>
            </Switch>
        );
    }
}
export default RouterIndex;