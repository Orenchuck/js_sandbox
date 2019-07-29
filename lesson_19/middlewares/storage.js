import { ADD, REMOVE, SET, GET } from '../actions';

export default (store) => (next) => {
    
    return (payload) => {
    next(payload);

        if(payload.type === ADD || payload.type === REMOVE){
            const list = store.getState().students;
            localStorage.setItem('students', JSON.stringify(list));
        }
        if (payload.type === GET) {
            try{
                const data = JSON.parse(localStorage.getItem('students'));
            
                if (Array.isArray(data)){
                    next ({ type: SET, list: data});
                }
                
            } catch (err) {}
        }
    }
}
