import React, { useState, useEffect } from 'react'
import Newsitems from './Newsitems';



function NewsCard(props) {

    const [articles, setArticles] = useState([])
    const max = 1;
    const apiKey = process.env.REACT_APP_NEWS_API

    const updateNews = async () => {
        const url = `https://gnews.io/api/v4/top-headlines?&apikey=${apiKey}&max=${max}&country=in&category=general`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)

    }
    useEffect(() => {
        updateNews();

    }, [])

    return (
        <>
            {articles.map((element) => {
                return <div key={element.url}>
                    <Newsitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.image} date={element.publishedAt} />
                </div>
            })}

        </>
    )



}

export default NewsCard