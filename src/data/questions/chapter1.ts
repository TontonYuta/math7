import { Topic } from '../../types';

export const chapter1Topics: Topic[] = [
  {
    id: 'c1-t1',
    title: 'Tập hợp các số hữu tỉ',
    description: 'Khái niệm số hữu tỉ, biểu diễn trên trục số, số đối, giá trị tuyệt đối và so sánh hai số hữu tỉ.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q1-1-1',
        text: 'Số hữu tỉ là số có thể viết dưới dạng nào?',
        options: [
          '$\\dfrac{a}{b}$ với $a,b\\in\\mathbb{Z},\\ b\\ne 0$',
          '$\\dfrac{a}{b}$ với $a,b\\in\\mathbb{N}$',
          '$\\dfrac{a}{b}$ với $a,b\\in\\mathbb{Q}$',
          '$\\dfrac{a}{0}$ với $a\\in\\mathbb{Z}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Số hữu tỉ là số viết được dưới dạng $\\dfrac{a}{b}$ với $a,b\\in\\mathbb{Z}$ và $b\\ne0$.'
      },
      {
        id: 'q1-1-2',
        text: 'Tập hợp các số hữu tỉ được kí hiệu là:',
        options: ['$\\mathbb{N}$', '$\\mathbb{Z}$', '$\\mathbb{Q}$', '$\\mathbb{R}$'],
        correctAnswerIndex: 2,
        explanation: 'Tập hợp số hữu tỉ được kí hiệu là $\\mathbb{Q}$.'
      },
      {
        id: 'q1-1-3',
        text: 'Trong các số sau, số nào không phải là số hữu tỉ?',
        options: ['$-3,5$', '$\\dfrac{0}{7}$', '$2\\dfrac{1}{3}$', '$\\dfrac{5}{0}$'],
        correctAnswerIndex: 3,
        explanation: 'Phân số có mẫu số bằng 0 là vô nghĩa nên $\\dfrac{5}{0}$ không phải số hữu tỉ.'
      },
      {
        id: 'q1-1-4',
        text: 'Số đối của $-\\dfrac{3}{4}$ là:',
        options: ['$\\dfrac{4}{3}$', '$-\\dfrac{3}{4}$', '$\\dfrac{3}{4}$', '$-\\dfrac{4}{3}$'],
        correctAnswerIndex: 2,
        explanation: 'Số đối của một số là số có tổng với nó bằng 0. Số đối của $-\\dfrac{3}{4}$ là $\\dfrac{3}{4}$.'
      },
      {
        id: 'q1-1-5',
        text: 'So sánh hai số $-\\dfrac{1}{2}$ và $-\\dfrac{1}{3}$:',
        options: [
          '$-\\dfrac{1}{2} > -\\dfrac{1}{3}$',
          '$-\\dfrac{1}{2} < -\\dfrac{1}{3}$',
          '$-\\dfrac{1}{2} = -\\dfrac{1}{3}$',
          'Không so sánh được'
        ],
        correctAnswerIndex: 1,
        explanation: 'Vì $\\dfrac{1}{2}>\\dfrac{1}{3}$ nên đổi dấu âm sẽ đảo chiều: $-\\dfrac{1}{2}< -\\dfrac{1}{3}$.'
      },
      {
        id: 'q1-1-6',
        text: 'Số nào sau đây là số hữu tỉ âm?',
        options: ['$\\dfrac{7}{8}$', '$0$', '$-\\dfrac{5}{9}$', '$\\dfrac{-2}{-3}$'],
        correctAnswerIndex: 2,
        explanation: '$-\\dfrac{5}{9}$ là số hữu tỉ âm. Còn $\\dfrac{-2}{-3}=\\dfrac{2}{3}>0$.'
      },
      {
        id: 'q1-1-7',
        text: 'Số $0$ có phải là số hữu tỉ không?',
        options: ['Không', 'Có', 'Chỉ khi viết dưới dạng số thập phân', 'Chỉ khi là số nguyên'],
        correctAnswerIndex: 1,
        explanation: 'Vì $0=\\dfrac{0}{1}$ nên $0$ là số hữu tỉ.'
      },
      {
        id: 'q1-1-8',
        text: 'Cách viết nào biểu diễn đúng số hữu tỉ $-2$?',
        options: ['$-\\dfrac{2}{0}$', '$\\dfrac{-2}{1}$', '$\\dfrac{2}{-0}$', '$\\dfrac{1}{-2}$'],
        correctAnswerIndex: 1,
        explanation: '$-2=\\dfrac{-2}{1}$.'
      },
      {
        id: 'q1-1-9',
        text: 'Trong các số sau, số nào bằng $\\dfrac{3}{4}$?',
        options: ['$\\dfrac{6}{10}$', '$\\dfrac{9}{12}$', '$\\dfrac{12}{20}$', '$\\dfrac{15}{24}$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{9}{12}=\\dfrac{3}{4}$.'
      },
      {
        id: 'q1-1-10',
        text: 'Số thập phân hữu hạn nào sau đây là số hữu tỉ?',
        options: ['$2,75$', '$\\sqrt{2}$', '$\\pi$', '$\\sqrt{3}$'],
        correctAnswerIndex: 0,
        explanation: 'Mọi số thập phân hữu hạn đều là số hữu tỉ.'
      },
      {
        id: 'q1-1-11',
        text: 'Giá trị tuyệt đối của $-\\dfrac{7}{9}$ là:',
        options: ['$-\\dfrac{7}{9}$', '$\\dfrac{7}{9}$', '$\\dfrac{9}{7}$', '$0$'],
        correctAnswerIndex: 1,
        explanation: 'Giá trị tuyệt đối là khoảng cách đến 0 nên luôn không âm.'
      },
      {
        id: 'q1-1-12',
        text: 'Giá trị tuyệt đối của $0$ là:',
        options: ['$1$', '$-1$', '$0$', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation: '$|0|=0$.'
      },
      {
        id: 'q1-1-13',
        text: 'Điền dấu thích hợp: $\\dfrac{2}{5}\\ ...\\ 0,4$',
        options: ['$>$', '$<$', '$=$', '$\\ne$'],
        correctAnswerIndex: 2,
        explanation: '$\\dfrac{2}{5}=0,4$.'
      },
      {
        id: 'q1-1-14',
        text: 'Trong các số sau, số nào lớn nhất?',
        options: ['$-\\dfrac{3}{2}$', '$-1,4$', '$-\\dfrac{7}{5}$', '$-1,6$'],
        correctAnswerIndex: 1,
        explanation: '$-1,4$ lớn hơn $-1,5$, $-1,4$, $-1,6$.'
      },
      {
        id: 'q1-1-15',
        text: 'Trong các số sau, số nào nhỏ nhất?',
        options: ['$\\dfrac{1}{2}$', '$-\\dfrac{3}{4}$', '$0$', '$\\dfrac{-2}{3}$'],
        correctAnswerIndex: 1,
        explanation: 'So sánh các số âm: $-\\dfrac{3}{4}=-0,75$ nhỏ hơn $-\\dfrac{2}{3}\\approx -0,666...$.'
      },
      {
        id: 'q1-1-16',
        text: 'Số nào nằm bên trái số 0 trên trục số?',
        options: ['$\\dfrac{5}{6}$', '$1$', '$-\\dfrac{1}{7}$', '$\\dfrac{3}{8}$'],
        correctAnswerIndex: 2,
        explanation: 'Các số âm nằm bên trái số 0 trên trục số.'
      },
      {
        id: 'q1-1-17',
        text: 'Số nào nằm giữa $\\dfrac{1}{3}$ và $\\dfrac{2}{3}$?',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{3}{4}$', '$\\dfrac{5}{6}$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{1}{2}$ nằm giữa $\\dfrac{1}{3}$ và $\\dfrac{2}{3}$.'
      },
      {
        id: 'q1-1-18',
        text: 'Số đối của $0$ là:',
        options: ['$1$', '$-1$', '$0$', 'Không tồn tại'],
        correctAnswerIndex: 2,
        explanation: 'Số đối của 0 vẫn là 0.'
      },
      {
        id: 'q1-1-19',
        text: 'Nếu $x=\\dfrac{-5}{6}$ thì $|x|$ bằng:',
        options: ['$-\\dfrac{5}{6}$', '$\\dfrac{5}{6}$', '$\\dfrac{6}{5}$', '$0$'],
        correctAnswerIndex: 1,
        explanation: '$\\left|\\dfrac{-5}{6}\\right|=\\dfrac{5}{6}$.'
      },
      {
        id: 'q1-1-20',
        text: 'Trong các phân số sau, phân số nào biểu diễn số âm?',
        options: ['$\\dfrac{-4}{-9}$', '$\\dfrac{4}{-9}$', '$\\dfrac{-4}{-(-9)}$ ', '$\\dfrac{4}{9}$'],
        correctAnswerIndex: 1,
        explanation: 'Một dấu âm ở tử hoặc mẫu thì phân số âm.'
      },
      {
        id: 'q1-1-21',
        text: 'Chọn khẳng định đúng:',
        options: [
          'Mọi số nguyên đều là số hữu tỉ',
          'Mọi số hữu tỉ đều là số nguyên',
          'Mọi số tự nhiên đều là số vô tỉ',
          'Số 0 không là số hữu tỉ'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vì mọi số nguyên $a$ đều viết được dưới dạng $\\dfrac{a}{1}$.'
      },
      {
        id: 'q1-1-22',
        text: 'Số $-0,125$ viết dưới dạng phân số tối giản là:',
        options: ['$-\\dfrac{1}{8}$', '$-\\dfrac{1}{4}$', '$\\dfrac{1}{8}$', '$-\\dfrac{125}{10}$'],
        correctAnswerIndex: 0,
        explanation: '$-0,125=-\\dfrac{125}{1000}=-\\dfrac{1}{8}$.'
      },
      {
        id: 'q1-1-23',
        text: 'Số $1,2$ viết dưới dạng phân số là:',
        options: ['$\\dfrac{12}{10}$', '$\\dfrac{12}{100}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{1}$'],
        correctAnswerIndex: 0,
        explanation: '$1,2=\\dfrac{12}{10}=\\dfrac{6}{5}$.'
      },
      {
        id: 'q1-1-24',
        text: 'Sắp xếp theo thứ tự tăng dần: $-\\dfrac{2}{3},\\ 0,\\ \\dfrac{1}{2},\\ -1$',
        options: [
          '$-1< -\\dfrac{2}{3}<0<\\dfrac{1}{2}$',
          '$-\\dfrac{2}{3}< -1<0<\\dfrac{1}{2}$',
          '$-1<0< -\\dfrac{2}{3}<\\dfrac{1}{2}$',
          '$0<\\dfrac{1}{2}< -\\dfrac{2}{3}< -1$'
        ],
        correctAnswerIndex: 0,
        explanation: 'So sánh trực tiếp: $-1$ nhỏ nhất, rồi đến $-\\dfrac{2}{3}$, sau đó $0$, cuối cùng $\\dfrac{1}{2}$.'
      },
      {
        id: 'q1-1-25',
        text: 'Trong các số sau, số nào bằng $-\\dfrac{3}{2}$?',
        options: ['$-1,5$', '$1,5$', '$-0,15$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 0,
        explanation: '$-\\dfrac{3}{2}=-1,5$.'
      },
      {
        id: 'q1-1-26',
        text: 'Nếu $a>b$ thì số nào sau đây đúng?',
        options: ['$-a>-b$', '$-a<-b$', '$|a|<|b|$', '$a+b<0$'],
        correctAnswerIndex: 1,
        explanation: 'Đổi dấu hai vế của bất đẳng thức thì đổi chiều: nếu $a>b$ thì $-a<-b$.'
      },
      {
        id: 'q1-1-27',
        text: 'Trong các số sau, số nào có giá trị tuyệt đối nhỏ nhất?',
        options: ['$-\\dfrac{1}{2}$', '$\\dfrac{1}{3}$', '$-\\dfrac{1}{4}$', '$\\dfrac{2}{5}$'],
        correctAnswerIndex: 2,
        explanation: 'So sánh giá trị tuyệt đối: $\\dfrac{1}{4}$ nhỏ nhất.'
      },
      {
        id: 'q1-1-28',
        text: 'Chọn khẳng định sai:',
        options: [
          '$\\dfrac{3}{4}\\in\\mathbb{Q}$',
          '$-2\\in\\mathbb{Q}$',
          '$0\\in\\mathbb{Q}$',
          '$\\dfrac{5}{0}\\in\\mathbb{Q}$'
        ],
        correctAnswerIndex: 3,
        explanation: '$\\dfrac{5}{0}$ không xác định nên không thuộc $\\mathbb{Q}$.'
      },
      {
        id: 'q1-1-29',
        text: 'Số nào sau đây là số dương?',
        options: ['$-\\dfrac{2}{7}$', '$\\dfrac{-3}{8}$', '$\\dfrac{-5}{-9}$', '$0$'],
        correctAnswerIndex: 2,
        explanation: '$\\dfrac{-5}{-9}=\\dfrac{5}{9}>0$.'
      },
      {
        id: 'q1-1-30',
        text: 'Số nào sau đây nhỏ hơn 0?',
        options: ['$\\dfrac{1}{100}$', '$-0,01$', '$0$', '$\\dfrac{-2}{-5}$'],
        correctAnswerIndex: 1,
        explanation: '$-0,01$ là số âm.'
      },
      {
        id: 'q1-1-31',
        text: 'Nếu $x=\\dfrac{3}{7}$ thì số đối của $x$ là:',
        options: ['$\\dfrac{7}{3}$', '$-\\dfrac{3}{7}$', '$\\dfrac{3}{7}$', '$-\\dfrac{7}{3}$'],
        correctAnswerIndex: 1,
        explanation: 'Số đối của $\\dfrac{3}{7}$ là $-\\dfrac{3}{7}$.'
      },
      {
        id: 'q1-1-32',
        text: 'Nếu $x=-\\dfrac{4}{9}$ thì số đối của $x$ là:',
        options: ['$-\\dfrac{4}{9}$', '$\\dfrac{4}{9}$', '$\\dfrac{9}{4}$', '$-\\dfrac{9}{4}$'],
        correctAnswerIndex: 1,
        explanation: 'Số đối của $-\\dfrac{4}{9}$ là $\\dfrac{4}{9}$.'
      },
      {
        id: 'q1-1-33',
        text: 'Biểu diễn nào đúng của số hữu tỉ âm?',
        options: [
          'Tử và mẫu cùng dấu',
          'Tử và mẫu khác dấu',
          'Tử bằng 0',
          'Mẫu bằng 0'
        ],
        correctAnswerIndex: 1,
        explanation: 'Phân số âm khi tử và mẫu khác dấu.'
      },
      {
        id: 'q1-1-34',
        text: 'So sánh $\\dfrac{-5}{8}$ và $\\dfrac{-7}{8}$:',
        options: [
          '$\\dfrac{-5}{8}>\\dfrac{-7}{8}$',
          '$\\dfrac{-5}{8}<\\dfrac{-7}{8}$',
          '$\\dfrac{-5}{8}=\\dfrac{-7}{8}$',
          'Không so sánh được'
        ],
        correctAnswerIndex: 0,
        explanation: 'Cùng mẫu âm, số nào có tử lớn hơn thì số đó lớn hơn: $-5>-7$.'
      }
    ]
  },
  {
    id: 'c1-t2',
    title: 'Cộng, trừ, nhân, chia số hữu tỉ',
    description: 'Thực hiện các phép tính cơ bản với số hữu tỉ, quy tắc dấu, thứ tự thực hiện phép tính.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q1-2-1',
        text: 'Kết quả của phép tính $\\dfrac{1}{4}+\\dfrac{-3}{4}$ là:',
        options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$-\\dfrac{1}{4}$', '$-2$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{1}{4}+\\dfrac{-3}{4}=\\dfrac{-2}{4}=-\\dfrac{1}{2}$.'
      },
      {
        id: 'q1-2-2',
        text: 'Kết quả của phép tính $\\dfrac{-2}{5}\\times\\dfrac{5}{4}$ là:',
        options: ['$-\\dfrac{1}{2}$', '$\\dfrac{1}{2}$', '$-\\dfrac{2}{4}$', '$-\\dfrac{5}{8}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{-2}{5}\\times\\dfrac{5}{4}=\\dfrac{-10}{20}=-\\dfrac{1}{2}$.'
      },
      {
        id: 'q1-2-3',
        text: 'Số nghịch đảo của $-1,5$ là:',
        options: ['$1,5$', '$\\dfrac{3}{2}$', '$-\\dfrac{2}{3}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 2,
        explanation: '$-1,5=-\\dfrac{3}{2}$ nên nghịch đảo là $-\\dfrac{2}{3}$.'
      },
      {
        id: 'q1-2-4',
        text: 'Kết quả của phép chia $\\dfrac{1}{2}:\\dfrac{-3}{4}$ là:',
        options: ['$-\\dfrac{3}{8}$', '$-\\dfrac{2}{3}$', '$\\dfrac{2}{3}$', '$-\\dfrac{3}{2}$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{1}{2}:\\dfrac{-3}{4}=\\dfrac{1}{2}\\times\\dfrac{-4}{3}=-\\dfrac{2}{3}$.'
      },
      {
        id: 'q1-2-5',
        text: 'Tính: $\\dfrac{2}{3}+\\dfrac{1}{6}$',
        options: ['$\\dfrac{3}{9}$', '$\\dfrac{5}{6}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{9}$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{2}{3}=\\dfrac{4}{6}$ nên tổng là $\\dfrac{5}{6}$.'
      },
      {
        id: 'q1-2-6',
        text: 'Tính: $\\dfrac{5}{8}-\\dfrac{1}{4}$',
        options: ['$\\dfrac{1}{8}$', '$\\dfrac{3}{8}$', '$\\dfrac{4}{8}$', '$\\dfrac{1}{2}$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{1}{4}=\\dfrac{2}{8}$ nên $\\dfrac{5}{8}-\\dfrac{2}{8}=\\dfrac{3}{8}$.'
      },
      {
        id: 'q1-2-7',
        text: 'Tính: $-\\dfrac{3}{7}+\\dfrac{5}{7}$',
        options: ['$\\dfrac{2}{7}$', '$-\\dfrac{2}{7}$', '$\\dfrac{8}{7}$', '$-\\dfrac{8}{7}$'],
        correctAnswerIndex: 0,
        explanation: 'Cùng mẫu: $-3+5=2$, được $\\dfrac{2}{7}$.'
      },
      {
        id: 'q1-2-8',
        text: 'Tính: $-\\dfrac{4}{9}-\\dfrac{2}{9}$',
        options: ['$-\\dfrac{6}{9}$', '$\\dfrac{2}{9}$', '$-\\dfrac{2}{9}$', '$\\dfrac{6}{9}$'],
        correctAnswerIndex: 0,
        explanation: '$-\\dfrac{4}{9}-\\dfrac{2}{9}=-\\dfrac{6}{9}=-\\dfrac{2}{3}$.'
      },
      {
        id: 'q1-2-9',
        text: 'Tính: $\\dfrac{3}{5}\\times\\dfrac{10}{9}$',
        options: ['$\\dfrac{2}{3}$', '$\\dfrac{5}{3}$', '$\\dfrac{30}{45}$', '$\\dfrac{13}{14}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{3}{5}\\times\\dfrac{10}{9}=\\dfrac{30}{45}=\\dfrac{2}{3}$.'
      },
      {
        id: 'q1-2-10',
        text: 'Tính: $-\\dfrac{2}{3}\\times\\dfrac{9}{4}$',
        options: ['$-\\dfrac{3}{2}$', '$\\dfrac{3}{2}$', '$-\\dfrac{8}{27}$', '$\\dfrac{8}{27}$'],
        correctAnswerIndex: 0,
        explanation: '$-\\dfrac{2}{3}\\times\\dfrac{9}{4}=-\\dfrac{18}{12}=-\\dfrac{3}{2}$.'
      },
      {
        id: 'q1-2-11',
        text: 'Tính: $\\dfrac{7}{12}:\\dfrac{7}{6}$',
        options: ['$\\dfrac{1}{2}$', '$2$', '$\\dfrac{14}{18}$', '$\\dfrac{7}{18}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{7}{12}:\\dfrac{7}{6}=\\dfrac{7}{12}\\times\\dfrac{6}{7}=\\dfrac{1}{2}$.'
      },
      {
        id: 'q1-2-12',
        text: 'Tính: $-\\dfrac{5}{8}:\\dfrac{10}{3}$',
        options: ['$-\\dfrac{3}{16}$', '$\\dfrac{3}{16}$', '$-\\dfrac{50}{24}$', '$\\dfrac{15}{4}$'],
        correctAnswerIndex: 0,
        explanation: '$-\\dfrac{5}{8}:\\dfrac{10}{3}=-\\dfrac{5}{8}\\times\\dfrac{3}{10}=-\\dfrac{15}{80}=-\\dfrac{3}{16}$.'
      },
      {
        id: 'q1-2-13',
        text: 'Kết quả của $0,2+0,35$ là:',
        options: ['$0,55$', '$0,15$', '$0,45$', '$0,65$'],
        correctAnswerIndex: 0,
        explanation: '$0,2+0,35=0,55$.'
      },
      {
        id: 'q1-2-14',
        text: 'Kết quả của $1,5-2,25$ là:',
        options: ['$0,75$', '$-0,75$', '$-1,25$', '$1,25$'],
        correctAnswerIndex: 1,
        explanation: '$1,5-2,25=-0,75$.'
      },
      {
        id: 'q1-2-15',
        text: 'Kết quả của $-0,4\\times2,5$ là:',
        options: ['$-1$', '$1$', '$-0,1$', '$0,1$'],
        correctAnswerIndex: 0,
        explanation: '$-0,4\\times2,5=-1$.'
      },
      {
        id: 'q1-2-16',
        text: 'Kết quả của $-1,2:0,3$ là:',
        options: ['$4$', '$-4$', '$-0,4$', '$0,4$'],
        correctAnswerIndex: 1,
        explanation: '$-1,2:0,3=-4$.'
      },
      {
        id: 'q1-2-17',
        text: 'Tính: $\\left(\\dfrac{1}{2}+\\dfrac{1}{3}\\right)-\\dfrac{1}{6}$',
        options: ['$\\dfrac{2}{3}$', '$\\dfrac{5}{6}$', '$\\dfrac{1}{6}$', '$1$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{1}{2}+\\dfrac{1}{3}=\\dfrac{5}{6}$, rồi $\\dfrac{5}{6}-\\dfrac{1}{6}=\\dfrac{4}{6}=\\dfrac{2}{3}$.'
      },
      {
        id: 'q1-2-18',
        text: 'Tính: $\\dfrac{3}{4}-\\left(\\dfrac{1}{2}-\\dfrac{1}{8}\\right)$',
        options: ['$\\dfrac{3}{8}$', '$\\dfrac{1}{8}$', '$\\dfrac{5}{8}$', '$\\dfrac{7}{8}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{1}{2}-\\dfrac{1}{8}=\\dfrac{3}{8}$, nên $\\dfrac{3}{4}-\\dfrac{3}{8}=\\dfrac{3}{8}$.'
      },
      {
        id: 'q1-2-19',
        text: 'Tính: $\\dfrac{2}{5}\\times\\left(-\\dfrac{15}{4}\\right)$',
        options: ['$-\\dfrac{3}{2}$', '$\\dfrac{3}{2}$', '$-\\dfrac{8}{19}$', '$-\\dfrac{30}{20}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{2}{5}\\times\\left(-\\dfrac{15}{4}\\right)=-\\dfrac{30}{20}=-\\dfrac{3}{2}$.'
      },
      {
        id: 'q1-2-20',
        text: 'Tính: $\\left(-\\dfrac{3}{7}\\right):\\left(\\dfrac{9}{14}\\right)$',
        options: ['$-\\dfrac{2}{3}$', '$\\dfrac{2}{3}$', '$-\\dfrac{3}{2}$', '$\\dfrac{3}{2}$'],
        correctAnswerIndex: 0,
        explanation: '$-\\dfrac{3}{7}:\\dfrac{9}{14}=-\\dfrac{3}{7}\\times\\dfrac{14}{9}=-\\dfrac{2}{3}$.'
      },
      {
        id: 'q1-2-21',
        text: 'Chọn kết quả đúng của $-5+\\dfrac{7}{2}$:',
        options: ['$-\\dfrac{3}{2}$', '$\\dfrac{3}{2}$', '$-\\dfrac{17}{2}$', '$\\dfrac{17}{2}$'],
        correctAnswerIndex: 0,
        explanation: '$-5=-\\dfrac{10}{2}$ nên tổng là $-\\dfrac{3}{2}$.'
      },
      {
        id: 'q1-2-22',
        text: 'Chọn kết quả đúng của $\\dfrac{11}{6}-\\dfrac{2}{3}$:',
        options: ['$\\dfrac{7}{6}$', '$\\dfrac{9}{6}$', '$\\dfrac{1}{2}$', '$\\dfrac{13}{18}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{2}{3}=\\dfrac{4}{6}$, nên hiệu là $\\dfrac{7}{6}$.'
      },
      {
        id: 'q1-2-23',
        text: 'Kết quả của $\\dfrac{-4}{5}\\times\\dfrac{-15}{8}$ là:',
        options: ['$\\dfrac{3}{2}$', '$-\\dfrac{3}{2}$', '$\\dfrac{60}{40}$', '$\\dfrac{19}{13}$'],
        correctAnswerIndex: 0,
        explanation: 'Âm nhân âm bằng dương: $\\dfrac{60}{40}=\\dfrac{3}{2}$.'
      },
      {
        id: 'q1-2-24',
        text: 'Kết quả của $\\dfrac{5}{6}:\\left(-\\dfrac{10}{9}\\right)$ là:',
        options: ['$-\\dfrac{3}{4}$', '$\\dfrac{3}{4}$', '$-\\dfrac{4}{3}$', '$\\dfrac{4}{3}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{5}{6}\\times\\dfrac{9}{-10}=-\\dfrac{45}{60}=-\\dfrac{3}{4}$.'
      },
      {
        id: 'q1-2-25',
        text: 'Giá trị của $\\dfrac{1}{2}+\\dfrac{1}{4}+\\dfrac{1}{8}$ là:',
        options: ['$\\dfrac{7}{8}$', '$\\dfrac{3}{4}$', '$1$', '$\\dfrac{5}{8}$'],
        correctAnswerIndex: 0,
        explanation: 'Quy đồng mẫu 8: $\\dfrac{4}{8}+\\dfrac{2}{8}+\\dfrac{1}{8}=\\dfrac{7}{8}$.'
      },
      {
        id: 'q1-2-26',
        text: 'Giá trị của $1-\\dfrac{3}{5}$ là:',
        options: ['$\\dfrac{2}{5}$', '$\\dfrac{3}{5}$', '$\\dfrac{4}{5}$', '$-\\dfrac{2}{5}$'],
        correctAnswerIndex: 0,
        explanation: '$1=\\dfrac{5}{5}$ nên hiệu là $\\dfrac{2}{5}$.'
      },
      {
        id: 'q1-2-27',
        text: 'Giá trị của $-\\dfrac{2}{9}+\\dfrac{5}{9}-\\dfrac{1}{9}$ là:',
        options: ['$\\dfrac{2}{9}$', '$-\\dfrac{2}{9}$', '$\\dfrac{4}{9}$', '$\\dfrac{1}{9}$'],
        correctAnswerIndex: 0,
        explanation: '$-2+5-1=2$, nên kết quả là $\\dfrac{2}{9}$.'
      },
      {
        id: 'q1-2-28',
        text: 'Kết quả của $\\left(-\\dfrac{3}{4}\\right)+\\left(-\\dfrac{1}{8}\\right)$ là:',
        options: ['$-\\dfrac{7}{8}$', '$\\dfrac{7}{8}$', '$-\\dfrac{1}{2}$', '$\\dfrac{1}{8}$'],
        correctAnswerIndex: 0,
        explanation: '$-\\dfrac{3}{4}=-\\dfrac{6}{8}$, cộng với $-\\dfrac{1}{8}$ được $-\\dfrac{7}{8}$.'
      },
      {
        id: 'q1-2-29',
        text: 'Kết quả của $\\left(-\\dfrac{5}{6}\\right)-\\left(-\\dfrac{1}{3}\\right)$ là:',
        options: ['$-\\dfrac{1}{2}$', '$\\dfrac{1}{2}$', '$-\\dfrac{7}{6}$', '$\\dfrac{7}{6}$'],
        correctAnswerIndex: 0,
        explanation: '$-\\dfrac{5}{6}+\\dfrac{1}{3}=-\\dfrac{5}{6}+\\dfrac{2}{6}=-\\dfrac{3}{6}=-\\dfrac{1}{2}$.'
      },
      {
        id: 'q1-2-30',
        text: 'Kết quả của $\\left(-\\dfrac{2}{3}\\right)\\times\\left(-\\dfrac{3}{5}\\right)$ là:',
        options: ['$\\dfrac{2}{5}$', '$-\\dfrac{2}{5}$', '$\\dfrac{6}{15}$', '$-\\dfrac{6}{15}$'],
        correctAnswerIndex: 0,
        explanation: 'Âm nhân âm bằng dương: $\\dfrac{6}{15}=\\dfrac{2}{5}$.'
      },
      {
        id: 'q1-2-31',
        text: 'Kết quả của $\\left(-\\dfrac{7}{9}\\right):\\left(-\\dfrac{14}{27}\\right)$ là:',
        options: ['$\\dfrac{3}{2}$', '$-\\dfrac{3}{2}$', '$\\dfrac{1}{2}$', '$2$'],
        correctAnswerIndex: 0,
        explanation: '$-\\dfrac{7}{9}\\times\\left(-\\dfrac{27}{14}\\right)=\\dfrac{21}{14}=\\dfrac{3}{2}$.'
      },
      {
        id: 'q1-2-32',
        text: 'Tính nhanh: $\\dfrac{1}{3}+\\dfrac{2}{3}-1$',
        options: ['$0$', '$1$', '$-1$', '$\\dfrac{1}{3}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{1}{3}+\\dfrac{2}{3}=1$, nên kết quả bằng 0.'
      },
      {
        id: 'q1-2-33',
        text: 'Giá trị của $\\dfrac{3}{4}\\times0$ là:',
        options: ['$\\dfrac{3}{4}$', '$0$', '$1$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Mọi số nhân với 0 đều bằng 0.'
      }
    ]
  },
  {
    id: 'c1-t3',
    title: 'Lũy thừa của một số hữu tỉ',
    description: 'Quy tắc lũy thừa với số mũ tự nhiên: nhân, chia hai lũy thừa cùng cơ số, lũy thừa của lũy thừa.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q1-3-1',
        text: 'Khi nhân hai lũy thừa cùng cơ số, ta:',
        options: [
          'Giữ nguyên cơ số, cộng các số mũ',
          'Giữ nguyên cơ số, nhân các số mũ',
          'Cộng cơ số, giữ nguyên số mũ',
          'Đổi dấu số mũ'
        ],
        correctAnswerIndex: 0,
        explanation: '$x^m\\cdot x^n=x^{m+n}$.'
      },
      {
        id: 'q1-3-2',
        text: 'Tính $\\left(-\\dfrac{1}{2}\\right)^3$',
        options: ['$-\\dfrac{1}{8}$', '$\\dfrac{1}{8}$', '$-\\dfrac{1}{6}$', '$\\dfrac{1}{6}$'],
        correctAnswerIndex: 0,
        explanation: 'Lũy thừa bậc lẻ của số âm là số âm: $\\left(-\\dfrac{1}{2}\\right)^3=-\\dfrac{1}{8}$.'
      },
      {
        id: 'q1-3-3',
        text: 'Kết quả của $\\left(x^2\\right)^3$ là:',
        options: ['$x^5$', '$x^6$', '$x^8$', '$x^9$'],
        correctAnswerIndex: 1,
        explanation: 'Lũy thừa của lũy thừa: $(x^m)^n=x^{mn}$.'
      },
      {
        id: 'q1-3-4',
        text: 'Tính $\\left(\\dfrac{2}{3}\\right)^2$',
        options: ['$\\dfrac{4}{9}$', '$\\dfrac{2}{9}$', '$\\dfrac{4}{6}$', '$\\dfrac{9}{4}$'],
        correctAnswerIndex: 0,
        explanation: '$\\left(\\dfrac{2}{3}\\right)^2=\\dfrac{2^2}{3^2}=\\dfrac{4}{9}$.'
      },
      {
        id: 'q1-3-5',
        text: 'Tính $\\left(-\\dfrac{3}{5}\\right)^2$',
        options: ['$-\\dfrac{9}{25}$', '$\\dfrac{9}{25}$', '$\\dfrac{6}{10}$', '$-\\dfrac{6}{10}$'],
        correctAnswerIndex: 1,
        explanation: 'Lũy thừa bậc chẵn của số âm là số dương.'
      },
      {
        id: 'q1-3-6',
        text: 'Tính $\\left(-\\dfrac{2}{3}\\right)^4$',
        options: ['$-\\dfrac{16}{81}$', '$\\dfrac{16}{81}$', '$\\dfrac{8}{27}$', '$-\\dfrac{8}{27}$'],
        correctAnswerIndex: 1,
        explanation: 'Bậc 4 là chẵn nên kết quả dương: $\\dfrac{16}{81}$.'
      },
      {
        id: 'q1-3-7',
        text: 'Tính $\\left(\\dfrac{-1}{4}\\right)^1$',
        options: ['$\\dfrac{1}{4}$', '$-\\dfrac{1}{4}$', '$1$', '$-1$'],
        correctAnswerIndex: 1,
        explanation: 'Mọi số mũ 1 bằng chính nó.'
      },
      {
        id: 'q1-3-8',
        text: 'Giá trị của $2^3$ là:',
        options: ['$6$', '$8$', '$9$', '$16$'],
        correctAnswerIndex: 1,
        explanation: '$2^3=2\\cdot2\\cdot2=8$.'
      },
      {
        id: 'q1-3-9',
        text: 'Giá trị của $(-2)^3$ là:',
        options: ['$8$', '$-8$', '$6$', '$-6$'],
        correctAnswerIndex: 1,
        explanation: '$(-2)^3=-8$.'
      },
      {
        id: 'q1-3-10',
        text: 'Giá trị của $(-2)^4$ là:',
        options: ['$-16$', '$16$', '$8$', '$-8$'],
        correctAnswerIndex: 1,
        explanation: '$(-2)^4=16$.'
      },
      {
        id: 'q1-3-11',
        text: 'Điền vào chỗ trống: $a^m\\cdot a^n=$',
        options: ['$a^{m+n}$', '$a^{m-n}$', '$a^{mn}$', '$2a^{m+n}$'],
        correctAnswerIndex: 0,
        explanation: 'Quy tắc nhân hai lũy thừa cùng cơ số.'
      },
      {
        id: 'q1-3-12',
        text: 'Điền vào chỗ trống: $a^m:a^n=$ (với $a\\ne0$, $m\\ge n$)',
        options: ['$a^{m+n}$', '$a^{m-n}$', '$a^{mn}$', '$a^{n-m}$'],
        correctAnswerIndex: 1,
        explanation: 'Khi chia hai lũy thừa cùng cơ số, ta trừ các số mũ.'
      },
      {
        id: 'q1-3-13',
        text: 'Điền vào chỗ trống: $(a^m)^n=$',
        options: ['$a^{m+n}$', '$a^{m-n}$', '$a^{mn}$', '$a^m$'],
        correctAnswerIndex: 2,
        explanation: 'Lũy thừa của lũy thừa: $(a^m)^n=a^{mn}$.'
      },
      {
        id: 'q1-3-14',
        text: 'Tính $3^2\\cdot3^4$',
        options: ['$3^6$', '$3^8$', '$9^6$', '$3^2$'],
        correctAnswerIndex: 0,
        explanation: 'Cùng cơ số 3 nên cộng số mũ: $2+4=6$.'
      },
      {
        id: 'q1-3-15',
        text: 'Tính $5^7:5^3$',
        options: ['$5^4$', '$5^{10}$', '$5^{21}$', '$5^3$'],
        correctAnswerIndex: 0,
        explanation: 'Chia hai lũy thừa cùng cơ số: $5^{7-3}=5^4$.'
      },
      {
        id: 'q1-3-16',
        text: 'Tính $(2^3)^2$',
        options: ['$2^5$', '$2^6$', '$4^5$', '$8^2$'],
        correctAnswerIndex: 1,
        explanation: '$(2^3)^2=2^{3\\cdot2}=2^6$.'
      },
      {
        id: 'q1-3-17',
        text: 'Tính $\\left(\\dfrac{3}{2}\\right)^3$',
        options: ['$\\dfrac{9}{8}$', '$\\dfrac{27}{8}$', '$\\dfrac{6}{8}$', '$\\dfrac{8}{27}$'],
        correctAnswerIndex: 1,
        explanation: '$\\left(\\dfrac{3}{2}\\right)^3=\\dfrac{27}{8}$.'
      },
      {
        id: 'q1-3-18',
        text: 'Tính $\\left(-\\dfrac{2}{5}\\right)^3$',
        options: ['$\\dfrac{8}{125}$', '$-\\dfrac{8}{125}$', '$-\\dfrac{6}{15}$', '$\\dfrac{6}{15}$'],
        correctAnswerIndex: 1,
        explanation: 'Bậc lẻ nên kết quả âm.'
      },
      {
        id: 'q1-3-19',
        text: 'Tính $\\left(-\\dfrac{2}{5}\\right)^2$',
        options: ['$-\\dfrac{4}{25}$', '$\\dfrac{4}{25}$', '$\\dfrac{2}{25}$', '$-\\dfrac{2}{25}$'],
        correctAnswerIndex: 1,
        explanation: 'Bậc chẵn nên kết quả dương.'
      },
      {
        id: 'q1-3-20',
        text: 'Biểu thức nào bằng $x^7$?',
        options: ['$x^3\\cdot x^4$', '$x^8:x$', '$\\left(x^7\\right)^1$', '$Cả ba đáp án trên$'],
        correctAnswerIndex: 3,
        explanation: '$x^3\\cdot x^4=x^7$, $x^8:x=x^7$, và $(x^7)^1=x^7$.'
      },
      {
        id: 'q1-3-21',
        text: 'Tính $10^2$',
        options: ['$20$', '$100$', '$1000$', '$12$'],
        correctAnswerIndex: 1,
        explanation: '$10^2=100$.'
      },
      {
        id: 'q1-3-22',
        text: 'Tính $0,1^2$',
        options: ['$0,01$', '$0,02$', '$0,1$', '$1$'],
        correctAnswerIndex: 0,
        explanation: '$0,1^2=0,01$.'
      },
      {
        id: 'q1-3-23',
        text: 'Tính $(-0,1)^3$',
        options: ['$0,001$', '$-0,001$', '$-0,01$', '$0,01$'],
        correctAnswerIndex: 1,
        explanation: '$(-0,1)^3=-0,001$.'
      },
      {
        id: 'q1-3-24',
        text: 'Tính $\\left(\\dfrac{1}{10}\\right)^3$',
        options: ['$\\dfrac{1}{30}$', '$\\dfrac{1}{100}$', '$\\dfrac{1}{1000}$', '$\\dfrac{3}{10}$'],
        correctAnswerIndex: 2,
        explanation: '$\\left(\\dfrac{1}{10}\\right)^3=\\dfrac{1}{1000}$.'
      },
      {
        id: 'q1-3-25',
        text: 'Khẳng định nào đúng?',
        options: [
          '$(-3)^2=-9$',
          '$(-3)^2=9$',
          '$(-3)^3=9$',
          '$(-3)^4=-81$'
        ],
        correctAnswerIndex: 1,
        explanation: '$(-3)^2=9$.'
      },
      {
        id: 'q1-3-26',
        text: 'Khẳng định nào đúng?',
        options: [
          '$(-2)^5=32$',
          '$(-2)^5=-32$',
          '$(-2)^5=-10$',
          '$(-2)^5=10$'
        ],
        correctAnswerIndex: 1,
        explanation: 'Số âm mũ lẻ cho kết quả âm.'
      },
      {
        id: 'q1-3-27',
        text: 'Tính $2^4:2^2$',
        options: ['$2^2$', '$2^6$', '$4^2$', '$2$'],
        correctAnswerIndex: 0,
        explanation: '$2^{4-2}=2^2$.'
      },
      {
        id: 'q1-3-28',
        text: 'Tính $7^1\\cdot7^2$',
        options: ['$7^2$', '$7^3$', '$14^3$', '$7$'],
        correctAnswerIndex: 1,
        explanation: 'Cộng số mũ: $1+2=3$.'
      },
      {
        id: 'q1-3-29',
        text: 'Tính $(x^3)^4$',
        options: ['$x^7$', '$x^{12}$', '$x$', '$x^{64}$'],
        correctAnswerIndex: 1,
        explanation: 'Nhân số mũ: $3\\cdot4=12$.'
      },
      {
        id: 'q1-3-30',
        text: 'Tính $\\left(\\dfrac{1}{2}\\right)^4$',
        options: ['$\\dfrac{1}{8}$', '$\\dfrac{1}{16}$', '$\\dfrac{2}{16}$', '$\\dfrac{4}{16}$'],
        correctAnswerIndex: 1,
        explanation: '$\\left(\\dfrac{1}{2}\\right)^4=\\dfrac{1}{16}$.'
      },
      {
        id: 'q1-3-31',
        text: 'Tính $\\left(-\\dfrac{1}{3}\\right)^4$',
        options: ['$-\\dfrac{1}{81}$', '$\\dfrac{1}{81}$', '$\\dfrac{1}{12}$', '$-\\dfrac{1}{12}$'],
        correctAnswerIndex: 1,
        explanation: 'Bậc chẵn nên kết quả dương: $\\dfrac{1}{81}$.'
      },
      {
        id: 'q1-3-32',
        text: 'Tính $\\left(-\\dfrac{1}{3}\\right)^5$',
        options: ['$\\dfrac{1}{243}$', '$-\\dfrac{1}{243}$', '$-\\dfrac{1}{81}$', '$\\dfrac{1}{81}$'],
        correctAnswerIndex: 1,
        explanation: 'Bậc lẻ nên kết quả âm: $-\\dfrac{1}{243}$.'
      },
      {
        id: 'q1-3-33',
        text: 'Tính giá trị của $1^8$',
        options: ['$0$', '$1$', '$8$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: '$1$ lũy thừa với số mũ tự nhiên bất kỳ vẫn bằng $1$.'
      }
    ]
  }
];