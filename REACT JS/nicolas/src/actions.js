// Créez les créateurs d’actions Redux dans un fichier actions.js. Vous aurez trois créateurs d’actions 
// qui propageront les actions ADD_PERSON, DELETE_PERSON et UPDATE_PERSON



export const addPerson = (person) => {
    return {
        type: 'ADD_PERSON',
        payload: person
    };
}

export const deletePerson = (id) => {
    return {
        type: 'DELETE_PERSON',
        payload: id
    };
}
export const updatePerson = (person) => {
    return {
        type: 'UPDATE_PERSON',
        payload: person
    };
}
