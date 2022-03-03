import React, { Component, createRef } from 'react';
import PublishIcon from '../../assets/Icons/publish.svg';
import Thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import './UploadPage.scss';

export default class UploadPage extends Component {


    state = {
        title: '',
        text: ''
    }
    
    isFormValid(){
        if(!this.state.text) {
            this.setState({validate: true})
        }
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.isFormValid()) {
            alert("signed up");
        }else {
            alert("ouuf");
        }
    };

    render() {
        return (
            <section className='upload'>
                <div className='upload__wrapper'>
                    <h2 className='page-title'>Upload Video</h2>
                    <div className='upload__container'>
                        <form action="post" className='form upload__form' onSubmit={this.handleSubmit}>
                            <div className='upload__form--container'>
                                <div className='upload__container--thumbnail'>
                                    <label htmlFor='thumbnail' className='form__label'>video thumbnail</label>
                                    <div className='upload__imgcontainer'>
                                        <img className='thumbnail' src={Thumbnail}/>
                                    </div>
                                </div>
                                <div className='upload__content'>
                                    <label className='form__label' htmlFor='title'>title your video</label>
                                    <input
                                        className='form__text upload__form--text'
                                        name='title'
                                        placeholder='Add a title to your video'
                                        required
                                        onChange={this.handleChange}
                                    />
                                    <label className="form__label" htmlFor="text">add a video description</label>
                                    <input className={this.state.validate ? 'error form__text upload__form--text' : 'form__text upload__form--text'} 
                                        name="text"
                                        type="text"
                                        placeholder="Add a description to your video"
                                        
                                        autoComplete='off'
                                        onChange={this.handleChange}
                                    />
                                </div> 
                            </div>
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
            </section>
        );
    }
}