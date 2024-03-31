import React from 'react';

const ProductList = () => {
    const products = [
        { id: 1, isFruit: true,name: 'Apple' },
        { id: 2, isFruit: false,name: 'Onion' },
        { id: 3, isFruit:true, name: 'Cherry' }
    ];

    const listItems = products.map((product) =>
    <li key={product.id}
        style={{
            color: product.isFruit ? 'green' : 'red'
        }}> {product.name} </li>
    );

  return (
    <ul>
        {listItems}
    </ul>
  );
};

export default ProductList;