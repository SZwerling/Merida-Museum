export const selectedExhibit = (exhibit) => {
    return {
        type: 'EXHIBIT_SELECTED',
        payload: exhibit
    };
};

export const addComment = (text, author) => ({
    type: 'ADD_COMMENT',
    payload: {
        text: text,
        author: author
    },
});