import React,{Component} from "react";
import {Row,Col} from "antd";
import IndexMenu from "./indexMenu";
import List from  "./List";

// 测试
// let arr = [];
// for(let i = 0;i<100;i++){
//     arr.push(<li>这是第{i}个li</li>)
// }


class Index extends Component{
    
    render(){
        return (
            <Row className="wrap">
            <Col md={6} xs={0} className="indexSider">
              <IndexMenu
                    id="indexMenu"
                    mode="vertical"
              />
            </Col>
            <Col md={0} xs={24}>
            <IndexMenu
                    id="indexXsMenu"
                    mode="horizontal"
              />
            </Col>
            <Col md={18}
                 xs={24}
                 className="indexList"
            >
            <list/>>
            </Col>
            </Row>
        )
    }
}

export default Index;