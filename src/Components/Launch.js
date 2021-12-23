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
         className="flip-card-outer"
         onClick={(e) => setShowBack(!showBack)}
      >
         <div
            className={cn('flip-card-inner', {
               showBack,
               'hover-trigger': index === 'hover',
            })}
         >
            <div className="card front">
               <div className="card-body">
                  <img className="card image" src={flickrImage} alt="" />
                  <div className="card-text">
                     <p className="flight-number">{flightNumber}</p>
                     <p className="launch-date">{launchDate}</p>
                  </div>
               </div>
            </div>
            <div className="card back">
               <div className="card-body">
                  <div className="card-details">
                     <h3>Launch Details</h3>
                     <p className="details" id="details">
                        {details}
                     </p>
                  </div>

                  <YoutubeEmbed youtubeLink={videoLink} />

                  <p className="article-link" id="article-link">
                     <a href={articleLink}>{articleLink}</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Launch;
