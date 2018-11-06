import React from 'react';
import Dave from './Dave';
import Yo from './Yo';

class App extends React.Component {
  render() {
    return (
    <> { /*Con la cosa de abajo "<>" puede substituir un div*/}
      <Dave /> 
      <Yo />
    </> /* <-------------- Esto es una cosa nueva y con esto puedes ahorrarte un div */
    );
}
}

export default App;