export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return { ...state, products: action.payload }

    default:
      return state
  }
}
