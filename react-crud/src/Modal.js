import React, { Component } from "react";
import EditForm from "./Edit.js"
export default  class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        //获取form中的数据，含key
        var data = this.refs["form"].getFormState();

        this.props.onSave(data);
    }
    render() {
        // <!-- 模态框（Modal） -->
        return (<div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" >
            <div className="modal-dialog" >
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="false">
                            &times;
                        </button>
                        <h4 className="modal-title" id="myModalLabel">
                            编辑
                        </h4>
                    </div>
                    <div className="modal-body">
                        <EditForm ref='form' data={this.props.data} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                        </button>
                        <button type="button" className="btn btn-primary" onClick={this.handleClick}>
                            保存
                        </button>
                    </div>
                </div>
                {/* <!-- /.modal-content --> */}
            </div>
            {/* <!-- /.modal --> */}
        </div>)
    }
}