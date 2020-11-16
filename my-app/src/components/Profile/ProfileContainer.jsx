import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUser } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUser(this.props.match.params.userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

let WithUrlDataContainerComp = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUser })(WithUrlDataContainerComp);  