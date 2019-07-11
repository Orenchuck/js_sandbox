import React from 'react';
import ReactDOM from 'react-dom';

export default class WrapInEmoji extends React.Component {
    constructor() {
        super();

        this.state = {
            emoji: props.defaultEmoji || '&#x1F600;',
        }
    }
    render() {
        return(
               <div>{this.state.emoji}</div>
    
        );
    }
}
// ReactDOM.render ((
// <WrapInEmoji defaultEmoji = '&#x1F602;'/>),
//   document.getElementbyid('root')); 
