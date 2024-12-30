import Link from 'next/link'
import { Button } from '../ui/button'

export const OtherHomeNavButtons = ()=>{
    return (
        <div className=''>

  <div className='grid grid-flow-row md:grid-cols-2 gap-3'>
    
<Button className='w-full'>
<Link href='/dashboard/dashboardpage'
className=''>
    Dashboard</Link>
</Button> 


<Button className='w-full'>
<Link href='/vccalculator'
className=''
>VC Calculator</Link>
</Button>

<Button className='w-full'>
<Link href='/dashboard/dashboardpage'
  className=''
>CRM</Link>
</Button>

<Button className='w-full'>
<Link href='/dashboard/genai/contentwriter'
  className=''
>GenAI</Link>
</Button>

<Button className='w-full'>
<Link href='https://imgbot.myafros.com'
  className=''
>ImageBot</Link>
</Button>

<Button className='w-full'>
<Link href='https://myafros.com'
className=''
>MyAfros</Link>
</Button>
                    

</div>
</div>
    )
}