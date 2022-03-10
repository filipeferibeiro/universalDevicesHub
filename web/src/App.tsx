import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

type Types = {
    ID: number;
		TYPE_ID: number;
		DATE_CREATED: Date;
		TEXT_MESSAGE: string;
		MEDIA_ID: number;
}

type Messages = {

}

function App() {
  

  return (
    <>
      <Home />
      {/* <div>
        { isFetching && <p>Carregando...</p> }
        <ul>
          { messages?.map(message => (
            <li key={message.ID}>{message.TEXT_MESSAGE}</li>
          )) }
        </ul>
      </div> */}
      <GlobalStyle />
    </>
  )
}

export default App
