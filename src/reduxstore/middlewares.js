export function FirdtMiddleware(store) {
    return function (next) {
        return function (action) {
            console.log("Before Action", action.type, store.getState())

            var result = next(action)
            console.log("..........................middleware", store.getState())
            return result
        }
    }
}

//Es6

export let logger = store => next => action => {
    console.log("Before Action", action.type, store.getState())

    var result = next(action)
    console.log("..........................middleware", store.getState())
    return result
}