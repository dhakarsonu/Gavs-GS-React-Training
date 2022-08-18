import {UPDATE_APP} from '../Actions/appAction';

const initialState = {
  name : "Gavs-GS"
};

const AppReducerNew =  (state = initialState, action) => {
  try{      
    switch (action.type) {
      case UPDATE_APP :
        return {
          ...state,
          name : action.payload.name
        };
      default:
      return state;

    }
  }catch(err){
      console.error("Error in app reducer",err.stack);
  }
};

export default AppReducerNew;
