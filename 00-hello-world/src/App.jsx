import { useReducer, useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCarrd";

const users = [
  { userName: "davidolmos", name: "Juan David Ruiz", isFollowing: true},
  { userName: "sebastianRclone", name: "Sebastian R. Clone", isFollowing: false},
  { userName: "anaZapata11", name: "Ana Zapata", isFollowing: false},
  { userName: "juliana21", name: "Juliana Perez", isFollowing: true } 
]

export function App() {
    const [isFollowing, setIsFollowing] = useState(false)
    const formatUserName = (userName) => `@${userName}`
    const userData = {userName: "davidolmos", name: "Juan David Ruiz"}
    const [name, setName] = useState("Juan David Ruiz") //This modified the state of name for the children
    const changeName = () => setName("Juan David Olmos")
    return (
    <section className="App">
       <TwitterFollowCard 
          formatUserName={formatUserName}
          {...userData}
          initialIsFollowing={true}
        />
       <TwitterFollowCard 
        formatUserName={formatUserName}
        userName="davidolmos"
        initialIsFollowing={true}
        >
            <strong>Juan David Ruiz</strong>
        </TwitterFollowCard>
       <TwitterFollowCard
        formatUserName={formatUserName}
        name={name}
        />
        {
          users.map(user => {
            const {userName, name, isFollowing} = user
            return (
              <TwitterFollowCard
                userName={userName}
                isFollowing={isFollowing}
                key={userName}
              >
                {name}
              </TwitterFollowCard>
            )
          })
        }
        <button onClick={changeName}>Change Name</button>
        <button onClick={() => setIsFollowing(!isFollowing)}>Change app state</button>
    </section> 
  )
}