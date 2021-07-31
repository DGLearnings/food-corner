import './App.css';

import Home from './pages/home-page/home.component';
import BranchLocationsPage from './pages/branch-location/branch-locations.component';
import FoodMenu from './components/food-menu/food-menu.component';
import CheckOutPage from './pages/checkout-page-component/checkout-page.component';

import Header from './components/header/header.component'
import { Provider } from 'react-redux';
import store from './redux/store'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App App-backgroundColor">
       <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/branches" component={BranchLocationsPage}/>
      <Route path="/foodmenu" component={FoodMenu}/>
      <Route path="/checkout" component ={CheckOutPage} />
    </div>
    </BrowserRouter> 
    </Provider>
   );
}

export default App;
