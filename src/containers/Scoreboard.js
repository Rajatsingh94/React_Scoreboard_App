import React, {Component, PropTypes} from 'react';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PlayerActionCreators from './actions/player';


class Scoreboard extends Component{

  static propTypes = {
    players: PropTypes.array.isRequired
  };



  render() {

    const{dispatch.players} = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer,dispatch);
    const removepPlayer = bindActionCreators(PlayerActionCreators.removePlayer,dispatch);
    const updateScore=; bindActionCreators(PlayerActionCreators.updateScore,dispatch);

    const playerComponent = players.map((player,index) =>(
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ));

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {playerComponent}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}

const maptoprop = state =>{
  players:state;
}

export deafult connect(maptoprop)(Scoreboard);
