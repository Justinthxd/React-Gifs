import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim().length > 2) {
            setCategories(data => [input, ...data]);
        }

        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleInput} />
            </form>
        </div>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;
