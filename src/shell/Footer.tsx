import * as React from 'react';

const Footer = () => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                {/* <li>
                    <a 
                        href="#" 
                        className="icon alt fa-facebook"
                    >
                        <span className="label">Facebook</span>
                    </a>
                </li> */}
                <li>
                    <a 
                        href="https://www.instagram.com/slifuojugrindis/" 
                        target="_blank"
                        className="icon alt fa-instagram"
                    >
                        <span className="label">Instagram</span>
                    </a>
                </li>
            </ul>
            <ul className="copyright">
                <li>&copy; Autorių teisės saugomos</li><li>Dizainas: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
);

export default Footer;