// web app config
let Config = {
  version: '0.2.1-beta',
  debug: false,
  defaultLang: 'EN',
  roundValues: false,
  fiatRates: true,
  // single coin option
  whitelabel: true,
  wlConfig: {
    enableAllCoins: false,
    title: 'Wallet | Komodo Services', // app title
    mainLogo: 'native/kmd_header_title_logo.png', // login logo
    coin: {
      ticker: 'KMD',
      name: 'Komodo',
      logo: 'cryptologos/kmd.png', // dashboard coin logo
    },
    explorer: 'https://explorer.komodo.services', // insight or iquidus
    serverList: [ // electrum servers list
      'electrum1.cipig.net:10001:tcp',
      'electrum2.cipig.net:10001:tcp',
    ],
    support: {
      onlineLink: {
        url: 'http://wallet.komodo.services',
        title: 'http://wallet.komodo.services',
      },
      standaloneLink: 'https://www.atomicexplorer.com/wallet.zip',
      chatApp: {
        url: 'https://discordapp.com/channels/412898016371015680/453204571393622027',
        channel: '#agama-wallet',
        name: 'Discord',
        inviteUrl: 'https://komodoplatform.com/discord',
      },
      ticketsLink: {
        url: 'http://support.komodoplatform.com',
        title: 'support.komodoplatform.com',
        urlNewTicket: 'https://support.komodoplatform.com/support/tickets/new',
      },
      gitLink: {
        title: 'github.com/komodoservices/agama-web',
        url: 'https://github.com/komodoservices/agama-web',
      },
    },
  },
  preload: {
    seed: '',
    coins: ['kmd'],
  },
};

export const devlog = (msg, data) => {
  if (Config.dev ||
      Config.debug) {
    if (data) {
      console.warn(msg, data);
    } else {
      console.warn(msg);
    }
  }
};

Config.log = devlog;

export default Config;
