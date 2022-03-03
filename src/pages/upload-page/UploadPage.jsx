import React, { Component }  from 'react';
import PublishIcon from '../../assets/Icons/publish.svg';
import Thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import './UploadPage.scss';


export default class UploadPage extends Component {

    render() {
        return (
            <section className='upload'>
                <div className='upload__wrapper'>
                    <h2 className='page-title'>Upload Video</h2>
                    <div className='upload__container'>
                        <div className='upload__container--thumbnail'>
                        <label htmlFor='thumbnail' className='form__label'>video thumbnail</label>
                            <div className='upload__imgcontainer'>
                                <img className='thumbnail' src={Thumbnail}/>
                            </div>
                        </div>
                        <div className='upload__container--form'>
                            <form action="post" className='form upload__form'>
                                <label className='form__label' htmlFor='video-title'>title your video</label>
                                <input
                                    className='form__text upload__form--text'
                                    name='video-title'
                                    placeholder='Add a title to your video'
                                    required
                                />
                                <label className="form__label" htmlFor="text">add a video description</label>
                                <input className="form__text upload__form--text"
                                    name="text"
                                    type="text"
                                    placeholder="Add a description to your video"
                                    required
                                />
                                <div className='button__container'>
                                    <button className='cancel__btn btn-not-mobile'>
                                        cancel
                                    </button>
                                    <button className="btn upload__btn" type="submit">
                                        <img className='btn__ico' src={PublishIcon} alt='upload icon'/>
                                        <span className='btn__text'>publish</span>
                                    </button> 
                                </div>
                                <button className='cancel__btn btn-mobile'>
                                    cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}