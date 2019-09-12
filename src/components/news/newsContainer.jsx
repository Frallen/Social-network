import { connect } from "react-redux";
import News from "./news";

let mapStateToProps=(state)=>{
    return{
        News:state.News.NewsList
    }
}

const NewsContainer =connect(mapStateToProps)(News)

export default NewsContainer