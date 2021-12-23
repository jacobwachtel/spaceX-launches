import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Launches from './Components/Launches';
import 'react-multi-carousel/lib/styles.css';

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
      <div>
         <Launches launchData={launchData} />;
      </div>
   );
}

export default App;
