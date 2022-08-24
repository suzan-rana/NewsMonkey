import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description,publishedAt, imageUrl, newsUrl } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title">{title} ...</h4>
                            <h6>{publishedAt}</h6>
                            <p className="card-text">{description} . . .</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}
