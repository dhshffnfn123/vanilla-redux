/* --------------------------------- Reducer -------------------------------- */

const initialState = {
    counter: 1
};
function reducer(state = initialState, action) {    // action과 initialState를 참고하여 새로운 상태를 반환한다.
    switch (action.type) {
        case INCREMENT: // action의 type이 INCREMENT라면 
            return {
                counter: state.counter + 1  // state 안의 couter 값에 1을 더한다.
            };
        default: 
        return state;   // initialState와 action을 참고하여 만든 새로운 상태를 반환
    }
}