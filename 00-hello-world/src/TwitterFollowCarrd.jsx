import {useState} from "react";

export function TwitterFollowCard({children, formatUserName, userName = "unknown", name = "unknown", initialIsFollowing}) {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) 
    const text = isFollowing ? "Following" : "Follow"
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const imgSrc = "/00-hello-world/src/assets/imgs/artist-white.jpg" 
    
    const handlerClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar" 
            src = {imgSrc}  
            alt="The avatar of Juan David Ruiz" 
            />
            <div className="tw-followCard-info">
                <strong>{children || name}</strong>
                <span 
                    className="tw-followCard-infoUserName"
                >{formatUserName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handlerClick}>
                <span className="tw-followCard-text">{text}</span> 
                <span className="tw-followCard-stopFollow">Unfollow</span>
            </button>

        </aside>
    </article>
  )
}