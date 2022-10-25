import React from 'react';
import {Product} from './components/Product'
import {products} from './data/products'
import {css} from '@emotion/css'

function App() {
  return (
    <div className={css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    `}>

      {products.map(product => <Product product={product} key={product.id} /> )}

      {/*  <Product product={products[0]} /> */}
      {/*  <Product product={products[1]} /> */}
    </div>
  )
}

export default App;
