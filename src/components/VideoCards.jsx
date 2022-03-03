import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/VideoCards.scss';


export default class VideoCards extends Component {

    render() {
        
        return (
            <Link to={`/videos/${this.props.id}`} className='video-link'>
                <div className='video-card'>
                    <div className='video-card__leftcolumn'>
                        <div className='video-card__container'>
                            <img className='video-card__img' src={this.props.image} alt='queue poster'/>
                        </div>
                    </div>
                    <div className='video-card__rightcolumn'>
                        <h3 className='subheader'>
                            {this.props.title}
                        </h3>
                        <p className='body-text'>
                            {this.props.channel}
                        </p>
                    </div>
                </div>     
            </Link>
        )
    }
}




