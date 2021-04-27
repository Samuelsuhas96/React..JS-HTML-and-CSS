import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
    <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/begin_the_game">
          <Begin />
        </Route>

        <Route exact path="/start_the_game">
          <Start />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

    </Switch>
    </Router>
    
  );
}
function Home()
{
  return(
    <div class="home">
    <h1>Connect four</h1>
    <h3>Rules of the game</h3>
    <ul>
      <li>
       Each of the players choose a color for their checker.
      </li>
      <li>
       On alternative turns, drop one of your checkers down any of the slots in the top of the grid.
      </li>
      <li>
       The checker of your chosen colour should form a staright line with the existing tokens of the same colour in the grid.
      </li>
      <li>
       The staright line could either be a horizontal, vertical or a diagonal one.
      </li>
      <li>
       The player who makes the first straight line is the winner.
      </li>
    </ul>
    <div class="player"><Link to="/begin_the_game"><button>Begin the game</button></Link></div>


    
  </div>
  );
}
function  Begin()
{
  return(
    <div class="begin">
      <h1>Player-1 enter your name</h1>
      <input id="txt1"type="text" name="player1"></input>
      <h1>Choose your ckecker colour</h1>
      <input class="selection" type="radio" name="red"></input>
      <label>Red</label>
      <input class="selection" type="radio" name="yellow"></input>
      <label>yellow</label>
      <input class="selection" type="radio" name="orange"></input>
      <label>orange</label>
      <br/>
      <br/>
      <h1>Player-2 enter your name</h1>
      <input id="txt2"type="text" name="player1"></input>
      <h1>Choose your ckecker colour</h1>
      <input class="selection" type="radio" name="red"></input>
      <label>Red</label>
      <input class="selection" type="radio" name="yellow"></input>
      <label>yellow</label>
      <input class="selection" type="radio" name="orange"></input>
      <label>orange</label>
      <br/>
      <br/>
      <Link to="/start_the_game"><button>start the game</button></Link>
      <Link to="/home"><button>Back to home</button></Link>
    </div>
  );
  
}
function  Start()
  {
        return(
                    <div class="board">
                        <table>
                            <tbody>
                                            
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>

                        </table>
                        <Link to="/home"><button>Back to home</button></Link>

                    </div>
              
            
            );

    }
export default App;
