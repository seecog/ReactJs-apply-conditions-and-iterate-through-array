import React from 'react';

const Doctor = (props)=>{
    return (
        <div>
<h3>{props.name}</h3>
<h4>Age : {props.age}</h4>
<p>
Salary : {props.sal}
</p>
        </div>
    )
}

export default Doctor;