import React, { Component} from 'react';
import AddMenu from './AddMenu';
import EditMenu from './EditMenu';
import { connect } from 'react-redux';
import { fetchMenu, deleteMenu , editMenu } from '../actions/menu-actions';

class AllMenu extends Component {

  constructor(props){
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    
  }
  componentDidMount() {
    this.props.fetchMenu();
    
  }

  handleEdit(e,id) {
    this.props.editMenu(id);
    // this.setState({"editmenuname":this.props.editmenu[0].id});
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
      {this.props.isMenuEdit && 
      <EditMenu editmenu={this.props.editmenu} updateMenu = {this.props.updateMenu}/>
                }
      <div>
      <ul>
        {this.props.menuitems.map((menuitem) => 
          (<li key={menuitem.id}>{menuitem.menu_name}
          <button type="button" name="Edit" onClick={((e) => this.handleEdit(e, menuitem.id))}>Edit</button>
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
  console.log(state.menuStore);
  return {
      menuitems : state.menuStore.menuitems,
      isMenuEdit : state.menuStore.isMenuEdit,
      editmenu : state.menuStore.editmenu,
      errors: state.menuStore.errors
  }
}

export default connect(mapStateToProps, {fetchMenu,deleteMenu,editMenu})(AllMenu);
