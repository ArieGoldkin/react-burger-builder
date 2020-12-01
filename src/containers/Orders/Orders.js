import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../axios.order";

import Order from "../../components/Order/Order";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

import { fetchOrders } from "../../store/actions";
import {
  getOrders,
  getLoading,
  getToken,
  getUserId,
} from "../../store/selectors";

class Orders extends Component {
  // state = {
  //   orders: [],
  //   loading: true,
  // };
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
    // axios
    //   .get("/orders.json")
    //   .then((res) => {
    //     // console.log(res.data);
    //     const fetchedOrders = [];
    //     for (let key in res.data) {
    //       //   console.log(res.data[key]);
    //       fetchedOrders.push({
    //         ...res.data[key],
    //         id: key,
    //       });
    //     }
    //     // console.log(fetchedOrders);
    //     this.setState({ loading: false, orders: fetchedOrders });
    //   })
    //   .catch((err) => {
    //     this.setState({ loading: false });
    //   });
  }
  render() {
    let orders = <Spinner />;

    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: getOrders(state),
    loading: getLoading(state),
    token: getToken(state),
    userId: getUserId(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Orders, axios));
