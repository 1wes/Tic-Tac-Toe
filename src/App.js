import React from 'react';
import './App.css';

// render the button
function Square(props){

    return(
        <button type='button' className='square' onClick={props.onClick}>
            {props.value}
        </button>
    )
}

// renders nine squares
class Board extends React.Component{

    constructor(props){
        super(props);

        // declare state of nine null values in an array
        this.state={
            // fill each square in the array with a null value
            squares:Array(9).fill(null),
            // set player X as the default --or first player
            xIsNext:true
        }

        this.handleClick=this.handleClick.bind(this);
    }

    // method to return the squares with a passed value
    displaySquare(i){
        return(
            <Square value={this.state.squares[i]}  onClick={()=>this.handleClick(i)}/>
        )
    }

    handleClick=(i)=>{

        // create a copy of the array that will be modified --immutabillity
        const squares=this.state.squares.slice();

        // check which player is next --turn taking
        squares[i]=this.state.xIsNext? 'X':'O';

        this.setState({
            squares:squares,
            // update the next player
            xIsNext:!this.state.xIsNext
        })

    }

    render(){

        // next player
        const nextPlayer="Next Player:"+(this.state.xIsNext? 'X':'O');

        return(
            <div>
                <div className='nextPlayer'>
                    {nextPlayer}
                </div>

                {/* use div to display a bunch of three blocks and not inline squares */}
                <div className='board-row'>
                    {this.displaySquare(0)}
                    {this.displaySquare(1)}
                    {this.displaySquare(2)}
                </div>

                <div className='board-row'>
                    {this.displaySquare(3)}
                    {this.displaySquare(4)}
                    {this.displaySquare(5)}
                </div>

                <div className='board-row'>
                    {this.displaySquare(6)}
                    {this.displaySquare(7)}
                    {this.displaySquare(8)}
                </div>
            </div>
        )
    }
}

// render a board with placeholder values (0-8)
class Game extends React.Component{

    render(){
        return(
            <div className='game'>
                <div className='game-board'>
                    < Board />
                </div>

                <div className='game-info'> 
                    <div>
                        {/* status */}
                    </div>

                    <div>
                        {/* To Do */}
                    </div>
                </div>

            </div>
        )
    }
}
export default Game;