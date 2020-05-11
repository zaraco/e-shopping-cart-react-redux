import React, {Component} from "react";
import {Col, Figure} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {connect} from 'react-redux';
import {addProduct} from "../Redux/Cart/Actions";


class Product extends Component {
    constructor(props) {
        super(props);
        let id = this.props.match.params.id
        let selectedProduct
        props.products.forEach((product) => {
            if (product.id == id) {
                selectedProduct = product
            }
        })
        this.state = {
            product: selectedProduct
        }
    }

    render() {

        return (
            <>
                <Row>
                    <Col md={4}>
                        <Figure>
                            <Figure.Image
                                width="100%"
                                alt="171x180"
                                src={this.state.product.image}
                            />

                        </Figure>
                    </Col>
                    <Col>
                        <h1>
                            {this.state.product.name}
                        </h1>

                        <p>
                            {this.state.product.text}
                        </p>

                        <p>
                            Amount: {this.state.product.amount} Pcs
                        </p>
                        <p>
                            Price: {this.state.product.price} €
                        </p>

                        <span style={{color: "red", fontWeight: "bold"}}>
                             Carrier: Free
                       </span>

                    </Col>
                </Row>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addProduct: product => {dispatch(addProduct(product))}

    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Product);