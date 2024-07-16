import './Contacts.css'
export default function Contacts(){
    return(
        <>
            <div className="contacts">
                <div className="container">
                    <div className="contacts__inner">
                        <h1 className="contacts-title">Контакты</h1>
                        <div className="contacts-info">
                            <div className="contacts-left">
                                <p className="contacts-info-text">Сотрудничество: sportsups@contact.ru</p>
                                <p className="contacts-info-text">Поддержка: sportsups@support.ru</p>
                                <p className="contacts-info-text">Телефон: +7(952)812</p>
                            </div>
                            <div className="contacts-right">
                                <p className="contacts-mobileapp-text">Мобильное приложение</p>
                                <div className="contacts_links">
                                    <a href="#" className="contacts_links-link"><img src="./src/assets/imgs/appstore.svg" alt="" /></a>
                                    <a href="#" className="contacts_links-link"><img src="./src/assets/imgs/googleplay.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}