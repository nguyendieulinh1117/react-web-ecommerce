import { GET_LOAI_SACH } from '../contexts/index';
export const actLayDuLieuLoaiSach = (loaisach) => {
    return {
        type: GET_LOAI_SACH,
        loaisach: loaisach
    }
}