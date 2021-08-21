import React, { useState } from 'react'


export function TextInput(props) {

    const { place, set } = props

    const [valueInput, setValueInput] = useState("")

    function setContactVelues(e) {
        const { target: { value } } = e
        setValueInput(value)
        set(value)
    }

    return (
        <input
            className="text-input"
            type="text"
            placeholder={place}
            autoComplete="off"
            value={valueInput}
            onChange={e => setContactVelues(e)}
        />
    )
}