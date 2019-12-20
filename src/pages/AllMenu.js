import React, { Component} from 'react';
import AddMenu from './AddMenu';
import { connect } from 'react-redux';
import { fetchMenu, deleteMenu } from '../actions/menu-actions';

class AllMenu extends Component {

  componentDidMount() {
    this.props.fetchMenu();
  }

  handleDelete = (e,data) => {
    this.props.deleteMenu(data);
  }

  render() {
    return (
      <div>
      <div>
        <AddMenu/>
      </div>
      <div>
      <ul>
        {this.props.menuitems.map((menuitem) => 
          (<li key={menuitem.id}>{menuitem.menu_name}
          <button type="button" name="Edit">Edit</button>
          <button type="button" name="Delete" onClick={((e) => this.handleDelete(e, menuitem.id))} key={menuitem.id} className={menuitem.id}>Delete</button>
          </li>)
        )}
      </ul>
      </div>
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      menuitems : state.menuStore.menuitems,
      errors: state.menuStore.errors
  }
}

export default connect(mapStateToProps, {fetchMenu,deleteMenu})(AllMenu);
