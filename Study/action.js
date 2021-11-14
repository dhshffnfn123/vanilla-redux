/* --------------------------------- Action --------------------------------- */

// action객체는 다음과 같은 형식으로 이루어져 있다.
{
    type: 'TOGGLE_VALUE'
}
// action객체는 type 필드를 반드시 가지고 있어야한다. 이 값을 액션의 이름이라고 생각하면 된다.


// 예시 
/* 
{
    type: 'ADD_TODO',
    data: {
        id: 1,
        text: '리덕스 배우기'
    }
}

{
    type: 'CHANGE_INPUT',
    text: '안녕하세요'
} 
*/



/* ----------------------------- action creator ---------------------------- */
// 여러개의 액션 객체를 직접 작성하기 번거롭거나 만드는 과정에서 실수할 수도 있기 때문에 함수로 만들어서 관리한다.
function addTodo(data) {
    return {
        type: 'ADD_TODO',
        data
    };
}

// 화살표 함수로도 만들 수 있다.
const changeInput = text => ({
    type: 'CHANGE_INPUT',
    text
});
