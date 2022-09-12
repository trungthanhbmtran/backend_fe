import { useEffect, useState,useCallback } from "react";
import { GetQuery } from "../service/Query";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const useAutoComplete = (url,ObjectGet,getValueParams) =>{
    console.log('params',getValueParams)
    const [value, setValue] = useState(null);
    const [options,setOptions] = useState([]);
    const [renderName,setrenderName] = useState(null)



    const fetchDataOptions = useCallback(
        async () =>{
            const params = {page : 1 , limit : 2 ,id :getValueParams }
            // console.log(Object.values(params));
            const result = await GetQuery(url,params)
            // console.log('result',result.data)
            setOptions(result.data)
        },[getValueParams]
    ) 

    const handleChange = (event,getdata) =>{
        event.preventDefault()
        if(getdata){
            setValue(getdata[ObjectGet.key])
            setrenderName(`${getdata._prefix} ${getdata._name}`)
        }
    }

    
    useEffect(()=>{
            fetchDataOptions()
    },[getValueParams])

    const renderAutocomple = () =>{
        return(
            <Autocomplete
                id="combo-box-demo"
                onChange={handleChange}
                options={options}
                disableClearable
                isOptionEqualToValue={(option, value) => option.value === value.value}
                // isOptionEqualToValue={(option,el)=> option[ObjectGet.key] === el[ObjectGet.key]}
                getOptionLabel={(element) => element[ObjectGet.value]}
                // isOptionEqualToValue={()}
                renderInput={(params,key) => (
                <TextField key={key} {...params} label={url} variant="outlined" />
            )}
        />
        )
    }
    
    return [value,renderName,renderAutocomple]

}

export default useAutoComplete