import * as Constants from '../actions';

export default (store) => (next) => (payload) => {
    if (payload.type === Constants.ADD){
        next({type: Constants.DEDUPLICATOR});
    }
        next(payload);
}
