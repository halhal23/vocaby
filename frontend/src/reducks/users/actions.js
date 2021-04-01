export const SIGN_UP = "SIGN_UP"
export const COUNT_UP = "COUNT_UP"
export const COUNT_DOWN = "COUNT_DOWN"

export const signUpAction = userState => {
  return {
    type: SIGN_UP,
    payload: {
      userId: userState.userId,
    }
  }
}

export const countUpAction = count => {
  return {
    type: COUNT_UP,
    payload: {
      userId: count
    }
  }
}

export const countDownAction = count => {
  return {
    type: COUNT_DOWN,
    payload: {
      userId: count 
    } 
  }
}