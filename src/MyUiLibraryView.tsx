import { requireNativeView } from 'expo';
import * as React from 'react';

import { MyUiLibraryViewProps } from './MyUiLibrary.types';

const NativeView: React.ComponentType<MyUiLibraryViewProps> =
  requireNativeView('MyUiLibrary');

export default function MyUiLibraryView(props: MyUiLibraryViewProps) {
  return <NativeView {...props} />;
}
