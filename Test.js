const { createStore } = Redux; 

const initialValue = { value: 0 }

function reducer(state = initialValue, action) {
    switch (action.type) {
        case "increment":
            return { ...state, value: state.value + 1 }
        case "decrement":
            return { ...state, value: state.value - 1 }
        default:
            return state
    }
}

const store = createStore(reducer)


store.subscribe(() => {
    document.getElementById("value").innerText = store.getState().value
})


document.getElementById("value").innerText = store.getState().value


document.getElementById("increment").onclick = () => {
    store.dispatch({ type: "increment" })
}
document.getElementById("decrement").onclick = () => {
    store.dispatch({ type: "decrement" })
}
