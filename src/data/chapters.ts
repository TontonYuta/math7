import { Chapter } from '../types';
import { chapter1Topics } from './questions/chapter1';
import { chapter2Topics } from './questions/chapter2';
import { chapter3Topics } from './questions/chapter3';
import { chapter4Topics } from './questions/chapter4';

export const chapters: Chapter[] = [
  {
    id: 'c1',
    title: 'CHƯƠNG I: SỐ HỮU TỈ',
    description: 'Khái niệm, phép tính và lũy thừa của số hữu tỉ',
    topics: chapter1Topics,
  },
  {
    id: 'c2',
    title: 'CHƯƠNG II: SỐ THỰC',
    description: 'Số vô tỉ, căn bậc hai số học, tập hợp số thực và làm tròn số',
    topics: chapter2Topics,
  },
  {
    id: 'c3',
    title: 'CHƯƠNG III: GÓC VÀ ĐƯỜNG THẲNG SONG SONG',
    description: 'Góc, góc đối đỉnh, vuông góc và song song',
    topics: chapter3Topics,
  },
  {
    id: 'c4',
    title: 'CHƯƠNG IV: TAM GIÁC BẰNG NHAU',
    description: 'Tổng các góc trong tam giác, tam giác cân, tam giác đều và các trường hợp bằng nhau',
    topics: chapter4Topics,
  }
];