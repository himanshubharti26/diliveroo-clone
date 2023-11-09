
import { JsonRpcProvider, Contract } from "ethers";

export class RewardFarm{

    contractInstance:Contract

    constructor(CONTRACT_ADDRESS:string, CONTRACT_ABI:any[], provider:JsonRpcProvider){
        
        try{
            console.log("in farm contract constructor==>",)
            const contract = new Contract(
                CONTRACT_ADDRESS,
                CONTRACT_ABI,
                provider
            ) as Contract;
            
            this.contractInstance = contract;
        }catch(err){
            throw err;
        }
        

    }

    
    getBalance = async(address:string):Promise<Number> => {
        try{
            return await this.contractInstance.balanceOf(address) 
           
        }catch(err){
            throw err;
        }
           
    }

    getDuration = async(address:string):Promise<Number> => {
        try{
            return await this.contractInstance.duration(address);
        }catch(err){
            throw err;
        }
           
    }

    getEarnings = async(_account:string):Promise<Number>=>{
        try{
            return await this.contractInstance.earned(_account);
        }catch(err){
            throw err;
        }
    }

    getFinishTime = async():Promise<Number>=>{
        try{
            return await this.contractInstance.finishAt();
        }catch(err){
            throw err
        }
    }

    getlastTimeRewardApplicable = async():Promise<Number>=>{
        try{
            return await this.contractInstance.lastTimeRewardApplicable();
        }catch(err){
            throw err
        }
    }

    notifyRewardAmount = async(_amount:number):Promise<void>=>{
        try{
            return await this.contractInstance.notifyRewardAmount(_amount);
        }catch(err){
            throw err;
        }
    }

    getFarmOwner = async():Promise<String>=>{
        try{
            return await this.contractInstance.owner();
        }catch(err){
            throw err;
        }
    }
    
    getRewardPerTokenValue = async():Promise<Number>=>{
        try{
            return await this.contractInstance.rewardPerToken();
        }catch(err){
            throw err;
        }
    }

    getRewardPerTokenStoredValue = async():Promise<Number>=>{
        try{
            return await this.contractInstance.rewardPerTokenStored();
        }catch(err){
            throw err;
        }
    }

    getRewardRate = async():Promise<Number> =>{
        try{
            return await this.contractInstance.rewardRate();
        }catch(err){
            throw err;
        }
    }

    getRewards = async(address:string):Promise<Number> =>{
        try{
            return await this.contractInstance.rewards(address);
        }catch(err){
            throw err;
        }
    }

    getRewardsToken = async():Promise<String> => {
        try{
            return await this.contractInstance.rewards();
        }catch(err){
            throw err;
        }
    }


    setRewardsDuration = async(_duration:String):Promise<void> =>{
        try{
            return await this.contractInstance.rewards(_duration);
        }catch(err){
            throw err;
        }
    }

    investStake = async(_amount:String):Promise<void> =>{
        try{
            await this.contractInstance.stake(_amount);
        }catch(err){
            throw err;
        }
    }
    
    getStakingToken = async():Promise<String>=>{
        try{
            return await this.contractInstance.stakingToken();
        }catch(err){
            throw err;
        }
    }

    getTotalSupply = async():Promise<Number>=>{
        try{
            return await this.contractInstance.totalSupply();
        }catch(err){
            throw err;
        }
    }
    
    getUpdatedTimeStamp = async():Promise<String>=>{
        try{
            return await this.contractInstance.updatedAt();
        }catch(err){
            throw err;
        }
    }

    getUserRewardPerTokenPaid = async(address:String):Promise<Number>=>{
        try{
            return await this.contractInstance.userRewardPerTokenPaid(address);
        }catch(err){
            throw err;
        }
    }

    withdrawToken= async(_amount:Number):Promise<void> =>{
        try{
            return await this.contractInstance.withdraw(_amount);
        }catch(err){
            throw err;
        }
    }

}