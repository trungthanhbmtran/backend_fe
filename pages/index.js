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
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Image from 'next/image';
import { ImageUpload } from './ImageUpload';


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
  const [Align, setAlign] = useState()
  const [Bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [textInput, setTextInput] = useState([])
  const [Variant, setVariant] = useState(18)
  const [files, setFiles] = useState([])



  const [value, setValue] = useState('')

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

  const OnchangeAlig = (value) => {
    setAlign(value)
  }

  const onChangeBold = () => setBold(!Bold)
  const onChangeItalic = () => setItalic(!italic)
  const onChangeUpVariant = () => setVariant(Variant + 3)
  const onChangeDownVariant = () => setVariant(Variant - 3)



  const OnChageTittle = (e) => SetGetContent({ title: e.target.value })

  const OnChageTextArea = (e, IninitValue) => {
    // console.log('e.target.value',IninitValue)
    IninitValue.subcontent = e.target.value
    SetGetContent({...GetCotent})
    // console.log('GetCotent', GetCotent)
  }

  const UpdateParagraph = (IninitValue,value) =>{
    console.log('IninitValue',IninitValue,value)
     IninitValue.paragraph = value
     SetGetContent({...GetCotent})

  }

  const UpdateBold = (IninitValue) =>{
    IninitValue.bold = !IninitValue.bold
    SetGetContent({...GetCotent})
  }

  const UpdateItatic = (IninitValue) =>{
    IninitValue.itatic = !IninitValue.itatic
    SetGetContent({...GetCotent})
  }




  console.log('textInput', GetCotent)
  return (
    <Layout>
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            // onChange={e => e.target.value}
            onChange={OnChageTittle}
            inputProps={{
              style: { fontSize: Variant, textAlign: Align, fontWeight: Bold ? 'bold' : 'normal', fontStyle: italic ? 'italic' : 'normal' }
            }}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={10}>
          <Grid item container spacing={2} direction="row">

            {
              GetCotent?.title ? GetCotent.content?.map((e, index) => {
                // console.log('e', e)
                return (
                  <>
                    <Grid item xs={6} key={index}>
                      <TextField
                        fullWidth
                        multiline
                        onChange={(e) => OnChageTextArea(e, GetCotent.content[index])}
                        inputProps={{
                          style: { fontSize: e.Variant, textAlign: e.paragraph, fontWeight: e.bold ? 'bold' : 'normal', fontStyle: e.itatic ? 'italic' : 'normal' }
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Grid>
                    <Grid item container xs={4} spacing={2}>
                      <Grid item xs={2}>
                        <Button variant='contained' onClick={(e) =>UpdateParagraph(GetCotent.content[index],'left')} ><FormatAlignLeftIcon /></Button>
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant='contained' onClick={(e) =>UpdateParagraph(GetCotent.content[index],'center')}><FormatAlignCenterIcon /></Button>
                      </Grid>
                      {/* <Grid item xs={2}>
                        <Button variant='contained' onClick={(e) =>UpdateParagraph(GetCotent.content[index],'left')}><FormatAlignJustifyIcon /></Button>
                      </Grid> */}
                      <Grid item xs={2}>
                        <Button variant='contained' onClick={(e) =>UpdateParagraph(GetCotent.content[index],'right')}><FormatAlignRightIcon /></Button>
                        <Grid item xs={2}>
                          <Button variant='contained' onClick={(e) =>UpdateBold(GetCotent.content[index])} ><FormatBoldIcon /></Button>
                        </Grid>
                        <Grid item xs={2}>
                          <Button variant='contained' onClick={(e) =>UpdateItatic(GetCotent.content[index])} ><FormatItalicIcon /></Button>
                        </Grid>
                      </Grid>

                    </Grid>
                    <Grid item xs={1}>
                      <Button variant='contained' >Xoá</Button>
                    </Grid>
                  </>

                )
              }) : null

            }
          </Grid>

        </Grid>
        {/* <Grid item xs={8} > */}
        {/* </Grid> */}
        <Grid item xs={2}>
          <Paper>
            <Button onClick={AddBoxContent} >Thêm dòng nội dung</Button>
            <ImageUpload />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}