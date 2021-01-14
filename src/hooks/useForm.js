import { useState } from 'react';

/**
 * 
 * @param {Object} initialState Estado inicial
 * @returns {Object, Fucntion, Function} [ values, handleInputChange, reset ]
 */
export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}