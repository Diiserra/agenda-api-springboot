import React from 'react'
import { Link } from "react-router-dom"


export function ContactInfoRow(props) {

    const { name, fone, email } = props.contact;

    return (
        <tr>
            <div>
                <div id="home-menu-list">
                    <div id="home-menu-list-float">
                        <Link id="bt-update">Update</Link>
                        <Link id="bt-delete">Delete</Link>
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