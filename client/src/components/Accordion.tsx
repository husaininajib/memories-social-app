import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';

export default function SimpleAccordion() {
  const [expandAll, setExpandAll] = useState(false);
  const [expandItems, setExpandItems] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
  });

  const handleExpandAll = () => {
    setExpandAll((prevState) => !prevState);
    setExpandItems((prevState) => {
      return {
        accordion1: !prevState.accordion1,
        accordion2: !prevState.accordion2,
        accordion3: !prevState.accordion3,
      };
    });
  };

  const handleExpandItem = (name: string) => {
    if (name === 'accordion1') {
      setExpandItems((prevState) => {
        return {
          ...prevState,
          accordion1: !prevState.accordion1,
        };
      });
    } else if (name === 'accordion2') {
      setExpandItems((prevState) => {
        return {
          ...prevState,
          accordion2: !prevState.accordion2,
        };
      });
    }
  };

  return (
    <Container maxWidth={'xs'} sx={{ mt: 10 }}>
      <Accordion disableGutters expanded={expandAll} onChange={handleExpandAll}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography fontWeight={700}>Expand All</Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion disableGutters expanded={expandItems.accordion1} onChange={() => handleExpandItem('accordion1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters expanded={expandItems.accordion2} onChange={() => handleExpandItem('accordion2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
