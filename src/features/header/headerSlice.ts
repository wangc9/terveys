/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type GroupState =
  | 'Henkilöasiakkaat'
  | 'Työterveys yrityksille'
  | 'Julkiset palvelut'
  | 'Yhtiö';

export type ServiceState =
  | 'Palvelut'
  | 'Toimipaikat'
  | 'Asiantuntijat'
  | 'Asiakkaalle'
  | 'Tietoa terveydestä'
  | 'Hanki työterveys'
  | 'Työkykyjohtaminen'
  | 'Digitaaliset palvelut'
  | 'Lisää'
  | 'Asukkaalle'
  | 'Ota yhteyttä meihin'
  | 'Töihin Terveystaloon'
  | 'Sijoittajat'
  | 'Laatu ja vastuullisuus'
  | 'Uutishuone'
  | null;

export interface HeaderSliceState {
  groupStatus: GroupState;
  serviceStatus: ServiceState;
}

const initialState: HeaderSliceState = {
  groupStatus: 'Henkilöasiakkaat',
  serviceStatus: null,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: create => ({
    changeGroup: create.reducer((state, action: PayloadAction<GroupState>) => {
      state.groupStatus = action.payload;
    }),
    changeService: create.reducer(
      (state, action: PayloadAction<ServiceState>) => {
        state.serviceStatus = action.payload;
      },
    ),
  }),
  selectors: {
    selectGroup: header => header.groupStatus,
    selectService: header => header.serviceStatus,
  },
});

export const { changeGroup, changeService } = headerSlice.actions;

export const { selectGroup, selectService } = headerSlice.selectors;
