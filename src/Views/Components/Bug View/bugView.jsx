import React from 'react';
import ViewSection from "./bugViewSection";
import BugModel from "../../../Models/bugModel";
import {useDispatch} from "react-redux";
import {markComplete} from "../../../Controllers/Redux/bugSlice";

export default (props)=> {
    const bug= new BugModel(props.bug);

    return (
        <div className="bug-view">
            <button className="close-btn" onClick={props.clicked}>Close</button>
            <h1>{bug.name}</h1>
            <ViewSection title="details" info={bug.details}/>
            <ViewSection title="Steps" info={bug.steps}/>
            <ViewSection title="Priority" info={bug.priority}/>
            <ViewSection title="Creator" info={bug.creator}/>
            <ViewSection title="Version" info={bug.version}/>
            <ViewSection title="Time Created" info={bug.time}/>
            <button onClick={()=>{useDispatch(markComplete())}}>Mark Complete</button>
        </div>
    )
}