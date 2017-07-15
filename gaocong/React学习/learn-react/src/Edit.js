import React, { Component } from "react";
export default class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: "",
            name: "",
            age: ""
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.setValueFormState = this.setValueFormState.bind(this);
    }
    setValueFormState(data) {
        this.setState({
            num: data.num,
            name: data.name,
            age: data.age,
            index: data.index
        });
    }
    getFormState() {
        return this.state;
    }
    handleChange(event) {
        var target = event.target
            , value = target.value
            , name = target.name;
        this.setState({
            [name]: value
        });
    }
    componentWillReceiveProps(props) {
        this.setValueFormState(props.data);
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
            </form>
        );
    }
}