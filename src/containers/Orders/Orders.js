import React, { useEffect } from "react";
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

const Orders = (props) => {
  const { onFetchOrders, token, userId } = props;
  useEffect(() => {
    onFetchOrders(token, userId);
  }, [onFetchOrders, token, userId]);

  let orders = <Spinner />;

  if (!props.loading) {
    orders = props.orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={+order.price}
      />
    ));
  }
  return <div>{orders}</div>;
};

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
