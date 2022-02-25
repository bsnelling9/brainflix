import Form  from './Form';
import CommentsCards from './CommentsCards';
import DisplayPic from '../assets/Images/Mohan-muruge.jpg';
import '../styles/components/Comments.scss'; 

function Comments(props) {
       
    // const getcomments = props.comment;
    // console.log(getcomments);
    const mappedComments = props.comment.length && props.comment.map((item, index) => {
        return( 
            <CommentsCards 
                key={index}
                author={item.name}
                comment={item.comment}
                likes={item.likes}
                time={getDate(new Date(item.timestamp *1))}            
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
const getDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    //ternary oporators too add 0 infront of numbers < 10 so i dont have to do iff statements
    return `${month > 9 ? '': '0'}${month}/${day > 9 ? '': '0'}${day}/${year}`
}
export default Comments;