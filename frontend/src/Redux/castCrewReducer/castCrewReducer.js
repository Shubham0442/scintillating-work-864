import { GET_CAST_CREW_FAILURE, GET_CAST_CREW_REQUEST, GET_CAST_CREW_SUCCESS } from "./actionTypes"


const initState = {
    isLoading: false,
    isError: false,
    castCrew: []
}

export const castCrewReducer = ( state = initState, { type, payload })=>{
        

      switch(type){
        
         case GET_CAST_CREW_REQUEST: {
            return {
                ...state,
                isLoading : true
            }
         }

         case GET_CAST_CREW_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                castCrew: payload
            }
         }

         case GET_CAST_CREW_FAILURE : {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
         }

         default: return state
    
      }
}