/* tslint:disable */
// https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
// 
import * as React from 'react';
import * as GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-114128453-1');
const withTracker = (WrappedComponent: any, options = {}) => {
  const trackPage = (page: any) => {
    GoogleAnalytics.set({
      page,
      ...options,
    });
    GoogleAnalytics.pageview(page);
  };

  const HOC = class extends React.Component<any> {
    componentDidMount() {
      // tslint:disable-next-line
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps: any) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;