import React from "react";
import {Badge} from "react-bootstrap";
import {connect} from "react-redux";



const BadgeCart = (props) => {

    return(

        <div>

            <Badge variant="info">{props.cart ? props.cart.length : 0}</Badge>



        </div>

    )
}


const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps) (BadgeCart);