import React from 'react'
import { Link } from "react-router-dom"

export function LinkButtonGradient(props) {

    const { togo, children } = props

    return <Link className="bt-gradient" to={togo} >{children}</Link>
}