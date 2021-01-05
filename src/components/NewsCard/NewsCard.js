import React,{useEffect,createRef} from 'react';
import { Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button} from '@material-ui/core';
import useStyles from './styles';
import classNames from 'classnames';


const Newscard = ({ articles: {description,publishedAt,source,title,url,urlToImage} , i,activArticle}) => {

    const classes = useStyles()

    const [elRefs, setElRefs] = React.useState([]);
    const scrollToRef = ref => window.scroll(0,ref.current.offsetTop - 50);
    useEffect( ()=>{
        setElRefs( refs => Array(20).fill().map( (_,j ) => refs[j] || createRef() ))
    },[])

    useEffect( ()=>{
        if(i === activArticle && elRefs[activArticle]){
            scrollToRef(elRefs[activArticle]);
        }
    },[i, activArticle, elRefs])

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, activArticle === i ? classes.activeCard:null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'}/>
                <div className={classes.details}>
                    <Typography variant="body2" component="h2" color="textSecondary">
                        {(new Date(publishedAt)).toDateString()}
                    </Typography>
                    <Typography variant="body2" component="h2" color="textSecondary">
                        {source.name}
                    </Typography>
                </div>
                    <Typography className={classes.title} gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <CardContent>
                        <Typography variant="body2" color="textPrimary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learne More</Button>
                <Typography variant="h5" color="textSecondary">
                    {i +1}
                </Typography>
            </CardActions>
        </Card>
    )
}


export default Newscard
