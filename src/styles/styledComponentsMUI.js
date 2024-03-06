import { InputLabel, OutlinedInput, Radio, TextField } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';

const fontPrimary = '"Nunito", sans-serif';

export const Theme = createTheme({
   typography: {
      fontFamily: fontPrimary,
      fontSize: 16,
      fontWeightRegular: 400,
      color: 'rgba(0, 0, 0, 0.87)',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '26px',
      subtitle1: {
         fontStyle: '"Nunito", sans-serif',
         fontWeight: 400,
         fontSize: 16,
         color: 'rgba(0, 0, 0, 0.87)',
      },
      body1: {
         fontStyle: '"Nunito", sans-serif',
         fontWeight: 400,
         fontSize: 16,
         color: 'rgba(0, 0, 0, 0.87)',
      },
      button: {
         fontStyle: '"Nunito", sans-serif',
         fontWeight: 400,
         fontSize: 16,
         color: 'rgba(0, 0, 0, 0.87)',
      },
   },
});

export const CssTextField = styled(TextField)({
   '& label.Mui-focused': {
      color: '#7E7E7E',
   },
   '& .MuiInput-underline:after': {
      borderBottomColor: '#D0CFCF',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: '#D0CFCF',
      },
      '&:hover fieldset': {
         borderColor: '#D0CFCF',
      },
      '&.Mui-error fieldset': {
         border: '2px solid #CB3D40',
      },
   },
});

export const CssCustomInputLabel = styled(InputLabel)({
   '&.MuiInputLabel-root': {
      fontFamily: fontPrimary,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      color: 'rgba(0, 0, 0, 0.87)',
      lineHeight: '26px',
      padding: '14px 0',
      border: '1px solid rgba(0, 0, 0, 0.87)',
      borderRadius: '4px 0 0 4px',
      boxSizing: 'border-box',
      maxHeight: '54px',
      minWidth: '83px',
   },
   '&.Mui-error': {
      border: '2px solid #CB3D40',
   },
});

export const CssCustomOutlinedInput = styled(OutlinedInput)({
   '&.MuiOutlinedInput-root': {
      border: '1px solid #d0cfcf',
      borderRadius: '0 4px 4px 0',
      color: '#7E7E7E',
      zIndex: '-1',
      padding: '15px 0',
   },
   '&.Mui-error': {
      border: '2px solid #CB3D40',
      color: '#7E7E7E',
   },
});

export const CssRadioButton = styled(Radio)({
   '&.MuiRadio-root': {
      color: '#D0CFCF',
      height: '34px',
   },
   '&.Mui-checked': {
      color: '#00BDD3',
   },
});
