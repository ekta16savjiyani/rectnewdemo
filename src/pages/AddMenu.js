import React,{Component} from 'react';
import {connect} from 'react-redux';
import { addMenu } from '../actions/menu-actions';

class AddMenu extends Component {
    insertMenu = (e) => {
        e.preventDefault();
        const menu_item = this.menuname.value;
    const data={
      menu_item,
      editing:false

    }
    this.props.addMenu(data);
      this.menuname.value = '';
  }
    

    render(){
        return (
            <form onSubmit={this.insertMenu}>
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Menu Name</label>
                    <input type="text" name="menu_name" ref={(val) => this.menuname = val} className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary">Add Menu Item</button>
                </div>
            </div>
        </form>  
        );
    }
}
function mapStateToProps(state) {
    return {
        menuitems : state.menuStore.menuitems,
        errors: state.menuStore.errors
    }
  }
export default connect(mapStateToProps,{addMenu})(AddMenu);