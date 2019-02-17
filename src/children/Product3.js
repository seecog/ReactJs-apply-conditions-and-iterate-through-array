import React from 'react';

const Product3 = (props)=>{
return (
    <div>
<h2>{props.name}</h2>
<h3>Cost : {props.cost}</h3>
<p>
Description : {props.children}
</p>
    </div>
)
}

export default Product3;