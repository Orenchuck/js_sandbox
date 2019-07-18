import React from 'react';
import ReactDOM from 'react-dom';
import pic from './picture.svg';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, Prompt} from 'react-router-dom';

// class ErrEmail extends React.Component {
//     render () {
//         return (
//             <div id='wrong2' style={{display: 'none'}}>
//                 Invalid email address
//             </div>
//         )
//     }
// }

function Wrong1 (props) {
    const input = document.getElementById ('inputEmail');
    input.style.border = '2px solid red';
    return (
        <div id='wrong1'>
            Invalid email address
        </div>
    )
}

function Wrong2 (props) {
    const input1 = document.getElementById ('inputEmail');
    const input2 = document.getElementById ('inputPass');
    input1.style.border = '2px solid red';
    input2.style.border = '2px solid red';
    return (
        <div id='wrong2'>
            Invalid email or password
        </div>
    )
}

function Ok () {

    return (
        <div>
                <div id='header' style={{
                    top: '10.7%'
                }}>YOUR<br/>ART<br/>MUSEUM</div>
                    <img src={`${pic}`}></img>
                <div id='back'>Welcome back, React</div>
                <Link to="/"><button id='app'>Go to App</button></Link>
        </div>
    )
}


class Museum extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            value1: '',
            value2: '',
            errEmail: false,
            errPass: false,
            itsOk: false,
            started: true,
            redirect: false
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.changePass = this.changePass.bind(this);
        this.buttonSubmit = this.buttonSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.click = this.click.bind(this);
       // this.isEmpty = this.isEmpty.bind(this);
   }

   changeEmail (event) {
       this.setState({value1: event.target.value});
   }

   changePass (event) {
       this.setState ({value2: event.target.value});
   }

   validate() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = this.state.value1;
    if(reg.test(address) == false) {
       return false;
    }
 }

//  isEmpty () {
//      if (this.state.value1 != false || this.state.value2 != false) {
//          this.setState ({started: false});
//      }
//  }

   buttonSubmit (event) {
     event.preventDefault();
       if (this.validate() === false) {
         return this.setState ({errEmail: true});
       }
       else if (this.state.value1 !== 'react@snowball.alevel.com' ||
        this.state.value2 !== 'YouSimplyTheBest2019') {
            return this.setState ({errPass: true});
        }
        else {
            return this.setState ({itsOk: true});
        }

   }

   click () {
       return this.setState({redirect: true});
       console.log(this.state.redirect);
   }

    render() {
        return (
            <div>
                {this.state.itsOk ? <Ok /> : (
                    <div>
                <div id='header'>YOUR<br/>ART<br/>MUSEUM</div>
                <div id='address'>151 3rd<br/>
                    San Francisco, CA 94103</div> 
                   <form>
                    <input
                        type="email"
                        className="login"
                        id='inputEmail'
                        placeholder="Email address"
                        value={this.state.value}
                        onChange={this.changeEmail} />
                    <input
                        type="password"
                        className="login"
                        id='inputPass'
                        placeholder="Password"
                        value={this.state.value}
                        onChange={this.changePass} />
                    <div id='forgotWrap'>
                    <a href="#" className="link"
                        id='forgot'>Forgot your password?</a>
                    </div>    
                    <button id='ok' className="ok" type="submit"
                    onClick = {this.buttonSubmit}
                    // disabled={this.state.started}
                    >
                        Log in
                    </button>
                    
                </form>
                        <Link to="/signup"><div className="link"
                        id='registration'>
                        Don’t have an account?
                    </div></Link>
                }
                {this.state.errEmail ? <Wrong1 /> : null}
                {this.state.errPass ? <Wrong2 /> : null}
                </div>
                )}
            </div>
        )
    }
}


class SignUp extends React.Component {
    constructor (props) {
        super (props);
        this.state = {redirect: false}
    }

    render () {
        return (
        <div>
                <div>
                <div style={{color: 'white', left: "45vw", fontSize: "36px",
                position: 'absolute', top: '20vh'}}>
                Sorry<br/>
                </div>
            <Link to="/login"><button className="ok">Back to Login</button></Link>
                </div>
        </div>
    )
    }
    
}

ReactDOM.render ((
<Router>

        <Switch>
            <Route path="/login" exact component={Museum}/>
            <Route path="/signup" exact component={SignUp}/>
            <Redirect from="/" to="/login"></Redirect>
            <Redirect to="/"></Redirect>
        </Switch>
        {/* <footer>
            <Link to="/signup">Home</Link>

        </footer> */}
    </Router>), document.getElementById('root'))

//react@snowball.alevel.com				YouSimplyTheBest2019