import React from 'react'
import './Die.css';

// creating a component Die
export default class Die extends React.Component{
render(){
    // it will create another class, so if it is rolling will be calling the class shaking
    return <i className={` Die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`}></i>
}
}