 import {useState} from 'react'
 const Player = ({name, symbol, isActive, onNameChange}) =>{
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)
    const handleChangePlayerName = e =>{
        setPlayerName(e.target.value)
    }
    const handleEditing = () => {
      setIsEditing(prevState=> !prevState)
      if (isEditing) {
        onNameChange(symbol,playerName)
      }
    }
    return (
        <li className={isActive ? 'active': ''}>
        <span className="player">
        {isEditing?<input name='name' type='text' required value={playerName} onChange={handleChangePlayerName} />:<span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditing}>{isEditing?"Save":"Edit"}</button>
        </span>
      </li>
     
    )
} 
export default Player;