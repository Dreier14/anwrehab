import {Link} from 'react-router-dom';
import './Nav.css';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { home2 } from 'react-icons-kit/icomoon/home2';
import {u1F46A} from 'react-icons-kit/noto_emoji_regular/u1F46A';
import {u1F4AD} from 'react-icons-kit/noto_emoji_regular/u1F4AD';
import {ic_design_services_twotone} from 'react-icons-kit/md/ic_design_services_twotone'
import {cart} from 'react-icons-kit/icomoon/cart'
import Logo from './logo.png';

const Wrapper = styled.li`
font-size:1.3em`

export const Nav: React.FC = (): JSX.Element => {
    return (
        <div>
            <header className="header">
                <Link to="/" className="logo">
                    <img src={Logo} height="70px" width="70px" />
                    <div className="rehab"> Aquatic-N-Writing Rehab</div>
                </Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <Wrapper><Link to="/">Home <Icon icon={home2} size={25} /></Link></Wrapper>
                    <Wrapper><Link to="/Services">Services <Icon icon={ic_design_services_twotone} size={25} /></Link></Wrapper>
                    <Wrapper><Link to="/Testimonials">Testimonials <Icon icon={u1F46A} size={25} /></Link></Wrapper>
                    <Wrapper><Link to="/LearnMore">Learn More <Icon icon={u1F4AD} size={25} /></Link></Wrapper>
                    <Wrapper><Link to="/Shop">Shop <Icon icon={cart} size={25} /></Link></Wrapper>
                </ul>
            </header>
        </div>
    );
}