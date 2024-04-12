import '../assets/css/global.css';
import '../assets/css/Home.css'
import {useNavigate} from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    return (

        <div className="body home-page">
            <section className="welcome-text-container">
                <div className="welcome-text">Discover Your Next Favourite Read With Our Curated Selection of Books...
                </div>
                <div className="description">
                    <p>
                        Welcome to PaperPulse, where every page holds the heartbeat of a thousand stories. Join us on a
                        journey where each book is a note. Your next favourite story awaits at PaperPulse - where the
                        love for books pulses through every page...
                    </p>
                </div>
                <div className="explore-now">
                    <button className="explore-now-button" onClick={() => navigate("/categories/name/Best Sellers")}>
                        <label className="explore-now-text"> Shop Now</label>
                    </button>
                </div>
            </section>
            <section>
                <div className="hero-image">
                    <img
                        src={require('../assets/images/site/_12-Reasons-Reading-Can-Be-An-Excellent-Idea-For-Your-Employees 1.png')}
                        alt="Hero Image"
                    />
                </div>
            </section>
            <section className="hidden-gem">
                <div className="hidden-gem-container">
                    <div className="hidden-gem-text">
                        <label className="title">Hidden Gem of The Day</label>
                        <div className="book-info">
                            <label className="book-title">Notebooks of a Wandering Monk</label>
                            <label className="author">Matthieu Ricard</label>
                            <br/>
                            <p className="description">The memoirs of renowned Buddhist monk Matthieu Ricard and his
                                extraordinary journey toward inner freedom and compassion in action.</p>
                        </div>
                    </div>
                    <div className="hidden-gem-image">
                        <img
                            src={require('../assets/images/site/81JIC8xLy7L._SY466_.jpg')}
                            alt="Hidden Gem Book"
                        />
                    </div>
                </div>
            </section>
            <section className="client-testimonials">
                <div className="client-testimonials-container">
                    <div className="title-container">
                        <label className="title">CLIENT TESTIMONIALS</label>
                    </div>
                    <div className="stars-quotes-icons-container">
                        <div className="quotes-container">
                            <svg width="26" height="38" viewBox="0 0 26 38" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.9127 6.24617V0.0820312C11.7538 0.0820312 0.236084 8.37707 0.236084 18.5743V37.0666H25.9127V18.5743H8.79501C8.79501 11.7767 16.4742 6.24617 25.9127 6.24617Z"
                                    fill="#F4F5F4"/>
                            </svg>
                            <svg width="26" height="38" viewBox="0 0 26 38" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.9127 6.24617V0.0820312C11.7538 0.0820312 0.236084 8.37707 0.236084 18.5743V37.0666H25.9127V18.5743H8.79501C8.79501 11.7767 16.4742 6.24617 25.9127 6.24617Z"
                                    fill="#F4F5F4"/>
                            </svg>
                        </div>
                        <div className="stars-container">
                            <svg width="24" height="24" viewBox="0 0 19 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.5 0L11.6329 6.90983H18.535L12.9511 11.1803L15.084 18.0902L9.5 13.8197L3.91604 18.0902L6.04892 11.1803L0.464963 6.90983H7.36712L9.5 0Z"
                                    fill="#FFDD33"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 19 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.5 0L11.6329 6.90983H18.535L12.9511 11.1803L15.084 18.0902L9.5 13.8197L3.91604 18.0902L6.04892 11.1803L0.464963 6.90983H7.36712L9.5 0Z"
                                    fill="#FFDD33"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 19 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.5 0L11.6329 6.90983H18.535L12.9511 11.1803L15.084 18.0902L9.5 13.8197L3.91604 18.0902L6.04892 11.1803L0.464963 6.90983H7.36712L9.5 0Z"
                                    fill="#FFDD33"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 19 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.5 0L11.6329 6.90983H18.535L12.9511 11.1803L15.084 18.0902L9.5 13.8197L3.91604 18.0902L6.04892 11.1803L0.464963 6.90983H7.36712L9.5 0Z"
                                    fill="#FFDD33"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 17 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.5 0L10.4084 6.56434H16.584L11.5878 10.6213L13.4962 17.1857L8.5 13.1287L3.50383 17.1857L5.41219 10.6213L0.416019 6.56434H6.59163L8.5 0Z"
                                    fill="#D9D9D9"/>
                            </svg>
                        </div>
                    </div>
                    <div className="client-comments">
                        <label className="comments">"Thrilled with my ebook purchase! It exceeded my expectations.
                            Highly recommend!! “</label>
                        <br/>
                    </div>
                    <div className="client-info">
                        <hr className="partition-line"/>
                        <label className="client-name">Khaled Hosseini</label>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
