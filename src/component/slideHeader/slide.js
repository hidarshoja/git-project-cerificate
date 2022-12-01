import React from "react";
import './slide.css';

export default class Slide extends React.Component{
    
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="Slide">
               <div>
                   <h1>آزمون آیین نامه رانندگی </h1>
               </div>
               <div>
                   <ul>
                      <li><a href="#">خانه</a></li>
                      <li><a href="#">آزمون</a></li>
                      <li><a href="#">درباره ما</a></li>
                   </ul>
               </div>
            </div>
        )
    }
}