import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/header';
import Sidebar from './components/sidebr';
import Cards from './components/content';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Header
                                airlines="Авиакомпании" booking="Бронирование билетов"
                                about="Информация о нас"/>
                    </Row>
                    <Row end="xs">
                        <Col xs={12}>
                            <Row>
                                <Col className="mt-lg-5" xs={10}>
                                    <Cards buy="Купить билет" date="Дата: 02-11-2019"
                                           image="https://weneedfun.com/wp-content/uploads/2016/12/Spain-Flag-17.jpg" Title="Бишкек - Spanish"
                                           price="Цена: 1500$"/>
                                </Col>
                                <Col className="mt-lg-5" xs={10}>
                                    <Cards buy="Купить билет" date="Дата: 22-12-2019"
                                           image="http://royaltour74.ru/images/visa-usa.jpg" Title="Бишкек - USA"
                                           price="Цена: 600$"/>
                                </Col>
                                <Col className="mt-lg-5" xs={10}>
                                    <Cards buy="Купить билет" date="Дата: 02-05-2019"
                                           image="https://i.ytimg.com/vi/SdOoUdIeEvw/maxresdefault.jpg" Title="Бишкек - Australia"
                                           price="Цена: 1500$"/>
                                </Col>
                            </Row>

                        </Col>
                        <Sidebar kyrgyz="Manas Airline" turkish="Turkish Airline" spanish= "Lufthansa" />
                    </Row>
                    <Row>
                        <Footer foot = "Airplanes (c)2019"/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
