import { create } from 'zustand';

interface RoomProps {
  roomCode: string | null;
  setRoomCode: (state: string) => void;
};

export const useRoomStore = create<RoomProps>((set) => ({
    roomCode: null,
    setRoomCode: (state: string | null) => set({ roomCode: state }),
}));


interface AlertProps {
  toggleAlert: boolean;
  setToggleAlert: (state: boolean) => void;
};

export const useAlertStore = create<AlertProps>((set) => ({
    toggleAlert: false,
    setToggleAlert: (state: boolean) => set({ toggleAlert: state }),
}));


interface RoomJoinedProps {
  roomJoined: boolean;
  setRoomJoined: (state: boolean) => void;
};

export const useRoomJoinedStore = create<RoomJoinedProps>((set) => ({
    roomJoined: false,
    setRoomJoined: (state: boolean) => set({ roomJoined: state }),
}));


interface ThemeProps {
  isDark: boolean;
  setDarkMode: (state: boolean) => void;
};

export const useThemeStore = create<ThemeProps>((set) => ({
    isDark: true,
    setDarkMode: (state: boolean) => set({ isDark: state }),
}));