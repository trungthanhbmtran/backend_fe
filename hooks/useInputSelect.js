import { useState,useEffect} from 'react';
import {GetQuery} from '../service/Query';
import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';


const useInputSelect = (url,getValue,condition=[],ValueRen) => {
//   console.log('ValueRender',ValueRender.key)
//   console.log('ValueRender',ValueRender.value)
  // console.log('condition',condition)
  // console.log('splitdata',splitdata)
  const [value, setValue] = useState(null)
  const [data,setData] = useState([])
    
    const onChange = (e) => setValue(e.target.value)

    // const ConsiderConditionsfunction =(get_value) =>{
    //   console.log('get_value into function',get_value)
    //   return get_value.data.filter(c => console.log(c))
    // }
    
      const _on_fetch_department = async () =>{
        const params = {id : ValueRen}
        const get_value = await GetQuery(url,params)
        // const get_valueroles =await GetQuery(`roles`)
        // const get_staffs =await GetQuery(`staffs`)
        // console.log('get_value',get_value.data)
        // let ProcessArray = get_value.data
        // console.log('get_value',get_value.data.filter(c => c[splitdata.Key] === splitdata.Value))
        // const Result = ProcessArray.filter(c => c[splitdata.Key] === splitdata.Value )
        // console.log('Result',Result)
        // const ResultConsiderConditions = ConsiderConditionsfunction(get_value)
        // console.log('ResultConsiderConditions',ResultConsiderConditions)
        setData(get_value.data)
      }

    useEffect(()=>{
        _on_fetch_department()
        // console.log(`chay thay doi ne ${ValueSelect}`)
        return ()=>{
          setData()
        }
      },[url,ValueRen])
    
    
    const select = () =>{
        return(
          // <Select
          //         native
          //         displayEmpty
          //         value={value}
          //         onChange={onChange}
          //         inputProps={{ 'aria-label': 'Without label' }}
          //         // native
          //         // value={value}
          //         label="UserName"
          //         // onChange={onChange}
          //         // inputProps={{
          //         //   name: 'ID_Donvi',
          //         //   id: 'ID_Donvi',
          //         // }}
          //       >
          //         <option value={0}>[none]</option>
          //         {
          //         data?.reduce((t, v,index) => (v[Conditional.Key] === Conditional.Value && v[splitdata.Key] === splitdata.Value)
          //         ? [...t, <option key={index}  value={v[ValueRender.Key]}>{v[ValueRender.Value]}</option>] 
          //         : t, [])}
          // </Select>
          // <Select
          //   labelId="demo-simple-select-label"
          //   id="demo-simple-select"
          //   value={value}
          //   onChange={onChange}
          // >
          //   <MenuItem value={0}>
          //       <em>None</em>
          //   </MenuItem>
          //   {
          //     data.reduce((t, v,index) => (v[Conditional.Key] === Conditional.Value && v[splitdata.Key] === splitdata.Value)
          //     ? [...t, <MenuItem key={index}  value={v[ValueRender.Key]}>{v[ValueRender.Value]}</MenuItem>] : t ,[] )
          //   }
          // </Select>
          <Select
          native
          displayEmpty
          value={value}
          onChange={onChange}
          inputProps={{ 'aria-label': 'Without label' }}
          label="UserName"
        >
          <option value={0}>[none]</option>
          {
            data.reduce((t, v,index) => (condition.reduce((p,c,i) => v[c?.key] === c?.value && p,[]))
          ? [...t, <option key={index} value={v[getValue.key]}>{v[getValue.value]}</option>] 
          : t, [])
          }
    
        </Select>
        )
    }
    
    return { value,data,onChange,setValue,select}
  // const renderValue = () => {
  //   // return GetDepartments.map(e => <option  value={e.ID_Donvi}>{e.TENDONVI}</option>)
  //   return data.reduce((t, v) => [...t,<option  value={v.ID_Donvi}>{v.TENDONVI}</option> ], []);
  // }
};

export default useInputSelect;