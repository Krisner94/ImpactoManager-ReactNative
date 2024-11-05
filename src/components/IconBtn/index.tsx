import * as React from 'react';
import { IconButton } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface IconProps {
  iconName: IconSource;
  iconColor: string;
  sizeBtn: number;
  onPress: () => void;
}

function IconBtn({ iconName, iconColor, sizeBtn, onPress }: IconProps) {
  return (
    <IconButton
      icon={iconName}
      iconColor={iconColor}
      size={sizeBtn}
      onPress={onPress}
    />
  );
}

export default IconBtn;