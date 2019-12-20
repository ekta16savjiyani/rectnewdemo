import { client } from './';

const url = '/';

export function fetchMenu(){
  return dispatch => {
    dispatch({
      type: 'FETCH_MENU_ITEMS',
      payload: client.get(url+"get-menu.php")
    })
  }
}

export function editMenu(id){
  return dispatch => {
    dispatch({
      type: 'EDIT_MENU',
      payload: client.post(url+"edit-menu.php",{"id":id})
    })
  }
}


export function deleteMenu(menuid){
  return dispatch => {
    dispatch({
      type: 'DELETE_MENU_ITEMS',
      payload: client.post(url+"delete-menu-item.php",{"menu_id":menuid})
    })
  }
}

export function addMenu(menuitem){
  return dispatch => {
    dispatch({
      type: 'ADD_MENU_ITEMS',
      payload: client.post(url+"add-menu-item.php",{menuitem})
    })
  }
}
