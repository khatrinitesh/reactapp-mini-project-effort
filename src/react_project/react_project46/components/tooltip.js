import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from "@material-ui/icons/Delete";

export default function CustomToolTip() {
  return (
    <>
        <div style={{ display: "block", padding: 30 }}>
        <h4>How to use Tooltip Component in ReactJS?</h4>
            <Tooltip title="Deletee">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Person">
                <IconButton>
                    <PersonIcon />
                </IconButton>
            </Tooltip>
        </div>
    </>
  )
}
