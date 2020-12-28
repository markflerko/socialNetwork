import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { setUser, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { AppStateType } from "../../redux/reduxStore";
import { ProfileType } from "../../types/types";
import Profile from "./Profile";

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  setUser: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (text: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType | null) => Promise<any>;
};

type PathParamsType = {
  userId: string;
};

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }

    this.props.setUser(userId as number);
    this.props.getStatus(userId as number);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={+this.props.match.params.userId === 12567}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUser,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
)(ProfileContainer);
