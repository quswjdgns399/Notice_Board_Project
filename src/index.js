import React from "react";
import ReactDOM from "react-dom";
import "./todo/TodoApp.css"; // CSS 파일을 사용할 경우
import App from "./App"; // App 컴포넌트를 불러옴
// import reportWebVitals from "./reportWebVitals"; // 성능 측정을 위한 도구 (필수는 아님)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // public/index.html에 있는 root 요소에 렌더링
);

// 성능 측정을 위해 사용하는 함수 (필수 아님)
// reportWebVitals();
