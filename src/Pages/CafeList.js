import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CafeStore } from '../Stores/CafeStore';
import CafeCard from "../Components/CafeCard";
import classes from "./CafeList.module.css";
import Grid from '@material-ui/core/Grid';

export default function CafeList(props) {
  const[cafes, changeCafes] = useState([]);

  useEffect(() => {
    CafeStore.addChangeListener(onChange);
    CafeStore.provideCompanyCafes();

    return function cleanup() {
      CafeStore.removeChangeListener(onChange);
      CafeStore.unsubscribe();
    }
  }, []);


  const onChange = () => {
    let listOfCafes = CafeStore.getCompanyCafes();
    console.log(listOfCafes)
    let filtredCafe = listOfCafes.filter(cafe => cafe.zipCode.value.trim().length > 0 && cafe.state.value.trim().length > 0 && cafe.street.value.trim().length > 0) 
    changeCafes(filtredCafe);
  }

  let createModel = cafe => {
    let model = {
      name: cafe.system.name,
      email: cafe.email.value,
      imageLink: cafe.photo.value[0].url,
      imageDescription: cafe.photo.value[0].description,
      street: cafe.street.value,
      city: cafe.city.value,
      zipCode: cafe.zipCode.value,
      country: cafe.country.value,
      state: cafe.state.value,
      phone: cafe.phone.value,
      id: cafe.system.id,
    };
    model.dataAddress = model.city + ', ' + model.street;
    model.stateWithCountry = (model.state? model.state + ', ' : '') + model.country;
    model.location = model.city + ', ' + model.stateWithCountry;

    return model;
  };


  let companyCafes = cafes
    
    .map(createModel)
    .map((model) => {
      return (
        <Grid key={model.id} item xs={3}>
          <div className={classes.cardGridItem} key={model.id}>
            <CafeCard key={model.id} cafe={model} onOpenMap={props.onOpenMap} />
          </div>
          </Grid>
      );
    })


    return (
      <>
        <Box display="flex" alignItems="flex-start" height={100} justifyContent="center">
          <Typography color="primary" variant="h2">
            OUR CAFES
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <div className={classes.cardGrid}>
            {companyCafes}
          </div>
        </Grid>
      </>
    );
}

CafeList.propTypes = {
  onOpenMap: PropTypes.func,
};
