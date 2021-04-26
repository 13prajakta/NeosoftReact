import {applyMiddleware, createStore} from "redux"
import demo from "./reducers"
import {logger} from"./middlewares"
import createSaga from "redux-saga"
import{LoginSaga} from "./sagas"


var sagaMiddleware=createSaga()
//var store =createStore(demo)
var middlewares= applyMiddleware(logger,sagaMiddleware)


//var middlewares= applyMiddleware(FirdtMiddleware)
// store.dispatch({
//     type:"login"
// })

// console.log("...........",store.getState())

// store.dispatch({
//     type:"LOGIN",
//     payload:{email:"13psathwane@gmail.com" , name:"prajakta"}
// })//parameter action
// // //action are plane js objects with key known as type
//  console.log("............after login match",store.getState())

export default createStore(demo,middlewares)
sagaMiddleware.run(LoginSaga)