import * as Constants from '../actions'; 

export default function reducer (state, payload) {
    console.log(state, payload);

    switch (payload.type) {
        case Constants.CHECK:
            return {enabled: !state.enabled}
    }

if (state) {
    return state;
}
    return {enabled: false};
        

}