import React from 'react'
import { Link } from "react-router-dom"
import { ContactInfoRow } from "../components/ContactInfoRow"

export function HomePage() {
    return (
        <div className="home-container">
            <header>
                <h1>Contacts</h1>
                <Link className="home-bt-newcontact">Add a contact</Link>
            </header>
            <main>
                <table>
                    <thead>
                        <span>List of contacts:</span>
                    </thead>
                    <tbody>
                        <ContactInfoRow />
                        <ContactInfoRow />
                        <ContactInfoRow />
                    </tbody>
                </table>
            </main>
        </div>
    )
}