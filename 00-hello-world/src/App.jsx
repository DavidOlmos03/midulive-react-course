import { TwitterFollowCard } from "./TwitterFollowCarrd";
export function App() {
    const formatUserName = (userName) => `@${userName}`
  return (
    <section className="App">
       <TwitterFollowCard
        formatUserName={formatUserName}
        userName="davidolmos"
        name="Juan David Ruiz"
        isFollowing={false}
        />
       <TwitterFollowCard 
        formatUserName={formatUserName}
        userName="davidolmos"
        name="Juan David Ruiz"
        isFollowing
        />
       <TwitterFollowCard 
        formatUserName={formatUserName}
        userName="davidolmos"
        name="Juan David Ruiz"
        isFollowing={false}
        />
    
    </section>
  
  )
}