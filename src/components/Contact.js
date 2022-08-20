import InstagramIcon from '@mui/icons-material/Instagram';
import {
  Card,
  CardContent,
  IconButton,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <Card sx={{ backgroundColor: '#f9f9f9', padding: '20px' }} elevation={10}>
        <CardContent>
          <Typography sx={{ fontSize: '2rem' }}>Kevin Jones</Typography>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '2rem',
              }}
            >
              <a
                href="tel:+8609782548"
                style={{
                  fontSize: '1rem',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Call
              </a>
              <a
                href="sms:+8609782548"
                style={{
                  fontSize: '1rem',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Text
              </a>
              <a
                href="mailto:JoneswoodCollective@gmail.com?subject = More info"
                style={{
                  fontSize: '1rem',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Email
              </a>
            </div>
          </div>
          <Typography sx={{ fontSize: '1rem' }}></Typography>
        </CardContent>
      </Card>
      <div style={{ marginTop: '1.5rem' }} className="div-style">
        <a
          href="https://www.instagram.com/joneswood_collective"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ fontSize: '50px', color: 'black' }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
