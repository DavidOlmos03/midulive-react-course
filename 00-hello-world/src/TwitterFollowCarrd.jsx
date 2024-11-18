import {useState} from "react";

export function TwitterFollowCard({children, formatUserName, userName = "unknown", name = "unknown"}) {
    
    const [isFollowing, setIsFollowing] = useState(false) 
    const text = isFollowing ? "Following" : "Follow"
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const imgSrc = "https://davidolmos-portfolio.netlify.app/assets/imgs/avatar.jpeg" 
    
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
                >{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handlerClick}>
                {text}
            </button>
        </aside>
    </article>
  )
}