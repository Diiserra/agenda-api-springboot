import React from 'react'
import { Link } from "react-router-dom"
import "../styles/style.css"



export function WelcomePage() {
    return (
        <main className="welcome-container">
            <div>
                <h1>Welcome to phonebook!</h1>
                <span>Your contacts are here.</span>
                <Link className="bt-started" to="/home">Get Started</Link>
            </div>
            <svg id="svg-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4776E6" d="M47.6,-72.8C61.9,-64.9,73.8,-52,78.5,-37.2C83.3,-22.3,80.9,-5.5,79.2,11.9C77.5,29.3,76.5,47.4,67,57.8C57.6,68.3,39.7,71.2,22.6,75.6C5.5,80,-10.7,85.9,-22.5,80.6C-34.2,75.3,-41.5,58.8,-50.9,45.5C-60.3,32.2,-71.7,22.1,-78.1,8.4C-84.5,-5.3,-85.8,-22.5,-78.7,-35C-71.5,-47.4,-55.9,-55.1,-41.4,-62.9C-26.9,-70.7,-13.4,-78.7,1.6,-81.2C16.7,-83.7,33.3,-80.8,47.6,-72.8Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8E54E9" d="M25,-37.7C34.1,-33,44.4,-29,47.6,-21.8C50.8,-14.6,46.9,-4.2,46.3,7.3C45.7,18.8,48.3,31.5,43,36.8C37.7,42.1,24.4,40,12.6,44C0.7,48,-9.7,58.1,-22,60.9C-34.3,63.7,-48.6,59.1,-54.1,49C-59.6,38.9,-56.2,23.2,-60.6,7.4C-65,-8.5,-77.2,-24.7,-74.8,-35.9C-72.4,-47.2,-55.5,-53.6,-40.6,-55.7C-25.7,-57.8,-12.8,-55.5,-2.5,-51.7C7.9,-47.9,15.9,-42.4,25,-37.7Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#40c5e1" d="M25.1,-43.3C31.8,-34.8,35.9,-26.5,45,-17.4C54.1,-8.3,68,1.8,73.5,15.3C79,28.9,75.9,46,64,50.1C52.1,54.2,31.4,45.3,17.5,40.9C3.6,36.4,-3.6,36.4,-14.9,38.7C-26.3,40.9,-42,45.4,-55.5,41.5C-69,37.7,-80.4,25.4,-85.3,10.5C-90.3,-4.5,-88.8,-22.2,-77.9,-31.2C-66.9,-40.1,-46.5,-40.4,-31.9,-45.3C-17.4,-50.2,-8.7,-59.9,0.3,-60.3C9.2,-60.7,18.4,-51.8,25.1,-43.3Z" transform="translate(100 100)" />
            </svg>
        </main>
    )
}