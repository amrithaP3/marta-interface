import React from 'react';
import "./Train.css";
import arrow from './arrow.jpg';
import capitalM from './capitalM.jpg';

export default function Train(props) {
    const { trainData, color } = props;

    let onTime;
    let divStyle;
    if (trainData.DELAY === "T0S") {
        onTime = "On time";
        divStyle = {
            color: "green",
            fontWeight: "bold",
            fontSize: "20px",
        }
    } else {
        onTime = "DELAYED";
        divStyle = {
            color: "red",
            fontWeight: "bold",
            fontSize: "20px",
        }
    }

    let timeStyle;
    if ((parseInt(trainData.WAITING_TIME.split(" ")[0], 10) <= 10) || trainData.WAITING_TIME.split(" ")[0] === "Arriving") {
        timeStyle = {
            color: "green",
            fontSize: "28px",
        }
    } else {
        timeStyle = {
            color: "red",
            fontSize: "28px",
        }
    }

    function lowerCase(station) {
        return station.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
    }
    
    return (
        <div className="all">
            <div id="twoSides">
                <img id="icon" src={capitalM} alt="M"></img>
                <div id="allInfo">
                    <div id="info">
                        <div id="location">
                            <p id="station1">{lowerCase(trainData.STATION)}</p>
                            <img id="arrow" src={arrow} alt="to"></img>
                            <p id="station2">{lowerCase(trainData.DESTINATION) + " Station"}</p>
                        </div>
                        <div id="bottomInfo">
                            <div id={color === "GOLD" ? "lineColorGold" : color === "GREEN" ? "lineColorGreen" : color === "BLUE" ? "lineColorBlue" : color === "RED" ? "lineColorRed" : null}>{lowerCase(trainData.LINE)}</div>
                            <p id="onTime" style={divStyle}>{onTime}</p>
                        </div>
                    </div>
                    <div id="time">
                        <p id="num" style={timeStyle}>{trainData.WAITING_TIME}</p>
                    </div>
                </div>
            </div>
            <div id="afterLine"></div>
        </div>
    );
}