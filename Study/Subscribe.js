/* -------------------------------- Subscribe ------------------------------- */

const listener = () => {
    console.log('State Update');
}
const unsubscribe = store.unsubscribe(listener);

unsubscribe(); // 추후 구독을 비활성화 할 때 함수를 호출