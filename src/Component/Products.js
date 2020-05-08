import React, {Component} from 'react';
import {Button, Card, CardGroup} from "react-bootstrap";
import {connect} from 'react-redux';
import {addProduct} from '../Redux/Cart/Actions'




class Products extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler = (product) => {
        this.props.addProduct(product)
    }
    render() {

        let productsCart = this.props.products && this.props.products.length ? this.props.products.map((product) =>
            <Card style={{width: '18rem'}}>
                <Card.Img style={{width: "210px", height: "200px"}} variant="top" src={product.image} onClick={() => {
                    window.location.href = `/product/${product.id}`
                }}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text style={{color: "red"}}>
                        {product.price}€
                        <br/>
                        {product.amount} PCS available
                    </Card.Text>
                    <Button variant="primary" onClick={()=> {this.clickHandler(product)}} >Add to Cart</Button>
                </Card.Body>
            </Card>
        ) : ''

        return (
            <div>
                <CardGroup>

                    {productsCart}

                </CardGroup>


            </div>
        );

    }

};

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

export default connect(mapStateToProps, mapDispatchToProps) (Products);