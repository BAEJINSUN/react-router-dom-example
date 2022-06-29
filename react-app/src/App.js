import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
// import TOC from './components/TOC'
// import Subject from './components/Subject'
// import Content from './components/Content'
import header from './components/header'
import article from './components/article'
import footer from './components/footer'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Subject title="WEB" sub="world width web!"></Subject>    {/*<Subject /> */}
//         <TOC></TOC>
//         <Content tt="HTML" hh="HTML is HyperText Markup Language."></Content>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <header></header>
        <article></article>
        <footer></footer>
      </div>
    );
  }
}

export default App;
