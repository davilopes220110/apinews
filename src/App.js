import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);
  

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=br&apiKey=db7edc8529f9484389aa240a5e114d16')
      .then(response => {
        setNews(response.data.articles);
        console.log(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>PORTAL DAS NOTÍCIAS</h1>
      </header>
      <div className="card-container">
      {news.map(article => {
  console.log(article.urlToImage); 
  return (
    <div className="card" key={article.title}>
      <img src={article.urlToImage ? article.urlToImage : process.env.PUBLIC_URL + '/news11.png'} alt={article.title} />

      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Saiba mais</a>
    </div>
  );
})}

</div>
    </div>
  );
}

export default App;

