import React from 'react';
import { Stack } from '@mui/material';
import { RevolvingDot } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <RevolvingDot color="grey" />
  </Stack>
);

export default Loader;