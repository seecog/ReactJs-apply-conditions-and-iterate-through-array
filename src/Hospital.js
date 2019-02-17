import React,{Component} from 'react';
import Doctor from './Doctor';
class Hospital extends Component{

render(){

    return (
        <div>
<h2>This is hospital example</h2>
<Doctor name="Mohan" age="21" sal="200"/><br/>
<Doctor name="Sohan" age="22" sal="100"/>
        </div>
    )

}

}

export default Hospital;