
import buttonStyles from './buttonStyles.module.css'

export default function Button({ onClick, nameButton }){
    return (<button className={buttonStyles.buttonStyle} onClick={onClick}>{nameButton}</button>)
}