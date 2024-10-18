import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    console.log(checked);
    setChecked((prev) => !prev);
  }

  // 컴포넌트가 보여질 때 딱 한 번만 네트워크 통신을 요청하고, 다시는 요청하지 않도록 해야함
  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log(checked)
        console.log('데이터를 네트워크에서 받아옴');
        setProducts(data);
    })
    return () => {
      console.log('깨끗하게 청소하는 일들을 합니다.')
    }
  }, []);
  return (
    <>
    <input id='checkbox' type="checkbox" value={checked} onChange={handleChange} />
    <label htmlFor="checkbox">Show only sale products</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul> 
    </>
  );
}
