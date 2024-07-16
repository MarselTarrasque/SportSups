import './ReviewCard.css';
export default function ReviewCard(){
    return(
        <>
            <div className="reviewcard">
                <div className="senderinfo">
                        <div className="senderinfo_name-date">
                            <h1 className="sendername">Сарычев Кирилл</h1>
                            <p className="date">10-07-2024</p>
                        </div>
                    </div>
                    <div className="stars">
                        <svg width="112" height="20" viewBox="0 0 112 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z" fill="#FFB300"/><path d="M33 15.77L39.18 19.5L37.54 12.47L43 7.74L35.81 7.13L33 0.5L30.19 7.13L23 7.74L28.46 12.47L26.82 19.5L33 15.77Z" fill="#FFB300"/><path d="M56 15.77L62.18 19.5L60.54 12.47L66 7.74L58.81 7.13L56 0.5L53.19 7.13L46 7.74L51.46 12.47L49.82 19.5L56 15.77Z" fill="#FFB300"/><path d="M79 15.77L85.18 19.5L83.54 12.47L89 7.74L81.81 7.13L79 0.5L76.19 7.13L69 7.74L74.46 12.47L72.82 19.5L79 15.77Z" fill="#FFB300"/><path d="M112 7.74L104.81 7.12L102 0.5L99.19 7.13L92 7.74L97.46 12.47L95.82 19.5L102 15.77L108.18 19.5L106.55 12.47L112 7.74ZM102 13.9V4.6L103.71 8.64L108.09 9.02L104.77 11.9L105.77 16.18L102 13.9Z" fill="#FFB300"/></svg>
                    </div>
                    <p className="sender-review-text">
                        100% Golden Whey - это чистый сывороточный белок премиум класса, Купил и доволен покупкой!
                    </p>
            </div>
        </>
    )
}