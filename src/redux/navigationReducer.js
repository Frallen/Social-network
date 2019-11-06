let initialstate={
    Navigation:[ 
        {id:1, name:"Andrey",},
        {id:2, name:"Georg",},
        {id:3, name:"Deren",}
    ]
}



const navigationReducer=(state=initialstate,action)=>{

    let stateCopy={...state}

    return stateCopy
}

export default navigationReducer