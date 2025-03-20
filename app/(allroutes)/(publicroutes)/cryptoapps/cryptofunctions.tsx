import axios from 'axios';
import {formatUnits} from 'ethers'
import { useEffect } from 'react';
import { isAddress } from 'web3-validator';



const validateEthAddress = (walletAddress: string)=>{
     const isEthereumWallet = isAddress(walletAddress)
     if(isEthereumWallet === false){
      console.log('Invalid wallet address', isEthereumWallet)
      return 'Invalid wallet address'
     }

     return ''

}

const ETH_API = 'WTQ4M2XB5YBGS6KIT4CCG8BPCUJHVNRKE3'

const apiKeys = {
    eth: ETH_API
  }


export const fetchEthTransactions = async (walletAddress: string, year: string) => {
    if(year === 'allYears'){

    try {
      // Replace with your blockchain API endpoint and API key
      const apiUrl : string = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKeys.eth}`;

      const response : any = await axios.get(apiUrl);
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
    return data.ethereum.usd
  } catch (error) {
    console.error('Failed to fetch ETH price:', error);
    return error
  }
};

export const convertEthToUsd = async (purchaseAmount: number) =>{
   const ethUsdPrice: any = await fetchEthPrice()
   const purchaseInUsd = ethUsdPrice * purchaseAmount
   return purchaseInUsd

}

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


export const fetchEthBalance = async (walletAddress: string): Promise<string> => {
  try {
    const url = `https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${apiKeys.eth}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== '1') {
      throw new Error(`Etherscan API error: ${data.message}`);
    }

    // Convert balance from wei to ETH (1 ETH = 10^18 wei)
    const balanceInWei = data.result;
    const balanceInEth = formatUnits(balanceInWei, 18);

    return balanceInEth.toString();
  } catch (error) {
    console.error('Failed to fetch ETH balance:', error);
    throw error;
  }
};





// Get wallet transactions
export async function getWalletTransactions(walletAddress: string) {
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKeys.eth}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.status !== '1') {
      console.error('Error fetching transactions:', data.message);
      return [];
    }

    const transactions = data.result;
    if (transactions.length === 0) return [];


    const tradeHistory = [];
    const buys: any[] = [];
    const sells: any[] = [];

    // Fetch ETH price once
    const currentETHPriceInUsd = await fetchEthPrice();
    const ethBalance: any = await fetchEthBalance(walletAddress);
    const ethBalanceInUsd: number = ethBalance * currentETHPriceInUsd;

    for (const tx of transactions.sort((a: any, b: any) => b.timeStamp - a.timeStamp)) {
      if (tx.isError === '1') continue; // Skip failed transactions

      const transactionAmountInEth = parseInt(tx.value) / 1e18; // Convert from Wei to ETH
      const gasPrice = BigInt(tx.gasPrice);
      const gasUsed = BigInt(tx.gasUsed);
      const transactionFeeInEth = Number(gasPrice) * Number(gasUsed) / 1e18;

      const timestamp = parseInt(tx.timeStamp) * 1000;
      const date = new Date(timestamp).toLocaleString();

      const isSell = tx.from.toLowerCase() === walletAddress.toLowerCase();
      const isBuy = tx.to.toLowerCase() === walletAddress.toLowerCase();

      if (isBuy) buys.push({ value: transactionAmountInEth, date });
      if (isSell) sells.push({ value: transactionAmountInEth, date });

      const transactionInUsd = transactionAmountInEth * currentETHPriceInUsd;

      let profitLoss = null;
      let tradeType = null;
      let buyDate = null;

      if (isSell && buys.length > 0) {
        const buy = buys.shift(); // FIFO buy
        profitLoss = transactionAmountInEth - buy.value;
        tradeType = profitLoss >= 0 ? 'Profit' : 'Loss';
        buyDate = buy.date;
      } else if (isBuy && sells.length > 0) {
        const sell = sells.shift(); // FIFO sell
        profitLoss = sell.value - transactionAmountInEth;
        tradeType = profitLoss >= 0 ? 'Profit' : 'Loss';
        buyDate = date;
      }

      tradeHistory.push({
        transactionFeeInEth,
        transactionType: isBuy ? 'buy' : 'sell',
        ethBalance,
        ethBalanceInUsd,
        transactionInUsd,
        date,
        buyDate,
        transactionAmountInEth,
        pfl: profitLoss,
        tradeType,
        success: true
      });
    }

    return tradeHistory;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
}


