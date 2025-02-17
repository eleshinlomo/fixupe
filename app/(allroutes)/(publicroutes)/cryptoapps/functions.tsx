import axios from 'axios';


const apiKeys = {
    eth: 'WTQ4M2XB5YBGS6KIT4CCG8BPCUJHVNRKE3'
  }


export const fetchEthTransactions = async (walletAddress: string, year: string) => {
    if(year === 'allYears'){

    try {
      // Replace with your blockchain API endpoint and API key
      const apiKey = apiKeys.eth;
      const apiUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;

      const response = await axios.get(apiUrl);
      return response
    }catch(err){
        console.log(err)
        return err
    }
  }
}


export const fetchEthPrice = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Failed to fetch ETH price:', error);
    return error
  }
};

export const fetchSuiPrice = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=sui&vs_currencies=usd');
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Failed to fetch SUI price:', error);
    return error
  }
};


// let selectedAsset = ''
// selectedAsset = 'ETH'
// const trades = []

// const addSelectedAsset = () =>{
//  if(selectedAsset !== ''){
   
//     const assetValues = {
//         type:selectedAsset
//     }
//     trades.push(selectedAsset)
//  }

// }

// const assetTradesrades = [
//     { type: 'buy', asset: 'ETH', quantity: 1, timestamp: 1672531200 }, 
//     { type: 'buy', asset: 'ETH', quantity: 2, timestamp: 1672617600 }, 
//     { type: 'sell', asset: 'ETH', quantity: 1, timestamp: 1672704000 }, 
//     { type: 'buy', asset: 'BTC', quantity: 0.1, timestamp: 1672790400 }, 
//     { type: 'sell', asset: 'BTC', quantity: 0.05, timestamp: 1672876800 }, 
//   ];