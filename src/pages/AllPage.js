import React, { Component } from 'react';
import AddPage from './AddPage';
import EditPage from './EditPage';
import {connect} from 'react-redux';
import { fetchPage,editPage,updatePage } from '../actions/page-actions';

class AllPage extends Component {

  componentDidMount(){
    this.props.fetchPage();
  }

  handleDelete = (e, page_id) => {
    this.props.deletePage(page_id);
  }
  handleEdit = (e, page_id) => {
    this.props.editPage(page_id);
  }
  render() {
    
      return (
        <div>
        <div>
        <AddPage/>
        </div>
        {this.props.pageEdit &&
        <div>
          <EditPage editpage={this.props.editpage} updatePage = {this.props.updatePage}></EditPage>
          </div>
      }
        <div>
          Page List
            {this.props.pages.map((page) => 
          (<li key={page.page_id}>{page.page_title}
          <button type="button" name="Edit" onClick={((e) => this.handleEdit(e, page.page_id))}>Edit</button>
          <button type="button" name="Delete" onClick={((e) => this.handleDelete(e, page.page_id))}>Delete</button>
          </li>)
        )}
        </div>
        </div>
        );
      
    
  }
  }

  const mapStateToProps = (state) => {
    // console.log(state);
    return {
        pages : state.pageStore.page,
        pageEdit : state.pageStore.pageEdit,
        editpage : state.pageStore.editpage,
        errors: state.pageStore.errors
    }
}
  
export default connect(mapStateToProps , {fetchPage,editPage,updatePage})(AllPage)