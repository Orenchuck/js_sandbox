import React from 'react';
import { connect } from 'react-redux';
import * as Constants from '../../actions';

class List extends React.Component{

    componentDidMount(){
        this.props.getList();
    }
    
    render(){
        const props = this.props;
        let newName = '';

    return (
        
        <div>
            {props.count}
            <button onClick={props.increment}>Increment</button>
            {props.list.map(student => (
                <div key={student.name} 
                     onClick={props.remove.bind(null, student.name)}>
                    {student.name}
                </div>
            ))}

            <input onChange={(event) => newName = event.target.value}></input>
            <button onClick={() => props.add(newName)}>ADD</button>

        </div>
    );
    }   
}



export default connect(
    (state) => ({ 
        list: state.students,
        count: state.counter.count, 
    }),
    (dispatch) => ({ 
        remove: (name) => dispatch({ type: Constants.REMOVE, name }),
        add: (name) => dispatch({ type: Constants.ADD, name }),
        increment: () => dispatch({ type: Constants.COUNTER_INCREMENT}),
        getList: () => dispatch({ type: Constants.GET})
    }),
)(List);
