

import React from 'react';

export default function Delete(props) {
  return (
    <img
      className="delete"
      src="del.svg"
      alt="img"
      onClick={props.handleDelete}
    />
  );
}
