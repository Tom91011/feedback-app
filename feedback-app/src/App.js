
import { useState } from 'react'
import PropTypes from 'prop-types'
import FeedbackList from './components/FeedbackList'
import Feedbackdata from './data/Feedbackdata'
import FeedbackStats from './components/FeedbackStats'


import Header from "./components/Header"

function App() {
    const [feedback, setFeedback] = useState(Feedbackdata)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header text= 'Feedback UI'/>
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>        
       </>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',    
}

Header.propTypes = {
    text: PropTypes.string,
}

export default App