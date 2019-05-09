import React from 'react';
import { Box } from 'rebass';
import { responsiveType } from '../../types';

const CloseIcon = ({ width, ...props }) => (
  <Box
    {...props}
    as="svg"
    css="
      vertical-align: middle;
      display: inline-block;
    "
    viewBox="0 0 12 16"
    width={width}
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
    />
  </Box>
);

CloseIcon.propTypes = {
  width: responsiveType.isRequired,
};

export default CloseIcon;
