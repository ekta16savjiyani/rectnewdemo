const defaultState = {
  menuitems: [],
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_MENU_ITEMS_PENDING': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_MENU_ITEMS_FULFILLED': {
      return {
        ...state,
        menuitems: action.payload.data.menuitems,
        loading: false,
        errors: {}
      }
    }
    case 'DELETE_MENU_ITEMS_FULFILLED': {
      const _id = action.payload.data.menuid;
      return {
        ...state,
        menuitems: state.menuitems.filter(item => item.id !== _id)
      }
    }
    case 'DELETE_MENU_ITEMS_PENDING': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'ADD_MENU_ITEMS_FULFILLED': {
      return {
      ...state,
      menuitems: [...state.menuitems, action.payload.data],
        errors: {},
        loading: false
      }
    }
    case 'ADD_MENU_ITEMS_PENDING': {
      return {
        ...state,
        loading: true,
      }
    }
    default:
      return state;
  }
}
