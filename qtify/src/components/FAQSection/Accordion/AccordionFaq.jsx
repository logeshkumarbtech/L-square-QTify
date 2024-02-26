import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionFaq() {
  return (
    <div>
      <Accordion sx={{backgroundColor:"white", borderRadius:"10px", marginBottom:"50px",gap:"20px"}} >
        <div style={{padding:"2px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#34c94b"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor:"#121212", borderRadius:"10px", height:"78px", width:"1135px"}}
        >
          <Typography sx={{color:"white", fontSize:"20px"}}>IS QTify free to use?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails>
          <Typography sx={{height:"40px", fontSize:"20px"}}>
            Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
      <div style={{padding:"2px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#34c94b"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{backgroundColor:"#121212", borderRadius:"10px", height:"78px", width:"1135px"}}
        >
          <Typography sx={{color:"white", fontSize:"20px"}}>Can i download and listen to songs offline?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails>
          <Typography sx={{height:"40px", fontSize:"20px"}}>
            Sorry, Unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}