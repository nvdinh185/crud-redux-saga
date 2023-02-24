import React, { Component } from 'react';

class userComponent extends Component {
    state = {
        name: '',
        id: '',
        updateName: '',
        search: '',
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleAdd = () => {
        this.props.addUser({
            name: this.state.name
        })
    }

    handleDelete = (id) => {
        this.props.deleteUser({
            id: id
        })
    }
    updateChange = (e) => {
        this.setState({
            updateName: e.target.value
        })
    }

    handleUpdatingClick = (item) => {
        this.setState({
            id: item._id,
            updateName: item.name
        })
    }

    handleUpdateClick = () => {
        this.props.updateUser({
            name: this.state.updateName,
            id: this.state.id
        })
    }

    searchChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    hanleSearchClick = () => {
        this.props.searchUser({
            search: this.state.search
        })
    }

    render() {

        let Arr = [];
        let hocVien = this.props.listUser

        if (hocVien) {

            Arr = hocVien.map((item, index) => {
                ;
                return (
                    <div key={index}>
                        <div >{item.id}. {item.name} {''}
                            <button onClick={() => this.handleDelete(item._id)}>Delete</button>
                            <button onClick={(e) => this.handleUpdatingClick(item)} >UPDATING</button>

                        </div>

                    </div>
                )
            })
        }
        return (
            <div>

                <input
                    type='text'
                    onChange={this.searchChange}
                    value={this.state.search}
                />

                <button onClick={this.hanleSearchClick}>TÌM KIẾM</button>
                <br />
                <input
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <button onClick={this.handleAdd}>ADD</button>
                <br />
                <input
                    onChange={this.updateChange}
                    value={this.state.updateName}

                />
                <button onClick={this.handleUpdateClick} >UPDATE </button>

                <hr />
                {Arr}
            </div>
        );
    }
}

export default userComponent;