import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from './actions';

const PeopleForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            id: Date.now(), // Génère un ID unique simple
            name,
            age: parseInt(age)
        };
        dispatch(addPerson(newPerson));
        setName('');
        setAge('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Nom" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Âge" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            />
            <button type="submit">Ajouter une personne</button>
        </form>
    );
};

export default PeopleForm;