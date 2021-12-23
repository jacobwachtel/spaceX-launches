import React from 'react';
import ReactPlayer from 'react-player';

const YoutubeEmbed = ({ youtubeLink }) => {
   return <ReactPlayer light="true" url={youtubeLink} />;
};

export default YoutubeEmbed;
