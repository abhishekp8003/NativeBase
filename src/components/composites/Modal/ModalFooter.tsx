import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const ModalFooter = (props: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('ModalFooter', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box {...newProps} ref={ref} />;
};

export default memo(forwardRef(ModalFooter));
