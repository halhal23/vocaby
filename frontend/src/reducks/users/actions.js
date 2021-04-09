export const SIGN_UP = "SIGN_UP"
export const SIGN_IN = "SIGN_IN"
export const SIGN_OUT = "SIGN_OUT"

export const signUpAction = (id, name, email) => {
  return {
    type: SIGN_UP,
    payload: {
      id: id,
      name: name,
      email: email,
      isSignedIn: true
    }
  }
}

export const signInAction = (id, name, email) => {
  return {
    type: SIGN_IN,
    payload: {
      id: id,
      name: name,
      email: email,
      isSignedIn: true
    }
  }
}

export const signOutAction = () => {
  return {
    type: SIGN_OUT,
    payload: {
      id: null,
      name: '',
      email: '',
      isSignedIn: false
    }
  }
}