import { User, UserCredential } from 'firebase/auth';
import  {create} from 'zustand'


interface MyStoreState {
  IdentifierEmail: string | null;
  setIdentifierEmail: (newValue: string | null) => void;
  IdentifierToken: string | null;
  setIdentifierToken: (newValue: string | null) => void;
}

export const useStore = create<MyStoreState>((set) => ({
  IdentifierEmail: null,
  setIdentifierEmail: (newValue: string | null) => set({ IdentifierEmail: newValue }),
  IdentifierToken: null,
  setIdentifierToken: (newValue: string | null) => set({ IdentifierToken: newValue })
}));
