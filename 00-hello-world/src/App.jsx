import { TwitterFollowCard } from "./TwitterFollowCarrd";


export function App() {
    const formatUserName = (userName) => `@${userName}`
    const userData = {userName: "davidolmos", name: "Juan David Ruiz"}

    return (
    <section className="App">
       <TwitterFollowCard
          formatUserName={formatUserName}
          {...userData}
        />
       <TwitterFollowCard 
        formatUserName={formatUserName}
        userName="davidolmos"
       
        >
            <strong>Juan David Ruiz</strong>
        </TwitterFollowCard>
       <TwitterFollowCard
        formatUserName={formatUserName}
        name="Juan David Ruiz"
       
        />
    </section> 
  )
}