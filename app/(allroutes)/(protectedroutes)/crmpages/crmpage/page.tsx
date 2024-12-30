'use client'
import { ClientData } from './(crmdata)/clientdata'; 
import React, {useState, useEffect} from 'react'
import { DataTypes } from './clientfunctions'


interface ClientPageProps {
  onClientFetched: ()=>void;
}

const ClientPage = () => {
const [refereshStatus, setRefereshStatus] = useState<boolean>(false)
const [sessionId, setSessionId] = useState<string>('')
const [clients, setClients] = useState<DataTypes[]>([])


 
  return (
    <div className='px-4'>
        <ClientData />
    </div>
  )
}

export default ClientPage