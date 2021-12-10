import PropTypes from 'prop-types'
import Feedbackdata from "../data/Feedbackdata"

function FeedbackStats({ feedback }) {

    // calculate ratings average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    // if average %

    average = average.toFixed(1).replace(/[.,]0$/, '')

    // console.log(average);

    return (
        <div className="feedback-stats">
           <h4>{feedback.length} Reviews</h4>
           {isNaN(average) ? "" : <h4>Average Rating: {average} </h4>} 
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats
