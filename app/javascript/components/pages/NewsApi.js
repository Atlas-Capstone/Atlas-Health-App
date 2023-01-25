import React, { useEffect, useState } from "react"

const NewsApi = () => {
  const [news, setNews] = useState()
  useEffect(() => {
    fetchFitnessNews()
  }, [])
  const apiKey = process.env.REACT_APP_NEWS_API
  async function fetchFitnessNews() {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=fitness&apiKey=${apiKey}`
      )
      const data = await response.json()
      console.log(data)
      setNews(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {news?.articles.map((article, index) => (
        <div className="p-6" key={index}>
          <img src={article.urlToImage} alt="article image" />
          <h2 className="underline text-xl font-bold my-2">{article.title}</h2>
          <p className="mb-3">{article.description}</p>
          <a
            className="bg-teal-700 p-2 text-white rounded-full"
            href={article.url}
            target="_blank"
          >
            Link To Article
          </a>
        </div>
      ))}
    </div>
  )
}

export default NewsApi
