import React, { Component } from 'react';
import Product from './product/Product';
import axios from 'axios';
class Products extends Component {

    constructor(){
        super();
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        console.log('The bet response is ',res.data);
        this.setState({
          posts : res.data
        })
        })
        .catch((err)=>{
          console.log('The error is ',err);
        });
        }

 
    render() {
        return (
            <div>
                <ul>
{
this.state.posts.map((post)=>{
    let x = post.title;
    return `${x}`;
})
}
                </ul>
            </div>
        )
    }


}

export default Products;