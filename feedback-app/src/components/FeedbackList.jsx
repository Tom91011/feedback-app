
import PropTypes from 'prop-types';
import Feedbackdata from "../data/Feedbackdata"
import FeedbackItem from "./FeedbackItem"

function Feedbacklist({ feedback }) {
    if(!feedback || feedback.length === 0) {
        return <p>No Feed back Yet</p>
    }

    return (
            <div className="feedback-list">
                {feedback.map((item) => (
                  <FeedbackItem key={item.id} item={item}/>
                ))}
            </div>
    )
}

// Feedbacklist.PropTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default Feedbacklist
