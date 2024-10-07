import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'

/**
 * Renders a Router and a set the Routes.
 * The "/" URL maps to the HomePage component, and
 * the "/add-story" URL maps to the AddStoryPage component.
 * The "/add-prompt" URL maps to the AddPromptPage component.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/add-story" element={<AddStoryPage />} />
        <Route path="/add-prompt" element={<AddPromptPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
