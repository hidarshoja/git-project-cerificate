import React from "react";
import './Header.css';

export default class Header extends React.Component{
    
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="header">
                <div className="imageHeader">
                   <img src="./image/index.png" /> 
                </div>
                <div>
                    <div className="inputHeader">
                        <div>
                        <input type="text" placeholder="جستجو کنید ..." /> <button>جستجو</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}