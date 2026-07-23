//-----IMPORTS-----//
// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

//COMPONENTS
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

//PAGES
import Home from './pages/Home.jsx'
import Lineup from './pages/Lineup.jsx'
// import Experience from './pages/Experience.jsx'
// import Info from './pages/Info.jsx'
// import Map from './pages/Map.jsx'
// import Merch from './pages/Merch.jsx'
// import Tickets from './pages/Tickets.jsx'

//CSS
import 'normalize.css'
import './App.css'



//-----EXPORTS-----//
function App() {
  // const [count, setCount] = useState(0)

  return (

    <div className="App">

      {/*----- NAV -----*/}
      <Nav />

      {/*----- CONTENT WRAPPER -----*/}
      <main className="content-wrapper">

        {/*----- ROUTES -----*/}
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
          path="/lineup"
          element={<Lineup />}
        />

        {/* <Route
          path="/experience"
          element={<Experience />}
        />

        <Route
          path="/info"
          element={<Info />}
        />

        <Route
          path="/map"
          element={<Map />}
        />

        <Route
          path="/merch"
          element={<Merch />}
        />

        <Route
          path="/tickets"
          element={<Tickets />}
        /> */}

        </Routes>

      </main>

      {/*----- FOOTER -----*/}
      <Footer />

    </div>
  );
}

export default App