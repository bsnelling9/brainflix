import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import DisplayPic from '../assets/Images/Mohan-muruge.jpg';
import CommentIcon from '../assets/Icons/add_comment.svg';
import '../styles/components/Form.scss';


export default function CommentForm() {

    const {value, handleSubmit, error} = useForm();

    const onSubmit = data => {
        console.log(data);
        
    }

    return(
        <>     
            <div className="comments__columnright">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className='form__container'>
                        <label className="form__label" htmlFor="form__text">join the conversation</label>
                        <input className="form__comment"
                            name="text"
                            type="text"
                            placeholder="Add a new comment"
                            ref={value}
                            required
                        /> 
                    </div>
                    <button className="btn" type="submit">
                        <img className='btn__ico' src={CommentIcon} alt='upload icon'/>
                        <span className='btn__text'>comment</span>
                    </button>
                </form>
            </div>   
        </>
    )
}

