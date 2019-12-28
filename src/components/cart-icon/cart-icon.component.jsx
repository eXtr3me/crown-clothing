import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHiddden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';
const CartIcon = ({ toggleCartHiddden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHiddden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHiddden: () => dispatch(toggleCartHiddden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
