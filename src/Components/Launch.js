import React from 'react';
import './Launch.css';
import cn from 'classnames';
import { useState } from 'react';
import YoutubeEmbed from './YoutubeEmbed';

const Launch = ({
   details,
   flightNumber,
   launchDate,
   articleLink,
   flickrImage,
   videoLink,
   index,
}) => {
   const [showBack, setShowBack] = useState(false);

   return (
      <div
         tabIndex={index}
         className={cn('flip-card-outer', {
            'focus-trigger': index === 'focus',
         })}
         onClick={(e) => setShowBack(!showBack)}
      >
         <div
            className={cn('flip-card-inner', {
               showBack,
               'hover-trigger': index === 'hover',
            })}
         >
            <div className="card front">
               <div className="card-body d-flex justify-content-center align-items-center">
                  <img className="card image" src={flickrImage} alt="" />
                  <p className="card-text fs-1 fw-bold">{flightNumber}</p>
                  <p className="card-text fs-1 fw-bold">{launchDate}</p>
               </div>
            </div>
            <div className="card back">
               <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="card-text fs-1 fw-bold">{`Launch Details: ${details}`}</p>
                  <YoutubeEmbed youtubeLink={videoLink} />
                  <p className="card-text fs-1 fw-bold">{articleLink}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Launch;
