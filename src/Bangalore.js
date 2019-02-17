import React,{Component} from 'react';

class Bangalore extends Component{

constructor(){
    super();
    this.state = {
        name : "Bangalore"
    }
    
}



changeName(){
 
    this.setState({
        name : "Bangaluru"
    })
}

render(){
    return (
<div>
<button onClick={()=>this.changeName()}>Change Now</button><hr/>
The name is {this.state.name}

</div>
    )
}


}

export default Bangalore;