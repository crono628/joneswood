import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

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
      <div
        className="title-name"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="white"
        padding={2}
      >
        Joneswood Collective
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
        <MenuItem value="about" onClick={handleNavigate}>
          About
        </MenuItem>
        <MenuItem value="contact" onClick={handleNavigate}>
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
}
