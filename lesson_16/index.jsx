import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import button from '/src/3.svg';
import book from '/src/2.svg';
import light from '/src/4.svg';
import ok from '/src/5.svg';
import no1 from '/src/6.svg';

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
       document.getElementById('first').style.display = 'none';
       return this.setState({welcome:true});
   }

    render () {
        return (
            <div>
        <div id='first'>
            <div id='orange'></div>
            <div id='blue'></div>
            <div id='ellipse'>
            <img id='book' src={`${book}`}></img>
            </div>
            <div id='read'>Read Books</div>
            <div id='create'>Create your account to get started. After that,
you can share books and make friends.</div>
            <button id='start' onClick={this.toPage1}>
            <img src={`${button}`}></img>
            </button>
            <div id='lightblue'></div>
            </div>
            {this.state.welcome ? <Welcome /> : null}
           
        </div>
        )
        
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            //name: false,
            username: '',
            welcome: true,
            country: '',
            age: 0
        }
        this.onClick = this.onClick.bind(this);
        //this.checkUN = this.checkUN.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.NameValid = this.NameValid.bind(this);
    }
// checkUN (event) {
//     this.setState({username: event.target.value});
//     this.name = this.state.username;
//     console.log(this.name);
// }

changeUserName (event) {
    this.setState({username: event.target.value});
    this.name = this.state.username;
    console.log(this.name);
    this.NameValid();
}

NameValid () {
    let name = this.state.username;
    if (name.length > 2) {
        document.getElementById('inp2').style.border = '2px solid green';
    }
    else if (name.length >0 && name.length <2) {
        document.getElementById('inp2').style.border = '2px solid red';

    }
    else {
        document.getElementById('inp2').style.border = '2px solid grey';
    }
}


onClick () {
   // this.setState({welcome: false}); 
   console.log(this.name);
    
            fetch (`https://authserver.worldthirteen.now.sh/check_username?username=${this.name}`,{method: 'GET'})
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if( res.status == 'OK'){
                    this.setState({welcome: false});
                    //console.log('+');
                }
                else {
                    this.setState({welcome: true});
                    document.getElementById('inp2').style.border = '2px solid red';
                    //console.log('-');
                }
            })
            .catch((error) =>this.setState({error}));
  
}

    render() {
        return (
            <div>
                {this.state.welcome ? (<div>
                    <div className='blue2'></div>
                    <div className='orange2'>
                    <img src={`${light}`}></img>
                    </div>
                <div className='welcome'>
                Welcome
                </div>
                <div className='text'>
                Create your account to get started. After that,
                you can share books and make friends.
                </div>
                <div id='welName'>
                    Name
                </div>
                <div className='ball'></div>
                <Inp />
                <div id='welUN'>
                    Username
                </div>
                <div>
                    <label>
                        <input type='text' id='inp2' 
                        onChange={this.changeUserName}></input>
                    </label>
                </div>
                <div id='country'>
                    Country
                </div>
                <div>
                    <label>
                        <input id='countInp'
                        type='text' value={this.setState.country}></input>
                    </label>
                </div>
                <div id='age'>
                    Age
                </div>
                <div>
                    <label>
                        <input id='ageInp'
                        type='number' value={this.setState.age}></input>
                    </label>
                </div>
                <button className='next' onClick={this.onClick}>Next Step</button>
                <div className='already'>
                    Already have an account? <a href='#'>Login</a>
                </div>
    
            </div>) : <Registration />}
            </div>
        )
    }
    
}

class Inp extends React.Component {
    constructor (props) {
        super (props);
            this.state = {
                name: false,
                nameValue: ''
            }
this.changeName = this.changeName.bind(this);
this.NameValid = this.NameValid.bind(this);
        }
                  
    changeName (event) {
        this.setState({nameValue: event.target.value});
        this.NameValid();
    }

    NameValid () {
        let name = this.state.nameValue;
        if (name.length >2 ) {
            this.setState({name: true});
            document.getElementById('inp1').style.border = '2px solid green';
        }
        else if (name.length >0 && name.length <2) {
            this.setState({name: false});
            document.getElementById('inp1').style.border = '2px solid red';

        }
        else {
            document.getElementById('inp1').style.border = '2px solid grey';
        }
    }



    render () {
         return (
        <div>
            <label>
                <input type='text' id='inp1' 
                value={this.setState.nameValue}
                onChange={this.changeName}></input>
            </label>
        </div>
    )
    }
}


class Registration extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            reg: true,
            value1: '',
            value2: '',
            value3: '',
            next: false,
            error: false
            
        }
    
    this.validEmiil = this.validEmiil.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.changePassAgain = this.changePassAgain.bind(this);
    this.onClick = this.onClick.bind(this);
    this.validPass = this.validPass.bind(this);
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
        console.log (pass);
    if (pass.length <= 6) {
        document.getElementById('pass').style.border = '2px solid red';
    } else {
        document.getElementById('pass').style.border = '2px solid green';
    }
    }
    
    changePassAgain (event) {
        this.setState ({value3: event.target.value});
    }

    validPass () {
        //  let pass2 = this.state.value3;
        // let pass1 = this.state.value2;
        // console.log (pass1 + ' '+ pass2);
        // if (pass2 != pass1) {
        //     document.getElementById('pass').style.border = '2px solid red';
        //     document.getElementById('passAgain').style.border = '2px solid red';
        //     this.setState({next: true});
        //     }
        // else {
        //     document.getElementById('pass').style.border = '2px solid green';
        //     document.getElementById('passAgain').style.border = '2px solid green';
        //     this.setState({next: false});
        // }  
    }
    
    onClick () {
        const check = this.validEmiil();
        if (check == false) {
            document.getElementById('email').style.border = '2px solid red';
        }
        else {
            this.setState({reg: false})
        }

        this.validPass ();

        const welc = new Welcome();
        const name = new Inp();

        console.log (`${name.nameValue} ${welc.state.username} ${this.state.value1}`);


        fetch ('https://authserver.worldthirteen.now.sh/register', {
            method: 'POST',
            body: JSON.stringify({name: name.state.nameValue, 
                username: welc.state.username, 
                email: this.state.value1, 
                password: this.state.value2, 
                country: welc.state.country, 
                age: welc.state.age})
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res.error) {
                this.setState ({error: true});
            }
            else {
                this.setState ({error: false});
            }
            })       
        .catch((error) =>this.setState({error}));

    }
     
    
    render () {
        return (
            <div>
                {this.state.reg ? (
                    
                    <div>
                    <div className='blue2'></div>
                    <div className='orange2'>
                    <img src={`${light}`}></img>
                    </div>
                         <div className='welcome'>
                    Welcome
                </div>
                <div className='text'>
                Create your account to get started. After that,
    you can share books and make friends.
                </div>
                <div id='emailText'>
                    EMAIL
                </div>
                <div>
                    <label>
                        <input id='email' type='email' 
                        value={this.setState.value1}
                        onChange={this.changeEmail}>
                        </input>
                    </label>
                </div>
                <div id='passw'>
                    PASSWORD
                </div>
                <div>
                    <label>
                        <input id='pass' type='password' 
                        value={this.setState.value2}
                        onChange={this.changePass}>
                        </input>
                    </label>
                </div>
                <div id='passAg'>
                TYPE PASSWORD AGAIN
                </div>
                <div>
                    <label>
                        <input id='passAgain' type='password' 
                        value={this.setState.value3}
                        onChange={this.changePassAgain}>
                        </input>
                    </label>
                </div>
                <button className='next'
                disabled = {this.state.next} 
                onClick ={this.onClick}>SIGN UP</button>
                <div className='already'>
                Already have an account? <a href='#'>Login</a>
                </div>
                </div>): <Loading />}
               
            </div>
        )
    }
    }

class Loading extends React.Component {
    render () {
        return (
            <div id='load'>
                {window.onload ? (
                    <div>
                        We are signing you up
                    </div>
                ) : <Last />}
            </div>
        )
    }
}

class Last extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            last: true
        }
        this.whatPage = this.whatPage.bind(this);
    }

whatPage () {
    const ask = new Registration();
    if(ask.state.error) {
        this.setState ({last: false});
    } else {
        this.setState ({last: true});
    }
}    

    render () {
        return (
            <div>
                {/* {this.whatPage} */}
                {this.state.last ? (
                    <div>
                    <div className='welOk'>
                    <img src={`${ok}`}></img>
                    </div>
                    <div className='wel'>
                        Welcome
                        </div>
                    </div>
                ) : (<div>
                    <div className='welOk'>
                    <img src={`${no1}`}></img>
                    </div>
                    <div className='wel'>
                    Fail
                        </div>
                    
                </div>)}
                
            </div>
        )
    }
}

ReactDOM.render((
    <Maket />
)
, document.getElementById('root'));