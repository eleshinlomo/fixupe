import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { fetchEthPrice, fetchSuiPrice } from '../functions';
import { fetchEthTransactions } from '../functions';
import { Button } from '@/components/ui/button';
import { buildTransferMarkdown } from '../markdown';
import ReactMarkdown from 'react-markdown';
import DownloadTrades from './downloadbtn';
import rehypeRaw from 'rehype-raw';
import { Loader2 } from 'lucide-react'; // For loading spinner

const TransferPage = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [transactions, setTransactions] = useState<[] | any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('Your transfer history will be displayed below.');
  const [currentPriceInUSD, setCurrentPriceInUSD] = useState<number>(0);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>('');
  const [year, setYear] = useState('allYears');

  const getMarkdown = () => {
    const md: string | any = buildTransferMarkdown(transactions, currentPriceInUSD);
    if (md !== '') {
      setMarkdown(md);
    }
  };

  useEffect(() => {
    const handleEthPriceFetcher = async () => {
      const response = await fetchEthPrice();
      if (!response) {
        console.log('No response from blockchain server');
        return;
      }
      const priceInUsd: number | any = response.ethereum?.usd;
      setCurrentPriceInUSD(priceInUsd);
    };

    const handleSuiPriceFetcher = async () => {
      const response = await fetchSuiPrice();
      if (!response) {
        console.log('No response from blockchain server');
        return;
      }
      const priceInUsd: number | any = response.sui?.usd;
      console.log(priceInUsd);
    };

    handleEthPriceFetcher();
    handleSuiPriceFetcher();
    getMarkdown();
  }, [transactions, walletAddress, year]);

  const handleFetchTransactions = async () => {
    if (!walletAddress) {
      setError('Please enter a valid wallet address.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response: any = await fetchEthTransactions(walletAddress, year);
      if (response.data.status === '1') {
        setTransactions(response.data.result);
        setIsFetched(true);
      } else {
        setError('No transactions found or invalid address.');
      }
    } catch (err) {
      setError('Failed to fetch transactions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onchangeYear = (e: ChangeEvent<HTMLFormElement>) => {
    setMarkdown('');
    setYear(e.target.value);
    getMarkdown();
  };

  const clearWalletAddress = () => {
    setWalletAddress('');
    setIsFetched(false);
    setTransactions([]);
    setMarkdown('');
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-start text-white p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Generate Wallet Transfers</h1>
        <p className="text-gray-400">Easy transfer history generator for crypto tax purposes</p>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {!error && <p className="mt-4 text-gray-400">{message}</p>}
        {walletAddress && <p className="text-blue-400 mt-4 break-all">{walletAddress}</p>}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Left Side - Input Section */}
        <div className="w-full md:w-1/4 bg-gray-900 p-6 rounded-lg shadow-lg">
          <label className="block text-sm font-medium mb-2">Wallet Address</label>
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Enter wallet address"
            className="w-full text-black px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={isFetched ? clearWalletAddress : handleFetchTransactions}
            disabled={loading}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 disabled:bg-blue-300 flex items-center justify-center"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : null}
            {isFetched ? 'Clear' : loading ? 'Fetching...' : 'Fetch Transactions'}
          </button>
        </div>

        {/* Right Side - Transactions Section */}
        <div className="w-full md:w-3/4 bg-gray-900 p-6 rounded-lg shadow-lg">
          {markdown.length > 0 ? (
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <p className="text-lg font-semibold">Showing year: {year}</p>
                <div className="flex gap-4">
                  <DownloadTrades markdown={markdown} />
                  <select
                    onChange={(e) => setYear(e.target.value)}
                    className="rounded-lg bg-blue-500 text-white px-4 py-2"
                  >
                    <option value="allYears">Show All Years</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="rounded-lg bg-blue-500 text-white px-4 py-2"
                  >
                    <option value="0.00">Use Historical Values</option>
                    <option value={currentPriceInUSD.toString()}>Use Current Values</option>
                  </select>
                </div>
              </div>
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">No transactions to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransferPage;