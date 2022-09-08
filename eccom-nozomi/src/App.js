import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
    </>
  );
}

export default App;