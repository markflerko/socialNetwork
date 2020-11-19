import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
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
            <input autoFocus={true} value={this.props.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus; 