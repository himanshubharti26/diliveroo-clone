
import { JsonRpcProvider } from "ethers";
import {REWARDFARM_CONTRACT_ADDRESS ,REWARDFARM_CONTRACT_ABI } from "../constants/ABIs/rewardABI";
import { RewardFarm } from "../contracts/RewardFarm";


export class RewardFarmService{

    rewardFarmInstance:RewardFarm;

    constructor(){

        const apiKey = "638c9bb25ae5440a8ee543d0c9cc361d"
        const app_URI = "https://polygon-mumbai.infura.io/v3"

        try{
            console.log("in farm constructor=>",apiKey,app_URI);
            const provider = new JsonRpcProvider(
                `${app_URI}/${apiKey}`
            );
            this.rewardFarmInstance = new RewardFarm(REWARDFARM_CONTRACT_ADDRESS, REWARDFARM_CONTRACT_ABI, provider);
        }catch(err){
            throw err;
        }
        
    }

    getwalletBalance = async(address:string):Promise<Number> => {
        console.log("received address==>",address);
        const balance =  await this.rewardFarmInstance.getBalance(address);
        console.log("balance ===>",Number(balance))
        return Number(balance)
    }

    getFinishedTime = async():Promise<Number> => {
        return await this.rewardFarmInstance.getFinishTime();
    }

    getOwner =async():Promise<String>=>{
        return await this.rewardFarmInstance.getFarmOwner();
    }

    getEarings = async(address:string):Promise<Number>=>{
        return await this.rewardFarmInstance.getEarnings(address);
    }

    getTotalSupply = async():Promise<Number>=>{
        return await this.rewardFarmInstance.getTotalSupply();
    }

}