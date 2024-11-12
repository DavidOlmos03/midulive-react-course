export function App() {
  return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar" 
            src="https://davidolmos-portfolio.netlify.app/assets/imgs/avatar.jpeg" 
            alt="The avatar of Juan David Ruiz" 
            />
            <div className="tw-followCard-info">
                <strong>Juan David Ruiz</strong>
                <span 
                    className="tw-followCard-infoUserName"
                >@juandavidruiz</span>
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