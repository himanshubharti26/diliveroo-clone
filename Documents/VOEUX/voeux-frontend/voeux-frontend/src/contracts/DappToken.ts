import { JsonRpcProvider, Contract } from "ethers";

export class DappToken{

    contractInstance:Contract;

    constructor(DAPPTOKEN_CONTRACT_ADDRESS:string, DAPPTOKEN_CONTRACT_ABI:any[], provider:JsonRpcProvider){
        

        const contract = new Contract(
            DAPPTOKEN_CONTRACT_ADDRESS,
            DAPPTOKEN_CONTRACT_ABI,
            provider
        ) as Contract;

        this.contractInstance = contract; 
    }

    getAllowance = async (owner:string, spender:string ):Promise<Number>=>{
        try{
            return await this.contractInstance.allowance(owner, spender);
            
        }catch(err){
           throw err;
        }
         
    }
    
    approveTransaction = async(spender:string, value:number):Promise<boolean>=>{
        try{
            return await this.contractInstance.approve(spender, value);
            
        }catch(err){
            throw err
        }
    }
    
    getBalance = async(account:string):Promise<Number>=>{
        try{
            const response = await this.contractInstance.balanceOf(account);
            return response;
        }catch(err){
            throw err;
        }
    }

    getUserName = async ():Promise<String>=>{
        try{
            return await this.contractInstance.name();
            
        }catch(err){
            throw err;
        }
    }
    
    getTokenSymbol = async ():Promise<String>=>{
        try{
            return await this.contractInstance.symbol();
            
        }catch(err){
            throw err;
        }
    }
    
    getDecimals = async ():Promise<Number>=>{
        try{
            
            return await this.contractInstance.decimals();
            
        }catch(err){
            throw err;
        }
    }
    
    
    getToatalSupply = async ():Promise<Number>=>{
        try{
            return  await this.contractInstance.totalSupply();
            
        }catch(err){
            throw err
        }
    }
    
    transferToken = async (to:string, value:number):Promise<boolean>=>{
        try{
            return await this.contractInstance.transfer(to, value);
        }catch(err){
            throw err
        }
    }
    
    getTransferDetail = async (from:string, to:string, value:number):Promise<boolean>=>{
        try{
            return await this.contractInstance.transferFrom(from, to, value);
            
        }catch(err){
            throw err
        }
    }
}