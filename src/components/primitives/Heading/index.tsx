import React, { memo, forwardRef } from 'react';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IHeadingProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Heading = (props: IHeadingProps, ref: any) => {
  const newProps = usePropsResolution('Heading', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Text {...newProps} ref={ref} />;
};

export default memo(forwardRef(Heading));
export type { IHeadingProps };
