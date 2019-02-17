import React,{Component} from 'react';

class Average extends Component{

constructor(){
    super();
    this.state={
        p : 0,
        c : 0,
        m : 0,
        h : 0,
        e : 0,
        avg : 0
    }
}

setPhysics =(event)=>{
    this.setState({
        p : event.target.value
    })
}

setChemistry =(event)=>{
    this.setState({
        c : event.target.value
    })
}


setMath =(event)=>{
    this.setState({
        m : event.target.value
    })
}

setHindi =(event)=>{
    this.setState({
        h : event.target.value
    })
}

setEnglish =(event)=>{
    this.setState({
        e : event.target.value
    })
}

getAverage = ()=>{
    this.setState({
        avg : (parseFloat(this.state.p)+parseFloat(this.state.c)+parseFloat(this.state.m)+parseFloat(this.state.h)+parseFloat(this.state.e))/5
    })
}


render(){

    var style = {
        backgroundColor : 'green',
        color : 'white',
        fontFace : 'georgia',
        padding :'8px'
    }

    return (
        <div>
<p>
Physics : <input onChange={this.setPhysics}/>
</p>
<p>
Chemistry : <input onChange={this.setChemistry}/>
</p>
<p>
Math : <input onChange={this.setMath}/>
</p>
<p>
Hindi : <input onChange={this.setHindi}/>
</p>
<p>
English : <input onChange={this.setEnglish}/>
</p>
<p>
The average is {this.state.avg}
</p>
<p>
<button style={style} onClick={this.getAverage}>Average</button>
</p>
        </div>
    )
}


}

export default Average;