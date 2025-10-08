import Intro from '../../assets/Intro.mov'

export const Main = () => {
  return (
    <main>
      <div>
        <video src={Intro} autoPlay loop muted></video>
      </div>
    </main>
  )
}
