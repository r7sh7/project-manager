export const createProjectAction = (project) => {
    return(dispatch, getState, { getFirebase }) => {
        //async call to fetch data
        const firestore = getFirebase().firestore();

        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Levi',
            authorLastName: 'Ackerman',
            authorId: '1234',
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
        
    }
};