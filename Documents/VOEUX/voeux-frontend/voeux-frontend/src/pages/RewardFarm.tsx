import { RewardFarmService } from "../services/rewardFarmService";
import {useState, useEffect} from "react";
import "./RewardFarm.css"

interface FarmData {
    owner:String;
    balance:Number;
    earned:Number;
    totalSupply:Number;
    

}
const RewardFarm = () => {
    const [data,setData] = useState<FarmData>();

    useEffect( ()=>{
        const address = "0xBaa4523B5A2eA70C1ee614830aF9956E28026510"

        const fetchData = async() => {
            try {
                const rewardInstance = new RewardFarmService();
                const balance = await rewardInstance.getwalletBalance(address);
                const owner = await rewardInstance.getOwner();
                const earning = await rewardInstance.getEarings(address);
                const totalSupply = await rewardInstance.getTotalSupply();
                const newData:FarmData = {
                    "balance":balance,
                    "owner":owner,
                    "earned":earning,
                    "totalSupply":totalSupply
                }
                setData(newData);


              } catch (error) {
                console.error("Error fetching balance:", error);
              }
        }
        fetchData();
    },[])
  return (
    
    <table>
  <tr>
    <th>Entity</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Owner</td>
    <td>{data?.owner}</td>
    
  </tr>
  <tr>
    <td>Balance</td>
    <td>{data?.balance.toString()}</td>
    
  </tr>
  <tr>
    <td>Earning</td>
    <td>{data?.earned.toString()}</td>
   
  </tr>
  <tr>
    <td>Total Supply</td>
    <td>{data?.totalSupply.toString()}</td>
   
  </tr>
</table>

  )
}

export default RewardFarm