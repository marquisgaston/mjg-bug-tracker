import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBugs} from "../../Controllers/Redux/bugSlice";
import BugCard from "../Components/Bug Card/bugCard";
import BugView from "../Components/Bug View/bugView";

// eslint-disable-next-line
export default ()=>{
    const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
        name:"",
        isDisplayed:false
    });
    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);

    useEffect(()=> { dispatch(getBugs()); }, [bugs.length < 1]);

    function bugClicked(name){
        SET_DISPLAY_BUG({
            isDisplayed:!DISPLAY_BUG.isDisplayed,
            name: name
        })
    }

    return( 
        <div class="page-container">
            {bugs.map((bug, key)=> {
                return (
                    <BugCard key={key} bug={bug} clicked={bugClicked}/>
                )
            })}
            {DISPLAY_BUG.isDisplayed && <BugView bug={bugs.filter((bug)=>bug.name === DISPLAY_BUG.name)[0]} clicked={bugClicked}/>}
        </div>
    )
}
