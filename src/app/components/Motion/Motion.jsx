/* eslint-disable react/display-name */
const { forwardRef } = require('react');
import { motion } from 'framer-motion';

const Motion = motion(
  forwardRef((props, ref) => {
    return (
      <div ref={ref} {...props}>
        {props.children}
      </div>
    );
  })
);

export default Motion;
