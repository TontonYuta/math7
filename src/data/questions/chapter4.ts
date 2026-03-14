import { Topic } from '../../types';

export const chapter4Topics: Topic[] = [
  {
    id: 'c4-t1',
    title: 'Tổng các góc trong một tam giác',
    description: 'Nhận biết các loại tam giác và vận dụng định lý tổng ba góc trong một tam giác.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q4-1-1',
        text: 'Tổng ba góc trong một tam giác bằng:',
        options: ['$90^\\circ$', '$180^\\circ$', '$270^\\circ$', '$360^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Tổng ba góc trong một tam giác luôn bằng $180^\\circ$.'
      },
      {
        id: 'q4-1-2',
        text: 'Trong tam giác $ABC$, nếu $\\widehat{A}=50^\\circ$, $\\widehat{B}=60^\\circ$ thì $\\widehat{C}$ bằng:',
        options: ['$60^\\circ$', '$70^\\circ$', '$80^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$\\widehat{C}=180^\\circ-50^\\circ-60^\\circ=70^\\circ$.'
      },
      {
        id: 'q4-1-3',
        text: 'Trong tam giác $MNP$, nếu $\\widehat{M}=35^\\circ$, $\\widehat{N}=75^\\circ$ thì $\\widehat{P}$ bằng:',
        options: ['$60^\\circ$', '$70^\\circ$', '$80^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$\\widehat{P}=180^\\circ-35^\\circ-75^\\circ=70^\\circ$.'
      },
      {
        id: 'q4-1-4',
        text: 'Tam giác có một góc bằng $90^\\circ$ gọi là:',
        options: ['Tam giác nhọn', 'Tam giác tù', 'Tam giác vuông', 'Tam giác cân'],
        correctAnswerIndex: 2,
        explanation: 'Tam giác có một góc vuông là tam giác vuông.'
      },
      {
        id: 'q4-1-5',
        text: 'Tam giác có một góc lớn hơn $90^\\circ$ gọi là:',
        options: ['Tam giác nhọn', 'Tam giác tù', 'Tam giác đều', 'Tam giác vuông'],
        correctAnswerIndex: 1,
        explanation: 'Tam giác có một góc tù là tam giác tù.'
      },
      {
        id: 'q4-1-6',
        text: 'Tam giác có ba góc đều nhỏ hơn $90^\\circ$ gọi là:',
        options: ['Tam giác vuông', 'Tam giác tù', 'Tam giác nhọn', 'Tam giác cân'],
        correctAnswerIndex: 2,
        explanation: 'Tam giác nhọn có cả ba góc đều nhọn.'
      },
      {
        id: 'q4-1-7',
        text: 'Trong tam giác, số góc tù có thể có là:',
        options: ['0 hoặc 1', '2', '3', 'Không giới hạn'],
        correctAnswerIndex: 0,
        explanation: 'Một tam giác chỉ có thể có nhiều nhất một góc tù.'
      },
      {
        id: 'q4-1-8',
        text: 'Trong tam giác, số góc vuông có thể có là:',
        options: ['0 hoặc 1', '2', '3', 'Không giới hạn'],
        correctAnswerIndex: 0,
        explanation: 'Một tam giác chỉ có thể có nhiều nhất một góc vuông.'
      },
      {
        id: 'q4-1-9',
        text: 'Trong tam giác $ABC$, nếu $\\widehat{A}=90^\\circ$ và $\\widehat{B}=30^\\circ$ thì $\\widehat{C}$ bằng:',
        options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$\\widehat{C}=180^\\circ-90^\\circ-30^\\circ=60^\\circ$.'
      },
      {
        id: 'q4-1-10',
        text: 'Trong tam giác $ABC$, nếu $\\widehat{A}=100^\\circ$, $\\widehat{B}=30^\\circ$ thì $\\widehat{C}$ bằng:',
        options: ['$40^\\circ$', '$50^\\circ$', '$60^\\circ$', '$70^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$\\widehat{C}=180^\\circ-100^\\circ-30^\\circ=50^\\circ$.'
      },
      {
        id: 'q4-1-11',
        text: 'Một tam giác có thể có hai góc vuông không?',
        options: ['Có', 'Không', 'Chỉ khi là tam giác cân', 'Chỉ khi là tam giác đều'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc vuông đã có tổng $180^\\circ$, nên không còn góc thứ ba.'
      },
      {
        id: 'q4-1-12',
        text: 'Một tam giác có thể có hai góc tù không?',
        options: ['Có', 'Không', 'Chỉ khi tam giác cân', 'Chỉ khi tam giác vuông'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc tù có tổng lớn hơn $180^\\circ$, điều này không thể xảy ra.'
      },
      {
        id: 'q4-1-13',
        text: 'Trong tam giác, nếu một góc là $20^\\circ$ và một góc là $70^\\circ$ thì góc còn lại là:',
        options: ['$80^\\circ$', '$90^\\circ$', '$100^\\circ$', '$110^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Góc còn lại bằng $180^\\circ-20^\\circ-70^\\circ=90^\\circ$.'
      },
      {
        id: 'q4-1-14',
        text: 'Trong tam giác, nếu một góc là $45^\\circ$ và một góc là $45^\\circ$ thì góc còn lại là:',
        options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$100^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$180^\\circ-45^\\circ-45^\\circ=90^\\circ$.'
      },
      {
        id: 'q4-1-15',
        text: 'Tam giác có ba góc bằng nhau là:',
        options: ['Tam giác cân', 'Tam giác vuông', 'Tam giác đều', 'Tam giác tù'],
        correctAnswerIndex: 2,
        explanation: 'Tam giác đều có ba góc bằng nhau, mỗi góc $60^\\circ$.'
      },
      {
        id: 'q4-1-16',
        text: 'Mỗi góc của tam giác đều bằng:',
        options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Ba góc bằng nhau và tổng là $180^\\circ$ nên mỗi góc bằng $60^\\circ$.'
      },
      {
        id: 'q4-1-17',
        text: 'Nếu một tam giác có ba góc là $60^\\circ, 60^\\circ, 60^\\circ$ thì đó là:',
        options: ['Tam giác vuông', 'Tam giác đều', 'Tam giác tù', 'Tam giác nhọn bất kỳ'],
        correctAnswerIndex: 1,
        explanation: 'Tam giác có ba góc bằng nhau là tam giác đều.'
      },
      {
        id: 'q4-1-18',
        text: 'Nếu tam giác có một góc là $120^\\circ$ thì tam giác đó là:',
        options: ['Tam giác nhọn', 'Tam giác vuông', 'Tam giác tù', 'Tam giác đều'],
        correctAnswerIndex: 2,
        explanation: 'Vì có một góc lớn hơn $90^\\circ$ nên là tam giác tù.'
      },
      {
        id: 'q4-1-19',
        text: 'Nếu tam giác có một góc là $90^\\circ$ và một góc là $60^\\circ$ thì góc còn lại là:',
        options: ['$20^\\circ$', '$30^\\circ$', '$40^\\circ$', '$50^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$180^\\circ-90^\\circ-60^\\circ=30^\\circ$.'
      },
      {
        id: 'q4-1-20',
        text: 'Nếu tam giác có hai góc là $80^\\circ$ và $40^\\circ$ thì góc còn lại là:',
        options: ['$40^\\circ$', '$50^\\circ$', '$60^\\circ$', '$70^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$180^\\circ-80^\\circ-40^\\circ=60^\\circ$.'
      },
      {
        id: 'q4-1-21',
        text: 'Một tam giác có thể có ba góc nhọn không?',
        options: ['Có', 'Không', 'Chỉ khi tam giác đều', 'Chỉ khi tam giác cân'],
        correctAnswerIndex: 0,
        explanation: 'Tam giác nhọn có ba góc đều nhọn.'
      },
      {
        id: 'q4-1-22',
        text: 'Nếu $\\widehat{A}=x$, $\\widehat{B}=x$, $\\widehat{C}=40^\\circ$ trong tam giác thì $x$ bằng:',
        options: ['$60^\\circ$', '$70^\\circ$', '$80^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$x+x+40^\\circ=180^\\circ\\Rightarrow2x=140^\\circ\\Rightarrow x=70^\\circ$.'
      },
      {
        id: 'q4-1-23',
        text: 'Nếu $\\widehat{A}=2x$, $\\widehat{B}=x$, $\\widehat{C}=60^\\circ$ thì $x$ bằng:',
        options: ['$30^\\circ$', '$40^\\circ$', '$50^\\circ$', '$60^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$2x+x+60^\\circ=180^\\circ\\Rightarrow3x=120^\\circ\\Rightarrow x=40^\\circ$.'
      },
      {
        id: 'q4-1-24',
        text: 'Nếu $\\widehat{A}=x$, $\\widehat{B}=x+20^\\circ$, $\\widehat{C}=50^\\circ$ thì $x$ bằng:',
        options: ['$45^\\circ$', '$50^\\circ$', '$55^\\circ$', '$60^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$x+(x+20^\\circ)+50^\\circ=180^\\circ\\Rightarrow2x=110^\\circ\\Rightarrow x=55^\\circ$.'
      },
      {
        id: 'q4-1-25',
        text: 'Tam giác có các góc $30^\\circ, 60^\\circ, 90^\\circ$ là:',
        options: ['Tam giác nhọn', 'Tam giác vuông', 'Tam giác tù', 'Tam giác đều'],
        correctAnswerIndex: 1,
        explanation: 'Có một góc vuông nên là tam giác vuông.'
      },
      {
        id: 'q4-1-26',
        text: 'Tam giác có các góc $50^\\circ, 60^\\circ, 70^\\circ$ là:',
        options: ['Tam giác nhọn', 'Tam giác vuông', 'Tam giác tù', 'Không phải tam giác'],
        correctAnswerIndex: 0,
        explanation: 'Cả ba góc đều nhỏ hơn $90^\\circ$.'
      },
      {
        id: 'q4-1-27',
        text: 'Tam giác có các góc $20^\\circ, 30^\\circ, 130^\\circ$ là:',
        options: ['Tam giác nhọn', 'Tam giác vuông', 'Tam giác tù', 'Tam giác đều'],
        correctAnswerIndex: 2,
        explanation: 'Có một góc $130^\\circ>90^\\circ$ nên là tam giác tù.'
      },
      {
        id: 'q4-1-28',
        text: 'Nếu tam giác có hai góc bằng $65^\\circ$ và $65^\\circ$ thì góc còn lại là:',
        options: ['$40^\\circ$', '$45^\\circ$', '$50^\\circ$', '$55^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$180^\\circ-65^\\circ-65^\\circ=50^\\circ$.'
      },
      {
        id: 'q4-1-29',
        text: 'Nếu tam giác có hai góc bằng $30^\\circ$ và $120^\\circ$ thì góc còn lại là:',
        options: ['$20^\\circ$', '$30^\\circ$', '$40^\\circ$', '$50^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$180^\\circ-30^\\circ-120^\\circ=30^\\circ$.'
      },
      {
        id: 'q4-1-30',
        text: 'Nếu tam giác có góc lớn nhất bằng $90^\\circ$ thì tam giác đó là:',
        options: ['Tam giác nhọn', 'Tam giác vuông', 'Tam giác tù', 'Tam giác đều'],
        correctAnswerIndex: 1,
        explanation: 'Tam giác có một góc vuông là tam giác vuông.'
      },
      {
        id: 'q4-1-31',
        text: 'Nếu tam giác có góc lớn nhất nhỏ hơn $90^\\circ$ thì đó là:',
        options: ['Tam giác vuông', 'Tam giác tù', 'Tam giác nhọn', 'Tam giác cân'],
        correctAnswerIndex: 2,
        explanation: 'Khi góc lớn nhất còn nhỏ hơn $90^\\circ$ thì cả ba góc đều nhọn.'
      },
      {
        id: 'q4-1-32',
        text: 'Nếu trong tam giác có một góc bằng $89^\\circ$, một góc bằng $1^\\circ$ thì góc còn lại bằng:',
        options: ['$89^\\circ$', '$90^\\circ$', '$91^\\circ$', '$100^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$180^\\circ-89^\\circ-1^\\circ=90^\\circ$.'
      },
      {
        id: 'q4-1-33',
        text: 'Trong tam giác, tổng hai góc bất kỳ luôn:',
        options: [
          'Lớn hơn góc còn lại',
          'Nhỏ hơn góc còn lại',
          'Bằng góc còn lại',
          'Bằng $90^\\circ$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vì tổng ba góc là $180^\\circ$ và mỗi góc nhỏ hơn $180^\\circ$, nên tổng hai góc luôn lớn hơn góc còn lại.'
      }
    ]
  },
  {
    id: 'c4-t2',
    title: 'Tam giác cân, tam giác đều',
    description: 'Nhận biết tam giác cân, tam giác đều và các tính chất về góc, cạnh trong các tam giác đặc biệt này.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q4-2-1',
        text: 'Tam giác cân là tam giác có:',
        options: [
          'Ba cạnh bằng nhau',
          'Hai cạnh bằng nhau',
          'Một góc vuông',
          'Ba góc bằng nhau'
        ],
        correctAnswerIndex: 1,
        explanation: 'Tam giác cân là tam giác có hai cạnh bằng nhau.'
      },
      {
        id: 'q4-2-2',
        text: 'Trong tam giác cân, hai góc ở đáy:',
        options: ['Bằng nhau', 'Phụ nhau', 'Bù nhau', 'Vuông góc'],
        correctAnswerIndex: 0,
        explanation: 'Tính chất của tam giác cân: hai góc ở đáy bằng nhau.'
      },
      {
        id: 'q4-2-3',
        text: 'Nếu tam giác $ABC$ cân tại $A$ thì:',
        options: ['$AB=AC$', '$AB=BC$', '$AC=BC$', '$\\widehat{A}=\\widehat{B}$'],
        correctAnswerIndex: 0,
        explanation: 'Tam giác cân tại $A$ thì hai cạnh kề đỉnh $A$ bằng nhau.'
      },
      {
        id: 'q4-2-4',
        text: 'Nếu tam giác $ABC$ cân tại $A$ thì hai góc ở đáy là:',
        options: ['$\\widehat{A}$ và $\\widehat{B}$', '$\\widehat{B}$ và $\\widehat{C}$', '$\\widehat{A}$ và $\\widehat{C}$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Tam giác cân tại $A$ thì đáy là $BC$, hai góc ở đáy là $\\widehat{B}$ và $\\widehat{C}$.'
      },
      {
        id: 'q4-2-5',
        text: 'Nếu tam giác cân có một góc ở đáy bằng $50^\\circ$ thì góc ở đáy còn lại bằng:',
        options: ['$40^\\circ$', '$50^\\circ$', '$60^\\circ$', '$80^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc ở đáy của tam giác cân bằng nhau.'
      },
      {
        id: 'q4-2-6',
        text: 'Nếu tam giác cân có một góc ở đáy bằng $50^\\circ$ thì góc ở đỉnh bằng:',
        options: ['$70^\\circ$', '$75^\\circ$', '$80^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Góc ở đỉnh bằng $180^\\circ-50^\\circ-50^\\circ=80^\\circ$.'
      },
      {
        id: 'q4-2-7',
        text: 'Nếu tam giác cân có góc ở đỉnh bằng $40^\\circ$ thì mỗi góc ở đáy bằng:',
        options: ['$60^\\circ$', '$65^\\circ$', '$70^\\circ$', '$80^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Mỗi góc ở đáy bằng $(180^\\circ-40^\\circ):2=70^\\circ$.'
      },
      {
        id: 'q4-2-8',
        text: 'Tam giác đều là tam giác có:',
        options: [
          'Hai cạnh bằng nhau',
          'Ba cạnh bằng nhau',
          'Một góc vuông',
          'Hai góc bằng nhau'
        ],
        correctAnswerIndex: 1,
        explanation: 'Tam giác đều có ba cạnh bằng nhau.'
      },
      {
        id: 'q4-2-9',
        text: 'Tam giác đều có mỗi góc bằng:',
        options: ['$45^\\circ$', '$50^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Ba góc bằng nhau và tổng là $180^\\circ$ nên mỗi góc bằng $60^\\circ$.'
      },
      {
        id: 'q4-2-10',
        text: 'Tam giác đều là trường hợp đặc biệt của:',
        options: ['Tam giác tù', 'Tam giác vuông', 'Tam giác cân', 'Tam giác thường'],
        correctAnswerIndex: 2,
        explanation: 'Tam giác đều có ít nhất hai cạnh bằng nhau nên là trường hợp đặc biệt của tam giác cân.'
      },
      {
        id: 'q4-2-11',
        text: 'Nếu tam giác $ABC$ cân tại $A$ và $\\widehat{A}=100^\\circ$ thì $\\widehat{B}$ bằng:',
        options: ['$30^\\circ$', '$40^\\circ$', '$50^\\circ$', '$60^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc đáy bằng nhau: $(180^\\circ-100^\\circ):2=40^\\circ$.'
      },
      {
        id: 'q4-2-12',
        text: 'Nếu tam giác $ABC$ cân tại $A$ và $\\widehat{B}=35^\\circ$ thì $\\widehat{C}$ bằng:',
        options: ['$35^\\circ$', '$55^\\circ$', '$70^\\circ$', '$110^\\circ$'],
        correctAnswerIndex: 0,
        explanation: 'Hai góc đáy của tam giác cân bằng nhau.'
      },
      {
        id: 'q4-2-13',
        text: 'Nếu tam giác $ABC$ cân tại $A$ và $\\widehat{B}=35^\\circ$ thì $\\widehat{A}$ bằng:',
        options: ['$100^\\circ$', '$105^\\circ$', '$110^\\circ$', '$115^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$\\widehat{A}=180^\\circ-35^\\circ-35^\\circ=110^\\circ$.'
      },
      {
        id: 'q4-2-14',
        text: 'Nếu tam giác đều $ABC$ thì:',
        options: ['$AB=AC$', '$AB=BC$', '$AC=BC$', 'Cả ba ý trên'],
        correctAnswerIndex: 3,
        explanation: 'Tam giác đều có ba cạnh bằng nhau.'
      },
      {
        id: 'q4-2-15',
        text: 'Nếu tam giác đều $ABC$ thì:',
        options: [
          '$\\widehat{A}=\\widehat{B}$',
          '$\\widehat{B}=\\widehat{C}$',
          '$\\widehat{A}=\\widehat{C}$',
          'Cả ba ý trên'
        ],
        correctAnswerIndex: 3,
        explanation: 'Tam giác đều có ba góc bằng nhau.'
      },
      {
        id: 'q4-2-16',
        text: 'Tam giác cân không thể là:',
        options: ['Tam giác nhọn', 'Tam giác vuông', 'Tam giác tù', 'Hình vuông'],
        correctAnswerIndex: 3,
        explanation: 'Tam giác cân vẫn là một tam giác, không thể là hình vuông.'
      },
      {
        id: 'q4-2-17',
        text: 'Nếu một tam giác có hai góc bằng $70^\\circ$ và $70^\\circ$ thì tam giác đó là:',
        options: ['Tam giác vuông', 'Tam giác cân', 'Tam giác tù', 'Tam giác đều'],
        correctAnswerIndex: 1,
        explanation: 'Tam giác có hai góc bằng nhau là tam giác cân.'
      },
      {
        id: 'q4-2-18',
        text: 'Nếu một tam giác có hai cạnh bằng nhau thì tam giác đó là:',
        options: ['Tam giác đều', 'Tam giác cân', 'Tam giác vuông', 'Tam giác tù'],
        correctAnswerIndex: 1,
        explanation: 'Theo định nghĩa, tam giác có hai cạnh bằng nhau là tam giác cân.'
      },
      {
        id: 'q4-2-19',
        text: 'Nếu tam giác cân có góc ở đỉnh bằng $20^\\circ$ thì mỗi góc ở đáy bằng:',
        options: ['$70^\\circ$', '$75^\\circ$', '$80^\\circ$', '$85^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Mỗi góc ở đáy bằng $(180^\\circ-20^\\circ):2=80^\\circ$.'
      },
      {
        id: 'q4-2-20',
        text: 'Nếu tam giác cân có một góc ở đáy bằng $65^\\circ$ thì góc ở đỉnh bằng:',
        options: ['$40^\\circ$', '$45^\\circ$', '$50^\\circ$', '$55^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$180^\\circ-65^\\circ-65^\\circ=50^\\circ$.'
      },
      {
        id: 'q4-2-21',
        text: 'Nếu tam giác cân có góc ở đỉnh bằng $90^\\circ$ thì mỗi góc ở đáy bằng:',
        options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Mỗi góc ở đáy bằng $(180^\\circ-90^\\circ):2=45^\\circ$.'
      },
      {
        id: 'q4-2-22',
        text: 'Tam giác đều có phải là tam giác cân không?',
        options: ['Có', 'Không', 'Chỉ khi có góc vuông', 'Chỉ khi có góc tù'],
        correctAnswerIndex: 0,
        explanation: 'Tam giác đều là trường hợp đặc biệt của tam giác cân.'
      },
      {
        id: 'q4-2-23',
        text: 'Nếu tam giác cân có hai góc ở đáy bằng $40^\\circ$ thì góc ở đỉnh bằng:',
        options: ['$80^\\circ$', '$90^\\circ$', '$100^\\circ$', '$120^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$180^\\circ-40^\\circ-40^\\circ=100^\\circ$.'
      },
      {
        id: 'q4-2-24',
        text: 'Nếu tam giác đều có một góc bằng $x$ thì $x$ bằng:',
        options: ['$45^\\circ$', '$50^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Mỗi góc trong tam giác đều bằng $60^\\circ$.'
      },
      {
        id: 'q4-2-25',
        text: 'Nếu tam giác cân tại $A$ thì đáy của tam giác là:',
        options: ['$AB$', '$AC$', '$BC$', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation: 'Tam giác cân tại $A$ thì hai cạnh bằng nhau là $AB, AC$, nên đáy là $BC$.'
      },
      {
        id: 'q4-2-26',
        text: 'Nếu tam giác cân tại $B$ thì hai cạnh bằng nhau là:',
        options: ['$AB$ và $BC$', '$AB$ và $AC$', '$AC$ và $BC$', '$AB$ và đường cao'],
        correctAnswerIndex: 0,
        explanation: 'Tam giác cân tại $B$ thì hai cạnh kề đỉnh $B$ bằng nhau.'
      },
      {
        id: 'q4-2-27',
        text: 'Nếu tam giác có ba cạnh bằng nhau thì tam giác đó có ba góc:',
        options: ['Nhọn nhưng không bằng nhau', 'Đều bằng $60^\\circ$', 'Có một góc vuông', 'Có một góc tù'],
        correctAnswerIndex: 1,
        explanation: 'Tam giác đều có ba góc bằng nhau, mỗi góc $60^\\circ$.'
      },
      {
        id: 'q4-2-28',
        text: 'Nếu tam giác cân tại $A$ và $\\widehat{A}=40^\\circ$ thì tổng hai góc ở đáy bằng:',
        options: ['$120^\\circ$', '$130^\\circ$', '$140^\\circ$', '$150^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Tổng hai góc ở đáy là $180^\\circ-40^\\circ=140^\\circ$.'
      },
      {
        id: 'q4-2-29',
        text: 'Nếu tam giác cân tại $A$ có $\\widehat{B}=x$ và $\\widehat{C}=x$ và $\\widehat{A}=20^\\circ$ thì $x$ bằng:',
        options: ['$70^\\circ$', '$75^\\circ$', '$80^\\circ$', '$85^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$x+x+20^\\circ=180^\\circ\\Rightarrow2x=160^\\circ\\Rightarrow x=80^\\circ$.'
      },
      {
        id: 'q4-2-30',
        text: 'Nếu tam giác đều thì nó thuộc loại tam giác nào theo góc?',
        options: ['Tam giác vuông', 'Tam giác tù', 'Tam giác nhọn', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation: 'Tam giác đều có ba góc $60^\\circ$, đều là góc nhọn.'
      },
      {
        id: 'q4-2-31',
        text: 'Một tam giác cân có thể là tam giác vuông không?',
        options: ['Có', 'Không', 'Chỉ khi là tam giác đều', 'Không bao giờ'],
        correctAnswerIndex: 0,
        explanation: 'Có, ví dụ tam giác vuông cân có hai góc nhọn bằng nhau.'
      },
      {
        id: 'q4-2-32',
        text: 'Một tam giác đều có thể là tam giác vuông không?',
        options: ['Có', 'Không', 'Chỉ khi cạnh bằng 1', 'Chỉ khi có đường cao'],
        correctAnswerIndex: 1,
        explanation: 'Tam giác đều có ba góc $60^\\circ$, không thể có góc vuông.'
      },
      {
        id: 'q4-2-33',
        text: 'Nếu tam giác cân có góc ở đỉnh là góc tù thì hai góc ở đáy là:',
        options: ['Hai góc nhọn', 'Hai góc vuông', 'Hai góc tù', 'Một nhọn một tù'],
        correctAnswerIndex: 0,
        explanation: 'Tổng hai góc đáy nhỏ hơn $90^\\circ$, nên mỗi góc đáy đều là góc nhọn.'
      }
    ]
  },
  {
    id: 'c4-t3',
    title: 'Hai tam giác bằng nhau',
    description: 'Nhận biết hai tam giác bằng nhau, viết kí hiệu đúng và vận dụng các trường hợp bằng nhau của tam giác.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q4-3-1',
        text: 'Hai tam giác bằng nhau là hai tam giác có:',
        options: [
          'Diện tích bằng nhau',
          'Chu vi bằng nhau',
          'Các cạnh và các góc tương ứng bằng nhau',
          'Một cặp cạnh bằng nhau'
        ],
        correctAnswerIndex: 2,
        explanation: 'Hai tam giác bằng nhau khi các cạnh và các góc tương ứng của chúng bằng nhau.'
      },
      {
        id: 'q4-3-2',
        text: 'Kí hiệu hai tam giác bằng nhau là:',
        options: ['$\\triangle ABC \\parallel \\triangle DEF$', '$\\triangle ABC = \\triangle DEF$', '$\\triangle ABC \\cong \\triangle DEF$', '$ABC \\perp DEF$'],
        correctAnswerIndex: 2,
        explanation: 'Kí hiệu đúng là $\\triangle ABC \\cong \\triangle DEF$.'
      },
      {
        id: 'q4-3-3',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ thì cạnh tương ứng với $AB$ là:',
        options: ['$DE$', '$EF$', '$DF$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Theo thứ tự ký hiệu: $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$, nên $AB$ tương ứng với $DE$.'
      },
      {
        id: 'q4-3-4',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ thì góc tương ứng với $\\widehat{B}$ là:',
        options: ['$\\widehat{D}$', '$\\widehat{E}$', '$\\widehat{F}$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Theo thứ tự, $B$ tương ứng với $E$.'
      },
      {
        id: 'q4-3-5',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ thì cạnh nào bằng $BC$?',
        options: ['$DE$', '$EF$', '$DF$', '$FD$'],
        correctAnswerIndex: 1,
        explanation: 'Theo thứ tự, $BC$ tương ứng với $EF$.'
      },
      {
        id: 'q4-3-6',
        text: 'Nếu $\\triangle MNP \\cong \\triangle RST$ thì đỉnh tương ứng với $N$ là:',
        options: ['$R$', '$S$', '$T$', '$M$'],
        correctAnswerIndex: 1,
        explanation: 'Theo thứ tự viết ký hiệu, $N\\leftrightarrow S$.'
      },
      {
        id: 'q4-3-7',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ thì $\\widehat{C}$ bằng:',
        options: ['$\\widehat{D}$', '$\\widehat{E}$', '$\\widehat{F}$', '$\\widehat{A}$'],
        correctAnswerIndex: 2,
        explanation: 'Theo thứ tự, $C\\leftrightarrow F$.'
      },
      {
        id: 'q4-3-8',
        text: 'Trường hợp bằng nhau cạnh - cạnh - cạnh của hai tam giác thường viết tắt là:',
        options: ['g.c.g', 'c.g.c', 'c.c.c', 'g.g.c'],
        correctAnswerIndex: 2,
        explanation: 'Ba cạnh tương ứng bằng nhau là trường hợp c.c.c.'
      },
      {
        id: 'q4-3-9',
        text: 'Trường hợp bằng nhau cạnh - góc - cạnh của hai tam giác thường viết tắt là:',
        options: ['c.g.c', 'g.c.g', 'c.c.c', 'g.g.c'],
        correctAnswerIndex: 0,
        explanation: 'Hai cạnh và góc xen giữa bằng nhau là trường hợp c.g.c.'
      },
      {
        id: 'q4-3-10',
        text: 'Trường hợp bằng nhau góc - cạnh - góc của hai tam giác thường viết tắt là:',
        options: ['c.g.c', 'g.c.g', 'c.c.c', 'g.g.c'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc và cạnh xen giữa bằng nhau là trường hợp g.c.g.'
      },
      {
        id: 'q4-3-11',
        text: 'Nếu hai tam giác có ba cạnh tương ứng bằng nhau thì hai tam giác đó:',
        options: ['Bằng nhau', 'Không bằng nhau', 'Chỉ có diện tích bằng nhau', 'Chỉ có chu vi bằng nhau'],
        correctAnswerIndex: 0,
        explanation: 'Đây là trường hợp bằng nhau c.c.c.'
      },
      {
        id: 'q4-3-12',
        text: 'Nếu hai tam giác có hai cạnh và góc xen giữa tương ứng bằng nhau thì:',
        options: ['Bằng nhau', 'Không bằng nhau', 'Chỉ vuông góc', 'Chỉ cân'],
        correctAnswerIndex: 0,
        explanation: 'Đây là trường hợp bằng nhau c.g.c.'
      },
      {
        id: 'q4-3-13',
        text: 'Nếu hai tam giác có một cạnh và hai góc kề cạnh đó tương ứng bằng nhau thì:',
        options: ['Bằng nhau', 'Không bằng nhau', 'Chỉ có một góc bằng nhau', 'Không kết luận được'],
        correctAnswerIndex: 0,
        explanation: 'Đây là trường hợp bằng nhau g.c.g.'
      },
      {
        id: 'q4-3-14',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ và $AB=5$ cm thì $DE$ bằng:',
        options: ['3 cm', '4 cm', '5 cm', '6 cm'],
        correctAnswerIndex: 2,
        explanation: 'Hai cạnh tương ứng của hai tam giác bằng nhau.'
      },
      {
        id: 'q4-3-15',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ và $\\widehat{B}=60^\\circ$ thì $\\widehat{E}$ bằng:',
        options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Hai góc tương ứng bằng nhau.'
      },
      {
        id: 'q4-3-16',
        text: 'Nếu $\\triangle MNP \\cong \\triangle RST$ và $MN=7$ cm thì cạnh tương ứng bằng 7 cm là:',
        options: ['$RS$', '$ST$', '$RT$', '$TS$'],
        correctAnswerIndex: 0,
        explanation: 'Theo thứ tự, $MN\\leftrightarrow RS$.'
      },
      {
        id: 'q4-3-17',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ thì chu vi hai tam giác:',
        options: ['Không bằng nhau', 'Bằng nhau', 'Chỉ bằng nhau khi vuông', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Các cạnh tương ứng bằng nhau nên chu vi bằng nhau.'
      },
      {
        id: 'q4-3-18',
        text: 'Nếu hai tam giác bằng nhau thì diện tích của chúng:',
        options: ['Bằng nhau', 'Không bằng nhau', 'Không xác định', 'Tỷ lệ 2:1'],
        correctAnswerIndex: 0,
        explanation: 'Hai tam giác bằng nhau có cùng hình dạng và kích thước nên diện tích bằng nhau.'
      },
      {
        id: 'q4-3-19',
        text: 'Nếu biết $AB=DE$, $BC=EF$, $AC=DF$ thì có thể kết luận:',
        options: [
          '$\\triangle ABC \\cong \\triangle DEF$',
          '$\\triangle ABC \\cong \\triangle DFE$',
          '$\\triangle ABC \\cong \\triangle EFD$',
          'Không kết luận được'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ba cạnh tương ứng bằng nhau theo đúng thứ tự nên hai tam giác bằng nhau theo c.c.c.'
      },
      {
        id: 'q4-3-20',
        text: 'Nếu biết $AB=DE$, $\\widehat{A}=\\widehat{D}$, $AC=DF$ thì có thể kết luận:',
        options: [
          '$\\triangle ABC \\cong \\triangle DEF$',
          '$\\triangle ABC \\cong \\triangle DFE$',
          '$\\triangle ABC \\cong \\triangle EDF$',
          'Không kết luận được'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai cạnh và góc xen giữa bằng nhau theo đúng thứ tự nên hai tam giác bằng nhau theo c.g.c.'
      },
      {
        id: 'q4-3-21',
        text: 'Nếu biết $\\widehat{A}=\\widehat{D}$, $AB=DE$, $\\widehat{B}=\\widehat{E}$ thì có thể kết luận:',
        options: [
          '$\\triangle ABC \\cong \\triangle DEF$',
          '$\\triangle ABC \\cong \\triangle DFE$',
          '$\\triangle ABC \\cong \\triangle EFD$',
          'Không kết luận được'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai góc và cạnh xen giữa bằng nhau theo đúng thứ tự nên bằng nhau theo g.c.g.'
      },
      {
        id: 'q4-3-22',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ thì cạnh tương ứng với $AC$ là:',
        options: ['$DE$', '$EF$', '$DF$', '$FE$'],
        correctAnswerIndex: 2,
        explanation: 'Theo thứ tự, $AC\\leftrightarrow DF$.'
      },
      {
        id: 'q4-3-23',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ và $AC=8$ cm thì $DF$ bằng:',
        options: ['6 cm', '7 cm', '8 cm', '9 cm'],
        correctAnswerIndex: 2,
        explanation: 'Hai cạnh tương ứng bằng nhau.'
      },
      {
        id: 'q4-3-24',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ và $\\widehat{C}=35^\\circ$ thì $\\widehat{F}$ bằng:',
        options: ['$25^\\circ$', '$35^\\circ$', '$45^\\circ$', '$55^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc tương ứng bằng nhau.'
      },
      {
        id: 'q4-3-25',
        text: 'Nếu $\\triangle ABC \\cong \\triangle DEF$ và chu vi tam giác $ABC$ là 24 cm thì chu vi tam giác $DEF$ là:',
        options: ['12 cm', '18 cm', '24 cm', '48 cm'],
        correctAnswerIndex: 2,
        explanation: 'Hai tam giác bằng nhau có chu vi bằng nhau.'
      },
      {
        id: 'q4-3-26',
        text: 'Nếu hai tam giác bằng nhau thì số cặp cạnh tương ứng bằng nhau là:',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 2,
        explanation: 'Có 3 cặp cạnh tương ứng bằng nhau.'
      },
      {
        id: 'q4-3-27',
        text: 'Nếu hai tam giác bằng nhau thì số cặp góc tương ứng bằng nhau là:',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 2,
        explanation: 'Có 3 cặp góc tương ứng bằng nhau.'
      },
      {
        id: 'q4-3-28',
        text: 'Hai tam giác có thể bằng nhau nếu chỉ biết chúng có chu vi bằng nhau không?',
        options: ['Có', 'Không', 'Chỉ khi là tam giác đều', 'Chỉ khi là tam giác vuông'],
        correctAnswerIndex: 1,
        explanation: 'Chu vi bằng nhau chưa đủ để kết luận hai tam giác bằng nhau.'
      },
      {
        id: 'q4-3-29',
        text: 'Hai tam giác có thể bằng nhau nếu chỉ biết chúng có diện tích bằng nhau không?',
        options: ['Có', 'Không', 'Chỉ khi cân', 'Chỉ khi đều'],
        correctAnswerIndex: 1,
        explanation: 'Diện tích bằng nhau chưa đủ để kết luận hai tam giác bằng nhau.'
      },
      {
        id: 'q4-3-30',
        text: 'Nếu $\\triangle ABC \\cong \\triangle MNP$ thì đỉnh tương ứng với $A$ là:',
        options: ['$M$', '$N$', '$P$', '$B$'],
        correctAnswerIndex: 0,
        explanation: 'Theo thứ tự ký hiệu, $A\\leftrightarrow M$.'
      },
      {
        id: 'q4-3-31',
        text: 'Nếu $\\triangle ABC \\cong \\triangle MNP$ thì cạnh tương ứng với $BC$ là:',
        options: ['$MN$', '$NP$', '$MP$', '$PN$'],
        correctAnswerIndex: 1,
        explanation: 'Theo thứ tự ký hiệu, $BC\\leftrightarrow NP$.'
      },
      {
        id: 'q4-3-32',
        text: 'Nếu $\\triangle ABC \\cong \\triangle MNP$ và $\\widehat{A}=40^\\circ$, $\\widehat{B}=60^\\circ$ thì $\\widehat{N}$ bằng:',
        options: ['$40^\\circ$', '$60^\\circ$', '$80^\\circ$', '$100^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Theo thứ tự, $B\\leftrightarrow N$ nên $\\widehat{N}=\\widehat{B}=60^\\circ$.'
      },
      {
        id: 'q4-3-33',
        text: 'Nếu hai tam giác bằng nhau theo trường hợp c.c.c thì cần:',
        options: [
          'Ba cạnh tương ứng bằng nhau',
          'Hai cạnh và góc xen giữa bằng nhau',
          'Hai góc và cạnh xen giữa bằng nhau',
          'Một cạnh và một góc bằng nhau'
        ],
        correctAnswerIndex: 0,
        explanation: 'Trường hợp c.c.c yêu cầu ba cạnh tương ứng bằng nhau.'
      },
      {
        id: 'q4-3-34',
        text: 'Nếu hai tam giác bằng nhau theo trường hợp c.g.c thì cần:',
        options: [
          'Ba cạnh tương ứng bằng nhau',
          'Hai cạnh và góc xen giữa bằng nhau',
          'Hai góc và cạnh xen giữa bằng nhau',
          'Ba góc bằng nhau'
        ],
        correctAnswerIndex: 1,
        explanation: 'Trường hợp c.g.c yêu cầu hai cạnh và góc xen giữa tương ứng bằng nhau.'
      }
    ]
  }
];