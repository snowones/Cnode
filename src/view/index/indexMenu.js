import React,{Component} from "react";
import{Link} from "react-router-dom";
import {Menu} from "antd"
export default class IndexMenu extends Component{

    render(){
        return(
            <Menu 
            id={this.props.id}
            mode={this.props.mode}
            >
        <Menu.Item>
            <Link to={{
                pathname:'/index/all',
                id:'all'
            }}>全部</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={{
                pathname:'/index/good',
                id:'good'
            }}>精华</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={{
                pathname:'/index/ask',
                id:'ask'
            }}>问题</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={{
                pathname:'/index/share',
                id:'share'
            }}>分享</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={{
                pathname:'/index/job',
                id:'job'
            }}>招聘</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={{
                pathname:'/index/dev',
                id:'dev'
            }}>测试</Link>
        </Menu.Item>
    </Menu> 
        )
    }
}