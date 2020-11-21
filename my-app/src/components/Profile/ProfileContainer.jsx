import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setUser, getStatus, updateStatus } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = '2';

    this.props.setUser(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, { setUser, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
