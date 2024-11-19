 import {useState} from 'react'
 const Player = ({name, symbol}) =>{
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)
    const handleChangePlayerName = e =>{
        setPlayerName(e.target.value)
    }
    return (
        <li>
        <span className="player">
        {isEditing?<input name='name' type='text' required value={playerName} onChange={handleChangePlayerName} />:<span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
        <button onClick={() => setIsEditing(prevState=> !prevState)}>{isEditing?"Save":"Edit"}</button>
        </span>
      </li>
     
    )
} 
export default Player;