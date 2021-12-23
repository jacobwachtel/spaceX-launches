import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Launches from './Components/Launches';
import './Components/styles.scss';

// const cards = [
//    {
//       id: '1',
//       variant: 'hover',
//       front: 'Hover',
//       back: 'Back',
//    },
//    {
//       id: '2',
//       variant: 'click',
//       front: 'Click',
//       back: 'Back',
//    },
//    {
//       id: '3',
//       variant: 'focus',
//       front: 'Focus',
//       back: 'Back',
//    },
// ];

function App() {
   const [launchData, setLaunchData] = useState([]);

   useEffect(() => {
      const getLaunchData = async () => {
         const launchData = await axios.get(
            'https://api.spacexdata.com/v3/launches'
         );
         console.group(launchData.data);
         setLaunchData(launchData.data);
      };
      getLaunchData();
   }, []);

   return (
      <div className="container">
         <div className="row h-100">
            <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
               <Launches launchData={launchData} />
            </div>
         </div>
      </div>
   );
}

export default App;
