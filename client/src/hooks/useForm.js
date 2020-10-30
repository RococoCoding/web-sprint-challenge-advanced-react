// write your custom hook here to control your checkout form
import React, {useState} from "react";
const useForm = param => {
  const [value, setValue] = useState(param);
  const handleChanges = param => {
    setValue(param);
  } 
  return [value, setValue, handleChanges];
}

export default useForm;