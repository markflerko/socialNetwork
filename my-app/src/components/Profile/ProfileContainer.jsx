import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedicrect } from '../../hoc/withAuthRedirect';
import { setUser } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUser(this.props.match.params.userId)
  }

  render() {
    debugger;
    return (
      <Profile {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, { setUser }),
  withRouter,
  withAuthRedicrect
)(ProfileContainer);
