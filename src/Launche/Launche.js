// noinspection JSUnusedGlobalSymbols
import "./Launche.css"

const Launche  = (props) => {

    const {mission_name, launch_year, mission_patch_small} = props;

    return(
        <div className="Item">
            <div className="Mission_name"><h2>{mission_name}</h2></div>
            <div className="Launch_year">{launch_year}</div>
            <img src={mission_patch_small} alt="patch"/>
        </div>
    );

};

export default Launche;