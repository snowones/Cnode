import React,{Component} from "react";
import PublicCard from "../public_Card";
import  data from "./data";

class About extends Component{
    render(){
        return(<PublicCard
                data={data}
        />);
    }
}

export default About;  