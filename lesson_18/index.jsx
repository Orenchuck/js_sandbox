import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';
import {Store} from './store';
import * as Constants from './actions'; 


function List (props) {
    let newName ='';
    return(
        <div>
            <input type='checkbox' onClick={props.check}></input>
            <br/>
            {props.count}
            <button onClick={props.inc}>Increment</button>
            {props.list.map(student => (
                <div key={student.name} onClick={props.remove.bind(null, student.name)}>
                    {student.name}
                </div>
            ))}
                <input type='text' onChange={(event) => nawName = event.target.value}></input>
                <button onClick={() => props.add(newName)}>Add</button>
        </div>
    );
}
  

const ListConnected = connect(
    (state) => ({ 
        list: state.students,
        count: state.counter.count,
        enabled: state.enabled}),
    (dispatch) => ({ 
        remove: (name) => dispatch({type: Constants.REMOVE, name }), 
        add: (name) => dispatch({type: Constants.ADD, name }),
        inc: () => dispatch({type: Constants.INC}),
        check: () => dispatch({type: Constants.CHECK})}),
)(List);


// ReactDOM.render(<List list={[{name: 'John'}]} />, document.getElementById('root'));
ReactDOM.render((
    <Provider store = {Store}>
        <ListConnected />
    </Provider>
), document.getElementById('root'));