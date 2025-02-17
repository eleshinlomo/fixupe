import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { fetchEthPrice, fetchSuiPrice } from '../functions';
import { fetchEthTransactions } from '../functions';
import { Button } from '@/components/ui/button';
import { buildTransferMarkdown } from '../markdown';
import ReactMarkdown from 'react-markdown'
import DownloadTransfers from './downloadbtn';
import rehypeRaw from 'rehype-raw';

const TransferPage = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [transactions, setTransactions] = useState<[] | any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('Your transfer history will be displayed below.');
  const [currentPriceInUSD, setCurrentPriceInUSD] = useState<number>(0)
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const [markdown, setMarkdown] = useState<string>('')
  const [year, setYear] = useState('allYears')


  const getMarkdown = ()=>{
    const md : string | any = buildTransferMarkdown(transactions, currentPriceInUSD)
    if(md !== ''){
      setMarkdown(md)
    }
  }


  useEffect(()=>{
    const handleEthPriceFetcher = async ()=>{
      const response = await fetchEthPrice()
      if(!response){
        console.log('No response from blockchain server')
        return
      }
      const priceInUsd : number | any = response.ethereum?.usd
      console.log(priceInUsd)
      setCurrentPriceInUSD(priceInUsd)
      
    }

    const handleSuiPriceFetcher = async ()=>{
      const response = await fetchSuiPrice()
      if(!response){
        console.log('No response from blockchain server')
        return
      }
      const priceInUsd : number | any = response.sui?.usd
      console.log(priceInUsd)
      
    }

    handleEthPriceFetcher()
    handleSuiPriceFetcher()
    getMarkdown()
    
  }, [transactions, walletAddress, year])



  const handleFetchTransactions = async () => {
      if (!walletAddress) {
        setError('Please enter a valid wallet address.');
        return;
      }
  
      setLoading(true);
      setError('');

     try{
      const response : any = await fetchEthTransactions(walletAddress, year)
    
      if (response.data.status === '1') {
        setTransactions(response.data.result);
        setIsFetched(true)
      } else {
        setError('No transactions found or invalid address.');

      }
    } catch (err) {
      setError('Failed to fetch transactions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onchangeYear = (e: ChangeEvent<HTMLFormElement>)=>{
        setMarkdown('')
        setYear(e.target.value)
        getMarkdown()
  }



 

  // Clear Wallet
  const clearWalletAddress = ()=>{
    setWalletAddress('')
    setIsFetched(false)
    setTransactions([])
    setMarkdown('')
  }

  return (
    <div className="bg-black flex flex-col gap-8 items-center justify-center  text-white w-full m-4 p-8 ">
      <div className="text-center fixed z-[9999]  py-8 rounded-lg shadow-lg w-full">
        <h1 className="text-2xl font-bold text-center">Generate Wallet Transfers</h1>
        <p className="font-tiny text-gray-500  text-center">Easy transfer history generator for crypto tax purposes</p>
        {error ? <p className="text-red-500  text-center">{error}</p> : <p className="mt-4 text-center">{message}</p>}
        {walletAddress ? <p className="text-blue-500 mt-4 text-center">{walletAddress}</p> : <p className="text-blue-500 mt-4 text-center">No Wallet found</p>}
      </div>

        <div className="md:flex justify-between  gap-8 w-full mb-8">
          {/* Left Side - Fixed */}
          <div className="mb-6 mt-5 w-full md:w-1/4 md:fixed z-[9999]">
            <label className="block text-sm font-medium mb-2">Wallet Address</label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter wallet address"
              className="w-full text-black px-4 py-2 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={isFetched ? clearWalletAddress : handleFetchTransactions}
              disabled={loading}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 disabled:bg-blue-300 w-full"
            >
              {isFetched ? 'Clear' : loading ? 'Fetching...' : 'Fetch Transactions'}
            </button>
          </div>

          {/* Right Side - Scrollable */}
          <div className="w-full md:w-2/3 md:ml-[33%]">
              
             {markdown.length > 0 ? <div> 
              <p>Showing year {year}</p>
              {/* Buttons */}
              <div className='flex gap-4 mb-4'>
               <DownloadTransfers markdown={markdown} />
               {/* Sort by Year */}
               <select onChange={(e)=>onchangeYear}  className='rounded-2xl bg-blue-500'>
               <option value={year}>Show All Years</option>
                <option value={2025}>Show 2025</option>
                <option value={2024}>Show 2024</option>
                <option value={2023}>Show 2023</option>
                <option value={2022}>Show 2022</option>
               </select>
                {/* Historical or Current Value */}
               <select value={year} onChange={(e)=>setYear(e.target.value)} className='rounded-2xl bg-blue-500'>
                <option value={0.00}>Use Historical Values</option>
                <option value={currentPriceInUSD}>Use Current Values</option>
               </select>
              </div>
              <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              >{markdown}</ReactMarkdown> 
              </div> 
            : null}
          </div>
        </div>
      </div>
  
  );
};

export default TransferPage;