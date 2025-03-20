'use client'
import {useState, useEffect} from 'react'
import GenerateTransactions from './(tradebook)/GenerateTransactions'



const CryptoDash = ()=>{

    const [isTradePage, setIsTradePage] = useState<boolean>(false)

    const showTradePage = ()=> {
       setIsTradePage(!isTradePage)
    }

    return (

        <div className="flex flex-col justify-center items-center overflow-hidden mb-24 bg-white">

            

              {/* Buttons */}
                {/* <div className='flex gap-3 mb-3'>
                <button className='bg-blue-500 rounded-2xl p-2 text-white' onClick={showTradePage} >Transfers</button>
                <button className='bg-blue-500 rounded-2xl p-2 text-white focus' onClick={showTradePage}>Transactions</button>
                </div> */}

            {/* Pages */}
            {/* {!isTradePage ? <TransferPage /> : null} */}

            <div className='flex justify-between'>
            <GenerateTransactions />
         

          
            </div>
           
        </div>
    )
}

export default CryptoDash