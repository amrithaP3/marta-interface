import React from 'react';
import './NavBar.css';

export default function NavBar(props) {
    const { color, data, station, setStation } = props;

    return (
        <div className="navBar">
            <p id="navDesc">Select your starting station</p>
            <div className="listContainer">
                <button onClick={(e) => {
                    setStation("All Stations")}} id="all">All Stations</button>
                <div id="lastMark"></div>
                <div id="stations">{data?.map((station) => {
                    return (<><button id="station" onClick={(e) => {
                        setStation(station)}}>{station}</button><div id="endMark"></div></>)
                })}
                </div>
            </div>
        </div>
    );
}