import React, { useState } from "react";

const NameForm = () => {

    const initialState = { id: '', name: '' };

    const [person, setPerson] = useState(initialState);

    function handleSubmit(evt) {
        evt.preventDefault();
        window.alert(person.name)
        setPerson(initialState);
    }

    function handleInput(event) {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setPerson({ ...person, [id]: value })

    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input id="name" type="text" value={person.name} onChange={handleInput}
                    placeholder="Name" />
                <br />
                <button>Submit</button>
            </form>
            {person.name}
        </div>
    );
};

export default function FormDemo() {
    return (
        <div style={{ marginTop: 25 }}>
            <NameForm />
        </div>
    );
}

