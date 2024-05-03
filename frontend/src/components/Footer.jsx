import React from 'react';
import '../styles/footer.css'

import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="conteudo-footer">
                    <p>AgroLab</p>
                    <p>2024 - All Rights Reservedº</p>
                    <div className="icones-footer">
                        <CiFacebook />
                        <FaInstagram />
                        <FaWhatsapp />
                        <CiPhone />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer