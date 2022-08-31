import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './App.css';

const App = () => {
  return (
    <div>
      <>
        <NavBar />
        <hr />
        <ItemListContainer articulo="Iphone XS" precio="USD550" />
        <hr />
        <ItemListContainer articulo="Iphone XS MAX" precio="USD750" />
        <hr />
      </>
    </div>
  );
}

export default App;