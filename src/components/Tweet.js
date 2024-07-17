import { faCircleCheck, faComment, faHeart, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tweet = ({tweet}) => {
    return (
        <div className="tweet-container">
            <div className="tweet-left-container">
                <div className="tweet-profile-pic-container">
                    <img className="tweet-profile-pic" src="/2559829618857443200_IMG_4424.jpg" alt="Profile"/>
                </div>
            </div>

            <div className="tweet-right-container">
                <div className="tweet-user-info-container">
                    <span>Antonio Luque Lao <FontAwesomeIcon style={{ color: "white" }} icon={faCircleCheck} /> <span style={{color: "gray"}}>@antonioeleele</span></span>
                </div>

                <div className="tweet-text-container">
                    <p>{tweet.text}</p>
                </div>

                {tweet.images && <div className="tweet-picture-section">
                    <div className="tweet-picture-container">
                    <img className="tweet-picture" src={tweet.images} alt={tweet.images}/>
                    </div>
                </div>}

                {tweet.video && <div className="tweet-video-container">
                    <video className="tweet-video" width="600" controls>
          <source src={tweet.video} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
                </div>}

                <div className="tweet-likes-container">
                <span><FontAwesomeIcon icon={faComment} /> 23  </span>
                <span><FontAwesomeIcon icon={faRetweet} /> 4232  </span>
                <span><FontAwesomeIcon icon={faHeart} /> 3223  </span>
                </div>
            </div>
        </div>
    )
}

export default Tweet;