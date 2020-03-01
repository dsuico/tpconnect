import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Search from './components/Pages/Search/Search';
import Container from '@material-ui/core/Container';
import Login from './components/Pages/Login/Login';
import {connect} from 'react-redux';
class App extends Component {
  state = {
    sideDrawerOpen: false,
    isLoggedIn: false,
    username: null
  };

  drawerToggleCLickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  componentDidMount() {
    if (localStorage.getItem('username') !== null) {
      this.setState({
        isLoggedIn: true,
        username: localStorage.getItem('username')
      });
    }
  }

  render() {
    let backdrop;
    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <BrowserRouter >
        <div style={{height: '100%'}}>
        <Switch>
          <Route
            path="/login"
            render={props => 
              this.state.isLoggedIn ? (
                <Redirect to={{ pathname: '/' }}  {...props} />
            ) : (
              <Login {...props}/>
              )}
          />
          <Route 
            path="/" render={props => 
              this.state.isLoggedIn ? ( 
                <main>
                  <Toolbar drawerClickHandler={this.drawerToggleCLickHandler}/>
                  <SideDrawer show={this.state.sideDrawerOpen}/>
                  {backdrop}
                  <Container maxWidth="lg">
                    <Search {...props}  /> 
                  </Container>
                </main>
                ) : (
                  <Redirect to={{ pathname: '/login' }} />
                )}
              />
        </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(App);
