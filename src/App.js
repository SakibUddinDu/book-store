import Home from './components/Home/Home';
import { Provider } from "react-redux";
import store from './Redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Home></Home>
    </div>
    </Provider>
  );
}

export default App;
