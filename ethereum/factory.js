import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1FA147Cd67A3FBb7bc14400f1C4F428f8BD296C0'
);

export default instance;
