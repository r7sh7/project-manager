const initState = {
    projects: [
        {id:'1', title:'Mark one', content: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem '},
        {id:'2', title:'Mark Two', content: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem '},
        {id:'3', title:'Mark 3000', content: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem '},
        {id:'4', title:'Mark seven', content: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem '}
    ]
}

const projectReducer = (state = initState, action) => {

    return state;
}

export default projectReducer;