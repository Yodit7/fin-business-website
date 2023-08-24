import { styled } from "styled-components";
import { useState } from "react";

const Container = styled.div`
    background: white;
    padding: 65px 20px;

    .team-container-width {
        max-width: 500px;
        margin: 0 auto;
    }

    @media screen and (min-width: 1024px) {
        .team-container-width {
            max-width: 1000px;
            width: 100%;
        }
    }
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--clr-heading);

    h4 {
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
    }

    p {
        font-size: 18px;
        color: var(--clr-text);
        line-height: 1.8rem;
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        p {
            width: 550px;
            font-size: 22px;
            line-height: 2rem;
            padding-top: 30px;
        }

        .left-headline h1 {
            padding-top: 25px;
            font-size: 50px;
            font-weight: 600;

        }
    }
`;

const TeamMembers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 45px;
    
    .member-box {
        padding: 22px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    img {
        width: 340px;
    }

    h3 {
        color: var(--clr-heading);
        font-weight: 700;
    }

    h6 {
        color: var(--clr-text);
        font-weight: 400;
        font-size: 14px;
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 35px;
        margin: 0 auto;

        img {
            max-width: 300px;
            width: 100%;
        }
    }

`;

const Team = () => {

    const [members, setMembers] = useState([
        {
            portrait: "../images/team-member-1.png",
            name: "Justin Hammer",
            jobTitle: "Founder & CEO"
        },
        {
            portrait: "../images/team-member-2.png",
            name: "Clark Roberts",
            jobTitle: "Chief Finance Officer"
        },
                {
            portrait: "../images/team-member-3.png",
            name: "Ashley Hardy",
            jobTitle: "VP Sales and Marketing"
        }
    ])

    return (
        <>
            <Container>
                <div className="team-container-width">
                    <Top>
                        <div className="left-headline">
                            <h4>Our Team</h4>
                            <h1>Looking for a best Financial Advisor?</h1>
                        </div>
                        <p>One morning when Gregor Samsa woke from troubled dreams, 
                        he found himself in his bed into a horrible vermin.</p>
                    </Top>
                    <TeamMembers>
                        {members.map((member, index) => (
                            <div className="member-box">
                                <img src={member.portrait} alt="" />
                                <h3>{member.name}</h3>
                                <h6>{member.jobTitle}</h6>
                            </div>
                        ))}
                    </TeamMembers>
                </div>
            </Container>
        </>
    )
}

export default Team;