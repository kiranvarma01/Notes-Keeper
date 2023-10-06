import React from "react"

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
export default function Footer(){
    return(
        <footer>
            <p>Copyright {currentYear}</p>
        </footer>
    )
}