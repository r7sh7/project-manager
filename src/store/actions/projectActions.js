export const createProjectAction = (project) => {
    return(dispatch, getState) => {
        //async call to fetch data
        dispatch({type: 'CREATE_PROJECT', project});
    }
};