import "./ProductCard.css"

export const ProductCard = ({ id, nome, preco }) => {
  return (
    <li className="product-card">
      
      {/* <ul> */}
        <span>ID: {id}</span>
        <span>ITEM: {nome}</span>
        <span>PREÇO: {preco}</span>
      {/* </ul> */}
    </li>
  );
};

