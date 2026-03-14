import { Topic } from '../../types';

export const chapter2Topics: Topic[] = [
  {
    id: 'c2-t1',
    title: 'Số vô tỉ và căn bậc hai số học',
    description: 'Nhận biết số vô tỉ, căn bậc hai số học của một số không âm và các phép tính cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q2-1-1',
        text: 'Trong các số sau, số nào là số vô tỉ?',
        options: ['$\\dfrac{3}{4}$', '$-2,5$', '$\\sqrt{2}$', '$0,125$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{2}$ là số vô tỉ vì không viết được dưới dạng phân số $\\dfrac{a}{b}$ với $a,b\\in\\mathbb{Z}, b\\ne0$.'
      },
      {
        id: 'q2-1-2',
        text: 'Số nào sau đây là số hữu tỉ?',
        options: ['$\\pi$', '$\\sqrt{3}$', '$\\dfrac{-7}{9}$', '$\\sqrt{5}$'],
        correctAnswerIndex: 2,
        explanation: '$\\dfrac{-7}{9}$ là số hữu tỉ vì viết được dưới dạng phân số.'
      },
      {
        id: 'q2-1-3',
        text: 'Căn bậc hai số học của $9$ là:',
        options: ['$-3$', '$3$', '$\\pm 3$', '$81$'],
        correctAnswerIndex: 1,
        explanation: 'Căn bậc hai số học của một số không âm là số không âm có bình phương bằng số đó. Với $9$, căn bậc hai số học là $3$.'
      },
      {
        id: 'q2-1-4',
        text: 'Kết quả của $\\sqrt{16}$ là:',
        options: ['$-4$', '$4$', '$\\pm4$', '$8$'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{16}=4$.'
      },
      {
        id: 'q2-1-5',
        text: 'Kết quả của $\\sqrt{0}$ là:',
        options: ['$0$', '$1$', 'Không xác định', '$\\pm 0$'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{0}=0$.'
      },
      {
        id: 'q2-1-6',
        text: 'Số nào sau đây không có căn bậc hai số học trong tập số thực?',
        options: ['$0$', '$4$', '$\\dfrac{1}{9}$', '$-1$'],
        correctAnswerIndex: 3,
        explanation: 'Trong tập số thực, số âm không có căn bậc hai số học.'
      },
      {
        id: 'q2-1-7',
        text: 'Kết quả của $\\sqrt{25}$ là:',
        options: ['$5$', '$-5$', '$\\pm5$', '$10$'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{25}=5$.'
      },
      {
        id: 'q2-1-8',
        text: 'Kết quả của $\\sqrt{1}$ là:',
        options: ['$1$', '$-1$', '$\\pm1$', '$0$'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{1}=1$.'
      },
      {
        id: 'q2-1-9',
        text: 'Kết quả của $\\sqrt{\\dfrac{1}{4}}$ là:',
        options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\pm\\dfrac{1}{2}$', '$\\dfrac{1}{8}$'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{\\dfrac{1}{4}}=\\dfrac{1}{2}$.'
      },
      {
        id: 'q2-1-10',
        text: 'Kết quả của $\\sqrt{\\dfrac{9}{16}}$ là:',
        options: ['$\\dfrac{3}{4}$', '$-\\dfrac{3}{4}$', '$\\pm\\dfrac{3}{4}$', '$\\dfrac{9}{8}$'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{\\dfrac{9}{16}}=\\dfrac{3}{4}$.'
      },
      {
        id: 'q2-1-11',
        text: 'Khẳng định nào đúng?',
        options: [
          '$\\sqrt{36}=6$',
          '$\\sqrt{36}=-6$',
          '$\\sqrt{36}=\\pm 6$',
          '$\\sqrt{36}=18$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Kí hiệu $\\sqrt{36}$ chỉ căn bậc hai số học nên bằng $6$.'
      },
      {
        id: 'q2-1-12',
        text: 'Số nào sau đây là số vô tỉ?',
        options: ['$0,75$', '$\\dfrac{11}{20}$', '$\\sqrt{7}$', '$-\\dfrac{5}{2}$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{7}$ là số vô tỉ.'
      },
      {
        id: 'q2-1-13',
        text: 'Trong các số sau, số nào là căn bậc hai số học của $49$?',
        options: ['$-7$', '$7$', '$\\pm 7$', '$14$'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{49}=7$.'
      },
      {
        id: 'q2-1-14',
        text: 'Số nào sau đây bằng $\\sqrt{64}$?',
        options: ['$6$', '$7$', '$8$', '$9$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{64}=8$.'
      },
      {
        id: 'q2-1-15',
        text: 'Kết quả của $\\sqrt{100}$ là:',
        options: ['$10$', '$-10$', '$\\pm 10$', '$20$'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{100}=10$.'
      },
      {
        id: 'q2-1-16',
        text: 'Số nào sau đây là số vô tỉ?',
        options: ['$\\sqrt{9}$', '$\\sqrt{16}$', '$\\sqrt{18}$', '$\\sqrt{25}$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{18}=3\\sqrt{2}$ là số vô tỉ.'
      },
      {
        id: 'q2-1-17',
        text: 'Kết quả của $\\sqrt{121}$ là:',
        options: ['$11$', '$-11$', '$\\pm11$', '$22$'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{121}=11$.'
      },
      {
        id: 'q2-1-18',
        text: 'Kết quả của $\\sqrt{144}$ là:',
        options: ['$10$', '$11$', '$12$', '$13$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{144}=12$.'
      },
      {
        id: 'q2-1-19',
        text: 'Giá trị của $\\sqrt{\\dfrac{49}{64}}$ là:',
        options: ['$\\dfrac{7}{8}$', '$-\\dfrac{7}{8}$', '$\\pm\\dfrac{7}{8}$', '$\\dfrac{14}{8}$'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{\\dfrac{49}{64}}=\\dfrac{7}{8}$.'
      },
      {
        id: 'q2-1-20',
        text: 'Khẳng định nào sau đây sai?',
        options: [
          '$\\sqrt{2}$ là số vô tỉ',
          '$\\sqrt{4}=2$',
          '$\\sqrt{-4}=-2$',
          '$\\sqrt{0}=0$'
        ],
        correctAnswerIndex: 2,
        explanation: 'Trong tập số thực, $\\sqrt{-4}$ không xác định.'
      },
      {
        id: 'q2-1-21',
        text: 'Tìm số $x\\ge0$ biết $x^2=81$',
        options: ['$-9$', '$9$', '$\\pm9$', '$8$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $x\\ge0$ và $x^2=81$ nên $x=\\sqrt{81}=9$.'
      },
      {
        id: 'q2-1-22',
        text: 'Tìm số $x\\ge0$ biết $x^2=\\dfrac{4}{9}$',
        options: ['$\\dfrac{2}{3}$', '$-\\dfrac{2}{3}$', '$\\pm\\dfrac{2}{3}$', '$\\dfrac{4}{3}$'],
        correctAnswerIndex: 0,
        explanation: '$x=\\sqrt{\\dfrac{4}{9}}=\\dfrac{2}{3}$.'
      },
      {
        id: 'q2-1-23',
        text: 'Tìm số $x\\ge0$ biết $x^2=0,49$',
        options: ['$0,7$', '$-0,7$', '$1,4$', '$0,49$'],
        correctAnswerIndex: 0,
        explanation: '$x=\\sqrt{0,49}=0,7$.'
      },
      {
        id: 'q2-1-24',
        text: 'Giá trị của $\\sqrt{225}$ là:',
        options: ['$13$', '$14$', '$15$', '$16$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{225}=15$.'
      },
      {
        id: 'q2-1-25',
        text: 'Số nào sau đây là số hữu tỉ?',
        options: ['$\\sqrt{50}$', '$\\sqrt{81}$', '$\\sqrt{11}$', '$\\pi$'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{81}=9$ là số hữu tỉ.'
      },
      {
        id: 'q2-1-26',
        text: 'Số nào sau đây là số vô tỉ?',
        options: ['$\\sqrt{36}$', '$\\dfrac{7}{8}$', '$-1,25$', '$\\sqrt{10}$'],
        correctAnswerIndex: 3,
        explanation: '$\\sqrt{10}$ là số vô tỉ.'
      },
      {
        id: 'q2-1-27',
        text: 'Khẳng định nào đúng?',
        options: [
          'Mọi số vô tỉ đều là số thực',
          'Mọi số thực đều là số vô tỉ',
          'Mọi số hữu tỉ đều là số vô tỉ',
          '$\\sqrt{9}$ là số vô tỉ'
        ],
        correctAnswerIndex: 0,
        explanation: 'Số vô tỉ là một bộ phận của tập số thực.'
      },
      {
        id: 'q2-1-28',
        text: 'Kết quả của $\\sqrt{400}$ là:',
        options: ['$18$', '$19$', '$20$', '$40$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{400}=20$.'
      },
      {
        id: 'q2-1-29',
        text: 'Kết quả của $\\sqrt{0,01}$ là:',
        options: ['$0,001$', '$0,01$', '$0,1$', '$1$'],
        correctAnswerIndex: 2,
        explanation: '$0,1^2=0,01$ nên $\\sqrt{0,01}=0,1$.'
      },
      {
        id: 'q2-1-30',
        text: 'Kết quả của $\\sqrt{2,25}$ là:',
        options: ['$1,5$', '$-1,5$', '$2,5$', '$1,25$'],
        correctAnswerIndex: 0,
        explanation: '$1,5^2=2,25$ nên $\\sqrt{2,25}=1,5$.'
      },
      {
        id: 'q2-1-31',
        text: 'Số nào sau đây không phải số thực?',
        options: ['$\\sqrt{5}$', '$-3$', '$\\sqrt{-9}$', '$0$'],
        correctAnswerIndex: 2,
        explanation: 'Trong tập số thực, $\\sqrt{-9}$ không xác định.'
      },
      {
        id: 'q2-1-32',
        text: 'Tìm số $x\\ge0$ biết $x^2=169$',
        options: ['$11$', '$12$', '$13$', '$14$'],
        correctAnswerIndex: 2,
        explanation: '$x=\\sqrt{169}=13$.'
      },
      {
        id: 'q2-1-33',
        text: 'Tìm số $x\\ge0$ biết $x^2=\\dfrac{25}{36}$',
        options: ['$\\dfrac{5}{6}$', '$-\\dfrac{5}{6}$', '$\\pm\\dfrac{5}{6}$', '$\\dfrac{25}{6}$'],
        correctAnswerIndex: 0,
        explanation: '$x=\\sqrt{\\dfrac{25}{36}}=\\dfrac{5}{6}$.'
      }
    ]
  },
  {
    id: 'c2-t2',
    title: 'Tập hợp số thực',
    description: 'Nhận biết số thực, biểu diễn số thực trên trục số, so sánh các số thực.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q2-2-1',
        text: 'Tập hợp số thực được kí hiệu là:',
        options: ['$\\mathbb{N}$', '$\\mathbb{Z}$', '$\\mathbb{Q}$', '$\\mathbb{R}$'],
        correctAnswerIndex: 3,
        explanation: 'Tập hợp số thực được kí hiệu là $\\mathbb{R}$.'
      },
      {
        id: 'q2-2-2',
        text: 'Khẳng định nào đúng?',
        options: [
          '$\\mathbb{Q}\\subset\\mathbb{R}$',
          '$\\mathbb{R}\\subset\\mathbb{Q}$',
          '$\\mathbb{Z}\\subset$ số vô tỉ',
          'Số vô tỉ không thuộc $\\mathbb{R}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mọi số hữu tỉ đều là số thực.'
      },
      {
        id: 'q2-2-3',
        text: 'Số nào sau đây thuộc tập số thực?',
        options: ['$\\sqrt{2}$', '$-5$', '$\\dfrac{3}{7}$', 'Cả ba số trên'],
        correctAnswerIndex: 3,
        explanation: 'Số thực gồm cả số hữu tỉ và số vô tỉ.'
      },
      {
        id: 'q2-2-4',
        text: 'Trong các số sau, số nào là số vô tỉ?',
        options: ['$0,5$', '$\\dfrac{7}{11}$', '$\\sqrt{6}$', '$-8$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{6}$ là số vô tỉ.'
      },
      {
        id: 'q2-2-5',
        text: 'Số nào sau đây là số thực âm?',
        options: ['$\\sqrt{3}$', '$-\\sqrt{5}$', '$0$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 1,
        explanation: '$-\\sqrt{5}$ là số thực âm.'
      },
      {
        id: 'q2-2-6',
        text: 'Số nào sau đây lớn hơn 0?',
        options: ['$-\\sqrt{2}$', '$-\\dfrac{1}{3}$', '$\\sqrt{7}$', '$-0,1$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{7}>0$.'
      },
      {
        id: 'q2-2-7',
        text: 'Khẳng định nào đúng?',
        options: [
          'Mọi số nguyên đều là số thực',
          'Mọi số thực đều là số nguyên',
          'Mọi số vô tỉ đều là số nguyên',
          '$\\sqrt{2}$ không là số thực'
        ],
        correctAnswerIndex: 0,
        explanation: 'Số nguyên là tập con của số thực.'
      },
      {
        id: 'q2-2-8',
        text: 'So sánh $\\sqrt{4}$ và $1,9$',
        options: ['$\\sqrt{4}<1,9$', '$\\sqrt{4}>1,9$', '$\\sqrt{4}=1,9$', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{4}=2>1,9$.'
      },
      {
        id: 'q2-2-9',
        text: 'So sánh $\\sqrt{2}$ và $1,5$',
        options: ['$\\sqrt{2}<1,5$', '$\\sqrt{2}>1,5$', '$\\sqrt{2}=1,5$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{2}\\approx1,414<1,5$.'
      },
      {
        id: 'q2-2-10',
        text: 'So sánh $\\sqrt{3}$ và $1,7$',
        options: ['$\\sqrt{3}<1,7$', '$\\sqrt{3}>1,7$', '$\\sqrt{3}=1,7$', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{3}\\approx1,732>1,7$.'
      },
      {
        id: 'q2-2-11',
        text: 'Số nào sau đây nằm giữa 1 và 2?',
        options: ['$\\sqrt{5}$', '$\\sqrt{2}$', '$\\sqrt{8}$', '$\\sqrt{10}$'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{2}\\approx1,414$ nằm giữa 1 và 2.'
      },
      {
        id: 'q2-2-12',
        text: 'Số nào sau đây nằm giữa 2 và 3?',
        options: ['$\\sqrt{3}$', '$\\sqrt{5}$', '$\\sqrt{8}$', '$\\sqrt{10}$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{8}\\approx2,828$ nằm giữa 2 và 3.'
      },
      {
        id: 'q2-2-13',
        text: 'Số nào sau đây nhỏ hơn 1?',
        options: ['$\\sqrt{2}$', '$\\sqrt{0,25}$', '$\\sqrt{3}$', '$\\sqrt{5}$'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{0,25}=0,5<1$.'
      },
      {
        id: 'q2-2-14',
        text: 'Giá trị tuyệt đối của $-\\sqrt{7}$ là:',
        options: ['$-\\sqrt{7}$', '$\\sqrt{7}$', '$7$', '$0$'],
        correctAnswerIndex: 1,
        explanation: '$|-\\sqrt{7}|=\\sqrt{7}$.'
      },
      {
        id: 'q2-2-15',
        text: 'Số đối của $\\sqrt{11}$ là:',
        options: ['$\\sqrt{11}$', '$-\\sqrt{11}$', '$\\dfrac{1}{\\sqrt{11}}$', '$11$'],
        correctAnswerIndex: 1,
        explanation: 'Số đối của $a$ là $-a$.'
      },
      {
        id: 'q2-2-16',
        text: 'Khẳng định nào đúng?',
        options: [
          '$\\sqrt{9}$ là số vô tỉ',
          '$\\sqrt{9}$ là số hữu tỉ',
          '$\\sqrt{9}$ không là số thực',
          '$\\sqrt{9}$ là số âm'
        ],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{9}=3$ là số hữu tỉ.'
      },
      {
        id: 'q2-2-17',
        text: 'Khẳng định nào đúng?',
        options: [
          '$\\pi$ là số hữu tỉ',
          '$\\pi$ là số vô tỉ',
          '$\\pi$ không là số thực',
          '$\\pi$ là số nguyên'
        ],
        correctAnswerIndex: 1,
        explanation: '$\\pi$ là số vô tỉ.'
      },
      {
        id: 'q2-2-18',
        text: 'Tập số thực gồm:',
        options: [
          'Chỉ số hữu tỉ',
          'Chỉ số vô tỉ',
          'Số hữu tỉ và số vô tỉ',
          'Chỉ số nguyên'
        ],
        correctAnswerIndex: 2,
        explanation: '$\\mathbb{R}$ gồm số hữu tỉ và số vô tỉ.'
      },
      {
        id: 'q2-2-19',
        text: 'Số nào sau đây lớn nhất?',
        options: ['$\\sqrt{2}$', '$1,3$', '$1,41$', '$\\dfrac{7}{5}$'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{2}\\approx1,4142$, lớn hơn $1,41$, $1,4$ và $1,3$.'
      },
      {
        id: 'q2-2-20',
        text: 'Số nào sau đây nhỏ nhất?',
        options: ['$-\\sqrt{3}$', '$-1,6$', '$-\\dfrac{5}{3}$', '$-1,5$'],
        correctAnswerIndex: 0,
        explanation: '$-\\sqrt{3}\\approx-1,732$ là nhỏ nhất.'
      },
      {
        id: 'q2-2-21',
        text: 'So sánh $\\sqrt{10}$ và 3',
        options: ['$\\sqrt{10}<3$', '$\\sqrt{10}>3$', '$\\sqrt{10}=3$', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{10}\\approx3,162>3$.'
      },
      {
        id: 'q2-2-22',
        text: 'So sánh $\\sqrt{15}$ và 4',
        options: ['$\\sqrt{15}<4$', '$\\sqrt{15}>4$', '$\\sqrt{15}=4$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: '$\\sqrt{15}\\approx3,873<4$.'
      },
      {
        id: 'q2-2-23',
        text: 'Số nào sau đây là số thực không âm?',
        options: ['$-\\sqrt{8}$', '$-0,2$', '$\\sqrt{0,36}$', '$-\\dfrac{2}{9}$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{0,36}=0,6\\ge0$.'
      },
      {
        id: 'q2-2-24',
        text: 'Số nào sau đây là số thực dương?',
        options: ['$-\\pi$', '$-\\sqrt{2}$', '$\\sqrt{0,04}$', '$0$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{0,04}=0,2>0$.'
      },
      {
        id: 'q2-2-25',
        text: 'Chọn khẳng định sai:',
        options: [
          '$\\sqrt{2}\\in\\mathbb{R}$',
          '$\\dfrac{3}{5}\\in\\mathbb{R}$',
          '$-7\\in\\mathbb{R}$',
          '$\\sqrt{-1}\\in\\mathbb{R}$'
        ],
        correctAnswerIndex: 3,
        explanation: 'Trong tập số thực, $\\sqrt{-1}$ không xác định.'
      },
      {
        id: 'q2-2-26',
        text: 'Số nào sau đây bằng 2?',
        options: ['$\\sqrt{2}$', '$\\sqrt{4}$', '$\\sqrt{8}$', '$\\sqrt{16}$'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{4}=2$.'
      },
      {
        id: 'q2-2-27',
        text: 'Số nào sau đây bằng 3?',
        options: ['$\\sqrt{6}$', '$\\sqrt{7}$', '$\\sqrt{8}$', '$\\sqrt{9}$'],
        correctAnswerIndex: 3,
        explanation: '$\\sqrt{9}=3$.'
      },
      {
        id: 'q2-2-28',
        text: 'Số nào sau đây nhỏ hơn $\\sqrt{2}$?',
        options: ['$1,5$', '$1,42$', '$1,4$', '$1,45$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{2}\\approx1,4142$, nên $1,4<\\sqrt{2}$.'
      },
      {
        id: 'q2-2-29',
        text: 'Số nào sau đây lớn hơn $\\sqrt{5}$?',
        options: ['$2,2$', '$2,23$', '$2,24$', '$2,236$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{5}\\approx2,236067...$, nên $2,24>\\sqrt{5}$.'
      },
      {
        id: 'q2-2-30',
        text: 'Nếu $a=\\sqrt{3}$ thì số đối của $a$ là:',
        options: ['$\\sqrt{3}$', '$-\\sqrt{3}$', '$\\dfrac{1}{\\sqrt{3}}$', '$3$'],
        correctAnswerIndex: 1,
        explanation: 'Số đối của $a$ là $-a$.'
      },
      {
        id: 'q2-2-31',
        text: 'Nếu $a=-\\sqrt{6}$ thì giá trị tuyệt đối của $a$ là:',
        options: ['$-\\sqrt{6}$', '$\\sqrt{6}$', '$6$', '$0$'],
        correctAnswerIndex: 1,
        explanation: '$|-\\sqrt{6}|=\\sqrt{6}$.'
      },
      {
        id: 'q2-2-32',
        text: 'Số nào sau đây không phải số hữu tỉ nhưng là số thực?',
        options: ['$-2$', '$0,75$', '$\\sqrt{12}$', '$\\dfrac{3}{8}$'],
        correctAnswerIndex: 2,
        explanation: '$\\sqrt{12}=2\\sqrt{3}$ là số vô tỉ nhưng vẫn là số thực.'
      },
      {
        id: 'q2-2-33',
        text: 'Số nào sau đây là số hữu tỉ?',
        options: ['$\\sqrt{20}$', '$\\sqrt{49}$', '$\\sqrt{13}$', '$\\sqrt{19}$'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{49}=7$ là số hữu tỉ.'
      }
    ]
  },
  {
    id: 'c2-t3',
    title: 'Làm tròn số và ước lượng',
    description: 'Làm tròn số thập phân, làm tròn căn bậc hai và vận dụng ước lượng trong tính toán.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q2-3-1',
        text: 'Làm tròn số $3,14159$ đến chữ số thập phân thứ nhất, ta được:',
        options: ['$3,1$', '$3,14$', '$3,2$', '$3$'],
        correctAnswerIndex: 0,
        explanation: 'Làm tròn đến hàng phần mười, nhìn chữ số hàng phần trăm là 4 < 5 nên được $3,1$.'
      },
      {
        id: 'q2-3-2',
        text: 'Làm tròn số $3,14159$ đến chữ số thập phân thứ hai, ta được:',
        options: ['$3,1$', '$3,14$', '$3,15$', '$3,142$'],
        correctAnswerIndex: 1,
        explanation: 'Làm tròn đến hàng phần trăm, nhìn chữ số hàng phần nghìn là 1 < 5 nên được $3,14$.'
      },
      {
        id: 'q2-3-3',
        text: 'Làm tròn số $2,678$ đến chữ số thập phân thứ nhất, ta được:',
        options: ['$2,6$', '$2,7$', '$2,68$', '$3$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần trăm là 7 >= 5 nên tăng hàng phần mười từ 6 lên 7.'
      },
      {
        id: 'q2-3-4',
        text: 'Làm tròn số $5,246$ đến chữ số thập phân thứ hai, ta được:',
        options: ['$5,24$', '$5,25$', '$5,3$', '$5,246$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần nghìn là 6 >= 5 nên làm tròn thành $5,25$.'
      },
      {
        id: 'q2-3-5',
        text: 'Làm tròn số $7,84$ đến hàng đơn vị, ta được:',
        options: ['$7$', '$8$', '$7,8$', '$7,9$'],
        correctAnswerIndex: 1,
        explanation: 'Chữ số hàng phần mười là 8 >= 5 nên làm tròn lên 8.'
      },
      {
        id: 'q2-3-6',
        text: 'Làm tròn số $12,49$ đến hàng đơn vị, ta được:',
        options: ['$12$', '$13$', '$12,5$', '$11$'],
        correctAnswerIndex: 0,
        explanation: 'Vì 0,49 < 0,5 nên làm tròn xuống 12.'
      },
      {
        id: 'q2-3-7',
        text: 'Làm tròn số $0,486$ đến chữ số thập phân thứ hai, ta được:',
        options: ['$0,48$', '$0,49$', '$0,5$', '$0,486$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần nghìn là 6 >= 5 nên làm tròn $0,48$ thành $0,49$.'
      },
      {
        id: 'q2-3-8',
        text: 'Làm tròn số $9,995$ đến chữ số thập phân thứ hai, ta được:',
        options: ['$9,99$', '$10,00$', '$10$', '$9,9$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần nghìn là 5 nên làm tròn lên, được $10,00$.'
      },
      {
        id: 'q2-3-9',
        text: 'Biết $\\sqrt{2}\\approx 1,4142$. Làm tròn $\\sqrt{2}$ đến chữ số thập phân thứ nhất được:',
        options: ['$1,4$', '$1,5$', '$1,41$', '$1,42$'],
        correctAnswerIndex: 0,
        explanation: 'Làm tròn đến hàng phần mười được $1,4$.'
      },
      {
        id: 'q2-3-10',
        text: 'Biết $\\sqrt{3}\\approx 1,732$. Làm tròn đến chữ số thập phân thứ hai được:',
        options: ['$1,7$', '$1,73$', '$1,74$', '$1,72$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần nghìn là 2 < 5 nên được $1,73$.'
      },
      {
        id: 'q2-3-11',
        text: 'Biết $\\sqrt{5}\\approx2,236$. Làm tròn đến hàng phần mười được:',
        options: ['$2,2$', '$2,3$', '$2,24$', '$2,25$'],
        correctAnswerIndex: 0,
        explanation: 'Hàng phần trăm là 3 < 5 nên được $2,2$.'
      },
      {
        id: 'q2-3-12',
        text: 'Biết $\\sqrt{7}\\approx2,646$. Làm tròn đến chữ số thập phân thứ hai được:',
        options: ['$2,64$', '$2,65$', '$2,7$', '$2,63$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần nghìn là 6 >= 5 nên $2,64$ làm tròn thành $2,65$.'
      },
      {
        id: 'q2-3-13',
        text: 'Ước lượng $\\sqrt{10}$ nằm giữa hai số nguyên liên tiếp nào?',
        options: ['$2$ và $3$', '$3$ và $4$', '$4$ và $5$', '$1$ và $2$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $9<10<16$ nên $3<\\sqrt{10}<4$.'
      },
      {
        id: 'q2-3-14',
        text: 'Ước lượng $\\sqrt{15}$ nằm giữa hai số nguyên liên tiếp nào?',
        options: ['$2$ và $3$', '$3$ và $4$', '$4$ và $5$', '$5$ và $6$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $9<15<16$ nên $3<\\sqrt{15}<4$.'
      },
      {
        id: 'q2-3-15',
        text: 'Ước lượng $\\sqrt{20}$ nằm giữa hai số nguyên liên tiếp nào?',
        options: ['$3$ và $4$', '$4$ và $5$', '$5$ và $6$', '$2$ và $3$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $16<20<25$ nên $4<\\sqrt{20}<5$.'
      },
      {
        id: 'q2-3-16',
        text: 'Ước lượng $\\sqrt{30}$ nằm giữa hai số nguyên liên tiếp nào?',
        options: ['$4$ và $5$', '$5$ và $6$', '$6$ và $7$', '$3$ và $4$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $25<30<36$ nên $5<\\sqrt{30}<6$.'
      },
      {
        id: 'q2-3-17',
        text: 'Làm tròn số $18,75$ đến hàng đơn vị, ta được:',
        options: ['$18$', '$19$', '$18,8$', '$17$'],
        correctAnswerIndex: 1,
        explanation: 'Vì hàng phần mười là 7 >= 5 nên làm tròn thành 19.'
      },
      {
        id: 'q2-3-18',
        text: 'Làm tròn số $24,149$ đến chữ số thập phân thứ hai, ta được:',
        options: ['$24,14$', '$24,15$', '$24,1$', '$24,149$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần nghìn là 9 >= 5 nên được $24,15$.'
      },
      {
        id: 'q2-3-19',
        text: 'Làm tròn số $0,0449$ đến chữ số thập phân thứ ba, ta được:',
        options: ['$0,044$', '$0,045$', '$0,04$', '$0,050$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng thứ tư sau dấu phẩy là 9 nên làm tròn lên $0,045$.'
      },
      {
        id: 'q2-3-20',
        text: 'Làm tròn số $6,5001$ đến hàng đơn vị, ta được:',
        options: ['$6$', '$7$', '$6,5$', '$6,50$'],
        correctAnswerIndex: 1,
        explanation: 'Vì phần thập phân lớn hơn hoặc bằng 0,5 nên làm tròn lên 7.'
      },
      {
        id: 'q2-3-21',
        text: 'Biết $\\sqrt{8}\\approx2,828$. Làm tròn đến hàng phần mười được:',
        options: ['$2,8$', '$2,9$', '$2,82$', '$2,83$'],
        correctAnswerIndex: 0,
        explanation: 'Làm tròn đến một chữ số thập phân được $2,8$.'
      },
      {
        id: 'q2-3-22',
        text: 'Biết $\\sqrt{11}\\approx3,317$. Làm tròn đến chữ số thập phân thứ hai được:',
        options: ['$3,31$', '$3,32$', '$3,3$', '$3,4$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần nghìn là 7 nên $3,31$ làm tròn lên $3,32$.'
      },
      {
        id: 'q2-3-23',
        text: 'Biết $\\sqrt{12}\\approx3,464$. Làm tròn đến chữ số thập phân thứ nhất được:',
        options: ['$3,4$', '$3,5$', '$3,46$', '$3,47$'],
        correctAnswerIndex: 0,
        explanation: 'Hàng phần trăm là 6 >= 5, nên làm tròn $3,4$ thành $3,5$? Cẩn thận: đến hàng phần mười, số là 3,464 nên được 3,5.'
      },
      {
        id: 'q2-3-24',
        text: 'Làm tròn đúng của $3,464$ đến chữ số thập phân thứ nhất là:',
        options: ['$3,4$', '$3,5$', '$3,46$', '$4,0$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần trăm là 6 >= 5 nên $3,464$ làm tròn đến hàng phần mười là $3,5$.'
      },
      {
        id: 'q2-3-25',
        text: 'Ước lượng $\\sqrt{50}$ nằm giữa hai số nguyên liên tiếp nào?',
        options: ['$6$ và $7$', '$7$ và $8$', '$8$ và $9$', '$5$ và $6$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $49<50<64$ nên $7<\\sqrt{50}<8$.'
      },
      {
        id: 'q2-3-26',
        text: 'Ước lượng $\\sqrt{63}$ nằm giữa hai số nguyên liên tiếp nào?',
        options: ['$6$ và $7$', '$7$ và $8$', '$8$ và $9$', '$5$ và $6$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $49<63<64$ nên $7<\\sqrt{63}<8$.'
      },
      {
        id: 'q2-3-27',
        text: 'Ước lượng $\\sqrt{80}$ nằm giữa hai số nguyên liên tiếp nào?',
        options: ['$7$ và $8$', '$8$ và $9$', '$9$ và $10$', '$6$ và $7$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $64<80<81$ nên $8<\\sqrt{80}<9$.'
      },
      {
        id: 'q2-3-28',
        text: 'Làm tròn số $125,555$ đến chữ số thập phân thứ hai, ta được:',
        options: ['$125,55$', '$125,56$', '$125,6$', '$126,00$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần nghìn là 5 nên làm tròn lên $125,56$.'
      },
      {
        id: 'q2-3-29',
        text: 'Làm tròn số $49,04$ đến hàng đơn vị, ta được:',
        options: ['$49$', '$50$', '$49,0$', '$48$'],
        correctAnswerIndex: 0,
        explanation: 'Vì 0,04 < 0,5 nên làm tròn xuống 49.'
      },
      {
        id: 'q2-3-30',
        text: 'Biết $\\sqrt{6}\\approx2,449$. Làm tròn đến chữ số thập phân thứ hai được:',
        options: ['$2,44$', '$2,45$', '$2,4$', '$2,5$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần nghìn là 9 nên $2,44$ làm tròn thành $2,45$.'
      },
      {
        id: 'q2-3-31',
        text: 'Biết $\\sqrt{14}\\approx3,742$. Làm tròn đến hàng phần mười được:',
        options: ['$3,7$', '$3,8$', '$3,74$', '$4,0$'],
        correctAnswerIndex: 0,
        explanation: 'Hàng phần trăm là 4 < 5 nên được $3,7$.'
      },
      {
        id: 'q2-3-32',
        text: 'Biết $\\sqrt{19}\\approx4,359$. Làm tròn đến chữ số thập phân thứ nhất được:',
        options: ['$4,3$', '$4,4$', '$4,35$', '$4,36$'],
        correctAnswerIndex: 1,
        explanation: 'Hàng phần trăm là 5 nên làm tròn $4,3$ lên $4,4$.'
      },
      {
        id: 'q2-3-33',
        text: 'Trong các số sau, số nào là kết quả làm tròn $\\sqrt{3}$ đến chữ số thập phân thứ nhất?',
        options: ['$1,6$', '$1,7$', '$1,8$', '$1,9$'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{3}\\approx1,732$, làm tròn đến hàng phần mười được $1,7$.'
      },
      {
        id: 'q2-3-34',
        text: 'Trong các số sau, số nào là kết quả làm tròn $\\sqrt{7}$ đến chữ số thập phân thứ nhất?',
        options: ['$2,5$', '$2,6$', '$2,7$', '$2,8$'],
        correctAnswerIndex: 1,
        explanation: '$\\sqrt{7}\\approx2,646$, làm tròn đến hàng phần mười được $2,6$.'
      }
    ]
  }
];