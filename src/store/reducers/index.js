
import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import reactReducer from './react-reduer';
import loginToken from './login';

const allReducers = {
  cartReducer,
  reactReducer,
  loginToken
  // shoppingCart: cartReducer,
  // reactReducer:reactReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;