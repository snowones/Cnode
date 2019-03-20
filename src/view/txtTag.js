import React,{Component} from "react";
import {Tag} from "antd";

const tab ={
    top: {
        color:"magenta",
        txt:"置顶"
    },
    good:{
        color:"geekblue",
        txt:"精华"
    },
    job:{
        color:"cyan",
        txt:"招聘"
    },
    share:{
        color:"purple",
        txt:"分享"
    },
    ask:{
        color:"green",
        txt:"问答"
    },
    dev:{
        color:"lime",
        txt:"测试"
    }
};
function getTab(data){
    //  如果data.top 是 true 返回 top  否则继续向下走 如果data.good 是 true 返回 good 否则继续向下走。。。。
    return (
    //  条件运算符 表达式1？表达式2：表达式3  1true 返回表达式2 否则 返回表达式3  表达式3还是一个条件运算符 继续计算
        data.top?
        "top" :
        data.good?
        "good":data.tab

    )
}
export default  class TxtTag extends Component{
    render(){
        let nowTab = tab[getTab(this.props.data)]
        return (<Tag color={nowTab.color}>{nowTab.txt}</Tag>)
    }
}