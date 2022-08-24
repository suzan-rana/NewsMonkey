import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        category : "general"
    }

    static propTypes = {
        category : PropTypes.string
    }
   
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1, 
            totalArticles:100,
            pageNumber:1

        }
    }
// hello world and thsi si my keyboard 
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?apiKey=ee48bf965a8147e7b1fba1946e15fbdf&pageSize=8&page=${this.state.pageNumber}&category=${this.props.category}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles
        })
    }

    fetchData = async (pageNumber) => {
        let url = `https://newsapi.org/v2/top-headlines?apiKey=ee48bf965a8147e7b1fba1946e15fbdf&pageSize=8&page=${this.state.pageNumber}&category=${this.props.category}`
        let data = await fetch(url);
        let parsedData = await data.json();
        return parsedData;
    }

     handlePrevious = async () => {
        this.setState({
            page: this.state.page - 1
        })

        const parsedData = await this.fetchData(this.state.page)

        this.setState({
            articles : parsedData.articles
        })
        
        console.log(this.state.page, "previousButton")
        
    }
    
     handleNext = async () => {
        this.setState({
            page: this.state.page + 1
        })

        console.log("next")
        const parsedData = await this.fetchData(this.state.page)

        this.setState({
            articles : parsedData.articles
        })
        console.log(this.state.page, "nextButton")
        
    }

    checkLastPage = () => {
        if( this.state.page == Math.ceil( this.state.totalArticles / 8)) {
            return true;
        }
        else return false;
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title == null ? " " : element.title.slice(0, 45)} description={element.description == null ? " " :element.description.slice(0, 80)} publishedAt={element.publishedAt.toLocaleString()}imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    }
                    )
                    }


                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={ this.state.page == 1 } type="button" onClick={this.handlePrevious} className="btn btn-danger">Previous</button>
                    <button 
                        disabled={this.state.page === Math.ceil( this.state.totalArticles / 8)? true: false}
                     type="button"
                     onClick={this.handleNext} className="btn btn-danger">Next</button>
                </div>
                
            </div>

        )
    }
}
