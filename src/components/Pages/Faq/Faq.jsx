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
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Как выбрать подходящее спортивное питание?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Выбор спортивного питания зависит от ваших целей. 
                                 Набор массы: Ищите протеин, гейнеры, креатин.
                                 Потеря веса: Выбирайте протеин, L-карнитин, жиросжигатели.
                                 Улучшение выносливости: Используйте BCAA, глютамин, энергетические батончики.
                                 Восстановление после тренировки: Принимайте протеин, глютамин, BCAA
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Безопасно ли употреблять спортивное питание?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Спортивное питание безопасно при правильном использовании и выборе качественных продуктов. Перед началом приема всегда консультируйтесь с врачом или диетологом, особенно если у вас есть какие-либо заболевания.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Как правильно употреблять протеин?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                                Рекомендуемая дозировка протеина зависит от ваших целей и индивидуальных потребностей. Обычно рекомендуется принимать 1-1.5 грамма протеина на килограмм веса тела в день. Распределите прием протеина равномерно на 3-4 приема в день, в том числе после тренировки.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Как долго можно принимать спортивное питание?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Спортивное питание не предназначено для постоянного употребления. Его прием рекомендуется в течение определенного периода времени, в зависимости от ваших целей. 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Можно ли принимать спортивное питание детям?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Детям не рекомендуется принимать спортивное питание, пока они не достигнут полнолетия. Их организму необходимо получать питательные вещества из обычной пищи.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Где лучше всего покупать спортивное питание?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Мы рекомендуем покупать спортивное питание только у доверенных продавцов, имеющих сертификаты качества. На нашем сайте вы можете найти широкий ассортимент продукции от известных брендов.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Какие дополнительные советы по приему спортивного питания вы можете дать?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Не забывайте о правильном питании: спортивное питание не заменяет сбалансированную диету. Пить достаточно воды: обеспечьте своему организму достаточное гидратация. Следуйте рекомендациям по дозировке. Храните спортивное питание в сухом и прохладном месте. 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Как вернуть товар?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Возврат товара возможен в течение 14 дней с момента получения заказа.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Как оплатить заказ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Мы принимаем оплату только картой онлайн.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Можно ли принимать спортивное питание во время беременности или грудного вскармливания?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Нет, не рекомендуется. Принимайте спортивное питание только после консультации с врачом.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Как избежать побочных эффектов от спортивного питания?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Следуйте рекомендациям по дозировке, используйте качественные продукты и консультируйтесь с врачом, если у вас возникли побочные эффекты.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='defaulstyle'>
                            <AccordionSummary className='defaulstyle'
                            expandIcon={<img src='./public/img/arrow.svg' alt=''/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '20px' }} className='defaulstyle faq_title'>Как я могу связаться с вами для получения дополнительной информации?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '18px' }} className='defaulstyle faq_text'>
                            Вы можете связаться с нами по телефону, электронной почте или через форму обратной связи на сайте.
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