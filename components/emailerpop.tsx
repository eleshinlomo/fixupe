import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
  export function EmailPopup() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size='sm' variant="outline" 
          className="w-full px-2 bg-black hover:bg-black hover:text-white text-white
       rounded-2xl">
            Send Email</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Direct email follow up coming soon. Response will 
                be pre-written by AI model. This will 3x business development.</AlertDialogTitle>
            <AlertDialogDescription>
              Send email fast.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  