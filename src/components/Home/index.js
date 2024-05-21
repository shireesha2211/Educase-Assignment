import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import {
  RiNewspaperLine,
  RiNotification4Line,
  RiFilter3Fill,
  RiSearchLine,
  RiHome4Fill,
} from 'react-icons/ri'
import {FaInternetExplorer} from 'react-icons/fa'
import {BsBookmark} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {BiTimeFive} from 'react-icons/bi'

import './index.css'

class Home extends Component {
  state = {
    newsData: [],
    trendingNews: [],
  }

  componentDidMount() {
    this.getNewsData()
  }

  getNewsData = async () => {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=b6f1b92ad0a4483e876730bf78f8d449',
    )
    const data = await response.json()
    console.log(data)
    this.setState({newsData: data.articles, trendingNews: data.articles[0]})
  }

  renderLogo = () => (
    <div className="header-card">
      <h1 className="logo-card">
        Ka
        <RiNewspaperLine className="icon" />
        ar
      </h1>
      <RiNotification4Line className="notification-icon" />
    </div>
  )

  renderSearchBar = () => (
    <div className="search-card">
      <div>
        <RiSearchLine className="search-icon" />
        <input type="search" className="search-bar" placeholder="Search" />
      </div>
      <RiFilter3Fill className="filter-icon" />
    </div>
  )

  renderTrendingCard = () => {
    const {newsData, trendingNews} = this.state
    console.log(newsData[0])
    console.log(trendingNews)

    return (
      <>
        <div className="trending-card">
          <h1 className="trending-heading">Trending</h1>
          <p className="card-des">See all</p>
        </div>
        <div className="trending-news">
          <img className="trending-image" src={trendingNews.urlToImage} />
          <h1 className="news-detail-card-category">{trendingNews.author}</h1>
          <h1 className="news-detail-heading">{trendingNews.title}</h1>
          <div className="time-detail-card">
            <div className="time-detail-card">
              <BiTimeFive />
              <p className="time">{trendingNews.publishedAt}</p>
            </div>
            <a href={trendingNews.url} className="anchor-element">
              ...
            </a>
          </div>
        </div>
      </>
    )
  }

  renderLatestNewsCard = () => {
    const {newsData} = this.state

    return (
      <>
        <div className="trending-card">
          <h1 className="trending-heading">Latest</h1>
          <p className="card-des">See all</p>
        </div>
        <div className="category-card">
          <p className="category-item active-category">All</p>
          <p className="category-item">Sports</p>
          <p className="category-item">Politics</p>
          <p className="category-item">Bussiness</p>
          <p className="category-item">Health</p>
          <p className="category-item">Travel</p>
          <p className="category-item">Science</p>
          <p className="category-item">Fashion</p>
        </div>
        {newsData.map(news => (
          <div className="news-card" key={news.id}>
            <img className="news-card-img" src={news.urlToImage} />
            <div className="news-detail-card">
              <h1 className="news-detail-card-category">{news.author}</h1>
              <h1 className="news-detail-heading">{news.title}</h1>
              <div className="time-detail-card">
                <p className="channel">{news.source.name}</p>
                <div className="time-detail-card">
                  <BiTimeFive />
                  <p className="time">{news.publishedAt}</p>
                </div>
                <a href={news.url} className="anchor-element">
                  ...
                </a>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }

  renderFooterSection = () => (
    <div className="footer-card">
      <div className="icon-card active-card">
        <RiHome4Fill className="footer-icon" />
        <h1 className="footer-heading">Home</h1>
      </div>
      <div className="icon-card">
        <FaInternetExplorer className="footer-icon" />
        <h1 className="footer-heading">Explore</h1>
      </div>
      <div className="icon-card">
        <BsBookmark className="footer-icon" />
        <h1 className="footer-heading">Bookmark</h1>
      </div>
      <button
        type="button"
        className="profile-button"
        onClick={this.onViewProfile}
      >
        <div className="icon-card">
          <CgProfile className="footer-icon" />
          <Link className="footer-heading link-element" to="/profile">
            Profile
          </Link>
        </div>
      </button>
    </div>
  )

  renderResult = () => (
    <div id="result">
      {this.renderLogo()}
      {this.renderSearchBar()}
      {this.renderTrendingCard()}
      {this.renderLatestNewsCard()}
      {this.renderFooterSection()}
    </div>
  )

  render() {
    return <>{this.renderResult()}</>
  }
}

export default withRouter(Home)
