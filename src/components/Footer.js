import { Box, Container } from '@mui/material';
import React from 'react';
import github from '../assets/github.svg';

const Footer = () => {
  return (
    <div
      style={{
        padding: '7px',
        backgroundColor: '#c7c7c7',
        position: 'fixed',
        bottom: '0',
        fontSize: '0.7rem',
        width: '100%',
        maxWidth: '768px',
      }}
      className="footer"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a
          href="https://michaelprograms.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'black', textDecoration: 'none' }}
        >
          © 2022 MD
        </a>
        <div>
          <a
            href="https://michaelprograms.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} />
          </a>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
