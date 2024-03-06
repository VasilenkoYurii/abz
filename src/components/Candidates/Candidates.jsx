import * as React from 'react';
import { Box, CircularProgress, InputLabel, Typography } from '@mui/material';
import { useEffect } from 'react';
import { usersStore } from '../../zustand/usersStore';
import global from '../../styles/global.module.scss';
import logo from '../../assets/photo-cover.svg';
import styles from './Candidates.module.scss';

export const Candidates = () => {
  const { getUsers, users, isLoading, error, totalPages, page } = usersStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const LoadingElement = () => (
    <Box className={styles.loadingElement} sx={{ margin: '20px auto' }}>
      <CircularProgress />
    </Box>
  );

  const ErrorMessage = props => (
    <Typography variant="h4" component="p">
      An error occured : {props.error}
    </Typography>
  );

  return (
    <section className={global.container} id="users">
      <h2 className={styles.heading}>Working with GET request</h2>
      <div className={styles.candidates}>
        {users && users.length > 0
          ? users.map(({ id, name, phone, photo, position, email }) => (
              <li key={id} className={styles.candidates__card}>
                <div className={styles.candidates__photo}>
                  <img src={photo || logo} alt={'candidate'} />
                </div>
                <InputLabel className={styles.candidates__name}>
                  {name}
                </InputLabel>
                <div className={styles.candidates__description}>
                  <p className={styles.candidates__description_position}>
                    {position}
                  </p>
                  <p
                    className={`${styles.candidates__description_email}  ${global.tooltip}`}
                  >
                    <InputLabel>{email}</InputLabel>
                    <span className={global.tooltiptext}>{email} </span>
                  </p>
                  <p className={styles.candidates__description_phone}>
                    {phone}
                  </p>
                </div>
              </li>
            ))
          : null}
      </div>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          {isLoading ? (
            <LoadingElement />
          ) : totalPages < page ? null : (
            <button
              className={`${styles.more} ${global.primary}`}
              onClick={getUsers}
            >
              Show more
            </button>
          )}
        </>
      )}{' '}
    </section>
  );
};
