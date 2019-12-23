import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './pages/Home';
import AllMenu from './pages/AllMenu';
import AllPage from './pages/AllPage';


class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>
          <NavLink className="item" activeClassName="" exact to="/admin/menu">Menu</NavLink>
          <NavLink className="item" activeClassName="" exact to="/admin/page">Page</NavLink>
          
        </div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/admin/menu" component={AllMenu}/>
        <Route exact path="/admin/page" component={AllPage}/>
        
      </Container>
    );
  }
}

export default App;
