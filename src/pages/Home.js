import React, { Component} from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import { getMenuPage } from '../actions/menu-actions';

class Home extends Component {

  componentDidMount(){
    this.props.getMenuPage();
  }

  render() {
    return (
      <div>
      <div>
        This is homepage
        <br/>
        <a href="/admin/menu">Go to dashboard</a>
      </div>
      <div>
      {this.props.menupage.map((menuitem) => 
          (<Collapsible trigger={menuitem.menu_name}>
            <a>{menuitem.page_title}</a>
            </Collapsible>
          )
        )}
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("state.menuStore.menupage");
  console.log(state.menuStore.menupage);
  return {
    menupage : state.menuStore.menupage,
  }
}


export default connect(mapStateToProps, {getMenuPage})(Home);
