import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchMenu, updateMenu } from '../actions/menu-actions';

class EditMenu extends Component {

    componentDidMount() {
        //React.findDOMNode(this.refs.pagedetail).value = "";
  
  }

  constructor(props){
      super(props);
      console.log(this.props);
    this.state = {menu_name : this.props.editmenu[0].menu_name,id : this.props.editmenu[0].id};
  }

  handleTextChange = (e) => {
    this.setState({menu_name : e.target.value})
 }

  componentWillReceiveProps(nextState){
    if(nextState.editmenu[0].id != this.props.editmenu[0].id){
        this.setState({menu_name : nextState.editmenu[0].menu_name,id : nextState.editmenu[0].id})
    }
    
  }

  handleUpdate = (e) => {
    const menu_name = this.state.menu_name;
    const id = this.state.id;
    const data={
        id,
        menu_name
    }
    console.log(data);
    this.props.updateMenu(data);
  }
  
  

    render(){
        
        return(
            <div>
      <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Menu Name</label>
                    <input type="text" name="menu_name" ref={(val) => this.editmenuname = val} className="form-control" placeholder="Name" onChange={this.handleTextChange} value={this.state.menu_name}/>
                    
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary" onClick={((e) => this.handleUpdate())}>Edit Menu Item</button>
                </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps,{fetchMenu, updateMenu})(EditMenu);