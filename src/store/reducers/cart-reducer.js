import  { ADD_TO_CART }  from '../actions/cart-action';
//  把 actions 外部引入 (可以多个）

const initialState = {
  color:'red',
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}

export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        color:action.payload.product
        // cart: [...state.cart, action.payload] [...a,b]数组连接 深拷贝
      }
    }

    default:
      return state;
  }
}