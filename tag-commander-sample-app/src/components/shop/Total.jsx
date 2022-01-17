import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Total extends Component {
  render() {
    let prix = 0;
    const total = this.props.items.forEach(item => {
      if (item) {
        prix += item.price * item.quantity;
      }
    });

    const { defaultStoreCurrency } = this.props;
    return (
      <span className="grand-total">
        {" "}{total}{prix}{defaultStoreCurrency}{" "}
      </span>
    );
  };
};

Total.propTypes = {
  items: PropTypes.array.isRequired,
  defaultStoreCurrency: PropTypes.string.isRequired
};

export default Total;