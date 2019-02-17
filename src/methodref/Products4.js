import React,{Component} from 'react';
import Product4 from './Product4';
class Products4 extends Component{


getName = (arg)=>{
    alert("Hi this is "+arg);
}

render(){
return (
    <div>
        <p>
<button onClick={this.getName}>Mohan</button>
<Product4 myclick={this.getName.bind(this,"Mohan")}/><br/>
<Product4 myclick={()=>{this.getName("Mohan")}}></Product4>
<Product4 myclick={this.getName.bind(this,"Sohan")}/>
            </p>


        </div>
)
}

}

export default Products4;