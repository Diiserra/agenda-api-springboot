import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { ContactInfoRow } from "../components/ContactInfoRow"
import { ServiceContact } from "../services/ServiceContacts"


export function HomePage() {

    const [list, setList] = useState([])

    useEffect(() => {
        ServiceContact.findAll().then(data => {
            setList(data)
        })

    }, [])

    return (
        <div className="home-container">
            <header>
                <h1>Contacts</h1>
                <Link className="home-bt-newcontact" to="/">Add a contact</Link>
            </header>
            <main>
                <table>
                    <thead>
                        <span>List of contacts:</span>
                    </thead>
                    <tbody>
                        {list.map(item => <ContactInfoRow contact={item} />)}
                    </tbody>
                </table>
            </main>
        </div>
    )
}