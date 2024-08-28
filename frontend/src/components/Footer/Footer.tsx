import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Footer.css';

const Wrapper = styled.li`
font-size:1.3em`

export const Footer: React.FC = (): JSX.Element => {
    return (
        <>
            <div className = "footer">
                <Link to = "/" className= "logo"></Link>
                <div className="main-conatainer">
                        <img className="footer-img" src="https://drive.google.com/thumbnail?id=1jpqKCoeAvkeWlo7p09L8Fiwm_h7ELozj" />
                        <ul className="footer-menu">
                            <Wrapper><Link to="/">Home</Link></Wrapper>
                            <Wrapper><Link to="/Contact">Contact</Link></Wrapper>
                            <Wrapper><Link to="/Therapists">Meet Our Team</Link></Wrapper>
                        </ul>
                        <br/>
                    <div className= "copyright"> © 2013. Aquatic-N-Writing Rehab. All rights reserved.</div>
                </div>
            </div>
        </>
    );
}