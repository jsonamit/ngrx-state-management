import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
    State
  } from '@ngrx/store'
  import { environment } from 'src/environments/environment';
  import * as fromRouter from '@ngrx/router-store';
  import * as fromUser from './user/reducers';
  
  export const reducers: ActionReducerMap<any> = {
      router: fromRouter.routerReducer,
      user: fromUser.reducer
  }
  
  export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
      return (state: any, action: any): any => {
          const result = reducer(state, action)
          return result
      }
  }
  
  export const metaReducers: MetaReducer<any>[] = !environment.production ? [logger] : []
  
  export const getUserState = createFeatureSelector<any>('user')
  export const getUser = createSelector(getUserState, fromUser.getUser)
  