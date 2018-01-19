import * PlayerActionType from '../ActionType';

export const addPlayer = name =>{
  return {
    type:PlayerActionType.ADD_PLAYER,
    name
  };
};

export const removePlayer = index =>{
  return{
    type:PlayerActionType.REMOVE_PLAYER,
    index
  };
};

export const updateScore = (index,score)=>{
  return {
    type:PlayerActionType.SCORE_CHANGE,
    score,
    index
  };
};
