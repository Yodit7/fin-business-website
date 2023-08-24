import { styled } from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
    background: linear-gradient(to right, var(--clr-btn), rgb(128, 59, 240));
    display: flex;
    flex-direction: column;
    padding: 65px 35px;

    @media screen and (min-width: 768px) {
        .container-width {
            max-width: 600px;
            margin: 0 auto;
        }
    }

    @media screen and (min-width: 1024px) {
        .container-width {
            max-width: 1200px;
            margin: 0 auto;
        }
    }
`;

const Headline = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    text-align: center;
    color: white;
    padding: 25px 0px;

    h2 {
        font-size: 30px;
        font-weight: 500;
    }

    h4 {
        font-size: 20px;
        font-weight: 300;
        line-height: 2rem;
    }

    @media screen and (min-width: 1024px) {
        max-width: 600px;
        width: 100%;
        padding: 50px 0px;
        margin: 0 auto;

        h2 {
            font-size: 40px;
        }
    }


`;

const ExpertiseBoxes = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;


    @media screen and (min-width: 1024px) {
        flex-direction: row;
        
    }
`;

const ExpertiseBox = styled.div`
    background: white;
    border-radius: 10px;
    height: 225px;
    max-width: 275px;
    width: auto;

    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 45px;
    
    img {
        height: 50px;
    }

    h6 {
        font-size: 18px;
        font-weight: 600;
        color: var(--clr-heading);
    }

    p {
        font-size: 14px;
        text-align: center;
        line-height: 1.8rem;
        font-weight: 500;
        color: var(--clr-text)
    }

    @media screen and (min-width: 1024px) {
        max-width: 400px;
        width: 100%;
        height: 100%;
        padding-top: 35px;
        padding-bottom: 35px;
        align-items: start;

        p {
            text-align: start;
        }
    }

`;

const Expertise = () => {

    return (
        <>
            <Container>
                <div className="container-width">
                <Headline>
                    <h2>We’re the best Financial Investment Consultants</h2>
                    <h4>One morning when Gregor Samsa woke from troubled dreams, 
                    he found himself transformed in his bed into a horrible 
                    vermin.</h4>
                </Headline>
                <ExpertiseBoxes>
                    <ExpertiseBox>
                        <img src="../src/assets/financial-planning.svg" alt="" />
                        <h6>Financial Planning</h6>
                        <p>One Morning when Gregor Samsa woke from troubled dreams,
                            he found dreams, he found himself transformed.
                        </p>
                    </ExpertiseBox>
                    <ExpertiseBox>
                        <img src="../src/assets/tax-funds.svg" alt="" />
                        <h6>Tax Saving Mutual Funds</h6>
                        <p>One Morning when Gregor Samsa woke from troubled dreams,
                            he found dreams, he found himself transformed.
                        </p>
                    </ExpertiseBox>
                    <ExpertiseBox>
                        <img src="../src/assets/family-wealth.svg" alt="" />
                        <h6>Family Wealth Management</h6>
                        <p>One Morning when Gregor Samsa woke from troubled dreams,
                            he found dreams, he found himself transformed.
                        </p>
                    </ExpertiseBox>
                </ExpertiseBoxes>
                </div>
            </Container>
        </>
    )
}

export default Expertise;