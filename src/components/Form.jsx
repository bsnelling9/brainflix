import DisplayPic from '../assets/Images/Mohan-muruge.jpg';
import CommentIcon from '../assets/Icons/add_comment.svg';
import '../styles/components/Form.scss';

const CommentForm = () => {
    return(
        <>     
            <div className="comments__columnright">
                <form className="form" /*onSubmit={this.handleSumit}*/>
                    <div className='form__container'>
                        <label className="form__label" htmlFor="form__text">join the conversation</label>
                        <textarea className="form__comment"
                            name="text"
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

export default CommentForm;