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
  | 'Johtamisen ja työyhteisön kehittäminen'
  | 'Ajankohtaista'
  | 'Lisää'
  | 'Asukkaalle'
  | 'Ota yhteyttä meihin'
  | 'Töihin Terveystaloon'
  | 'Sijoittajat'
  | 'Laatu ja vastuullisuus'
  | 'Uutishuone'
  | 'Yhteystiedot'
  | undefined;

export interface HeaderSliceState {
  groupStatus: GroupState;
  serviceStatus: ServiceState;
  menuStatus: boolean;
}

const initialState: HeaderSliceState = {
  groupStatus: 'Henkilöasiakkaat',
  serviceStatus: undefined,
  menuStatus: false,
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
    changeMenuStatus: create.reducer(state => {
      state.menuStatus = !state.menuStatus;
    }),
  }),
  selectors: {
    selectGroup: header => header.groupStatus,
    selectService: header => header.serviceStatus,
    selectMenuStatus: header => header.menuStatus,
  },
});

export const { changeGroup, changeService, changeMenuStatus } =
  headerSlice.actions;

export const { selectGroup, selectService, selectMenuStatus } =
  headerSlice.selectors;
