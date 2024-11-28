import { TouchableOpacity, type TouchableOpacityProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from './ThemedText';

export type ThemedButtonProps = TouchableOpacityProps & {
  txt? : string,
  bgColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  txtColor? : string,  
};

export function ThemedButtonProps({
  style,
  bgColor,
  type = 'default',
  txt,
  txtColor, 
  ...rest
}: ThemedButtonProps) {
  return (
    <TouchableOpacity
      style={[
      bgColor && {backgroundColor : bgColor },
        style,
      ]}
      {...rest}
      >
      <ThemedText type='defaultSemibold' style={[
        {color : txtColor ? txtColor : "white"}
      ]}>{txt}</ThemedText> 
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
