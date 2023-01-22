import "./App.css";
import {ProductCard} from "./components/ProductCard/ProductCard"
import { productList } from "./productList";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Testando meus conhecimentos aqui:</h1>
      </div>

      <ul>
          <h2>Item do Menu</h2>
        {productList.map((product) => (
          <ProductCard id={product.id} nome={product.nome} preco={product.preco} />
        ))}
      </ul>
    </div>
  );
}

export default App;
