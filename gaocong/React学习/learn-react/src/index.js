import AddForm from "./Add.js"
import React, { Component } from "react";
import ReactDOM from "react-dom";
import $, { jQuery } from "jquery";
import "bootstrap/dist/css/bootstrap.css"

{/*TR组件*/ }
class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDel = this.handleDel.bind(this, this.props.index);
    }
    handleDel(index, event) {
        this.props.onDel(index, event);
    }
    render() {
        var index = this.props.index;
        var user = this.props.data;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.num}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td><button onClick={this.handleDel} className="btn btn-default">删除</button></td>
            </tr>
        );
    }
}
{/*tbody组件*/ }
class UserList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var onDel = this.props.onDel;
        return (
            <tbody>
                {
                    this
                        .props
                        .data
                        .map(function (user, index) {
                            return <UserItem onDel={onDel} data={user} key={index} index={index} />
                        })

                }
            </tbody>
        );
    }
}
{/*列表组件*/ }
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    num: '2015011',
                    name: 'Jacky',
                    age: 21
                }, {
                    num: '2015012',
                    name: 'Mary',
                    age: 20
                }
            ]
        }
        // This binding is necessary to make `this` work in the callback
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleAdd(addItem) {
        this.setState(function (prevState, props) {
            var currDate = prevState.data;
            currDate.push(addItem);
            return {
                data: currDate
            };
        });
    }
    handleDel(index, event) {
        this.setState(function (prevState) {
            var currDate = prevState.data;
            return {
                data: currDate.filter((element, indexFlag) => indexFlag !== index)
            };


        });
    }
    render() {
        return (
            <div className="container">
                <h1>CRUD例子</h1>
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>编号</th>
                                    <th>姓名</th>
                                    <th>年龄</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <UserList onDel={this.handleDel} data={this.state.data} />
                        </table>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {/*添加表单*/}
                        <AddForm onAdd={this.handleAdd} />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.getElementById('root'));
