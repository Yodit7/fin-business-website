import {styled} from 'styled-components';
import { IoChatboxEllipses, IoArrowUpSharp } from "react-icons/io5";
import { useState, useEffect } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 65px 35px;
    margin: 0 auto;
    max-width: 600px;

    @media screen and (min-width: 768px) {
        margin: 0 auto;
        max-width: 600px;
    }

    @media screen and (min-width: 1024px) {
        // max-width: 1000px;
        max-width: 980px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 55% 45%;
        column-gap: 25px;
        align-items: center;
        padding-top: 25px;
    }
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 35px;

    h1 {
        font-size: 45px;
        color: var(--clr-heading);
        font-weight: 600;

        .text-bg {
            background: var(--clr-accent);
            padding: 0px 4px;

        }
    }

    h4 {
        font-weight: 450;
        line-height: 2rem;
        font-size: 18px;
        color: var(--clr-text);
    }

    button {
        margin: 25px 0px;
    }

    .show-top {
        opacity: 1;
        transform: translateY(0);
    }

    @media screen and (min-width: 1024px) {
        margin-right: 50px;
        padding-bottom: 50px;

        h1 {
            font-size: 70px;
        }

        h4 {
            width: 450px;
            font-size: 20px;
            line-height: 2.5rem;
        }
    }

`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
`;

const HomeImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -20px;

    img {
        max-width: 400px;
        width: 100%;
        height: auto;
    }

    .img-widget {
        position: relative;
        top: -90px;
        z-index: 2;
        width: 140px;
    }

    @media screen and (min-width: 1024px) {
        img {
            max-width: 550px;
            width: 100%;
            
        }    

        .img-widget {
            left: -220px;
            top: -300px;
            width: 180px;
        }
    }
`;

const References = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0px 20px;


    h3 {
        font-size: 26px;
        text-align: center;
        line-height: 2.5rem;
        font-weight: 600;
        color: var(--clr-heading);
    }

    @media screen and (min-width: 1024px) {
        grid-column: span 2;
       
    }

`;

const Reference = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px;

    img {
        width: 120px;
        justify-self: center;
    }

    @media screen and (min-width: 480px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;


        img {
            max-width: 180px;
            width: 100%;
        }
    }

`;


const Home = () => {

    const [clientLogos, setClientLogos] = useState([
        '../images/client-logo-1.png',
        '../images/client-logo-2.png',
        '../images/client-logo-3.png',
        '../images/client-logo-4.png',
        '../images/client-logo-5.png',
        '../images/client-logo-6.png'
    ]);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <Container> 
            <Top className={scrolling ? 'show-top' : ''}>
                <h1>Let's <span className='text-bg'>Consult</span> with Finbiz to Grow</h1>
                <h4>Slightly domed and divided by arches into stiff sections. 
                The bedding was hardly able to cover it and seemed ready to 
                slide</h4>
                <button><IoChatboxEllipses className='icon-medium'/>Free Consultation</button>
            </Top>
            <Bottom>
                <HomeImage>
                    <img src="../images/landing-page.png" />
                    <img src="../images/landing-page-widget.png" className='img-widget'/>
                </HomeImage>
            </Bottom>
            <References>
                <h3>We’ve helped over 150+ startups grow their business</h3>
                <Reference>
                    {clientLogos.map((logoSrc, index) => (
                        <img key={index} src={logoSrc} alt="" />
                    ))}
                </Reference>
            </References>
        </Container>
    )
}

export default Home;