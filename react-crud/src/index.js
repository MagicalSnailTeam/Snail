import AddForm from "./Add.js"
import Modal from "./Modal.js"
import UserList from "./Tbody.js"
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

{/*列表组件*/ }
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    num: '2015011',
                    name: 'Jacky',
                    age: 21,
                    index: 0
                }, {
                    num: '2015012',
                    name: 'Mary',
                    age: 20,
                    index: 1
                }
            ]
        }
        this.state.EditData = {
            num: '',
            name: '',
            age: "",
            index: ""
        };
        // This binding is necessary to make `this` work in the callback
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);

    }
    handleAdd(addItem) {
        this.setState(function (prevState, props) {
            var currData = prevState.data;
            addItem.index = currData[currData.length - 1].index + 1;
            currData.push(addItem);
            return {
                data: currData
            };
        });
    }
    handleDel(index, event) {
        this.setState(function (prevState) {
            var currData = prevState.data;
            return {
                data: currData.filter((element, indexFlag) => indexFlag !== index)
            };


        });
    }
    handleEdit(user, event) {
        this.setState({
            EditData: user
        });
    }
    handleSave(data) {
        this.setState(function (prevState) {
            $(prevState.data).each(function () {
                if (this.index == data.index) {
                    this.num = data.num;
                    this.name = data.name;
                    this.age = data.age;
                    return;
                }
            });
            return {
                data: prevState.data
            };
        });
        //关闭弹框
        $('#myModal').modal("hide");
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
                            <UserList onEdit={this.handleEdit} onDel={this.handleDel} data={this.state.data} />
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
                <Modal data={this.state.EditData} onSave={this.handleSave} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.getElementById('root'));
