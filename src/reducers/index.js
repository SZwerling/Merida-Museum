import { combineReducers } from 'redux';
import { COMMENTS } from '../shared/comments';





const selectedExhibitReducer = (selectedExhibit = null, action) => {
    if(action.type === 'EXHIBIT_SELECTED'){
        return action.payload
    }
    return selectedExhibit
};

const commentsReducer = (comments = COMMENTS, action) => {
    switch(action.type){
        case 'ADD_COMMENT':
            const comment = action.payload;
            console.log(action.payload)
        return comments.concat(comment)
        default:
            return comments;
    }
}

export default combineReducers({
    selectedExhibit: selectedExhibitReducer,
    comments: commentsReducer
})
