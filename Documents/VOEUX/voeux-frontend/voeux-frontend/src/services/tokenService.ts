
import { JsonRpcProvider } from "ethers";
import { DAPPTOKEN_CONTRACT_ADDRESS, DAPPTOKEN_CONTRACT_ABI } from "../constants/ABIs/tokenABI";
// import dotenv from 'dotenv';
import { DappToken } from "../contracts/DappToken";

// dotenv.config();

export class TokenService {

    TokenInstance:DappToken;

    constructor(){
        const apiKey = "638c9bb25ae5440a8ee543d0c9cc361d"
        const app_URI = "https://polygon-mumbai.infura.io/v3"

        const provider = new JsonRpcProvider(
            `${app_URI}/${apiKey}`
        );
        this.TokenInstance = new DappToken(DAPPTOKEN_CONTRACT_ADDRESS, DAPPTOKEN_CONTRACT_ABI, provider);
    }

    getTokenSymbol = async():Promise<String>=>{
        return await this.TokenInstance.getTokenSymbol();
    }

    getDecimals = async():Promise<Number>=>{
        return await this.TokenInstance.getDecimals();
    }

}
