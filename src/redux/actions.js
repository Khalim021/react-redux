export const newsFetching = () => {
    return {
        type: "NEWS_FETCHING"
    }
}

export const newsFetched = (newspaper) => {
    return {
        type: "NEWS_FETCHED",
        payload: newspaper
    }
}

export const newsFetchedError = () => {
    return {
        type: "NEWS_FETCHING_ERROR"
    }
}














