import React,{Component} from 'react';
import CKEditor from "react-ckeditor-component";
import {connect} from 'react-redux';
import { fetchMenu } from '../actions/menu-actions';
import { addPage } from '../actions/page-actions';

class AddPage extends Component {

    constructor(props){
        super(props);
        this.updateContent = this.updateContent.bind(this);
    }
    componentDidMount() {
            //React.findDOMNode(this.refs.pagedetail).value = "";
        this.props.fetchMenu();
      }

      updateContent(newContent) {
        
        }
    insertPage = (e) => {
        e.preventDefault();
        const page_title = this.pagename.value;
        const page_detail = this.pagedetail.value;
        const menu_id = this.pagemenu.value;
    const data={
        page_title,
        page_detail,
      menu_id,
    }

    this.props.addPage(data);
   }
    

    render(){
        return(
            <form name="addform" onSubmit={this.insertPage}>
            <div className="form-row">
                <div className="form-group col-sm-12">
                    <label className="font-weight-bold">Page Title</label>
                    <input type="text" name="page_name" ref={(val) => this.pagename = val} className="form-control" placeholder="Name"/>
                </div>
                <br/>
                <div className="form-group col-sm-12">
                    <label className="font-weight-bold">Page Details</label>
                    <textarea ref={(val) => this.pagedetail = val}></textarea>
                </div>
                <div className="form-group col-sm-12">
                <label className="font-weight-bold">Menu Items</label>
                    <select required ref={(val) => this.pagemenu = val} data-menulist={this.props.menuitems}>
                    <option value="">Please Select</option>
                    {this.props.menuitems.map((menuitem) => 
                        (<option key={menuitem.id} value={menuitem.id}>{menuitem.menu_name}</option>)
                      )}
                    </select>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary">Add Page</button>
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

export default connect(mapStateToProps, {fetchMenu,addPage})(AddPage);