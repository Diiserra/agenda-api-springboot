import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { OpenFormContext } from "../providers/formContext";
import { ServiceContact } from "../services/ServiceContacts";


export function ContactInfoRow(props) {

    const { id, name, fone, email } = props.contact;

    const { reload, setReload } = useContext(OpenFormContext)

    function deleteById(id) {
        ServiceContact.delete(id)
        if (reload) {
            setReload(false)
        } else {
            setReload(true)
        }
    }



    return (
        <tr>
            <div>
                <div id="home-menu-list">
                    <div id="home-menu-list-float">
                        <Link id="bt-update">Update</Link>
                        <Link id="bt-delete" onClick={() => deleteById(id)}>Delete</Link>
                    </div>

                </div>
                <span id="name" >{name}</span>
                <td>
                    <span style={{ color: 'lime' }}>{fone}</span>
                    <span style={{ color: 'orange' }}>{email}</span>
                </td>
            </div>
        </tr>
    )
}