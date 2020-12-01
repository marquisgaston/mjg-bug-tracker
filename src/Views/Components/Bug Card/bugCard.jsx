import React from 'react';
import PriorityController from "../../../Controllers/priorityController";
// eslint-disable-next-line
export default (props)=>{
    const {name, priority, version } = props.bug;
    const {level, color} = PriorityController(priority);

    function Clicked(){
        props.clicked(name);
    }
    return ( 
        <div class="bug-card" onClick={Clicked} style={{color:color}}>
            <div>
                <h2 class="name">
                    {name}
                </h2>
                <h4 class="priority">
                    {level}
                </h4>
                <h5 class="version">
                    {version}
                </h5>
            </div>
        </div>
    )
  }  