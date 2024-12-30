"use client"

import {useState, useEffect} from 'react'
import * as React from "react"
import Link from 'next/link'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ClientForm from "../clientform"
import { deleteClient, getClients, modifyClient} from '../clientfunctions'
import { getSessionid } from '../clientfunctions'
import { getTotalClients } from '../clientfunctions'
import { DeleteProps } from '../clientfunctions'
import { DataTypes } from '../clientfunctions'
import { ModifyProps } from '../clientfunctions'






let data: DataTypes[] = []

export interface ClientArrayType {
 clients: DataTypes[]
}

interface Deleteprops {
  clientId: number;
}

export function ClientData() {

  const [sorting, setSorting] = useState<SortingState>([])
  const [clients, setClients] = useState<DataTypes[]>([])
  const [company, setCompany] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [editingClientId, setEditingClientId] = useState<number | null>(null);
  const [isModifying, setIsModifying] = useState<boolean>(false)
  const [sessionid, setSessionid] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [totalClients, setTotalClients] = useState<number>(0)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )

  // Get Clients
  const getAllClients = async ()=>{
    const sessionid: any = getSessionid()
    if (!sessionid) return
    const clientData = await getClients(sessionid)
    const clientArray: DataTypes[]  = clientData.data as DataTypes[]
    if (clientArray && clientArray.length > 0){
    clientArray.sort((a,b)=>b.id - a.id)
    setClients(clientArray)
    return clientArray
    }else{
     return
    }
   }
 
   useEffect(()=>{
     getAllClients()
   }, [])


     
//  GET Total number of clients
const fetchTotalClients = async ()=>{
  if (!clients) return
  const total = await getTotalClients()
  setTotalClients(total)
  
}
useEffect(()=>{
fetchTotalClients()
},[totalClients])


// Delete Client
const handleDeleteClient = async (clientId: number) => {
  try {
    if (!clientId) return;
    await deleteClient(clientId);
    // Refresh the clients list after deletion
    const updatedClientsArray = await getAllClients();
    if (updatedClientsArray){
    setClients(updatedClientsArray)
    }
    const total = await getTotalClients();
    setTotalClients(total);
  } catch (error) {
    console.error("Failed to delete client:", error);
  }
};


// Modify action handler
const modifyActionHandler = ({clientid, company}: ModifyProps) => {
  setIsModifying(true);
  setCompany(company);
  // Retrieve the current company value for the client being edited
  const client = clients.find((client) => client.id === clientid);
  if (client) {
    setCompany(client.company);
  }
};



//Modify button handler
const handleModifyClient = async ({clientid, company}: ModifyProps) => {
  try {
    if (!clientid) return;

    const payload = {
    clientid: clientid,
    company: company
    }
    await modifyClient(payload);
    const updatedClientsArray = await getAllClients();
    if (updatedClientsArray){
    setClients(updatedClientsArray)
    }
    const total = await getTotalClients();
    setTotalClients(total);
  } catch (error) {
    console.error("Failed to delete client:", error);
  }
};


  // Columns
const columns: ColumnDef<DataTypes>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },

  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) =>
      row.original.id === editingClientId ? (
        <Input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      ) : (
        <div className="capitalize">{row.getValue("company")}</div>
      ),
  },
  
  
  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => <div className="capitalize">{row.getValue("contact")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
  },
  
  {
    accessorKey: "mobile",
    header: "Mobile",
    cell: ({ row }) => <div className="capitalize">{row.getValue("mobile")}</div>,
  },
  {
    accessorKey: "followup",
    header: "Follow up",
    cell: ({ row }) => <div className="">{row.getValue("followup")}</div>,
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => <div className="capitalize">{row.getValue("address")}</div>,
  },
  // {
  //   accessorKey: "servicefee",
  //   header: "Servicefee($)",
  //   cell: ({ row }) => <div className="capitalize">{row.getValue("servicefee")}</div>,
  // },

// Actions
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
    
    const client = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <Button variant='ghost' asChild>
               <Link href='/dashboard/emailpage'>Email Client</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator /><DropdownMenuItem>
            <Button variant='ghost' asChild>
               <Link href='/dashboard/invoicemailer'>Send Invoice</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Button variant='ghost' onClick={async ()=>{
                handleDeleteClient(client.id)}}>
                Delete Client
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <Button
            variant="ghost"
          //  onClick={() => modifyActionHandler(row.client.id)}
            >
            Modify Client
            </Button>

              </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <Button variant='ghost'>
                Read Contract
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <Button variant='ghost'>
                Analyse Sales(AI)
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
   
  


  const [columnVisibility, setColumnVisibility] =
  React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const table = useReactTable({
    data:clients,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
  
  return (
    <div className="w-full">
      {/* Total clients */}
      <p className='text-center'>Total clients: {totalClients? totalClients : 0}
      </p>
      <div className="flex items-center py-4">
        {/* Search company */}
        <Input
          placeholder="Filter company..."
          value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("company")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        
        {/* Add Client */}
        <div className="mx-2 ">
        <ClientForm onClientAdded={fetchTotalClients} />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  You have no client.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
