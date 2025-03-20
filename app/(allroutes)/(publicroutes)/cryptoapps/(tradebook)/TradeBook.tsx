import React, { useRef, useEffect } from "react"
import GenerateTradeBook from "./DownloadTradeBook"
import GenerateTransactions from "./GenerateTransactions"
import DownloadTradeBook from "./DownloadTradeBook";

interface TradeBookProps {
    updateTransactions: ()=>void;
}
const TradeBook = ({updateTransactions}: TradeBookProps)=>{

    const tradeBookRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const handleUpdate = ()=>{
            console.log('Updating transactions')
            const transactions = updateTransactions()
            console.log('transactions', transactions);
        }
        handleUpdate()
    }, [])

    return (
        <div>
            <div id='trade-book' className="text-black" ref={tradeBookRef}>
                

                    
                    <h1>Crytpo Transactions</h1>
                    <h2>Prepared by <a href='https://myafros.com'>My Afros</a></h2> 
                    

                    
            </div>
            <DownloadTradeBook tradeBookRef={tradeBookRef} />
            
      
        </div>
    )
}

export default TradeBook