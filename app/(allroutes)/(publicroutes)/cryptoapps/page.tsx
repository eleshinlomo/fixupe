'use client'
import {useState, useEffect} from 'react'
import TransferPage from "./(transfers)/transfers"
import TradePage from './trades/trades'

const CryptoDash = ()=>{

    const [isTradePage, setIsTradePage] = useState<boolean>(false)

    const showTradePage = ()=> {
       setIsTradePage(!isTradePage)
    }

    return (

        <div className="flex flex-col justify-center items-center overflow-hidden mb-24">

              {/* Buttons */}
                {/* <div className='flex gap-3 mb-3'>
                <button className='bg-blue-500 rounded-2xl p-2 text-white' onClick={showTradePage} >Transfers</button>
                <button className='bg-blue-500 rounded-2xl p-2 text-white focus' onClick={showTradePage}>Transactions</button>
                </div> */}

            {/* Pages */}
            {/* {!isTradePage ? <TransferPage /> : null} */}
            <TradePage />
           
        </div>
    )
}

export default CryptoDash