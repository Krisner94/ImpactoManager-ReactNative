import React from 'react';
import { useNavigation } from '@react-navigation/native';

type NavigationType = ReturnType<typeof useNavigation>;

interface NavigationProps {
  to: string;
  params?: Record<string, any>;
  children: React.ReactNode;
}

function Navigation({ to, params, children }: NavigationProps) {
  const navigation = useNavigation<NavigationType>();

  const handlePress = () => {
    navigation.navigate(to as never, params as never);
  };

  return (
    <React.Fragment>
      {React.cloneElement(children as React.ReactElement, { onPress: handlePress })}
    </React.Fragment>
  );
}

export default Navigation;
