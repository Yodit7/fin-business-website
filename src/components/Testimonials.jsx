import { styled } from 'styled-components';
import {useState} from 'react'; 
import { IoStar, IoStarOutline, IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";

const Container = styled.div`
    background: linear-gradient(to right, var(--clr-btn), rgb(128, 59, 240));
    padding: 65px 20px;
    color: white;
`;

const Headline = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    color: white;

    h6 {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
    }

    h2 {
        font-size: 32px;
        font-weight: 500;
    }
`;
const Testimonialtem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding-top: 50px;
    max-width: 500px;
    margin: 0 auto;

    img {
        width: 160px;
    }
`;

const Comment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 2.5rem;
    text-align: center;
`;

const CommentBody = styled.div`
    text-align: center;
`;

const CommentFooter = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const Name = styled.p`
    font-weight: 700;
`;

const Stars = styled.div`
    font-weight: 100;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 15px;

    div {
        display: flex;
        gap: 6px;
    }
`;

const Karusel = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 35px;
    gap: 35px;

    .icon-circle {
        background: rgb(128, 59, 255);
        padding: 8px;
        border-radius: 22px;
        font-size: 24px;
    }

    .icon-circle:hover {
        color: black;
        background: white;
        cursor: pointer;
    }
`;

const Testimonials = () => {

    const [testimonals, setTestimonials] = useState([
        {
            avatar: "../images/testimonial-portrait-1.png",
            comment: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which enjoy with my whole",
            name: "Adam Fisher",
            stars: "4.6"
        }
    ])

    return (
        <>
            <Container>
                <Headline>
                    <h6>Testimonials</h6>
                    <h2>Words from clients</h2>
                </Headline>
                {testimonals.map((testimonial, index) => (
                    <Testimonialtem key={index}>
                        <img src={testimonial.avatar} alt=""/>
                        <Comment>
                            <CommentBody>”{testimonial.comment}“</CommentBody>
                            <CommentFooter>
                                <Name>{testimonial.name}</Name>
                                <Stars>
                                    {testimonial.stars}
                                    <div>
                                        <IoStar className="icon-clr-accent"/>
                                        <IoStar className="icon-clr-accent"/>
                                        <IoStar className="icon-clr-accent"/>
                                        <IoStar className="icon-clr-accent"/>
                                        <IoStarOutline />
                                    </div>
                                </Stars>
                            </CommentFooter>
                        </Comment>
                    </Testimonialtem>
                ))}
                <Karusel>
                    <IoChevronBackSharp className="icon-circle"/>
                    <IoChevronForwardSharp className="icon-circle"/>
                </Karusel>

            </Container>
        </>
    )
}

export default Testimonials;