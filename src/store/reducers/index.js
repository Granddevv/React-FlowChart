import initialState from '../initialState';

import {
    ADD_LEFT,
    ADD_RIGHT
} from '../actions/index';
import templateJson from '../../assets/Template.json';

function reducer(state = initialState, action) {
    let itemList, type;
    switch (action.type) {
        case ADD_LEFT:
            itemList = state.itemList.slice(0);
            type = templateJson[itemList.length].left;
            console.log("tyep", type, templateJson);
            itemList.push({type: type});
            return Object.assign({}, state, {
                itemList: itemList
            });
        case ADD_RIGHT:
            itemList = state.itemList.slice(0);
            type = templateJson[itemList.length].right;
            itemList.push({type: type});
            return Object.assign({}, state, {
                itemList: itemList
            });
        default :
            return state;
    }

}
export default reducer;