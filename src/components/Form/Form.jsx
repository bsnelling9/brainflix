import React from 'react';
import CommentIcon from '../../assets/Icons/add_comment.svg';
import './Form.scss';


export default function CommentForm() {

    return(
        <>     
            <div className="comments__columnright">
                <form className="form">
                    <div className='form__container'>
                        <label className="form__label" htmlFor="text">join the conversation</label>
                        <input className="form__text"
                            name="text"
                            type="text"
                            placeholder="Add a new comment"
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

