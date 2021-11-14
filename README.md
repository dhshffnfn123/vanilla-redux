# ♋ Redux
> 전역 상태를 관리할 때 굉장히 효과적인 상태 관리 라이브러리 <br>
> 자세한 내용은 Study 폴더 참고

## 액션(action)
> + 상태에 어떠한 변화가 필요하면 액션(action)이란 것이 발생한다.
> - 액션 객체는 type 필드를 반드시 가지고 있어야 한다.

## 액션 생성 함수 (action creator)
> + 액션 객체를 만들어 주는 함수이다.
> - 화살표 함수로도 만들 수 있다.

## 리듀서(reducer)
> + 변화를 일으키는 함수이다.
> - 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아온다. 그 두 값을 참고하여 새로운 상태로 만들어서 반환한다.

## 스토어(store)
> + 프로젝트에 리덕스를 적용하기 위해 스토어를 만든다.
> - 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있다.
> * 스토어 안에는 현재 애플리케이션 상태, 리듀서와 몇 가지 중요한 내장함수가 들어있다.

## 디스패치(dispatch)
> + 스토어의 내장 함수 중 하나이다.
> - '액션을 발생 시키는 것'이라 이해하면 된다.
> * 이 함수는 dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출한다.
> + 이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태로 만들어 준다.

## 구독(subscribe)
> + 스토어의 내장 함수 중 하나이다.
> - subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면, 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트 될 때마다 호출된다.