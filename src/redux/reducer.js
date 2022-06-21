const initialState = {
    newspaper: [],
    loadingStatus: "oldboy",
    filters: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "NEWS_FETCHING":
            return {
                ...state,
                loadingStatus: "loading..."
            }
        case "NEWS_FETCHED":
            return {
                ...state,
                newspaper: action.payload,
                loadingStatus: 'oldboy'
            }
        case "NEWS_FETCHING_ERROR":
            return {
                ...state,
                loadingStatus: "error..."
            }

        default:
            return state
    }
}





