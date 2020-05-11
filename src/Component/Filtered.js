import React, {Component} from 'react';
import {connect} from "react-redux";
import {searchProducts} from "../Redux/Cart/Actions";
import {Form, FormControl, ListGroup,} from "react-bootstrap";

class Filtered extends Component {
    constructor(props) {
        super(props);
    }

    changeHandlerSearch = (e) => {
        this.props.searchProducts(e.target.value)
    }

    render() {

        return (
            <div>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"
                                 onChange={this.changeHandlerSearch}/>
                </Form>

                <div style={{position: "absolute", top: "60px", right: "60px", zIndex: "1"}}>
                    <ListGroup>

                        {this.props.search && this.props.search != '' && this.props.filtered && this.props.filtered.length ? this.props.filtered.map((product) =>

                            <a href="/products"><img src={product.image} style={{width: "40px"}}/> {product.name}</a>
                        ) : ''

                        }

                    </ListGroup>

                </div>


            </div>
        );

    }
};


const mapStateToProps = (state) => {
    return {
        filtered: state.filtered,
        search: state.search
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        searchProducts: product => {
            dispatch(searchProducts(product))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Filtered);