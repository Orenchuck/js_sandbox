import * as Constants from '../actions';

export default (store) => (next) => (payload) => {
    if (payload.type === Constants.ADD){
        next({type: Constants.COUNTER_INCREMENT});
    }else if(payload.type === Constants.REMOVE){
        next({type: Constants.COUNTER_DECREMENT});
    }
        next(payload);
}
