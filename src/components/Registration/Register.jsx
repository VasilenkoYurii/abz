import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from '@mui/material';

import {
  CssCustomInputLabel,
  CssCustomOutlinedInput,
  CssRadioButton,
  CssTextField,
} from '../../styles/styledComponentsMUI';

import { regExpEmail, regExpPhone } from '../../helpers/helpers.js';

import global from '../../styles/global.module.scss';

import { registerStore } from '../../zustand/registerStore.js';
import { usersStore } from '../../zustand/usersStore.js';

import styles from './Register.module.scss';

export const Register = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSizeError, setFileSizeError] = useState('');
  const { positions, getToken, getPositions, postUser } = registerStore();
  const { getUsers } = usersStore();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onTouched',
  });

  useEffect(() => {
    getToken();
    getPositions();
  }, [getToken, getPositions]);

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFileSizeError('File size should be less than 5 MB.');
      } else {
        setFileSizeError('');
        setSelectedFile(file);
      }
    }
  };

  const onSubmit = async data => {
    try {
      await postUser(data, selectedFile, reset);
      await getUsers('refresh');
    } catch (error) {}
  };

  return (
    <section className={global.container} id="register">
      <h3 className={styles.heading}>Working with POST request</h3>
      <form
        className={styles.formSubmit}
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.textFieldsGroup}>
          <CssTextField
            className={styles.textFieldsGroup__cssTextField}
            variant="outlined"
            label="Your name"
            {...register('userName', {
              required: 'Empty field!',
              minLength: {
                value: 2,
                message: 'Min length is 2 ',
              },
              maxLength: {
                value: 60,
                message: 'Max length is 60 ',
              },
            })}
            helperText={(errors.userName && errors.userName.message) || ' '}
            error={!!errors.userName}
            required
          />
          <CssTextField
            className={styles.textFieldsGroup__cssTextField}
            variant="outlined"
            label="Email"
            {...register('userEmail', {
              required: 'Empty field!',
              pattern: {
                value: regExpEmail,
                message: 'Not correct email format',
              },
            })}
            helperText={(errors.userEmail && errors.userEmail.message) || ' '}
            error={!!errors.userEmail}
            required
          />
          <CssTextField
            className={styles.textFieldsGroup__cssTextField}
            label="Phone"
            variant="outlined"
            {...register('userPhone', {
              required: '+38 (XXX) XXX-XX-XX',
              pattern: {
                value: regExpPhone,
                message: '+38 (XXX) XXX-XX-XX',
              },
              minLength: {
                value: 13,
                message: '+38 (XXX) XXX-XX-XX',
              },
              maxLength: {
                value: 13,
                message: 'Max length is 13',
              },
            })}
            helperText={
              (errors.userPhone && errors.userPhone.message) ||
              '+38 (XXX) XXX-XX-XX'
            }
            error={!!errors.userPhone}
            required
          />
        </div>
        <div className={styles.radioGroup}>
          <FormControl>
            <FormLabel focused={false} className={styles.radioGroup__title}>
              Select your position
            </FormLabel>
            <RadioGroup defaultValue={0} name="radio-buttons-group">
              {positions.length > 0 &&
                positions.map(position => (
                  <FormControlLabel
                    key={position.id}
                    className={styles.radioGroup__element}
                    {...register('userPosition')}
                    value={position.id}
                    control={<CssRadioButton />}
                    label={position.name}
                  />
                ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div className={styles.fileUpload}>
          <CssCustomInputLabel error={!!errors.userFile}>
            Upload
            <input
              className={styles.fileUpload__fileInput_hidden}
              accept="image/jpg, image/jpeg"
              type="file"
              onChange={e => handleFileChange(e)}
              required
            />
          </CssCustomInputLabel>
          <CssCustomOutlinedInput
            className={styles.fileUpload__description}
            error={!!errors.userFile || !!fileSizeError}
            value={selectedFile ? selectedFile.name : 'Upload your photo'}
          />
        </div>
        <input
          type="submit"
          className={global.primary}
          value={'Sign up'}
          disabled={!isValid}
        />
      </form>
    </section>
  );
};
