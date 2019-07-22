import {createStore, combineReducers} from 'redux';
import studentsReduser from './redusers/students';
import counterReduser from './redusers/counter';
import enabledReduser from './redusers/Toggle';


export const Store = createStore(combineReducers ({
    students: studentsReduser,
    counter: counterReduser,
    enabled: enabledReduser,
}));
// console.log(store);

// Store.dispatch({type: 'ADD', name: 'Grigor'});
// Store.dispatch({type: 'HELLO'});

console.log(Store.getState());