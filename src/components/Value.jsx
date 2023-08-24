import {styled} from 'styled-components';
import { IoChatboxEllipses, IoArrowUpSharp, IoCheckmarkSharp } from "react-icons/io5";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 65px 35px;
    background: white;

    .value-container-width {
        max-width: 500px;
    }

    @media screen and (min-width: 768px) {
        .value-container-width {
            max-width: 500px;
            margin: 0 auto;
        }
    }
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 35px;
    align-items: center;

    h2 {
        font-size: 30px;
        font-weight: 600;
        color: var(--clr-heading);
        padding-top: 35px;
    }

    h4 {
        color: var(--clr-text);
        font-weight: 500;
        font-size: 18px;
        line-height: 2rem;
        padding: 15px 0px;
    }

    button {
        margin: 50px 0px;
    }

    img {
        max-width: 400px;
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: 1024px) {
        max-width: 1000px;
        width: 100%;
        gap: 55px; 
        margin: 0 auto;
        flex-direction: row-reverse;
        justify-content: center;

        img {
            max-width: 400px;
            width: 100%;
        }
    }
`;

const Values = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;

    padding: 30px 0px;
`;

const ValueItem = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    color: var(--clr-heading);

    .icon-bg-circle {
        background: var(--clr-accent);
        border-radius: 20px;
        padding: 6px 5px;
        height: 15px;
    }
`;

const Value = () => {
    return (
        <>
        <Container>
            <Top>
                <div class="value-container-width">
                    <h2>Manage your Investment Plan with best Advisors</h2>
                    <h4>One morning when Gregor Samsa woke from troubled 
                        dreams, he found himself transformed in his bed into 
                        a horrible vermin.</h4>
                    <Values>
                        <ValueItem>
                            <span className='icon-bg-circle'><IoCheckmarkSharp className='icon-center'/></span> Integrity and Honesty
                        </ValueItem>
                        <ValueItem>
                            <span className='icon-bg-circle'><IoCheckmarkSharp /></span>  Quality Service
                        </ValueItem>
                        <ValueItem>
                            <span className='icon-bg-circle'><IoCheckmarkSharp /></span>  Promise to Customers
                        </ValueItem>
                        <ValueItem>
                        <   span className='icon-bg-circle'><IoCheckmarkSharp /></span>  Diversity and Inclusion
                        </ValueItem>
                    </Values>
                    <button><IoChatboxEllipses className='icon-medium'/>Free Consultation</button>

                </div>
                <img src="../images/value-image.png" alt="" />
            </Top>
        </Container>
        </>
    )
}

export default Value;