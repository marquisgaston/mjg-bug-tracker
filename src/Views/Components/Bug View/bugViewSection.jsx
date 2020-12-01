import React from 'react'

export default(props)=>{
    return(
        <div className="view-section">
            <h1>{props.title}</h1>
            <p>{props.info}</p>
        </div>
    )
}