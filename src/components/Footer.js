import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer">
            <p>Purrfect Paws © {currentYear}</p>
        </footer>
    )
}