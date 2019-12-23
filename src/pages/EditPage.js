import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchMenu, updatePage } from '../actions/menu-actions';

class EditPage extends Component {

    componentDidMount() {
        //React.findDOMNode(this.refs.pagedetail).value = "";
    this.props.fetchMenu();
  }

  constructor(props){
      super(props);
      console.log(this.props);
    this.state = {pagetitle : this.props.editpage[0].page_title,pagedetail : this.props.editpage[0].page_detail,menu_id : this.props.editpage[0].menu_id,page_id : this.props.editpage[0].page_id};
  }

  componentWillReceiveProps(nextState){
    if(nextState.editpage[0].page_id != this.props.editpage[0].page_id){
        this.setState({pagetitle : nextState.editpage[0].page_title,pagedetail : nextState.editpage[0].page_detail,menu_id : nextState.editpage[0].menu_id,page_id : nextState.editpage[0].page_id})
    }
    
  }
  handleTextChange = (e) => {
     this.setState({pagetitle : e.target.value})
  }
  handleTextAreaChange = (e) => {
     this.setState({pagedetail : e.target.value})
  }
  handleMenuChange = (e) => {
     this.setState({menu_id : e.target.value})
  }
  
  editPage = (e) => {
    e.preventDefault();
    
    const page_title = this.state.pagetitle;
    const page_detail = this.state.pagedetail;
    const menu_id = this.state.menu_id;
    const page_id = this.state.page_id;
            const data={
                page_title,
                page_detail,
            menu_id,
            page_id
            }
this.props.updatePage(data);
  }

    render(){
        
        return(
            <form name="editform" onSubmit={this.editPage}>
            <div className="form-row">
                <div className="form-group col-sm-12">
                    <label className="font-weight-bold">Page Title</label>
                    <input type="text" name="pagetitle" className="form-control" placeholder="Name" onChange={this.handleTextChange} value={this.state.pagetitle} />
                </div>
                <br/>
                <div className="form-group col-sm-12">
                    <label className="font-weight-bold">Page Details</label>
                    <textarea ref={(val) => this.editpagedetail = val} value={this.state.pagedetail} onChange={this.handleTextAreaChange}></textarea>
                </div>
                <div className="form-group col-sm-12">
                <label className="font-weight-bold">Menu Items</label>
                    <select required ref={(val) => this.editpagemenu = val} value={this.state.menu_id} onChange={this.handleMenuChange}>
                    <option value="">Please Select</option>
                    {this.props.menuitems.map((menuitem) => 
                    
                        (<option key={menuitem.id} value={menuitem.id}>{menuitem.menu_name}</option>)
                      )}
                    </select>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary" >Edit Page</button>
                </div>
            </div>
        </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuitems : state.menuStore.menuitems,
        errors: state.menuStore.errors
    }
}

export default connect(mapStateToProps,{fetchMenu, updatePage})(EditPage);