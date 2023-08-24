import {styled} from 'styled-components';
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 65px 20px;
    max-width: 500px;
    margin: 0 auto;

    h2 {
        color: var(--clr-heading);
        font-size: 30px;
        font-weight: 600;
    }

    h4 {
        color: var(--clr-text);
        font-size: 18px;
        font-weight: 500;
        line-height: 1.8rem;
    }
`;

const BenefitsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-top: 25px;
    width: 100%;
`;

const BenefitItem = styled.div`
    background: white;
    border-radius: 10px;
    padding: 20px 25px;

    .box-hide {
        display: none;
    }

    .box-show {
        display: relative;
    }
`;

const BenefitHeadline = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    div {
        display: flex;
        gap: 15px;
    }

    h4 {
        font-weight: 600;
        font-size: 18px;
    }
`;

const BenefitBox = styled.p`
    line-height: 1.8rem;
    color: var(--clr-text);
    font-size: 14px;
    font-weight: 400;
    padding-top: 15px;

`;

const Benefits = () => {

    const [benefitsData, setBenefitsData] = useState([
        {
            icon: "../src/assets/pie-chart.svg",
            title: "Planning the Investment",
            content: "One morning when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
        },
        {
            icon: "../src/assets/file.svg",
            title: "Risk Evaluation on Investment",
            content: "One morning when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
        },
        {
            icon: "../src/assets/invest.svg",
            title: "Invest Money in the Market",
            content: "One morning when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
        },
    ])
    const [showBox, setShowBox] = useState(false);
    const [activeBoxIndex, setActiveBoxIndex] = useState(null);

    const handleBox = (index) => {
        setActiveBoxIndex(index === activeBoxIndex ? null : index);
        setShowBox(!showBox);
    }

    return (
        <>
            <Container>
                <h2>Benefits of Active Investing</h2>
                <h4>One morning when Gregor Samsa woke from troubled</h4>
                <BenefitsList>
                    {benefitsData.map((benefit, index) => (
                        <BenefitItem key={index}>
                            <BenefitHeadline>
                                <div>
                                    <img src={benefit.icon} alt="" />
                                    <h4>{benefit.title}</h4>
                                </div>
                                <div className="icon-container" onClick={() => handleBox(index)}>
                                    {activeBoxIndex === index ? (
                                        <IoChevronUpSharp className='icon' />
                                    ) : (
                                        <IoChevronDownSharp className='icon' />
                                    )}
                                </div>
                            </BenefitHeadline>
                            {activeBoxIndex === index && (
                                <BenefitBox className="box-show">
                                    {benefit.content}
                                </BenefitBox>
                            )}
                        </BenefitItem>
                    ))}
                </BenefitsList>
            </Container>
        </>
    )
}

export default Benefits;