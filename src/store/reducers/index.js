
import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import reactReducer from './react-reduer';

const allReducers = {
  cartReducer,
  reactReducer,
  // shoppingCart: cartReducer,
  // reactReducer:reactReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;