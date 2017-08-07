import React, { Component } from "react";
import UserItem from "./Tr.js"
{/*tbody组件*/ }
export default  class UserList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var onDel = this.props.onDel;
        var onEdit = this.props.onEdit;
        return (
            <tbody>
                {
                    this
                        .props
                        .data
                        .map(function (user, index) {
                            return <UserItem onEdit={onEdit} onDel={onDel} data={user} key={user.index} index={user.index} />
                        })
                }
            </tbody>
        );
    }
}