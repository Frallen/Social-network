let initialstate={
    NewsList:[
        {id:1,title:"Lorem is top",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",},
        {id:2,title:"Lorem is top",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",},
        {id:3,title:"Lorem is top",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",},
        {id:4,title:"Lorem is top",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",},
        {id:5,title:"Lorem is top",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",},
        {id:6,title:"Lorem is top",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",},

        
    ]
}

const NewsReducer=(state=initialstate,action)=>{
    let stateCopy ={...state}
    return stateCopy
}

export default NewsReducer