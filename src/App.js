/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import Loader from './Components/Loader';
import Parallax from './Components/Parallax ';
import ReactAssignment2 from './Components/ReactAssignment2';
function App() {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2700);

  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          <ReactAssignment2 />
          <Parallax />
        </div>
      )}
    </div>
  );
}

export default App;
