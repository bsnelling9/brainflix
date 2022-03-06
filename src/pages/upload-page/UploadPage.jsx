import React, { Component } from 'react';
import PublishIcon from '../../assets/Icons/publish.svg';
import Thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import './UploadPage.scss';

export default class UploadPage extends Component {

    state = {
        title: '',
        text: ''
    }
    /*
    checks to see if the text field is valid, if not validatetext is set to true
    which sets a red error border around the form field. Else return true to isFormValid and no error border
    */
    isTextValid = () =>{
        if(!this.state.text){
            this.setState({validate: true});
            return false
        }
        else{
            this.setState({validate: false});
            return true
        }  
    }
    /*
    checks to see if the title field is valid, if not validateTitle is set to true
    which sets a red error border around the form field.  Else return true to isFormValid and no error border
    */
    isTitleValid = () => {
        if(!this.state.title){
            this.setState({validateTitle: true});
            return false;
        }
        else{
            this.setState({validateTitle: false});
            return true
        }
    }
    /*
    checks to see if all form fields are filled out
    returns true or false to handle submit
    */
    isFormValid() {
        this.isTextValid();
        this.isTitleValid();
        if (!this.isTextValid() || !this.isTitleValid()) {
            return false
        }
        return true  
    }

    /*
    handles the change of title field and class title validation, so if the error is fixed 
    it will remove red border
    */
    handleChangeTitle = event => {
        event.preventDefault();
        this.setState({
            title: event.target.value
        })
        this.isTitleValid();
    }
    /*
    same as above but for text field
    */
    handleChangeText = event => {
        event.preventDefault();
        this.setState({
            text: event.target.value
        })
        this.isTextValid();
    }

    /*
    handles submit calls form validate function
    if form validate function returns true. redirects user to home page
    */
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.isFormValid()) {
            this.isFormValid();
        }
        else {
            window.location.href= "/";
        }
    };

    render() {
        return (
            <section className='upload'>
                <div className='upload__wrapper'>
                    <h2 className='page-title'>Upload Video</h2>
                    <div className='upload__container'>
                        <form method="post" className='form upload__form' onSubmit={this.handleSubmit}>
                            <div className='upload__form--container'>
                                <div className='upload__container--thumbnail'>
                                    <label htmlFor='thumbnail' className='form__label'>video thumbnail</label>
                                    <img className='thumbnail' src={Thumbnail}/>
                                </div>
                                <div className='upload__content'>
                                    <div className='upload__input'>
                                        <label className='form__label' htmlFor='title'>title your video</label>
                                        <input
                                            className={this.state.validateTitle ? 'error form__text upload__form--text' : 'form__text upload__form--text'}
                                            name='title'
                                            placeholder='Add a title to your video'
                                            onChange={this.handleChangeTitle}
                                        />
                                    </div>
                                    <div className='upload__description'>
                                        <label className="form__label" htmlFor="text">add a video description</label>
                                        <textarea className={this.state.validate ? 'error upload__textarea upload__form--text' : 'upload__textarea upload__form--text'} 
                                            name="text"
                                            type="text"
                                            placeholder="Add a description to your video"
                                            autoComplete='off'
                                            onChange={this.handleChangeText}
                                        />
                                    </div>
                                </div> 
                            </div>
                            <div className='button__container'>
                                <a className='cancel__btn btn-not-mobile' href='/'>
                                    cancel
                                </a>
                                <button className="btn upload__btn" type="submit">
                                    <img className='btn__ico' src={PublishIcon} alt='upload icon'/>
                                    <span className='btn__text'>publish</span>
                                </button> 
                            </div>
                            <a className='cancel__btn btn-mobile' href='/'>
                                cancel
                            </a>
                        </form>
                    </div>
                </div>
            </section>  
        );
    }
}