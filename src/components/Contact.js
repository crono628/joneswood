import { Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <Typography sx={{ fontSize: '1.3rem' }}>Contact Info</Typography>
      <Typography sx={{ fontSize: '2rem' }}>Kevin Jones</Typography>
      <Typography sx={{ fontSize: '1rem' }}>
        JoneswoodCollective@gmail.com
      </Typography>
      <Typography sx={{ fontSize: '1rem' }}>860-978-2548</Typography>
    </div>
  );
};

export default Contact;
