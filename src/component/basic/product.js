import React from 'react'

// Mapping compoent practice
// https://scrimba.com/p/p7P5Hd/c6b6Lfm
/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

function Product(props) {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
    </div>
  )
}

export default Product

// App.js
// const productComponent = ProductsData.map(item => <Product key={item.id} name={item.name} product={item} />)
// return (
//   <div>
//     {productComponent}
//   </div>
// }