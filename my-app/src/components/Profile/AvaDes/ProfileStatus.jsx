import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div onDoubleClick={this.activateEditMode}>
        {!this.state.editMode &&
          <div>
            <span>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              value={this.state.status}
              onChange={this.onStatusChange}
              onDoubleClick="this.select()"
            />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus; 