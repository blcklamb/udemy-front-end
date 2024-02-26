## React의 특징

1. 컴포넌트 기반의 UI 표현
2. 편리한 업데이트

## 웹 브라우저의 렌더링 과정

Critical Rendering Path

1. 정적 코드를 트리로 변환
   1. HTML코드를 DOM(Document Object Model)으로 변환
   2. CSS코드를 CSSOM으로 변환
2. 두 트리 모델을 합쳐 Render Tree 생성
3. Layout
   - 화면에 나타날 요소들의 위치와 크기를 결정
4. Painting
   - 실제 요소를 화면에 그린다

## 업데이트는 어떤 과정을 거쳐 이루어질까?

- 자바스크립트 코드를 수정하면, 브라우저는 수정된 DOM을 감지하고 Render Tree-Layout-Painting 과정을 다시 실행한다
- 잦은 Reflow, Repaint는 성능 악화의 주범, 여러 수정사항을 모아서 한 번만 DOM을 업데이트 해야 한다
  - Reflow: Layout을 다시 실행
  - Repaint: Painting을 다시 실행

→ DOM 수정을 최소화해야한다
<br>→ 동시에 일어나는 업데이트를 최대한 모은 뒤 한 번만 DOM을 수정하도록 해야한다

- `Virtual DOM`은 동시에 일어나는 업데이트를 모은 다음에 한 번만 Actual DOM을 수정한다.
  - 대부분의 상황에 충분히 빠른 업데이트를 구현하도록 도와줌
