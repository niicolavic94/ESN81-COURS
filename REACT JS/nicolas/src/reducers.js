

const initialState = {
    people: [], // État initial : un tableau vide
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return {
                ...state,
                people: [...state.people, action.payload]
            };

        case 'DELETE_PERSON':
            return {
                ...state,
                people: state.people.filter(person => person.id !== action.payload)
            };

        case 'UPDATE_PERSON':
            return {
                ...state,
                people: state.people.map(person =>
                    person.id === action.payload.id 
                        ? { ...person, name: 'New Name', age: person.age + 1 } 
                        : person
                )
            };

        default:
            return state;
    }
};

export default rootReducer;