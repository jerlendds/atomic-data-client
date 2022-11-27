import logo from './logo.svg';
import './App.css';
import { StoreContext, Store } from "@tomic/react";
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './AppRoutes'

// The store contains all the data for
const store = new Store();

console.log(store);

function App() {
  return (
    <StoreContext.Provider value={store}>
     <BrowserRouter>
      <AppRoutes />
     </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
