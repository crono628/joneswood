import { Box, Container } from '@mui/material';
import React from 'react';
import github from '../assets/github.svg';

const Footer = () => {
  return (
    <div
      style={{
        padding: '7px',
        backgroundColor: 'lightgray',
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
        <div style={{ color: 'black' }}>Copyright © 2022 MD</div>
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
