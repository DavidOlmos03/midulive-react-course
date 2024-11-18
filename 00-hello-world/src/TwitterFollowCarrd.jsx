export function TwitterFollowCard({children, formatUserName, userName, name, isFollowing}) {
    const imgSrc = "https://davidolmos-portfolio.netlify.app/assets/imgs/avatar.jpeg" 
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
            <button className="tw-followCard-button">
                Follow
            </button>
        </aside>
    </article>
  )
}