import React, { useState } from 'react';
import Train from '../components/Train';
import "./TrainList.css";

export default function TrainList(props) {
    const { data, color, station, isArr, isSched, isBound1, isBound2 } = props;

    function lowerCase(station) {
        return station.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
    }

    const filtered = data.filter((train) => {
        const currColor = train.LINE === color;
        const arr = train.WAITING_TIME === "Arriving";
        const sched = train.WAITING_TIME !== "Arriving";
        const direction = (color === "GREEN" || color === "BLUE");
        const north = train.DIRECTION === "N";
        const south = train.DIRECTION === "S";
        const west = train.DIRECTION === "W";
        const east = train.DIRECTION === "E";
        console.log(station);

        if (station !== "All Stations") {
            const currStation = lowerCase(train.HEAD_SIGN) === station;
            if (isArr) {
                return arr && currStation;
            } else if (isSched) {
                return sched && currStation;
            } else if (isBound1 && direction) {
                return east && currStation;
            } else if (isBound2 && direction) {
                return west && currStation;
            } else if (isBound1 && !direction) {
                return north && currStation;
            } else if (isBound2 && !direction) {
                return south && currStation;
            } else {
                return currColor && currStation;
            }
        } else {
            if (isArr) {
                return arr;
            } else if (isSched) {
                return sched;
            } else if (isBound1 && direction) {
                return east;
            } else if (isBound2 && direction) {
                return west;
            } else if (isBound1 && !direction) {
                return north;
            } else if (isBound2 && !direction) {
                return south;
            } else {
                return currColor;
            }
        }
      });
    
    if (filtered.length == 0) {
        return <div id="noTrains">No trains at this time...</div>
    } else {
        return <div className="allTrains">{filtered?.map((train) => (<Train trainData={train} color={color} />))}</div>
    }
    
}