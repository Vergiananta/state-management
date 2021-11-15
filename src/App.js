import logo from './logo.svg';
import './App.css';
import Product from './component/product'
import Counter from './component/counter';
import { Provider } from 'react-redux';
import CounterReducer from './component/reducers/counterReducer';
import { Row } from 'reactstrap';
import { createStore } from 'redux';

function App() {
  const counterStore = createStore(CounterReducer)

  return (
      <Provider store={counterStore}>
        <Row>
          <Product />
        </Row>
          <Row>
            <Counter />
          </Row>
      </Provider>
  );
}

export default App;
