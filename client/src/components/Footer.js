// Footer, shown on every page
import React from "react";
import { SocialIcon } from 'react-social-icons';


const Footer = () => (
    <div className="footer text-center">
        <SocialIcon url="https://github.com/E-Albert" bgColor="#99FF99"
            fgColor="#FFFFFF" className="footericon"
            style={{ height:50, width:50, paddingLeft:10, paddingRight: 10 }} title="Emerson A's GitHub">
            </SocialIcon>
        <SocialIcon url="https://github.com/randerson321" bgColor="#CCFF99"
            fgColor="#FFFFFF" className="footericon"
            style={{ height:50, width:50, paddingLeft:10, paddingRight: 10 }} title="Rashad A's GitHub">
            </SocialIcon>
        <SocialIcon url="https://github.com/TrushaBH" bgColor="#FFFF99"
            fgColor="#FFFFFF" className="footericon"
            style={{ height:50, width:50, paddingLeft:10, paddingRight: 10 }} title="Trusha B's GitHub">
            </SocialIcon>
        <SocialIcon url="https://github.com/pr1me-e1gh7" bgColor="#FFCC99"
            fgColor="#FFFFFF" className="footericon"
            style={{ height:50, width:50, paddingLeft:10, paddingRight: 10 }} title="David C's GitHub">
            </SocialIcon>
        <SocialIcon url="https://github.com/rodneychappell" bgColor="#FF9999"
            fgColor="#FFFFFF" className="footericon"
            style={{ height:50, width:50, paddingLeft:10, paddingRight: 10 }} title="Rodney C's GitHub">
            </SocialIcon>
        <p>Copyright © 2022 | Powered by Apollo, React, and React-Bootstrap</p>
    </div>
)

export default Footer;
