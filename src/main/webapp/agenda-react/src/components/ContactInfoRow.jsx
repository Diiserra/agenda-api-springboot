import React from 'react'
import { Link } from "react-router-dom"


export function ContactInfoRow(props) {
    return (
        <tr>
            <div>
                <div id="home-menu-list">
                    <div id="home-menu-list-float">
                        <Link id="bt-update">Update</Link>
                        <Link id="bt-delete">Delete</Link>
                    </div>

                </div>
                <span id="name" >Name</span>
                <td>
                    <span style={{ color: 'lime' }}>Fone</span>
                    <span style={{ color: 'orange' }}>Email</span>
                </td>
            </div>
        </tr>
    )
}