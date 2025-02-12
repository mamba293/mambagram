import {ExclamationTriangleIcon} from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string,
}

const FormError = ({
  message
}: FormErrorProps) => {
  if(!message){
    return null;
  }

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex 
    items-center text-sm text-destructive gap-x-2
    ">
      <ExclamationTriangleIcon className="w-4 h-4"/>
      <p>{message}</p>
    </div>
  )
}

export default FormError;
