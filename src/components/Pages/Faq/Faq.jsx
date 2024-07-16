import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Faq.css'

export default function Faq(){
    return(
        <>
        <div className="faq">
            <div className="container">
                <div className="faq__inner">
                    <div className="faq-items">
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography className='defaulstyle faq_title'>Как выбрать подходящее спортивное питание?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography className='defaulstyle faq_text'>
                                Выбор спортивного питания зависит от ваших целей. 
                                 Набор массы: Ищите протеин, гейнеры, креатин.
                                 Потеря веса: Выбирайте протеин, L-карнитин, жиросжигатели.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}