import { Paper, Grid, Button, TextField, Typography, FormControl, Box } from '@mui/material';
// import Indexs from '../components/indexs'
import Layout from '../components/Layout'
import { useState, useMemo } from 'react';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Image from 'next/image';
import { ImageUpload } from './ImageUpload';
import { useEffect } from 'react';


function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}



export default function Index() {
  //   const [GetCotent, SetGetContent] = useState({title : 'Bai viet thanh dang test' , 
  //   content : [
  //     {subcontent : 'this is subcontent' , paragraph : 'center',bold : false , itatic : false },
  //     {subcontent : 'this is subcontent1' , paragraph : 'left',bold : false , itatic : false },
  //     {subcontent : 'this is subcontent2' , paragraph : 'right',bold : true , itatic : false },
  //     {subcontent : 'this is subcontent3' , paragraph : 'center',bold : false , itatic : true },
  //     {subcontent : 'this is subcontent4' , paragraph : 'center',bold : false , itatic : false }

  //   ]
  // })
  const [GetCotent, SetGetContent] = useState(undefined)
  const [selected, setSelected] = useState(undefined)
  const [files, setFiles] = useState([])




  const AddBoxContent = () => {
    // if(!GetCotent){
    //   alert('vui long nhap tittle truoc')
    // }
    if (GetCotent && GetCotent.content) {
      // GetCotent.content = {subcontent : null ,Variant:16, paragraph : 'left' ,bold : false , itatic : false },
      // console.log('GetCotent',GetCotent.content.push({subcontent : null ,Variant:16, paragraph : 'left' ,bold : false , itatic : false }))

      GetCotent.content.push({ subcontent: undefined, Variant: 16, paragraph: 'left', bold: false, itatic: false })

      // SetGetContent({...GetCotent.title,[...GetCotent.content,{subcontent : null ,Variant:16, paragraph : 'left' ,bold : false , itatic : false }]})
      SetGetContent({ ...GetCotent })
    } else {
      SetGetContent({
        ...GetCotent,
        content: [
          { subcontent: undefined, Variant: 16, paragraph: 'left', bold: false, itatic: false },
        ]
      })
    }



  }



  const OnChageTittle = (e) => SetGetContent({ title: e.target.value })

  const OnDeleteContent = (index) => {
    // console.log('IninitValue',index)
    GetCotent.content.splice(index, 1)
    SetGetContent({ ...GetCotent })
  }

  const OnChageTextArea = (e, IninitValue) => {
    // console.log('e.target.value',IninitValue)
    IninitValue.subcontent = e.target.value
    SetGetContent({ ...GetCotent })
    // console.log('GetCotent', GetCotent)
  }

  const UpdateParagraph = (IninitValue, value) => {
    // console.log('IninitValue', IninitValue, value)
    IninitValue.paragraph = value
    SetGetContent({ ...GetCotent })

  }

  const UpdateBold = (IninitValue) => {
    IninitValue.bold = !IninitValue.bold
    SetGetContent({ ...GetCotent })
  }

  const UpdateItatic = (IninitValue) => {
    IninitValue.itatic = !IninitValue.itatic
    SetGetContent({ ...GetCotent })
  }

  const handleUpVariant = (IninitValue) => {
    IninitValue.Variant = IninitValue.Variant + 2
    SetGetContent({ ...GetCotent })
  }

  const handleDownVariant = (IninitValue) => {
    IninitValue.Variant = (IninitValue.Variant - 2)
    SetGetContent({ ...GetCotent })
  }

  const CheckSelected = (index) => {
    setSelected(index)
  }

  const handleSubmit = () => alert('1112233')



  // console.log('textInput', selected)
  return (
    <Layout>
      <Grid container spacing={5} sx={{ mt: 1 }}>
        <Grid container item xs={10} spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              // onChange={e => e.target.value}
              onChange={OnChageTittle}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            {
              GetCotent?.title ? GetCotent.content?.map((e, index) => {
                // console.log('e', e)
                return (
                  <>
                    <Grid item xs={12} key={index}>
                      <TextField
                        fullWidth
                        multiline
                        onClick={() => CheckSelected(index)}
                        onChange={(e) => OnChageTextArea(e, GetCotent.content[index])}
                        // onMouseOver={() => setSelected(index)}
                        inputProps={{
                          style: { fontSize: e.Variant, textAlign: e.paragraph, fontWeight: e.bold ? 'bold' : 'normal', fontStyle: e.itatic ? 'italic' : 'normal' }
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Grid>
                    {selected === index
                      ? (
                        <Grid item container xs={12} spacing={2}>
                          <Grid item xs={1}>
                            <Button variant='contained' onClick={(e) => UpdateParagraph(GetCotent.content[index], 'left')} ><FormatAlignLeftIcon /></Button>
                          </Grid>
                          <Grid item xs={1}>
                            <Button variant='contained' onClick={(e) => UpdateParagraph(GetCotent.content[index], 'center')}><FormatAlignCenterIcon /></Button>
                          </Grid>
                          <Grid item xs={1}>
                            <Button variant='contained' onClick={(e) => UpdateParagraph(GetCotent.content[index], 'left')}><FormatAlignJustifyIcon /></Button>
                          </Grid>
                          <Grid item xs={1}>
                            <Button variant='contained' onClick={(e) => UpdateParagraph(GetCotent.content[index], 'right')}><FormatAlignRightIcon /></Button>
                          </Grid>
                          <Grid item xs={1}>
                            <Button variant='contained' onClick={(e) => handleUpVariant(GetCotent.content[index])}><KeyboardArrowUpIcon /></Button>
                          </Grid>
                          <Grid item xs={1}>
                            <Button variant='contained' onClick={(e) => handleDownVariant(GetCotent.content[index])}><KeyboardArrowDownIcon /></Button>
                          </Grid>
                          <Grid item xs={1}>
                            <Button variant='contained' onClick={(e) => UpdateBold(GetCotent.content[index])} ><FormatBoldIcon /></Button>
                          </Grid>
                          <Grid item xs={1}>
                            <Button variant='contained' onClick={(e) => UpdateItatic(GetCotent.content[index])} ><FormatItalicIcon /></Button>
                          </Grid>
                          <Grid item xs={2}>
                            <Button variant='contained' onClick={(e) => OnDeleteContent(GetCotent.content[index], index)} >Xoá</Button>
                          </Grid>
                        </Grid>
                      ) :
                      (null)
                    }





                  </>

                )
              }) : null
            }
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button onClick={handleSubmit} variant='contained' >Gửi Form</Button>
          </Grid>
        </Grid>
        <Grid container item xs={2} spacing={2}>
          <Grid item xs={12}>
            <Button onClick={AddBoxContent} variant='contained' >Thêm dòng nội dung</Button>
          </Grid>
          <Grid item xs={12}>
            <ImageUpload />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}