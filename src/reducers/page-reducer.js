const defaultState = {
  page: [],
  editpage : [],
  pageEdit : 0,
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_PAGE_PENDING': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_PAGE_FULFILLED': {
      return {
        ...state,
        page: action.payload.data.data,
        pageEdit : 0,
        loading: false,
        errors: {}
      }
    }
    case 'DELETE_PAGE_FULFILLED': {
      const _id = action.payload.data.pageid;
      return {
        ...state,
        pageEdit : 0,
        page: state.page.filter(item => item.page_id !== _id)
      }
    }
    case 'DELETE_PAGE_PENDING': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'EDIT_PAGE_FULFILLED': {
       const _id = action.payload.data.page_id;
       
      return {
        ...state,
        pageEdit : 1,
        editpage: state.page.filter(item => item.page_id === _id)
      }
    }
    case 'EDIT_PAGE_PENDING': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'UPDATE_PAGE_FULFILLED': {
       const data = action.payload.data.data;
       return {
        ...state,
        page: state.page.map(item => item.page_id === data.page_id ? data : item),
        pageEdit : 0
        
      }
       
      
    }
    case 'UPDATE_PAGE_PENDING': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'ADD_PAGE_FULFILLED': {
      return {
      ...state,
      page: [...state.page, action.payload.data.data],
      pageEdit : 0,
        errors: {},
        loading: false
      }
    }
    case 'ADD_PAGE_PENDING': {
      return {
        ...state,
        loading: true,
      }
    }
    default:
      return state;
  }
}
