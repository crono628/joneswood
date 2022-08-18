import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const handleNavigate = (e) => {
    handleClose();
    navigate(`/${e.target.textContent.toLowerCase()}`);
    // console.log('text', e.target.textContent);
  };

  return (
    <div className="header">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          className="title-name"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifySelf: 'start',
              position: 'absolute',
              left: '0',
            }}
          >
            <div>JONESWOOD</div> <div>COLLECTIVE</div>
          </div>
        </div>
        <div
          className="title-name"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          color="white"
        >
          <MenuIcon />
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleNavigate}>Home</MenuItem>
        <MenuItem value="trees" onClick={handleNavigate}>
          Trees
        </MenuItem>
        <MenuItem value="contact" onClick={handleNavigate}>
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
}
