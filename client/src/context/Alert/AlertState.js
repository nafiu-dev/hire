import React, {useReducer} from 'react'
import uuid from 'uuid/dist/v1'
import AlertContaxt from './AlertContext'
import AlertReducer from './AlertReducer'

const AlertState = props => {
    const InitState = []
    const [state, dispatch] = useReducer(AlertReducer, InitState)
    //-----------------------------

    // SET ALERT
    const setalert = (msg, type, timeout = 5000) =>{
        const _id = uuid()
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type, _id}
        })
        setTimeout(() => {
            dispatch({
                type: 'REMOVE_ALERT',
                payload: _id
            })
        }, timeout)
    }

    //-----------------------------
    return (
      <AlertContaxt.Provider value={{
          alerts: state,
          setalert
      }}>
          {props.children}
      </AlertContaxt.Provider>
    )
}

export default AlertState