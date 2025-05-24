import { NativeModule, requireNativeModule } from 'expo';

import { MyUiLibraryModuleEvents } from './MyUiLibrary.types';

declare class MyUiLibraryModule extends NativeModule<MyUiLibraryModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<MyUiLibraryModule>('MyUiLibrary');
