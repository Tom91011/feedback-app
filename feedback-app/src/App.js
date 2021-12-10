
import { useState } from 'react'
import PropTypes from 'prop-types'
import FeedbackList from './components/FeedbackList'
import Feedbackdata from './data/Feedbackdata'


import Header from "./components/Header"

function App() {
    const [feedback, setFeedback] = useState(Feedbackdata)


    return (
        <>
            <Header text= 'Feedback UI'/>
            <div className="container">
                <FeedbackList feedback={feedback} />
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