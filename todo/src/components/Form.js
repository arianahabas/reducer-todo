import React from 'react'


export const Form = () => {

    return (
        <div>
            <form>
                <input 
                    type='text'
                    placeholder='Add new...'
                />
                <button>Add</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default Form