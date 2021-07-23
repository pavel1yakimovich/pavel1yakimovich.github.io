import { useState } from 'react';

import { Button } from '@material-ui/core';

const RussianRoulette = ({ victims }) => {
  const [loserIndex, setLoserIndex] = useState();
  const play = () => setLoserIndex(Math.floor(Math.random() * victims.length));

  return (
    <>
      <div className="center section">
        <Button color="secondary" variant="contained" disabled={victims.length === 0} onClick={play} >
          Play russian roulette
        </Button>  
      </div>
      {loserIndex !== undefined && (<h3 className="center">{victims[loserIndex]}</h3>)}
    </>
  );
};

export default RussianRoulette;
