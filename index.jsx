import React from 'react';
import ReactDOM from 'react-dom';
import './src/style.css';

class Inp extends React.Component {
    constructor (props) {
        super (props);
            this.state = {
                name: false,
            }
this.changeName = this.changeName.bind(this);
this.NameValid = this.NameValid.bind(this);
        }
                  
    changeName (event) {
        this.setState({name: event.target.value});
    }

    NameValid () {
        let name = this.state.name;
        if (name.length >2 ) {
            this.setState({name: true});
            document.getElementById('inp1').style.border = '2px solid green';
        }
    }



    render () {
         return (
        <div>
            <label>
                <input type='text' id='inp1' onChange={this.changeName}></input>
            </label>
        </div>
    )
    }
}

class Inp2 extends React.Component {
    constructor (props) {
        super (props);
            this.state = {
                username: false
            }
            this.changeUserName = this.changeUserName.bind(this);
this.NameValid = this.NameValid.bind(this);
        }

                       
    changeUserName (event) {
        this.setState({username: event.target.value});
    }

    NameValid () {
        let name = this.state.username;
        if (name.length > 2) {
            this.setState({name: true});
            document.getElementById('inp2').style.border = '2px solid green';
        }
    }



    render () {
         return (
        <div>
            <label>
                <input type='text' id='inp1' onChange={this.changeUserName}></input>
            </label>
        </div>
    )
    }
}


class Registration extends React.Component {
constructor (props) {
    super (props);
    this.state = {
        value1: '',
        value2: '',
        value3: '',
        next: true
    }

this.validEmiil = this.validEmiil.bind(this);
this.changeEmail = this.changeEmail.bind(this);
this.changePass = this.changePass.bind(this);
this.changePassAgain = this.changePassAgain.bind(this);
this.onClick = this.onClick.bind(this);
}

validEmiil () {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = this.state.value1;
    if(reg.test(address) == false) {
       return false;
    }
}

changeEmail (event) {
    this.setState({value1: event.target.value});
}

changePass (event) {
    this.setState ({value2: event.target.value});
    let pass = this.state.value2;
if (pass.length < 6) {
    console.log('you need more symbols');
}
}

changePassAgain (event) {
    this.setState ({value3: event.target.value});

}

onClick () {
    let pass2 = this.state.value3;
    let pass1 = this.state.value2;
    if( pass2 === pass1) {
        return this.setState({next: false});
    }
}
 

render () {
    return (
        <div>
            {this.state.next ? (
                <div>
                     <div>
                Welcome
            </div>
            <div>
            Create your account to get started. After that,
you can share books and make friends.
            </div>
            <div>
                EMAIL
            </div>
            <div>
                <label>
                    <input type='email' onChange={this.changeEmail} value={this.state.value1}></input>
                </label>
            </div>
            <div>
                PASSWORD
            </div>
            <div>
                <label>
                    <input type='password' onChange={this.changePass} value={this.state.value2}></input>
                </label>
            </div>
            <div>
            TYPE PASSWORD AGAIN
            </div>
            <div>
                <label>
                    <input type='password' onChange={this.changePassAgain} value={this.state.value3}></input>
                </label>
            </div>
            <button onClick ={this.onClick}>SIGN UP</button>
            <div>
            Already have an account? <a href='#'>Login</a>
            </div>
            </div>): null}
           
        </div>
    )
}
}



class Welcome extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            //name: false,
            username: false,
            welcome: true
        }
        this.onClick = this.onClick.bind(this);
    }

onClick () {
    this.setState({welcome: false}); 
    
            fetch ('https://authserver.worldthirteen.now.sh/check_username?username=something',{method: 'GET'})
            .then(res => res.json())
            .then(res => {
                if( res.status == 'OK'){
                    this.setState = {username: true};
                    //console.log('+');
                }
                else {
                    this.setState = {username: false};
                    //console.log('-');
                }
            })
            .catch((error) =>this.setState({error}));
  
}

    render() {
        return (
            <div>
                {this.state.welcome ? (<div>
                <div className='welcome'>
                Welcome
                </div>
                <div id='text'>
                Create your account to get started. After that,
                you can share books and make friends.
                </div>
                <div>
                    Name
                </div>
                <Inp />
                <div>
                    Username
                </div>
                <Inp2 />
                <div>
                    Country
                </div>
                <div>
                    <label>
                        <input type='text'></input>
                    </label>
                </div>
                <div>
                    Age
                </div>
                <div>
                    <label>
                        <input type='number'></input>
                    </label>
                </div>
                <button id='next' onClick={this.onClick}>Next Step</button>
    
            </div>) : <Registration />}
            </div>
        )
    }
    
}

class Maket extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            welcome: false,

        }
        this.toPage1 = this.toPage1.bind(this);
   }

   toPage1 () {
       const button = document.getElementById('start');
       button.style.display = 'none';
       return this.setState({welcome:true});
   }

    render () {
        return (
        <div>
            <button id='start' onClick={this.toPage1}></button>
            {this.state.welcome ? <Welcome /> : null}
           
        </div>
        )
        
    }
}

ReactDOM.render((
    <Maket />
)
, document.getElementById('root'));