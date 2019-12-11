
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Button from '@material-ui/core/Button';
import BookButton from './BookButton'

function CardUI ({src, hoveredId, address, id, price, cardHover, cardExit, start_date, end_date}) {

 

  return (

    <div
    onMouseEnter={()=> cardHover(id)}
    onMouseLeave={()=> cardExit()}
    className={hoveredId=== id? 'card hover-state' : 'card base-state'} 
    >
   
   
       <div>
          <img src={src}></img>  
        </div>

       <div>{address}</div>
       <div className="last-div-card">
         <div>£{ parseFloat(price).toFixed(2)} </div>
          <div>
          <BookButton id={id} price={price} start_date={start_date} end_date={end_date}/>
          </div>
       
       </div>
   
   </div>
  )
}

export default CardUI;