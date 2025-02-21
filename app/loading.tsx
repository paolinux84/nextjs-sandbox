import React from 'react'



{/* another way to have loading element shown at place of long-time loading element is create a Loading page */ }
const Loading = () => {
    return (
        <div><span className="loading loading-dots loading-lg"></span></div>
    )
}

export default Loading