import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {Button, Alert} from "react-bootstrap";
import {connect} from 'react-redux';
import {payCart} from "../Redux/Cart/Actions";

class CartShow extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler = () => {
        this.props.payCart()
    }

    render() {
        let alert = this.props.message ? <Alert variant="success">{this.props.message}</Alert> : ''
       // console.log(this.props.cart)
        let total = this.props.cart && this.props.cart.length > 0 ? this.props.cart.map((item) =>
            <tr>

                <td>{item.name}</td>
                <td>{item.price} €</td>
                <td><img src={item.image} style={{height: '40px'}}/></td>

            </tr>
        ) : null

        return (
            <>
                <Table striped bordered hover>
                    <thead>
                    <tr>

                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                    </thead>

                    <tbody>

                    {total}
                    <tr>
                        <td style={{color: 'red', fontWeight: 'bold'}}>total</td>
                        <td>{this.props.total}</td>
                        <td></td>

                    </tr>
                    </tbody>
                </Table>
                {alert}
                <Button variant="info" onClick={this.clickHandler}>Payment</Button>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        cart: state.cart,
        total: state.total,
        message:state.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        payCart: ()  => {dispatch(payCart())}

    }
}



export default connect(mapStateToProps, mapDispatchToProps) (CartShow) ;