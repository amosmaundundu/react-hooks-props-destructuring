import React from 'react';


  function SocialMedia() {
  

    const socialLinks = {
        github: "https://github.com/liza",
        linkedin: "https://www.linkedin.com/in/liza/",
      };

     
      return (
        <div>
          <a href={socialLinks.github}>{socialLinks.github}</a>
      <a href={socialLinks.linkedin}>{socialLinks.linkedin}</a>
        </div>
      );


  }

  export default SocialMedia;