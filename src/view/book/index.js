import React,{Component} from "react";
import PublicCard from "../public_Card";
import  data from "./data";


class Book extends Component{
    render(){
        return(<PublicCard
                data={data}
        />);
    }
}

export default Book;