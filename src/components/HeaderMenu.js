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
        <div style={{ flex: 1 }} className="title-name">
          Joneswood Collective
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
