import React,{  useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './style'
import wordsToNumbers from 'words-to-numbers'
require('dotenv').config()




const key = "6b6df688a6bbeea96069bf7b25ab4e2f2e956eca572e1d8b807a3e2338fdd0dc/stage"
const App = () =>{
  const [newsArticles,setNewsArticles] = React.useState([])
  const [activArticle,setActivArticle] = React.useState(-1)
  const classes = useStyles()

  useEffect( ()=> {
    alanBtn({

      key:key,
      onCommand: ({ command ,articles, number}) => {
        if(command === "newHeadlines"){
          setNewsArticles(articles);
          setActivArticle(-1);
        }
        else if(command === "highlight"){
          setActivArticle( prevAvtiveArticle => prevAvtiveArticle +1 )
        }
        else if(command === "open"){
          const parseNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
          const article = articles[parseNumber -1]

          if(parseNumber >20 ){
            alanBtn().playText('Please try again')
          }
          else if (articles){
            alanBtn().playText('Opening...')
            window.open(article.url, '_blank');

          }
          
        }
        
      }

    })
  },[] )
  const alanLogoSrc = 'https://alan.app/voice/images/previews/preview.jpg';
  return(
    <div>
      <div className={classes.logoContainer}>
        <img src={alanLogoSrc} className={classes.alanLogo} alt="alan logo"/>
      </div>
      <NewsCards articles={newsArticles} activArticle={activArticle} />
    </div>
  );
}

export default App;