import { Card, CardContent, Paper, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <Card elevation={12}>
        <CardContent>
          <Typography sx={{ fontSize: '1rem' }}>Contact Info</Typography>
        </CardContent>
        <CardContent>
          <Typography sx={{ fontSize: '2rem' }}>Kevin Jones</Typography>
          <Typography sx={{ fontSize: '1rem' }}>860-978-2548</Typography>
          <Typography sx={{ fontSize: '1rem' }}>
            JoneswoodCollective@gmail.com
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
