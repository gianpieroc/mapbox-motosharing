import { createAction, createReducer } from '@reduxjs/toolkit';
import { Vehicle, VehicleAction } from '../../static/types/vehicles';

interface VehiclesState {
  vehicles: Vehicle[];
}

interface setVehiclesPayload {
  vehicles: Vehicle[];
}

const setVehicles = createAction<setVehiclesPayload>(VehicleAction.SET_VEHICLES);

const initialState = {
  vehicles: [],
} as VehiclesState;

/* eslint-disable no-param-reassign */

const vehiclesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setVehicles, (state, action) => {
      state.vehicles = action.payload.vehicles;
    });
});

export default vehiclesReducer;
