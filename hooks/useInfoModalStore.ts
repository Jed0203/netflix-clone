import { create } from 'zustand';

export interface ModalSotreInterface {
    movieId?: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

const useInfoModalStore = create<ModalSotreInterface>((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: string) => set({ isOpen: true, movieId}),
    closeModal: () => set ({ isOpen: false, movieId: undefined}),
}));

export default useInfoModalStore;