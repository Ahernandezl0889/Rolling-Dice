import React from 'react';
import Die from './Die';
import './RollDice.css'

export default  class RollDice extends React.Component {
   static defaultProps = {
    //    all the options
       sides:["one", "two", "three", "four", "five","six"]
   };
    constructor(props){
        super(props);
        // initial state
        //we set two dices starting at 1 
        this.state = {die1:'one', die2:'one', rolling:false};
        this.roll = this.roll.bind(this)
    }

   roll(){
    //    we need to pick one thing out of sides array
    // it will give us a number from sides array, and we use the number to access the data out of there
    // this.props.length === 6
      const newDie1 =this.props.sides[Math.floor(Math.random()* this.props.sides.length)]
      console.log(newDie1) 
    //   console.log(this.props.sides.length) 6
      const newDie2 =this.props.sides[Math.floor(Math.random()* this.props.sides.length)]
      console.log(newDie2)
    //   updating die1 and die2
        this.setState({die1:newDie1, die2:newDie2, rolling:true})

        // wait one second, then set rolling to false
        // for the button
        setTimeout(()=>{
            this.setState({rolling:false})
        }, 1000);
   }


    render(){
        return(
            <div className ="RollDice">
                {/* showing  dices facing 1 and 1 */}
                {/* have to call the Die compponent  */}
                <div className="RollDice-container"> 
                 {/* when hit the button will change the number */}
                <Die face={this.state.die1} rolling={this.state.rolling}/>
                <Die face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                {/* it will disabled the button the second that it is rolling */}
                <button  onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...':'Roll Dice!'}</button>
              </div>
        )
    }
}