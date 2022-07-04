import React, { Component } from "react";

class CreateContent extends Component {
    render() {
        console.log("CreateContent render");
        return (
            <article>
                <h2>회원가입</h2>
                <form
                    action="/create_process"
                    method="post"
                    onSubmit={function (e) {
                        e.preventDefault();
                        // alert("Submit!!");
                        this.props.onSubmit(e.target.title.value, e.target.desc.value);
                    }.bind(this)}
                >
                    <p>
                        <input type="text" name="a" placeholder="이름"></input>
                    </p>
                    <p>
                        <input type="text" name="b" placeholder="전화번호"></input>
                    </p>
                    <p>
                        <input type="text" name="c" placeholder="집전화번호"></input>
                    </p>
                    <p>
                        <input type="text" name="d" placeholder="주소"></input>
                    </p>
                    <p>
                        <input type="text" name="e" placeholder="이메일"></input>
                    </p>
                    <p>
                        <input type="text" name="f" placeholder="좋아하는 동물"></input>
                    </p>
                    <p>
                        <input type="text" name="g" placeholder="태어난곳"></input>
                    </p>
                    <p>
                        <input type="text" name="h" placeholder="존경하는 인물"></input>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}

export default CreateContent;