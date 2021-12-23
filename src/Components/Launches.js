import React from 'react';
import './Launches.css';
import Launch from './Launch';

const Launches = ({ launchData }) => {
   console.group(launchData);

   return (
      <div className="launch__container">
         {launchData.map((launch, index) => (
            <div key={index}>
               <Launch
                  details={launch.details}
                  flightNumber={launch.flight_number}
                  launchDate={launch.launch_date_local}
                  articleLink={launch.links.article_link}
                  flickrImage={launch.links.flickr_images[0]}
                  videoLink={launch.links.video_link}
               />
            </div>
         ))}
         ;
      </div>
   );
};

export default Launches;
