/*
El estado en mi aplicacion se va a manejar de la siguiente manera
 {
     notes:[],
     active: null,
     active: {
         id: '12233ASSDCFV',
         title: '',
         body: '',
         imageUrl: '',
         date: 123344555322
     }

 }

*/ 

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {

    switch (action.type) {
        // case value:
          
    
        default:
            return state;
    }

}

//de aqui paso para mi store