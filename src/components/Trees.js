import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { treeData } from './treeData';

const Trees = () => {
  return (
    <div className="tree-container">
      {treeData.map((item) => {
        return (
          <Accordion sx={{ backgroundColor: '#c6c6c6' }} key={item.tree}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.tree}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.description.map((desc) => {
                return (
                  <Typography mb={2} key={desc}>
                    {desc}
                  </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Trees;
