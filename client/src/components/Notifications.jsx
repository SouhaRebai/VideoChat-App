import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted,callRefused } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ fontFamily : "Arial" ,display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call?.name|| "quelqu'un" } vous appelle :</h1>
          <Button  style={{
                          borderRadius: 10 ,
                          backgroundColor: "#5D21BB",
                          fontSize: "15px",
                          backgroundColor : 'rgb(76,147,224)',
                          color : 'white' }}
                          variant="contained" onClick={answerCall}>
            Réondre
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
