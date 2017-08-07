import React, { Component } from "react";
{/*TR组件*/ }
export default  class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDel = this.handleDel.bind(this, this.props.index);
        this.handleEdit = this.handleEdit.bind(this, this.props.data);
    }
    handleDel(index, event) {
        this.props.onDel(index, event);
    }
    handleEdit(user, event) {
        this.props.onEdit(user, event);
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
                <td>
                    <button data-toggle="modal" data-target="#myModal" onClick={this.handleEdit} className="btn btn-default">编辑</button>
                    &nbsp;
                    <button onClick={this.handleDel} className="btn btn-default">删除</button>
                </td>
            </tr>
        );
    }
}