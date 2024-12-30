'use client'
import {useState, useEffect} from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addClient, getClients, getSessionid, getTotalClients } from './clientfunctions'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DataTypes } from './clientfunctions'


interface ClientFormProps {
  onClientAdded: ()=>void;
  }



const BASE_URL: any = process.env.NEXT_PUBLIC_BASE_URL


const ClientForm = ({onClientAdded}: ClientFormProps) => {
  
  
  const [company, setCompany] = useState<string>('')
  const [status, setStatus] = useState<"lead" | "in-talks" | "signed-contract" | "ongoing-contract">('lead')
  const [contact, setContact] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [mobile, setMobile] = useState<string>('')
  const [followup, setFollowup] = useState<string>('Not contacted')
  const [address, setAddress] = useState<string>('')
  const [servicefee, setServicefee] = useState<string>('0')
  const [isAddingClient, setIsAddingClient] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
 
  

  const handleAddClient = async (e: React.FormEvent)=>{
    try {
    e.preventDefault()
    setIsAddingClient(true)
    const payload: DataTypes = {
      id:0,
      company,
      status,
      contact,
      email,
      mobile,
      followup,
      address,
      servicefee
    }
    const response = await addClient(payload)
    setIsAddingClient(false)
    setMessage(response.message)
    onClientAdded()
  }

  catch(err){
   console.log(err)
  }finally{
      setCompany(''),
      setStatus('lead'),
      setContact(''),
      setEmail(''),
      setMobile(mobile),
      setFollowup(followup),
      setAddress(''),
      setServicefee(servicefee)
      setIsAddingClient(false)
    }
  
}


  return (
    <div>
    
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 text-sm bg-blue-500 text-white hover:bg-blue-500 rounded-2xl" 
        variant='default' size='sm'>
          Add Client</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>Add Client</DialogTitle>
          <DialogDescription>
            Add a new client to your CRM.
            <p>All fields except &apos;Company&apos; are optional.</p>
          </DialogDescription>
        </DialogHeader>
        <p className='text-center'>{message}</p>
        <form onSubmit={handleAddClient}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
             <Input
              name= 'company'
              value= {company}
              onChange={(e)=>setCompany(e.target.value)}
              className="col-span-3  border border-white rounded-2xl"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 bg-black">
          <Label htmlFor="contact" className="text-right">
           Status
          </Label>
          <Select value={status} onValueChange={(value)=>setStatus(value as "lead" | "in-talks" | "signed-contract" | "ongoing-contract")}>
          <SelectTrigger className="text-white ">
          <SelectValue placeholder="Select status"/>
          </SelectTrigger>
          <SelectContent className="col-span-3 text-black ">
          <SelectItem value="lead">Lead</SelectItem>
          <SelectItem value="in-talks">In-talks</SelectItem>
          <SelectItem value="signed-contract">Signed-contract</SelectItem>
          <SelectItem value="ongoing-contract">Ongoing-contract</SelectItem>
          </SelectContent>
          </Select>

          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contact" className="text-right">
              Contact
            </Label>
            <Input
              name='contact'
              value={contact}
              onChange={(e)=>setContact(e.target.value)}
              className="col-span-3 border border-white rounded-2xl"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              name='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="col-span-3  border border-white rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mobile" className="text-right">
              Mobile
            </Label>
            <Input
              type='number'
              name='mobile'
              value={mobile}
              onChange={(e)=>setMobile(e.target.value)}
              className="col-span-3 border border-white rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="followup" className="text-right">
              Followup
            </Label>
            <Input
              id="followup"
              name='followup'
              value={followup}
              onChange={(e)=>setFollowup(e.target.value)}
              className="col-span-3  border border-white rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              id="address"
              name='address'
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="col-span-3  border border-white rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="servicefee" className="text-right">
              Service fee($)
            </Label>
            <Input
              type='number'
              name='servicefee'
              value={servicefee}
              onChange={(e)=>setServicefee(e.target.value)}
              className="col-span-3  border border-white rounded-2xl"
            />
          </div>
          <Button type="submit" onClick={()=>handleAddClient} className='bg-blue-500 hover:bg-blue-500 rounded-2xl'>
          {isAddingClient? 'Adding Client...':
          'Add Client'}
          </Button>
         
        </div>
        </form>
      
      </DialogContent>
    </Dialog>
    </div>
  
  )
}

export default ClientForm
