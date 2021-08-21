import React from 'react'

export function ButtonGradient(props) {

    const { onclick, children } = props



    return <button className="bt-gradient" onClick={() => onclick()}>{children}</button>
}