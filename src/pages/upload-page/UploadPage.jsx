import React, { Component }  from 'react';
import PublishIcon from '../../assets/Icons/publish.svg';
import './UploadPage.scss';


export default class UploadPage extends Component {

    render() {
        return (
            <section className='upload'>
                <div className='upload__wrapper'>
                    <h2 className='upload__title'>Upload Video</h2>
                    <div className='upload__container'>
                        <div className='upload__container--thumbnail'>
                            <div className='upload__imgcontainer'>
                                <img className='thumbnail' src='../../assets/Images/Upload-video-preview.jpg'/>
                            </div>
                        </div>
                        <div className='upload__container--form'>
                            <form action="post" className='upload__form'>
                                <label className='form__label' htmlFor='video-title'>title your video</label>
                                <input
                                    className='form__text'
                                    name='video-title'
                                    placeholder='Add a title to your video'
                                    required
                                />
                                <label className="form__label" htmlFor="text">add a video description</label>
                                <input className="form__comment"
                                    name="text"
                                    type="text"
                                    placeholder="Add a description to your video"
                                    required
                                />
                                <button className="btn" type="submit">
                                    <img className='btn__ico' src={PublishIcon} alt='upload icon'/>
                                    <span className='btn__text'>publish</span>
                                </button> 
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}