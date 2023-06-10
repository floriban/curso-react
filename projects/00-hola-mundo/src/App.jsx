import { TwitterFollowCard } from './TwitterFollowCard.jsx' 
import './App.css'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard userName="midudev" name="Deddy Ibañez" />
      <TwitterFollowCard userName="pheralb" name="Pablo Hernandez" />
      <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
      <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
    </section>
  )
}