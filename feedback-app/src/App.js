
import { v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import PropTypes from 'prop-types'
import FeedbackList from './components/FeedbackList'
import Feedbackdata from './data/Feedbackdata'
import FeedbackStats from './components/FeedbackStats'
import Header from "./components/Header"
import FeedbackForm from './components/FeedbackForm'

function App() {
    const [feedback, setFeedback] = useState(Feedbackdata)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback);
        setFeedback([newFeedback,...feedback])
        console.log(feedback);
    }

    return (
        <>
            <Header />
            
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
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