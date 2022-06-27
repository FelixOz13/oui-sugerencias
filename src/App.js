import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Card from './components/shared/Card'
import Navbar from './components/Navbar'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import AboutIconLink from './components/AboutIconLink'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

import Post from './components/Post'


function App() {
 
return (
    <FeedbackProvider>
    <Router>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
            <FeedbackForm/>
            <FeedbackStats/>
                <FeedbackList />
                
            </>
            }>
        </Route>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/post/*' element={<Post />} />
          
        </Routes>
        
        <AboutIconLink />
    </div>
      </Router>
  </FeedbackProvider>
  )
}

export default App
