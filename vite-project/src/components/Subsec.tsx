// import React from 'react'
import * as React from 'react';
import data from './Data.json'   //Importing the JSON file
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';



const Subsec = () => {

    const [checked, setChecked] = React.useState([true, false]);
    const [Checked, setchecked] = React.useState([true, false,false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
  
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
  
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    const Change1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setchecked([event.target.checked, event.target.checked, event.target.checked]);
      };

      const Change2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setchecked([event.target.checked, Checked[1],Checked[2]]);
      };

      const Change3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setchecked([Checked[0], event.target.checked,Checked[2]]);
      };
      
      const Change4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setchecked([Checked[0], Checked[1], event.target.checked]);
      };
      

    

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label={data[0].sub_departments[0]}
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label={data[0].sub_departments[1]}
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </Box>
      );


    const children2 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label={data[1].sub_departments[0]}
            control={<Checkbox checked={Checked[0]} onChange={Change2} />}
          />
          <FormControlLabel
            label={data[1].sub_departments[1]}
            control={<Checkbox checked={Checked[1]} onChange={Change3} />}
          />
            <FormControlLabel
            label={data[1].sub_departments[2]}
            control={<Checkbox checked={Checked[2]} onChange={Change4} />}
          />
        </Box>
      );
  return (
   <>
    {/* The collapsed component */}
          <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            label={data[0].department}
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {/* Render sub-departments */}
            {children}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            label={data[1].department}
            control={
              <Checkbox
                checked={Checked[0] && Checked[1] && Checked[2]}
                indeterminate={Checked[0] !== Checked[1] || Checked[1] !== Checked[2]}
                onChange={Change1}
              />
            }
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {children2}
          </Box>
        </AccordionDetails>
      </Accordion>
   </>
  )
}

export default Subsec