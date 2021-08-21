import React, { useContext, useEffect, useState } from 'react'
import { ButtonGradient } from "../components/ButtonGradient copy"
import { ContactInfoRow } from "../components/ContactInfoRow"
import { ContactValuesForm } from "../components/ContactValuesForm"
import { OpenFormContext } from "../providers/formContext"
import { ServiceContact } from "../services/ServiceContacts"


export function HomePage() {

    const [list, setList] = useState([])

    const { openForm, setOpenForm, reload } = useContext(OpenFormContext);

    function openModalContact() {
        if (openForm) {
            setOpenForm(false)
        } else {
            setOpenForm(true)
        }
    }

    useEffect(() => {
        ServiceContact.findAll().then(data => {
            setList(data)
            console.log(data);
        })
    }, [openForm, reload])

    return (
        <>
            {openForm ? <ContactValuesForm /> : null}
            <div className="home-container">
                <header>
                    <h1>Contacts</h1>
                    <ButtonGradient onclick={openModalContact}>Add new contact</ButtonGradient>
                </header>
                <main>
                    <table>
                        <thead>
                            <span>Contacts list:</span>
                        </thead>
                        <tbody>
                            {list.map(item => <ContactInfoRow contact={item} />)}
                        </tbody>
                    </table>
                </main>
            </div>
        </>
    )
}