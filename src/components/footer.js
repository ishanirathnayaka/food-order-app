import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/footer.css';

function footer() {
  return (
    <div className="footer">
      <div className="Social_Media">
        <TwitterIcon />
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <p>© 2021 Food Corner. All Rights Reserved.</p>
        
        
      </div>
    </div>
  )
}

export default footer

