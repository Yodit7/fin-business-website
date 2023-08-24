import { styled } from "styled-components";
import { IoChatboxEllipses, IoArrowUpSharp } from "react-icons/io5";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    padding: 65px 20px;
    background-image: url('../images/cta-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .cta-container-width {
        max-width: 500px;
        margin: 0 auto;
    }
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    color: white;
    text-align: center;
    
    
    h2 {
        font-weight: 600;
        font-size: 44px;
        line-height: 4rem;
    }

    h6 {
        font-size: 18px;
        font-weight: 400;
        line-height: 2rem;
    }
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    width: 100%;
    padding-top: 35px;
    
    button {
        width: 200px;
    }
    
    @media screen and (min-width: 480px) {
        flex-direction: row;
        justify-content: space-evenly;
    }

`;

const Cta = () => {
    return (
        <>
            <Container>
                <div class="cta-container-width">
                    <Top>
                        <h2>Transform Savings into a Great Wealth</h2>
                        <h6>One morning when Gregor Samsa woke from troubled</h6>
                    </Top>
                    <Bottom>
                        <button><IoChatboxEllipses className='icon-medium'/>Free Consultation</button>
                        <button className='icon-transparent'><IoChatboxEllipses className='icon-medium'/>202-555-0167</button>
                    </Bottom>
                </div>
            </Container>
        </>
    )
}

export default Cta;