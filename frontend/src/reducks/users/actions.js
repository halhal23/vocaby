export const SIGN_UP = "SIGN_UP"
export const SIGN_IN = "SIGN_IN"
export const COUNT_UP = "COUNT_UP"
export const COUNT_DOWN = "COUNT_DOWN"

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

export const countUpAction = count => {
  return {
    type: COUNT_UP,
    payload: {
      id: count
    }
  }
}

export const countDownAction = count => {
  return {
    type: COUNT_DOWN,
    payload: {
      id: count 
    } 
  }
}