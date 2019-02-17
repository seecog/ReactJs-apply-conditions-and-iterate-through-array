import React,{Component} from 'react';

class Addition extends Component{

    constructor(){
        super();
        this.state = {
            a : 0,
            b : 0,
            c : 0
        }
    }

    changeFirst = (event)=>{
        this.setState({
            a : event.target.value
        })
    }

    changeSecond = (event)=>{
        this.setState({
            b : event.target.value
        })
    }

    sumNumbers = ()=>{
this.setState({
    c : parseInt(this.state.a)+parseInt(this.state.b)
})
    }

    render(){

        var style = {
            color : 'red',
            fontFace : 'georgia',
            padding : '20px'
        }

        return (
            <div>
First Number : <input onChange={this.changeFirst} value={this.state.a} /><br/>
Second Number : <input onChange={this.changeSecond}  value={this.state.b} />
<p>
The sum of {this.state.a} and {this.state.b} is {this.state.c}
</p>
<p>
<button style={style} onClick={this.sumNumbers}>Add Numbers</button>
    </p>
            </div>
        )
    }

}

export default Addition;