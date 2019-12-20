import { combineReducers } from 'redux';
import ContactReducer from './contact-reducer';
import MenuReducer from './menu-reducer';
import PageReducer from './page-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  contactStore: ContactReducer,
  menuStore: MenuReducer,
  pageStore: PageReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
