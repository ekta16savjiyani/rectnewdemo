import { client } from './';

const url = '/';

export function fetchPage(){
  return dispatch => {
    dispatch({
      type: 'FETCH_PAGE',
      payload: client.get(url+"pages.php")
    })
  }
}


export function deletePage(pageid){
  return dispatch => {
    dispatch({
      type: 'DELETE_PAGE',
      payload: client.post(url+"delete-page.php",{"page_id":pageid})
    })
  }
}

export function editPage(pageid){
  return dispatch => {
    dispatch({
      type: 'EDIT_PAGE',
      payload: client.post(url+"edit-page.php",{"page_id":pageid})
    })
  }
}

export function updatePage(page){
  return dispatch => {
    dispatch({
      type: 'UPDATE_PAGE',
      payload: client.post(url+"update-page.php",{page})
    })
  }
}
export function addPage(page){
  return dispatch => {
    dispatch({
      type: 'ADD_PAGE',
      payload: client.post(url+"add-page.php",{page})
    })
  }
}
