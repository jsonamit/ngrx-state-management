import * as UserActions from './actions';

export const initialState:any = {
    id: '',
    name: '',
    role_id: '',
    email_id: '',
    avatar: '',
    company : '',
    kyc_status : '',
    mobile : '',
    nickname : '',
    pincode : '',
    tax_identity : '',
    gstin_code : '',
    entity_type : '',
    authorized: false,
    loading: false,
    gender : 'M',
    profilePic : '',
}

export function reducer(state = initialState, action: UserActions.LoginAction) : object {
    
  switch (action.type) {
    case UserActions.LOGIN:
        return{
          ...state,
          ...action.payload,
      }

    default:
      return state;
  }
}

export const getUser = (state: any) => state