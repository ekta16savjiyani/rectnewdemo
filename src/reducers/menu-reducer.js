const defaultState = {
  menuitems: [],
  editmenu: [],
  isMenuEdit : 0,
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_MENU_ITEMS_PENDING': {
      return {
        ...state,
        isMenuEdit : 0,
        loading: true,
      }
    }
    case 'FETCH_MENU_ITEMS_FULFILLED': {
      return {
        ...state,
        menuitems: action.payload.data.menuitems,
        isMenuEdit : 0,
        loading: false,
        errors: {}
      }
    }
    case 'EDIT_MENU_FULFILLED': {
      const _id = action.payload.data.id;
      
     return {
       ...state,
       isMenuEdit : 1,
       editmenu: state.menuitems.filter(item => item.id === _id)
     }
   }
   case 'EDIT_MENU_PENDING': {
     return {
       ...state,
       loading: true,
     }
   }
    case 'DELETE_MENU_ITEMS_FULFILLED': {
      const _id = action.payload.data.menuid;
      return {
        ...state,
        isMenuEdit : 0,
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
      isMenuEdit : 0,
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
