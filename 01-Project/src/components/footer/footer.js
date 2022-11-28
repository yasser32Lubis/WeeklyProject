import React from "react";

function Footer(){
    return(
        <div className="footer-page">
            <div className="icon-social">
                <img src="./01 ASSET/facebook.png"/>
                <img src="./01 ASSET/instagram.png"/>
                <img src="./01 ASSET/whatsapp.png"/>
            </div>
            <div className="signup-news">
                <p>Sign up For Our Newsletter</p>
                <input/>
                <button>Sign Up</button>
            </div>
            <div className="ket-footer">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.
            </p>
            </div>
            <div className="links">
                <div className="links1">
                    <p>LINKS</p>
                    <ul>
                        <li>links</li>
                        <li>links</li>
                        <li>links</li>
                        <li>links</li>
                    </ul>
                </div>
                <div className="links2">
                    <p>LINKS</p>
                    <ul>
                        <li><a>links</a></li>
                        <li><a>links</a></li>
                        <li><a>links</a></li>
                        <li><a>links</a></li>
                    </ul>
                </div>
                <div className="links3">
                    <p>LINKS</p>
                    <ul>
                        <li><a>links</a></li>
                        <li><a>links</a></li>
                        <li><a>links</a></li>
                        <li><a>links</a></li>
                    </ul>
                </div>

            </div>
            <div className="copyright">
                <p>© 2020 Copyright: Ahmad Yasser</p>
            </div>
        </div>
    )
}

export default Footer;