import React from "react";

import Form  from '../Form/Form';
import CommentsCards from '../CommentCards/CommentsCards';
import DisplayPic from '../../assets/Images/Mohan-muruge.jpg';
import './Comments.scss'; 


export default function Comments(props) {

    const mappedComments = props.comment.length && props.comment.map((item) => {
        return( 
            <CommentsCards 
                key={item.id}
                author={item.name}
                comment={item.comment}
                likes={item.likes}
                time= {new Date(item.timestamp).toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"})}          
            />
        );
    });
    
    return (
        <section className="comments"> 
            <div className="comments__wrapper">
                <h3 className='comments__total'>{mappedComments.length} Comments</h3>
                <div className='comments__container'>
                    <div className="comments__columnleft">
                        <div className="comments__img">
                            <img src={DisplayPic} alt="Profile Pic" className="comments__display-pic"/>
                        </div>
                    </div>
                    <Form />
                </div>
                <div className='comments__list'>
                
                    {mappedComments}

                </div>
            </div>    
        </section>
    )
}
