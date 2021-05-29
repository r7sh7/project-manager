export const createProjectAction = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        //async call to fetch data
        dispatch({type: 'CREATE_PROJECT', project});
    }
};