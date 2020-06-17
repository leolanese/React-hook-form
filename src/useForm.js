import { useState } from 'react';

const useForm = (names, inits) => {

  const [values, setValues]
  = useState(names.reduce((obj, name) => ({...obj, [name]: (inits || {})[name] || ''}), {}));

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues({ ...values, [name]: type === 'checkbox' ? checked : value });
  };

  return [ values, handleChange ];
};

export default useForm;