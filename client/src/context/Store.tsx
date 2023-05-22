import { User, UserCredential } from 'firebase/auth';
import  {create} from 'zustand'


interface MyStoreState {
  Identifier: User | null;
  setIdentifier: (newValue: User) => void;
}


export const useStore = create<MyStoreState>((set) => ({
  Identifier: null,
  setIdentifier: (newValue: User) => set({ Identifier: newValue }),
}))
