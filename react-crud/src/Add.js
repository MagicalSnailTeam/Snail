import React, { Component } from "react";
export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: "",
            name: "",
            age: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        this.props.onAdd({
            num: this.state.num,
            name: this.state.name,
            age: this.state.age
        });
        event.preventDefault();
    }
    handleChange(event) {
        var target = event.target
            , value = target.value
            , name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form role="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">编号</label>
                    <input type="text" name="num" value={this.state.num} className="form-control" placeholder="请输入编号" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input type="text" name="name" value={this.state.name} className="form-control" placeholder="请输入姓名" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">年龄</label>
                    <input type="text" name="age" value={this.state.age} className="form-control" placeholder="请输入年龄" onChange={this.handleChange} />
                </div>
                <button className="pull-right" type="submit">添加</button>
            </form>
        );
    }
}