
import './App.css';
import React, { Component } from "react";
import TOC from './components/TOC'
import Subject from './components/Subject'
import ReadContent from './components/ReadContent'
import Control from './components/Control'
import UpdateContent from './components/UpdateContent'
import CreateContent from "./components/CreateContent";
// import header from './components/header'
// import article from './components/article'
// import footer from './components/footer'

// 수업
// 수업
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "read",
      selected_content_id: 2,
      subject: { title: "회원가입", sub: "당신은 이곳에서 회원가입을 하실수 있습니다!!" },
      welcome: { title: "Welcome", desc: "Hello, React!!!" },
      contents: [
        { id: 1, title: "배진성", desc: "01062129094", c: "0211112222", d: "서울", e: "zsdc40@naver.com", f: "고양이", g: "진주", h: "부모님" },
        { id: 2, title: "홍길동", desc: "CSS is for design" },
        { id: 3, title: "임꺽정", desc: "JavaScript is for interactive" },
      ],
    };
  }

  // getReadContent start
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i++;
    }
  }
  // getReadContent end

  // getContent start
  getContent() {
    let _title,
      _desc = null,
      _article;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc;
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            console.log(_title, _desc);
            this.max_content_id = this.max_content_id + 1;
            // this.state.contents.push({ id: this.max_content_id, title: _title, desc: _desc });
            // let _contents = this.state.contents.concat({ id: this.max_content_id, title: _title, desc: _desc });

            let _contents = Array.from(this.state.contents);
            _contents.push({ id: this.max_content_id, title: _title, desc: _desc });

            this.setState({
              // contents: this.state.contents,
              mode: 'read',
              contents: _contents,
              selected_content_id: this.max_content_id
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      let _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={
            //   function (_title, _desc) {
            //   console.log(_title, _desc);
            //   this.max_content_id = this.max_content_id + 1;
            //   // this.state.contents.push({ id: this.max_content_id, title: _title, desc: _desc });
            //   let _contents = this.state.contents.concat({ id: this.max_content_id, title: _title, desc: _desc });

            //   this.setState({
            //     // contents: this.state.contents,
            //     contents: _contents,
            //   });
            // }.bind(this)

            function (_id, _title, _desc) {
              // 배열로 만드는 함수
              let _contents = Array.from(this.state.contents);
              let i = 0;
              while (i < _contents.length) {
                if (_contents[i].id === _id) {
                  _contents[i] = { id: _id, title: _title, desc: _desc };
                  break;
                }
                i++;
              }
              this.setState({
                contents: _contents,
                mode: 'read'
              });
            }.bind(this)
          }
        />
      );
    }
    return _article;
  }
  //getContent end

  render() {
    console.log("App render");
    return (
      <div>
        {/* <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                // alert("Go Away");
                e.preventDefault();
                this.setState({ mode: "welcome" });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>        */}

        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
            // alert("Check");
          }.bind(this)}
        />
        {/* 2가지 방법 <Subject></Subject>*/}
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
            // alert("Check");
          }.bind(this)}
        />
        <Control
          onChangeMode={function (_mode) {
            if (_mode === 'delete') {
              if (window.confirm('really?')) {
                let _contents = Array.from(this.state.contents);
                let i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: 'welcome',
                  contents: _contents
                });
                alert('delete!');
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
            this.setState({
              mode: _mode,
            });
            // alert("Check");
          }.bind(this)}
        />
        {this.getContent()}
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <header></header>
//         <article></article>
//         <footer></footer>
//       </div>
//     );
//   }
// }

export default App;