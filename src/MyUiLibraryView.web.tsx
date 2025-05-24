import * as React from 'react';

import { MyUiLibraryViewProps } from './MyUiLibrary.types';

export default function MyUiLibraryView(props: MyUiLibraryViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
