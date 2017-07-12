
import React, { Component } from "react";
import ReactDOM from "react-dom";
import $, { jQuery } from "jquery";
import "bootstrap/dist/css/bootstrap.css"
window.jQuery = jQuery;


class UserItem extends React.Component {
    constructor(props) {
        super(props);
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
            </tr>
        );
    }
}
class UserList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tbody>
                {
                    this
                        .props
                        .data
                        .map(function (user, index) {
                            return <UserItem data={user} key={index} index={index} />
                        })

                }
            </tbody>
        );
    }
}
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
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(function (prevState, props) {
            var currDate = prevState.data;
            currDate.push({
                num: "2017077",
                name: "高聪",
                age: 23
            });
            return {
                data: currDate
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
                                </tr>
                            </thead>
                            <UserList data={this.state.data} />
                        </table>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form role="form">
                            <div className="form-group">
                                <label htmlFor="name">编号</label>
                                <input type="text" className="form-control" id="name" placeholder="请输入编号" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">姓名</label>
                                <input type="text" className="form-control" id="name" placeholder="请输入姓名" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">年龄</label>
                                <input type="text" className="form-control" id="name" placeholder="请输入年龄" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <button className="pull-right" onClick={this.handleClick}>添加</button>
                    </div>
                    <div className="col-md-2"> </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <App />, document.getElementById('root'));
