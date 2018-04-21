import Web3 from 'web3';

// window is a global variable only available on the browser
// when next js loads up our code window variable is not defined

let web3;

// typeof to see if a variable in JS is undefined
// should see window type as object if defined
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running
  // and hijack provider and use to create own instance of web3
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/ircUsVHydCGstGM4gfWO'
  );
  web3 = new Web3(provider);
}

export default web3;
