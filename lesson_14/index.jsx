import React from 'react';
import ReactDOM from 'react-dom';
//import WrapInEmoji from './emoji';
import countries from './countries.json';

class WrapInEmoji extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emoji: props.defaultEmoji || '&#128515;',
        }
    }

    onClick() {
        
        this.setState({
         emoji: Math.floor(Math.random()*5),
        });
      }
      
    render() {
        return(
            <div onClick={this.onClick.bind(this)}>{this.state.emoji}Some text{this.state.emoji}</div>
               
             );
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.state = {
            timeLeft: 0,
           // timer: 0
        };
      }
    
      componentDidMount() {
        // this.timerID = setInterval(
        //   () => this.startTimer(),
        //   1000
        // );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      onClick() {
        // this.timerID = setInterval(
        //     () => this.startTimer(),
        //     1000
        //   );
        console.log(this);
        this.state.startTimer();
      }
      startTimer() {
          let timeLeft;
          let timer = setInterval(() => {
            timeLeft = this.state.timeLeft + 1;
          }, 1000)
        let count = this.state.timeLeft + 1;
          this.setState ({
              timeLeft: count
          })
          //return this.setState({timeLeft: timeLeft, timer:timer})
      }
      
    
    //   tick() {
    //     this.setState({
    //       date: new Date()
    //     });
    //   }
    
      render() {
        return (
          <div>
            <button onClick={this.startTimer}>Start</button>
            <button>Pause</button>
            <button>Stop</button>
            <h2>{this.state.timeLeft}</h2>
            {/* <h2>{this.state.date.toLocaleTimeString()}</h2> */}
          </div>
        );
      }
}

class CountrySelect extends React.Component{
	constructor (props){
		super(props);

		this.state = {
			countries,
			selectedCode: '',
		}
	}

	onClick( code ) {
		this.setState({
			selectedCode: code
		});
	}

	render() {
		return (
			<div className="countries">
				{
					this.state.countries.map( (country, key) => (
						<div
							key={country.name + key}
							onClick={ () => this.onClick(country.code) }
							style={{
								backgroundColor: this.state.selectedCode === country.code
								? 'Lightseagreen'
								: ''
							}}
						>
							{country.name} - {country.code}
						</div>
					))
				}
			</div>
		)
	}
}

// window.render = function render() {
    ReactDOM.render((
        <div>
            <WrapInEmoji defaultEmoji={String.fromCharCode('U+1F602')}></WrapInEmoji>
            <br/><hr/>
            <Timer/>
            
            <CountrySelect /> 
        </div>
    ), document.getElementById('root'));
// };

