import React, { Component, } from "react";
import TC_Wrapper from "react-tag-commander";

const wrapper = TC_Wrapper.getInstance();

const withTracker = (WrappedComponent, options = {}) => {
  
  const trackPage = page => {
    console.log(wrapper);
    
    wrapper.setVars(options);
  };

  // eslint-disable-next-line
  const HighOrderComponent = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage = prevProps.location.pathname + prevProps.location.search;
      const nextPage = this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HighOrderComponent;
};

export default withTracker;