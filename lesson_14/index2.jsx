import React from 'react';
import ReactDOM from 'react-dom';

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

// window.render = function render() {
    ReactDOM.render((
        <div>
            <WrapInEmoji defaultEmoji={String.fromCharCode('U+1F602')}></WrapInEmoji>
            <br/><hr/>
            {/* <Timer/> */}
            
            {/* <CountrySelect />  */}
        </div>
    ), document.getElementById('root'));
// };