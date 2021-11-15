import { createStore } from "redux";

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션의 이름을 정의한다. 액션 이름은 문자열 형태로, 주로 대문자로 작성하며 액션 이름은 고유해야 한다.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 위에서 만든 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수를 작성한다. 반드시 type 값을 갖고 있어야 한다.
const toggleSwitch = () => ({ type : TOGGLE_SWITCH });
const increase = difference => ({ type : INCREASE, difference});
const decrease = () => ({ type : DECREASE });

const initialState = {
    toggle : false,
    counter : 0
}

// reducer에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜 주어야 한다. 이 작업을 할 때는 spread(...)연산자를 사용하면 편하다.
// state가 undefined일 떄는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH :
            return {
                ...state, // 불변성 유지
                toggle : !state.toggle
            };
        case INCREASE : 
            return {
                ...state,
                counter : state.counter + action.difference
            };
        case DECREASE : 
        return {
            ...state,
            counter : state.counter - 1
        }
    }
}

const store = createStore(reducer); // 파라미터에 reducer 함수를 넣어준다.

const render = () => {
    const state = store.getState(); // 현재 상태를 불러온다.
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase());
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};


