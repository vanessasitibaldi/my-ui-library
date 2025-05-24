import { registerWebModule, NativeModule } from 'expo';

import { MyUiLibraryModuleEvents } from './MyUiLibrary.types';

class MyUiLibraryModule extends NativeModule<MyUiLibraryModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(MyUiLibraryModule, 'MyUiLibraryModule');
