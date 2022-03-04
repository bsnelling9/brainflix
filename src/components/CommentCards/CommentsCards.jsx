import React, { Component } from 'react';

import './CommentCards.scss';

const CommentsCards = (props) =>{
    
    return (
        <div className='card'>
            <div className='card__wrapper'>
                <div className='card__leftcolumn'>
                    <div className='card__img'>
                        
                    </div>
                </div>
                <div className='card__rightcolumn'>
                    <div className='card__container'>
                        <h3 className='card__author'>
                            {props.author}
                        </h3>
                        <h3 className='card__time'>
                            {props.time}
                        </h3>
                    </div>
                    <p className='body-text'>
                        {props.comment}
                    </p>
                </div>
            </div>
        </div>     
    )  
}
export default CommentsCards;