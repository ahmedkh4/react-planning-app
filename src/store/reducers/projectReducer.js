
const initState = {
    projects :[
        {id:"1" , title:'title11' , content:'content11'},
        {id:"2" , title:'title22' , content:'content22'},
        {id:"3" , title:'title33' , content:'content33'},
    ]

        
    
}

const projectReducer = ( state=initState , action ) => {
    switch (action.type ) {
        case 'CREATE_PROJECT' :
            console.log('create project ' , action.project);
            return state ; 

        case 'CREATe_Project_EROOR' : 
            console.log('create project error' , action.err);
            return state ;
            
        default : 
        return state     
    }
     
}

export default projectReducer