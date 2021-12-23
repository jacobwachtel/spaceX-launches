// import React from 'react';
// import PropTypes from 'prop-types';

// const YoutubeEmbed = ({ youtubeLink }) => (
//    <div className="video-responsive">
//       <iframe
//          width="853"
//          height="480"
//          src={youtubeLink}
//          frameBorder="0"
//          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//          allowFullScreen
//          title="Embedded youtube"
//       />
//    </div>
// );

// YoutubeEmbed.propTypes = {
//    youtubeLink: PropTypes.string.isRequired,
// };

// export default YoutubeEmbed;

import React from 'react';
import ReactPlayer from 'react-player';

const YoutubeEmbed = ({ youtubeLink }) => {
   return (
      <div>
         <ReactPlayer
            width="640px"
            height="360px"
            // light="true"
            url={youtubeLink}
         />
      </div>
   );
};

export default YoutubeEmbed;
