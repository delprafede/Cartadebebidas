import { useAppStore } from "../stores/useAppStore"




const Home = () => {

  useAppStore((state)=> state.categories)

  return (
   <h1>inicio</h1>
  )
}

export default Home