import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartList from './CartList';
import {Data} from './DataFile' ;
function App() {

  return (
    <div className="App">
      <Navigation />
      <div>
      <CartList data={Data}/>
      </div>
    </div>
  );
}

export default App; 
