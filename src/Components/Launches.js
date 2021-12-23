import React from 'react';

import './Launches.css';
import Launch from './Launch';
import Carousel from 'react-multi-carousel';

const Launches = ({ launchData }) => {
   console.group(launchData);
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 1,
         partialVisibilityGutter: 160, // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 1,
         partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
      },
   };

   return (
      <div>
         <Carousel
            centerMode={true}
            responsive={responsive}
            swipeable={false}
            draggable={false}
            renderButtonGroupOutside={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
         >
            {launchData.map((launch, index) => (
               <Launch
                  key={index}
                  details={launch.details}
                  flightNumber={launch.flight_number}
                  launchDate={launch.launch_date_local}
                  articleLink={launch.links.article_link}
                  flickrImage={launch.links.flickr_images[0]}
                  videoLink={launch.links.video_link}
               />
            ))}
         </Carousel>
      </div>
   );
};

export default Launches;
