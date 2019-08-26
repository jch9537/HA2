import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="mainBox">
        <h1>어플리케이션을 골라주세요</h1>
        <span class="selectMenu" id="selectTodo">
          TODO
        </span>
        {/* {온클릭 넣으면 해당페이지로 넘기기, 이름을 TODO로 바꾸고 TODO.js파일만들어서 리액트로 만들기, onclick={todo로가기}넣기} */}
        <span class="selectMenu" id="selectBoard">
          게시판
        </span>
        {/* {온클릭 넣으면 해당페이지로 넘기기, 이름을 Board로 바꾸고 Board.js파일만들어서 리액트로 만들기, onclick={Board로가기}} */}
      </div>
    </div>
  );
}

export default App;
