import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
import Campaign from "./build/Campaign.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xD456AaFC4A73938Bfbabd42BC6d8B3df452aBcA7'
);

export default instance;