import { useState } from "react";

function Team() {

    const [team, setTeam] = useState(11);

    const handleAdd = () =>{
        // const newTeam = team + 1;
        // setTeam(newTeam);
        setTeam(team + 1);
    }

    const handleRemove = () =>{
        // const newTeam = team - 1;
        // setTeam(newTeam);
        setTeam(team - 1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={teamStyle}>
            <h3>players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Radius</button>

        </div>
    )
}

export default Team;