import { styled } from "styled-components";
import { useState } from "react";
import { IoChatboxEllipses, IoArrowUpSharp } from "react-icons/io5";


const Container = styled.div`
    background: var(--clr-footer);
    padding-top: 80px;
    padding-right: 35px;
    padding-bottom: 25px;
    color: white;
    
    .footer-container-width {
        padding-left: 35px;
        max-width: 600px;
        margin: 0 auto;
    }

    .footer-top {
        display: flex;
        flex-direction: column;
        gap: 65px;
        padding-bottom: 35px;
    }

    @media screen and (min-width: 991px) {

        .footer-container-width {
            width: 100%;
            max-width: 900px;
        }

        .footer-top {
            display: grid;
            grid-template-columns: 190px 220px 80px 200px;
        }

        .footer-btns {
            gap: 15px;
        }

    }

    .thin-hr {
        border: none;
        border: 1px solid white;
    }

`;

const FooterBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px; 
    max-width: 350px;
    width: 100%;

`;

const Links = styled.ul`
    list-style: none;   
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;

    li {
        font-size: 14px;
        transition: transform 0.3s ease;
    }

    .li-hover:hover {
        cursor: pointer;
        color: var(--clr-accent);
        transform: translateX(15px);
    }

`;

const FooterBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 14px;
    padding-top: 15px;

    ul {
        list-style: none;    
        display: flex;
        gap: 15px;
        
        li {
            line-height: 1.5rem;
        }
        
        li:nth-child(2):hover,
        li:nth-child(3):hover {
            color: var(--clr-accent);
            cursor: pointer;
        }

    }
    
    @media screen and (min-width: 480px) {
        align-items: center;
        gap: 25px;
    }

    p {
        text-align: center;
    }

    span {
        color: var(--clr-accent);
        font-weight: 600;
    }

    @media screen and (min-width: 991px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;


const Footer = () => {
    return (
        <>
            <Container>
                <div className="footer-container-width">
                    <div className="footer-top">
                        <FooterBox>
                            <h4>Navigation</h4>
                            <Links>
                                <li className="li-hover">Home</li>
                                <li className="li-hover">Why Finbiz?</li>
                                <li className="li-hover">Overview</li>
                                <li className="li-hover">Our Team</li>
                                <li className="li-hover">Services</li>
                                <li className="li-hover">Contact</li>
                            </Links>
                        </FooterBox>
                        <FooterBox>
                            <h4>Information</h4>
                            <Links>
                                <li>Working Days</li>
                                <li>10AM - 10PM</li>
                                <li>Saturday</li>
                                <li>09AM - 08PM</li>
                                <li>Sunday</li>
                                <li>Closed</li>
                            </Links>
                        </FooterBox>
                        <FooterBox>
                            <h4>Important</h4>
                            <Links>
                                <li className="li-hover">License</li>
                                <li></li>
                                <li className="li-hover">Changelog</li>
                                <li></li>
                                <li className="li-hover">FAQs</li>
                            </Links>
                        </FooterBox>
                        <FooterBox className="footer-btns">
                            <h4>Contact</h4>
                            <button><IoChatboxEllipses className='icon-medium'/>Free Consultation</button>
                            <button className='icon-transparent'><IoChatboxEllipses className='icon-medium'/>202-555-0167</button>
                        </FooterBox>
                    </div>
                <hr />
                <FooterBottom>
                    <ul>
                        <li>Copyright © 2022 Finbiz. All right Reserved.</li>
                        <li>Changelog</li>
                        <li>License Info</li>
                    </ul>
                    <p>Powered by <span>Webflow</span></p>
                </FooterBottom>
                </div>
            </Container>
        </>
    )
}

export default Footer;