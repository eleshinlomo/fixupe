import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import { getWalletTransactions } from '../cryptofunctions';
import TradeBook from './TradeBook';


const GenerateTransactions = () => {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [transactions, setTransactions] = useState<[] | any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [message, setMessage] = useState('Your transfer history will be displayed below.');
  const [currentPriceInUSD, setCurrentPriceInUSD] = useState<number>(0);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>('');
  const [year, setYear] = useState('allYears');
  const [ethToConvert, setEthToConvert] = useState<string>("0")
  const [ethTousdConversion, setEthToUsdConversion] = useState<string>("0")
  

  const tradeBookRef = useRef(null)
 
  const handleTransactionFetch = async ()=>{
      console.log('Fetching trades')
      if(walletAddress === '') {
        setError('Wallet cannot be empty')
        return
      }
      const response: any = await getWalletTransactions(walletAddress)
      setTransactions(response)
      updateTransactions()
      setError('')
      return
      
  }

  const clearTransactions = ()=>{
    setWalletAddress('')
    setError('')
    setTransactions([])
  }

  const updateTransactions = ()=>{
    return transactions
  }

  useEffect(()=>{
    updateTransactions()
  }, [transactions, walletAddress])

  // useEffect(()=>{
  //   const handleEthConversion = async ()=>{
  //     if(ethToConvert === '0') setEthToUsdConversion('0')
  //     const convertUsd = await convertEthToUsd(parseInt(ethToConvert))
  //     setEthToConvert(convertUsd.toString())
  //     return
      
  //   }

  //   handleEthConversion()
  // }, [transactions])


  return (
    <div className="flex flex-col justify-center items-center  p-8  text-black ">
    {/* Header Section */}
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold">Populate Trade History</h1>
      <p className="">Generate and download crypto trades for tax purposes</p>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {!error && <p className="mt-4 text-gray-400">{message}</p>}
      {walletAddress && <p className="text-blue-400 mt-4 break-all">{walletAddress}</p>}
    </div>

    <div className=''>

      {/* Convert ETH to USD */}
     {/* <div className='my-3 '>
      <input value={ethToConvert}
       onChange={(e)=>setEthToConvert(e.target.value)}
       className='text-black' 
      />
      {ethToConvert}
     </div> */}

      <input 
      placeholder='Enter wallet address'
      value={walletAddress} 
      onChange={(e)=>setWalletAddress(e.target.value)}
      className='px-2 text-black border border-blue-500 rounded-2xl text-center'
      />

      <div className='flex justify-center items-center gap-3 mt-5'>
      <button 
      onClick={handleTransactionFetch}
      className='bg-blue-500 rounded-2xl p-2 text-white'>Fetch
      </button>

      <button 
      onClick={clearTransactions}
      className='bg-blue-500 rounded-2xl p-2 text-white'>Clear
      </button>
      </div>

    

      <div><TradeBook updateTransactions={updateTransactions} /></div>
      
    </div>

  
  </div>
  );
};

export default GenerateTransactions;