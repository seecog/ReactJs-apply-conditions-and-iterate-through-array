import React,{Component} from 'react';
import Product from './Product';
class Products1 extends Component{

constructor(){
    super();
    this.state={
        product1 : {name : "Apple",cost:"400",brand : "Kasmiri"},
        product2 : {name : "Banana",cost:"100",brand : "Kasmiri"}
    }
}

render(){
    return (
        <div>
<Product info={this.state.product1}/>
<Product info={this.state.product2}/>
        </div>
    )
}

}

export default Products1;