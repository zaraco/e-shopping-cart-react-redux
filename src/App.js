import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    Badge,
    Col,
    Container,
    Form,
    FormControl,
    Image,
    Jumbotron,
    ListGroup,
    Nav,
    Navbar,
    Row,
} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from './Redux/Store'
import Home from "./Component/Home";
import Products from "./Component/Products";
import Product from "./Component/Product";
import CartShow from "./Component/CartShow";
import Contact from "./Component/Contact";
import Filtered from "./Component/Filtered";
import BadgeCart from "./Component/BadgeCart";




class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <Provider store={store}>
                <>
                    <Container>
                        <Row>
                            <Col>
                                <br/>

                                <Jumbotron>
                                    <Navbar bg="light" expand="md">
                                        <Navbar.Brand href="/products">
                                            <Image src="/Products/ecom (1).jpg" style={{
                                                height: "50px"
                                            }}>

                                            </Image></Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="mr-auto">
                                                <Nav.Link href="/home">Home</Nav.Link>
                                                <Nav.Link href="/products">Products</Nav.Link>
                                                <Nav.Link href="/cart">Cart<BadgeCart/></Nav.Link>
                                                <Nav.Link href="/Contact">Contact</Nav.Link>
                                            </Nav>
                                            <div style={{marginRight: "30px", fontSize: "2em"}}>
                                                <FontAwesomeIcon icon={faShoppingCart}/>
                                            </div>
                                            <Filtered/>

                                        </Navbar.Collapse>
                                    </Navbar>

                                    <br/>
                                    <Router>
                                        <Switch>
                                            <Route path='/home' component={Home}/>
                                            <Route path='/products' component={Products}/>
                                            <Route path='/cart' component={CartShow}/>
                                            <Route path='/contact' component={Contact}/>
                                            <Route path='/product/:id' component={Product}/>

                                        </Switch>
                                    </Router>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>
                </>
            </Provider>
        );
    }
}





export default App;

