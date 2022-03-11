// Footer, shown on every page
import React from "react";
import { SocialIcon } from 'react-social-icons';


const Footer = () => (
    <div className="footer text-center">
        <SocialIcon url="https://github.com/E-Albert" bgColor="#99FF99"
            target="_blank" fgColor="#FFFFFF" className="inline-flex py-7 px-3 mr-3 navicons"
            style={{ height:50, width:50 }} title="Emerson A's GitHub">
            </SocialIcon>
        <SocialIcon url="https://github.com/randerson321" bgColor="#CCFF99"
            target="_blank" fgColor="#FFFFFF" className="inline-flex py-7 px-3 mr-3 navicons"
            style={{ height:50, width:50 }} title="Rashad A's GitHub">
            </SocialIcon>
        <SocialIcon url="https://github.com/TrushaBH" bgColor="#FFFF99"
            target="_blank" fgColor="#FFFFFF" className="inline-flex py-7 px-3 mr-3 navicons"
            style={{ height:50, width:50 }} title="Trusha B's GitHub">
            </SocialIcon>
        <SocialIcon url="https://github.com/pr1me-e1gh7" bgColor="#FFCC99"
            target="_blank" fgColor="#FFFFFF" className="inline-flex py-7 px-3 mr-3 navicons"
            style={{ height:50, width:50 }} title="David C's GitHub">
            </SocialIcon>
        <SocialIcon url="https://github.com/rodneychappell" bgColor="#FF9999"
            target="_blank" fgColor="#FFFFFF" className="inline-flex py-7 px-3 mr-3 navicons"
            style={{ height:50, width:50 }} title="Rodney C's GitHub">
            </SocialIcon>
        <p>Copyright © 2022</p>
        <p>Powered by React and Bootstrap</p>
    </div>
)

export default Footer;