import React from 'react';
import './App.css';

class TopBanner extends React.Component{

    render(){

        return(
            <div className="top-banner" style={{color:"whitesmoke", fontWeight:"bold"}}>
                <marquee width="50%" direction="left">
                    {this.props.bannerMessage}
                </marquee>
            </div>
        )
    }
}

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

        // check if a player has won or the square is clicked
        if(calculateTheWinner(squares) || squares[i]){
            return;
        }

        // check which player is next --turn taking
        squares[i]=this.state.xIsNext? 'X':'O';

        this.setState({
            squares:squares,
            // update the next player
            xIsNext:!this.state.xIsNext
        })

    }

    render(){

        const winner=calculateTheWinner(this.state.squares);

        let nextPlayer;

        if(winner){
            nextPlayer='Winner is: ' + winner;
        }else{
            nextPlayer='Next player is: ' + (this.state.xIsNext? 'X':'O')
        }
        
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

        let message="Tie/Draw functionality will be added soon"

        return(
            <div>
                <TopBanner bannerMessage={message}/>

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
            </div>


        )
    }
}
export default Game;

function calculateTheWinner(squares){

    const winnerCombinations=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];


    // compare whether any of the combinations has been achieved
    for(let i=0; i<winnerCombinations.length; i++){

        const [a, b, c] =winnerCombinations[i];

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){

            // window.location.reload(true);
            // set timer before reloading
            setInterval(()=>{

                window.location.reload(true);
                
            }, 1000);

            return squares[a]; 

        }
    }

    // incase of a tie, 
    return null;
}