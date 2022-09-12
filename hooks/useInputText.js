import { useState } from 'react';
import TextField from '@mui/material/TextField'
// import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';

const useInputText = (type) => {
  const [value, setValue] = useState('')
    
    const onChange = (e) => setValue(e.target.value)
    
    const input = () => <TextField
    id="date"
    label={type}
    variant="outlined"
    type={type}
    value={value}
    onChange={onChange}
/>
    
    return { value, onChange,setValue,input}
  // const renderValue = () => {
  //   // return GetDepartments.map(e => <option  value={e.ID_Donvi}>{e.TENDONVI}</option>)
  //   return data.reduce((t, v) => [...t,<option  value={v.ID_Donvi}>{v.TENDONVI}</option> ], []);
  // }
};

export default useInputText;