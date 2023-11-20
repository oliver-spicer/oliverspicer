/* eslint-disable react/display-name */
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import styles from './Heading.module.scss';

export const Heading = forwardRef(
  ({ children, tag: Tag, appearence, className }, ref) => {
    if (!Tag) return <h1 ref={ref}>{children}</h1>;
    return (
      <Tag
        ref={ref}
        className={
          (appearence !== undefined ? appearence : '') +
          ' ' +
          (className !== undefined ? className : '')
        }
      >
        {children}
      </Tag>
    );
  }
);

export const MotionHeading = motion(Heading);
