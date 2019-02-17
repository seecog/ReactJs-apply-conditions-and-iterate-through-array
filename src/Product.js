import React from 'react';

const Product = (props)=>{
    return (
<div>
<h2>{props.info.name}</h2>
<h3>Cost : {props.info.cost}</h3>
<p>
Brand : {props.info.brand}
</p>
</div>
    )
}

export default Product;