import { styled } from 'styled-components';
import '../index.css';
import { IoMenuOutline } from "react-icons/io5";
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    a {
        text-decoration: none;
        font-size: 28px;
        color: var(--clr-heading);
        font-weight: 550;
    }

    .nav-big-screen {
        display: flex;
        gap: 20px;    
        align-items: center;
        width: 1200px;
        margin: 0 auto;
        justify-content: space-between;
    }

    .nav-btn {
        background: var(--clr-accent);
        width: 120px;
        height: 30px;
        padding: 25px 12px;
    }
`;

const Nav = styled.ul`
    list-style: none;
    display: flex;
    width: 520px;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-heading);
    font-size: 18px;
    cursor: pointer;
    padding: 0px 10px;

    li {
        margin: 0px 25px;
        font-weight: 600;
        transition: background 0.3s ease;
    }

    :hover {
        background: white;
        border-radius: 10px;
        padding: 15px 10px;
    }
`;

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    
    return (
        <Container>
        {openMenu ? (
            <>
                <a href="">Finbiz</a>
                <IoMenuOutline className='menu-icon'/>
            </>
            )
            : (
                <div className='nav-big-screen'>
                    <a href="">Finbiz</a>
                    <Nav>
                        <li>Home</li>
                        <li>Catalog</li>
                        <li>Services</li>
                        <li>Blog</li>
                    </Nav>
                    <button className='nav-btn'>Get in Touch</button>
                </div>
            )
            }
        </Container>
    )
}

export default Header;