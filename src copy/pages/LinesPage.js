// get static data
import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import TrainList from '../components/TrainList';
import './LinesPage.css';

export default function LinesPage() {
  const [currColor, setCurrColor] = useState("GOLD");
  const [loading, setLoading] = useState(true);
  const [trainData, setTrainData] = useState(null);
  const [stationData, setStationData] = useState(null);
  const [isArrClicked, setIsArrClicked] = useState(false);
  const [isSchedClicked, setIsSchedClicked] = useState(false);
  const [isBound1Clicked, setIsBound1Clicked] = useState(false);
  const [isBound2Clicked, setIsBound2Clicked] = useState(false);
  const [currStation, setCurrStation] = useState(null);

  const APITrainURL = `http://13.59.196.129:3001/arrivals/`;
  const APIStationURL = `http://13.59.196.129:3001/stations/`;

  useEffect(() => {
    async function fetchTrainData() {
      setLoading(true);
      const result = await fetch(APITrainURL + currColor.toLowerCase());
      const fetchedData = await result.json();
      setTrainData(fetchedData);
      setLoading(false);
    }
    setTimeout(() => {
      fetchTrainData();
    }, 100)
  },[currColor])

  useEffect(() => {
    async function fetchStationData() {
      setLoading(true);
      const result = await fetch(APIStationURL + currColor.toLowerCase());
      const fetchedData = await result.json();
      setStationData(fetchedData);
      setCurrStation("All Stations");
    }
    setTimeout(() => {
      fetchStationData();
    }, 100)
  },[currColor])

  return (
    <div className="lines">
      <div id="lineButtons">
        <button onClick={((e) => {
          if (currColor !== "GOLD") {
            setCurrColor("GOLD")
            setLoading(true)
          }
          })} id="gold">Gold</button>
        <button onClick={((e) => {
          if (currColor !== "RED") {
            setCurrColor("RED")
            setLoading(true)
          }
          })} id="red">Red</button>
        <button onClick={((e) => {
          if (currColor !== "BLUE") {
            setCurrColor("BLUE")
            setLoading(true)
          }
          })} id="blue">Blue</button>
        <button onClick={((e) => {
          if (currColor !== "GREEN") {
            setCurrColor("GREEN")
            setLoading(true)
          }
          })} id="green">Green</button>
      </div>
        <div id="bound"></div>
        <div id="lineName">{currColor}</div>
        <div id="boundary"></div>
        <div id="bothSides">
            <div id="nav"><NavBar color={currColor} data={stationData} station={currStation} setStation={setCurrStation}/></div>
            <div id="rightSide">
              {loading ? <div id="loading">Loading...</div> :
                <div>
                  <div id="funcButtons">
                    <button onClick={(e) => {
                      { 
                        setIsArrClicked(!isArrClicked)
                        setIsBound1Clicked(false)
                        setIsBound2Clicked(false)
                        setIsSchedClicked(false)
                      }
                    }} id={isArrClicked ? "clicked" : "normal"}>Arriving</button>
                    <button onClick={(e) => {
                      {
                        setIsSchedClicked(!isSchedClicked)
                        setIsArrClicked(false)
                        setIsBound1Clicked(false)
                        setIsBound2Clicked(false)
                      }
                    }} id={isSchedClicked ? "clicked" : "normal"}>Scheduled</button>
                    <button onClick={(e) => {
                      {
                        setIsBound1Clicked(!isBound1Clicked)
                        setIsArrClicked(false)
                        setIsBound2Clicked(false)
                        setIsSchedClicked(false)
                      }
                    }} id={isBound1Clicked ? "clicked" : "normal"}>{(currColor === "GREEN" || currColor === "BLUE") ? 'Eastbound' : 'Northbound'}</button>
                    <button onClick={(e) => {
                      {
                        setIsBound2Clicked(!isBound2Clicked)
                        setIsArrClicked(false)
                        setIsBound1Clicked(false)
                        setIsSchedClicked(false)
                      }
                    }} id={isBound2Clicked ? "clicked" : "normal"}>{(currColor === "GREEN" || currColor === "BLUE") ? 'Westbound' : 'Southbound'}</button>
                  </div>
                  <div>
                  <div><TrainList data={trainData} color={currColor} station={currStation} isArr={isArrClicked} isSched={isSchedClicked} isBound1={isBound1Clicked} isBound2={isBound2Clicked}/></div>
                  </div>
                </div>}
            </div>
        </div>
    </div>
  );
}