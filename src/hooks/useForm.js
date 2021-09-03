// write your custom hook here to control your checkout form
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return (JSON.parse(localStorage.getItem(key)));
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return (initialValue);
        }
    });

    const setStoredValue = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    }
    return ([value, setStoredValue]);
}



const useForm = (initialValues) => {
    const [values, setValues] = useLocalStorage('form', initialValues);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return ([values, handleChanges]);
}

export default useForm;