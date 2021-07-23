import { useState } from 'react';

import { Button } from '@material-ui/core';

const RussianRoulette = ({ victims }) => {
  const [loserIndex, setLoserIndex] = useState();
  const play = () => setLoserIndex(Math.floor(Math.random() * victims.length));
  const hasVictim = loserIndex !== undefined;

  return (
    <>
      {hasVictim ? (
        <div className="center section">
        <Button variant="contained" onClick={() => setLoserIndex()} >
          Mercy them
        </Button>
      </div>
      ) : (
        <div className="center section">
          <Button color="secondary" variant="contained" disabled={victims.length === 0} onClick={play} >
            Play russian roulette
          </Button>
        </div>
      )}
      {hasVictim && (
        <>
          <h3 className="center">{victims[loserIndex]}</h3>
          <img alt="" className="logo" src={window.location.origin + '/loser.jpg'} />
        </>
      )}
    </>
  );
};

export default RussianRoulette;
