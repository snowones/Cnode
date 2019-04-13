import React,{Component} from "react";
import {List,Avatar} from "antd";
import {Link} from "react-router-dom";
import TxtTag from "../txtTag";
import data from "./data";

//使用redux
import {connect} from "react-redux";

//引入ajax
import axios from "axios";



 class IndexList extends Component{

    constructor(arg){
      super(arg);
      this.state = {
          page:1
      }
      this.getData(this.props.tab);       
    }
    
    //数据分类    更新数据   但是这个方法执行了两次
    // componentWillReceiveProps(nextPorps){
    //     console.log(nextPorps);
    //     if(this.props.tab !== nextPorps.tab){
    //         this.getData(nextPorps.tab);
    //     }
    // }

    shouldComponentUpdate(nextPorps,nextState){
        if(this.props.tab !== nextPorps.tab){
            this.getData(nextPorps.tab);
                return false;
        }
        return true;
    }

    getData(tab){
        this.props.dispatch((dispatch)=>{
            //在请求数据之前 先发送一个loading状态
            dispatch({
                type:"LIST_UPDATA"
            })
                axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=15`)
                .then((res)=>{
                    console.log(res.data);
                    dispatch({
                        type:"LIST_UPDATA_SUCC",
                        data:res.data
                    })
                })
                .catch((error)=>{
                    console.log(error);
                    dispatch({
                        type:"LIST_UPDATA_REEOR",
                        data:error
                    })
                })
        })
    }

    render(){
        //主题首页接口 接收get参数  page 页数 tab 主题分类  limit 每一页主题数量 
        //loading,data,tab,page  增加分页  
        console.log(this.props);
        let {loading,data} = this.props;
        return (<List
                loading={loading}
                dataSource={data}
                renderItem = {item=>(<List.Item
                    actions={["回复："+item.reply_count ,
                              "访问："+item.visit_count]}
                    key={item.id}
                >
                    <List.Item.Meta
                    avatar={<Avatar  src={item.author.avatar_url}/>}
                    title={<div>
                          <TxtTag data={item}/>
                          <Link to={"/details/"+item.id}>{item.title}</Link>
                          </div>}
                    description={<p><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                    发表于：{item.create_at.split("T")[0]}
                    </p>}
                    />
                </List.Item>)}
                >
                </List>);
    }
}

export default connect(state=>state.list)(IndexList)