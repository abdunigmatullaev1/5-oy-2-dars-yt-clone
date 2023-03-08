import { useState } from 'react'

import './App.scss'
import Header from './Components/Header/Header'
// import LinkSidebar from './Components/LinkSidebar/LinkSidebar'
import Sidebar from './Components/Sidebar/Sidebar'
import VideosCard from './Components/VideosCard/VideosCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      
      
      <div className="mainBody">
        <Sidebar />

        <div class="videos">
          <div class="videos__container">
            <VideosCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
