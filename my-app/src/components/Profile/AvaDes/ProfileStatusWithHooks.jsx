import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div
      onDoubleClick={activateEditMode}
    >
      {!editMode &&
        <div>
          <span>{props.status}</span>
        </div>
      }
      {editMode &&
        <div>
          <input
            onBlur={deactivateEditMode}
            value={status}
            onChange={onStatusChange}
            autoFocus={true}
            onDoubleClick="this.select()"
          />
        </div>
      }
    </div>
  )
}


export default ProfileStatusWithHooks; 