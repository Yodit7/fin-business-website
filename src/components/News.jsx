import { styled } from "styled-components";
import { useState } from "react";

const Container = styled.div`
    padding: 65px 20px;
    align-items: start;
    gap: 20px;
`;

const Headline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--clr-heading);
    gap: 15px; 

    h2 {
        font-size: 30px;    
    }

    h6 {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        padding: 10px 0px;
    }
`;

const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px 0px;


    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: 50px 0px;
        margin: 0 auto;
    }
`;

const NewsItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    width: 335px;
    height: 300px;
    border-radius: 10px;
    gap: 15px;

    img {
        width: 335px;
        height: auto;

    }

    p {
        font-weight: 400;
        font-size: 16px;
    }

    h4 {
        color: var(--clr-heading);
        font-size: 20px;
        text-align: center;
    }
`;


const News = () => {

    const [news, setNews] = useState([
        {
            image: "../images/news-1.png",
            date: "October 26, 2022",
            title: "How it works to make better financial life"
        },
        {
            image: "../images/news-2.png",
            date: "October 26, 2022",
            title: "How it works to make better financial life"
        },
        {
            image: "../images/news-3.png",
            date: "October 25, 2022",
            title: "Choosing the best investment options for wealth?"
        },
    ])

    return (
        <>
            <Container>
                <Headline>
                    <h2>News and Events</h2>
                    <h6>When Gregor Samsa woke from troubled</h6>
                </Headline>
                <NewsContainer>
                    {news.map((newsItem, index) => (
                        <NewsItem>
                            <img src={newsItem.image} alt="" />
                            <p>{newsItem.date}</p>
                            <h4>{newsItem.title}</h4>
                        </NewsItem>
                    ))}
                </NewsContainer>
            </Container>
        </>
    )
}

export default News;