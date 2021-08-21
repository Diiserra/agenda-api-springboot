import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { TextInput } from "./TextInput"
import { ServiceContact } from "../services/ServiceContacts"
import { OpenFormContext } from "../providers/formContext"

export function ContactValuesForm(props) {

    const [name, setName] = useState(props.name)
    const [fone, setFone] = useState(props.fone)
    const [email, setEmail] = useState(props.email)

    const { setOpenForm } = useContext(OpenFormContext)

    function saveContact() {
        const contact = {
            name: name,
            fone: fone,
            email: email
        }
        ServiceContact.save(contact)
        setOpenForm(false)
    }

    function updateContact() {
        const contact = {
            name: name,
            fone: fone,
            email: email
        }
        ServiceContact.update(props.id, contact)
        setOpenForm(false)
    }

    return (
        <main className="new-contact-container">

            <form>
                <h1>Contact information</h1>
                <TextInput place="Name" set={setName} />
                <TextInput place="Fone" set={setFone} />
                <TextInput place="Email" set={setEmail} />
                <div>
                    <button className="bt-cancel" onClick={() => setOpenForm(false)}>Cancel</button>
                    <Link
                        className="bt-gradient"
                        onClick={() => {
                            saveContact()
                        }}>Save contact</Link>
                </div>
            </form>
        </main>
    )
}