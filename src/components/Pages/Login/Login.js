import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import './Login.css';
import airplane from '../../../assets/images/airplane.svg';
import logo from '../../../assets/images/adminLogo.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {signIn} from '../../../store/actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleLogin = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
    window.location.replace('/search')
  }
  render() {
    return (
      <main className="main">
        <div className="fill">
          <img src={airplane} height="100%"></img>
        </div>
        <Container maxWidth="md" style={{padding:"0px 10em"}}>
          <img src={logo} alt="logo" className="logo"></img>
          <span className="sign-in-text">Sign In</span>
          <form noValidate autoComplete="off">
            <div className="login-form">
              <TextField id="filled-basic" name="username" label="Username" variant="filled" fullWidth onChange={this.handleChange}/>
              <TextField id="filled-basic" name="password" label="Password" variant="filled" fullWidth onChange={this.handleChange}/>
            </div>
          </form>
          <span className="forgot-psw">Forgot Password?</span>
          <Button variant="contained" color="secondary" type="submit" onClick={this.handleLogin}>
            Submit
          </Button>
        </Container>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (auth) => dispatch(signIn(auth))
  }
}
export default connect(null,mapDispatchToProps)(Login);
