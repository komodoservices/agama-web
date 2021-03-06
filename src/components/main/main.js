import React from 'react';
import WalletMain from './walletMain';
import Store from '../../store';
import {
  getDexCoins,
  activeHandle,
  shepherdElectrumCoins,
  shepherdSelectProxy,
} from '../../actions/actionCreators';
import Config from '../../config';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: null,
    };
  }

  componentDidMount() {
    document.title = `${Config.whitelabel ? Config.wlConfig.title : 'Agama Web'} (v${Config.version})`;
  }

  componentWillMount() {
    shepherdSelectProxy();
    Store.dispatch(getDexCoins());
    Store.dispatch(activeHandle());
    Store.dispatch(shepherdElectrumCoins());
  }

  render() {
    return (
      <WalletMain />
    );
  }
}

export default Main;