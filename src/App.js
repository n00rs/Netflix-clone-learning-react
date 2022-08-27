// import Navbar from "./components/navBar/navBar"

import Navbar from "./components/Navbar/Navbar"
import './app.css'
import Banner from "./components/Banner/Banner"
import MovieRow from "./components/MovieRow/MovieRow"
import { URL_ACTION_MOVIES, URL_COMEDY_MOVIES, URL_DOCUMENTARIES, URL_HORROR_MOVIES, URL_NETFLIX_ORGINALS, URL_ROMANCE_MOVIES, URL_THRILLER_MOVIES, URL_WESTERN_MOVIES } from "./constants/constants"
 
function App() {
  return (
    <>

      <Navbar />
      <Banner />
      <MovieRow title='NETFLIX ORGINALS 'url= {URL_NETFLIX_ORGINALS} />
      <MovieRow title='ACTIONS' isSmall url= {URL_ACTION_MOVIES} />
      <MovieRow title='COMEDY' isSmall url= {URL_COMEDY_MOVIES} />
      <MovieRow title='WESTERN' isSmall url= {URL_WESTERN_MOVIES}/>
      <MovieRow title='THRILLER' isSmall url= {URL_THRILLER_MOVIES} />
      <MovieRow title='DOCUMENTARIES' isSmall url= {URL_DOCUMENTARIES} />

    </>
  )
}

export default App