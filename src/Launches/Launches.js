import {useEffect, useState} from "react";
import React from "react";
import Launche from "../Launche/Launche"

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() =>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value.filter((n) => n.launch_year !== '2020')))
    }, [])
    return(
        <div className="Launches">
            {launches.map(value => <Launche
                key={value.mission_name}
                mission_name={value.mission_name}
                launch_year={value.launch_year}
                mission_patch_small={value.links.mission_patch_small}
            />)}
        </div>
    )
}

export default Launches;
