import { Injectable } from '@angular/core';
import { OrganicStore } from '@core/stores/organic.store';
import { ApiStatus } from '@data/models/api-status.interface';
import { Status } from '@data/models/status.enum';

export enum ApiStatusActionType {
  SetIdle = 'SET_IDLE',
  SetWorking = 'SET_WORKING',
  SetSuccess = 'SET_SUCCESS',
  SetError = 'SET_ERROR',
}

@Injectable({
  providedIn: 'root',
})
export class ApiStatusStore {
  private readonly apiStatus$: OrganicStore<ApiStatus>;

  constructor() {
    this.apiStatus$ = new OrganicStore<ApiStatus>(initialState);
    this.apiStatus$.setReducer(ApiStatusActionType.SetIdle, idleReducer);
    this.apiStatus$.setReducer(ApiStatusActionType.SetWorking, workingReducer);
    this.apiStatus$.setReducer(ApiStatusActionType.SetSuccess, successReducer);
    this.apiStatus$.setReducer(ApiStatusActionType.SetError, errorReducer);
  }

  public dispatch(type: ApiStatusActionType, payload: unknown) {
    const action = { type, payload };
    this.apiStatus$.dispatch(action);
  }

  public select$(selector: (apiStatus: ApiStatus) => unknown) {
    return this.apiStatus$.select$(selector);
  }
}
const initialState: ApiStatus = {
  current: Status.Idle,
  last: Status.Idle,
  error: '',
  message: '',
  calls: 0,
  errors: 0,
};
function idleReducer(state: ApiStatus, payload: any): ApiStatus {
  state.last = state.current;
  state.current = Status.Idle;
  state.message = '';
  state.error = '';
  return state;
}

function workingReducer(state: ApiStatus, payload: any): ApiStatus {
  state.last = state.current;
  state.current = Status.Working;
  state.message = payload.message;
  state.error = '';
  state.calls++;
  return state;
}

function successReducer(state: ApiStatus, payload: any): ApiStatus {
  state.last = state.current;
  state.current = Status.Success;
  state.message = payload.message;
  state.error = '';
  return state;
}

function errorReducer(state: ApiStatus, payload: any): ApiStatus {
  state.last = state.current;
  state.current = Status.Error;
  state.message = payload.message;
  state.error = payload.error;
  state.errors++;
  return state;
}
