const intialState = 2500701 ;

const decrementNumber=(state= intialState , action)=>{
    switch(action.type){
    case "DECREMENT5" : return state - 5000;
    case "DECREMENT10" : return state - 10000;
    case "MAKEITZERO" : return state - state
    default : return state;
    }
}
 export default decrementNumber;