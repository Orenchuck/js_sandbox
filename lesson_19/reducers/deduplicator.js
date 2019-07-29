import * as Constants from '../actions';

export default function reducer(state, payload){
    switch(payload.type){
        case Constants.DEDUPLICATOR:
            return control;
    }

    if (state) {
        return state;
    }
}

function control () {
    if (payload.name !== state.name) {
        return next(payload);
    }
}