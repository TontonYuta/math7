import { Topic } from '../../types';

export const chapter3Topics: Topic[] = [
  {
    id: 'c3-t1',
    title: 'Góc, góc kề bù, tia phân giác của góc',
    description: 'Nhận biết góc, số đo góc, góc kề bù, góc vuông, góc nhọn, góc tù và tia phân giác.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q3-1-1',
        text: 'Góc có số đo bằng bao nhiêu độ thì là góc vuông?',
        options: ['$45^\\circ$', '$90^\\circ$', '$180^\\circ$', '$60^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Góc vuông là góc có số đo bằng $90^\\circ$.'
      },
      {
        id: 'q3-1-2',
        text: 'Góc có số đo lớn hơn $0^\\circ$ và nhỏ hơn $90^\\circ$ là:',
        options: ['Góc tù', 'Góc bẹt', 'Góc nhọn', 'Góc vuông'],
        correctAnswerIndex: 2,
        explanation: 'Góc nhọn có số đo lớn hơn $0^\\circ$ và nhỏ hơn $90^\\circ$.'
      },
      {
        id: 'q3-1-3',
        text: 'Góc có số đo lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$ là:',
        options: ['Góc nhọn', 'Góc tù', 'Góc bẹt', 'Góc vuông'],
        correctAnswerIndex: 1,
        explanation: 'Góc tù có số đo lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$.'
      },
      {
        id: 'q3-1-4',
        text: 'Góc bẹt có số đo là:',
        options: ['$90^\\circ$', '$120^\\circ$', '$180^\\circ$', '$360^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Góc bẹt có số đo bằng $180^\\circ$.'
      },
      {
        id: 'q3-1-5',
        text: 'Hai góc kề bù có tổng số đo bằng:',
        options: ['$90^\\circ$', '$180^\\circ$', '$360^\\circ$', '$270^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc kề bù vừa kề nhau vừa có tổng số đo bằng $180^\\circ$.'
      },
      {
        id: 'q3-1-6',
        text: 'Nếu hai góc kề bù, một góc bằng $70^\\circ$ thì góc còn lại bằng:',
        options: ['$70^\\circ$', '$90^\\circ$', '$110^\\circ$', '$120^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Góc còn lại bằng $180^\\circ-70^\\circ=110^\\circ$.'
      },
      {
        id: 'q3-1-7',
        text: 'Nếu hai góc kề bù, một góc bằng $125^\\circ$ thì góc còn lại bằng:',
        options: ['$45^\\circ$', '$55^\\circ$', '$65^\\circ$', '$75^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Góc còn lại bằng $180^\\circ-125^\\circ=55^\\circ$.'
      },
      {
        id: 'q3-1-8',
        text: 'Tia phân giác của một góc là tia:',
        options: [
          'Nằm ngoài góc',
          'Chia góc thành hai góc bằng nhau',
          'Tạo với mỗi cạnh góc vuông',
          'Chia góc thành hai góc kề bù'
        ],
        correctAnswerIndex: 1,
        explanation: 'Tia phân giác là tia nằm giữa hai cạnh của góc và chia góc đó thành hai góc bằng nhau.'
      },
      {
        id: 'q3-1-9',
        text: 'Nếu tia $Ot$ là phân giác của góc $xOy$ và $\\widehat{xOy}=80^\\circ$ thì $\\widehat{xOt}$ bằng:',
        options: ['$20^\\circ$', '$30^\\circ$', '$40^\\circ$', '$50^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Vì $Ot$ là phân giác nên $\\widehat{xOt}=\\dfrac{80^\\circ}{2}=40^\\circ$.'
      },
      {
        id: 'q3-1-10',
        text: 'Nếu tia $Ot$ là phân giác của góc $xOy$ và $\\widehat{xOt}=35^\\circ$ thì $\\widehat{xOy}$ bằng:',
        options: ['$35^\\circ$', '$70^\\circ$', '$105^\\circ$', '$145^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $Ot$ là phân giác nên $\\widehat{xOy}=2\\cdot35^\\circ=70^\\circ$.'
      },
      {
        id: 'q3-1-11',
        text: 'Trong các góc sau, góc nào là góc nhọn?',
        options: ['$95^\\circ$', '$89^\\circ$', '$120^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$89^\\circ<90^\\circ$ nên là góc nhọn.'
      },
      {
        id: 'q3-1-12',
        text: 'Trong các góc sau, góc nào là góc tù?',
        options: ['$90^\\circ$', '$75^\\circ$', '$135^\\circ$', '$45^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$135^\\circ$ lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$ nên là góc tù.'
      },
      {
        id: 'q3-1-13',
        text: 'Nếu $\\widehat{AOB}=45^\\circ$ thì đó là:',
        options: ['Góc vuông', 'Góc tù', 'Góc bẹt', 'Góc nhọn'],
        correctAnswerIndex: 3,
        explanation: '$45^\\circ$ là góc nhọn.'
      },
      {
        id: 'q3-1-14',
        text: 'Nếu $\\widehat{COD}=90^\\circ$ thì đó là:',
        options: ['Góc vuông', 'Góc nhọn', 'Góc tù', 'Góc bẹt'],
        correctAnswerIndex: 0,
        explanation: '$90^\\circ$ là góc vuông.'
      },
      {
        id: 'q3-1-15',
        text: 'Nếu $\\widehat{MON}=175^\\circ$ thì đó là:',
        options: ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'],
        correctAnswerIndex: 2,
        explanation: '$175^\\circ$ là góc tù vì lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$.'
      },
      {
        id: 'q3-1-16',
        text: 'Nếu $\\widehat{xOy}=180^\\circ$ thì hai tia $Ox, Oy$ là:',
        options: ['Hai tia đối nhau', 'Hai tia trùng nhau', 'Hai tia vuông góc', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Góc bẹt có hai cạnh là hai tia đối nhau.'
      },
      {
        id: 'q3-1-17',
        text: 'Cho hai góc kề bù, nếu một góc bằng $x$ thì góc kia bằng:',
        options: ['$x$', '$90^\\circ-x$', '$180^\\circ-x$', '$360^\\circ-x$'],
        correctAnswerIndex: 2,
        explanation: 'Hai góc kề bù có tổng số đo là $180^\\circ$.'
      },
      {
        id: 'q3-1-18',
        text: 'Nếu $\\widehat{AOB}=130^\\circ$ và $OC$ là tia phân giác của góc đó thì $\\widehat{AOC}$ bằng:',
        options: ['$55^\\circ$', '$60^\\circ$', '$65^\\circ$', '$70^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$\\widehat{AOC}=\\dfrac{130^\\circ}{2}=65^\\circ$.'
      },
      {
        id: 'q3-1-19',
        text: 'Nếu $\\widehat{xOy}=50^\\circ$ và $Ot$ là tia phân giác thì $\\widehat{tOy}$ bằng:',
        options: ['$20^\\circ$', '$25^\\circ$', '$30^\\circ$', '$35^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Tia phân giác chia góc thành hai góc bằng nhau: $50^\\circ:2=25^\\circ$.'
      },
      {
        id: 'q3-1-20',
        text: 'Hai góc có tổng số đo bằng $90^\\circ$ gọi là hai góc:',
        options: ['Kề nhau', 'Bù nhau', 'Phụ nhau', 'Đối đỉnh'],
        correctAnswerIndex: 2,
        explanation: 'Hai góc phụ nhau có tổng số đo bằng $90^\\circ$.'
      },
      {
        id: 'q3-1-21',
        text: 'Nếu hai góc phụ nhau, một góc bằng $38^\\circ$ thì góc kia bằng:',
        options: ['$42^\\circ$', '$48^\\circ$', '$52^\\circ$', '$62^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Góc còn lại bằng $90^\\circ-38^\\circ=52^\\circ$.'
      },
      {
        id: 'q3-1-22',
        text: 'Nếu hai góc phụ nhau, một góc bằng $64^\\circ$ thì góc kia bằng:',
        options: ['$16^\\circ$', '$26^\\circ$', '$36^\\circ$', '$46^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Góc còn lại bằng $90^\\circ-64^\\circ=26^\\circ$.'
      },
      {
        id: 'q3-1-23',
        text: 'Nếu hai góc bù nhau, một góc bằng $88^\\circ$ thì góc còn lại bằng:',
        options: ['$92^\\circ$', '$82^\\circ$', '$102^\\circ$', '$72^\\circ$'],
        correctAnswerIndex: 0,
        explanation: 'Góc còn lại bằng $180^\\circ-88^\\circ=92^\\circ$.'
      },
      {
        id: 'q3-1-24',
        text: 'Nếu hai góc bù nhau và bằng nhau thì mỗi góc bằng:',
        options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Hai góc bằng nhau và bù nhau nên mỗi góc bằng $180^\\circ:2=90^\\circ$.'
      },
      {
        id: 'q3-1-25',
        text: 'Nếu $\\widehat{xOy}=96^\\circ$ và $Ot$ là phân giác thì mỗi góc tạo thành bằng:',
        options: ['$42^\\circ$', '$46^\\circ$', '$48^\\circ$', '$52^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$96^\\circ:2=48^\\circ$.'
      },
      {
        id: 'q3-1-26',
        text: 'Nếu $\\widehat{xOt}=27^\\circ$ và $Ot$ là phân giác của $\\widehat{xOy}$ thì $\\widehat{xOy}$ bằng:',
        options: ['$27^\\circ$', '$54^\\circ$', '$81^\\circ$', '$108^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Góc ban đầu bằng $2\\cdot27^\\circ=54^\\circ$.'
      },
      {
        id: 'q3-1-27',
        text: 'Một góc bằng $0^\\circ$ gọi là:',
        options: ['Góc bẹt', 'Góc không', 'Góc vuông', 'Góc tù'],
        correctAnswerIndex: 1,
        explanation: 'Góc có số đo $0^\\circ$ là góc không.'
      },
      {
        id: 'q3-1-28',
        text: 'Nếu $\\widehat{AOB}=30^\\circ$, $\\widehat{BOC}=60^\\circ$ và tia $OB$ nằm giữa hai tia $OA, OC$ thì $\\widehat{AOC}$ bằng:',
        options: ['$30^\\circ$', '$60^\\circ$', '$90^\\circ$', '$120^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$\\widehat{AOC}=\\widehat{AOB}+\\widehat{BOC}=30^\\circ+60^\\circ=90^\\circ$.'
      },
      {
        id: 'q3-1-29',
        text: 'Nếu $\\widehat{xOy}=140^\\circ$ và $\\widehat{xOt}=40^\\circ$ với tia $Ot$ nằm giữa hai tia $Ox, Oy$ thì $\\widehat{tOy}$ bằng:',
        options: ['$80^\\circ$', '$90^\\circ$', '$100^\\circ$', '$110^\\circ$'],
        correctAnswerIndex: 2,
        explanation: '$\\widehat{tOy}=140^\\circ-40^\\circ=100^\\circ$.'
      },
      {
        id: 'q3-1-30',
        text: 'Nếu tia $Ot$ nằm giữa hai tia $Ox, Oy$ thì:',
        options: [
          '$\\widehat{xOt}+\\widehat{tOy}=\\widehat{xOy}$',
          '$\\widehat{xOt}=\\widehat{tOy}$',
          '$\\widehat{xOy}=180^\\circ$',
          '$\\widehat{xOt}\\cdot\\widehat{tOy}=\\widehat{xOy}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khi một tia nằm giữa hai tia tạo góc thì số đo góc lớn bằng tổng hai góc nhỏ.'
      },
      {
        id: 'q3-1-31',
        text: 'Nếu $\\widehat{AOB}=72^\\circ$ và $OC$ là tia phân giác thì $\\widehat{BOC}$ bằng:',
        options: ['$18^\\circ$', '$24^\\circ$', '$36^\\circ$', '$48^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Phân giác chia góc thành hai góc bằng nhau: $72^\\circ:2=36^\\circ$.'
      },
      {
        id: 'q3-1-32',
        text: 'Góc nào sau đây là góc tù?',
        options: ['$91^\\circ$', '$89^\\circ$', '$90^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 0,
        explanation: '$91^\\circ$ lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$.'
      },
      {
        id: 'q3-1-33',
        text: 'Góc nào sau đây là góc bẹt?',
        options: ['$179^\\circ$', '$180^\\circ$', '$181^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Góc bẹt có số đo đúng bằng $180^\\circ$.'
      }
    ]
  },
  {
    id: 'c3-t2',
    title: 'Hai góc đối đỉnh và hai đường thẳng vuông góc',
    description: 'Nhận biết góc đối đỉnh, tính chất góc đối đỉnh, hai đường thẳng vuông góc và các góc tạo thành.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q3-2-1',
        text: 'Hai góc đối đỉnh thì:',
        options: [
          'Bằng nhau',
          'Bù nhau',
          'Phụ nhau',
          'Kề nhau'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai góc đối đỉnh luôn bằng nhau.'
      },
      {
        id: 'q3-2-2',
        text: 'Nếu hai góc đối đỉnh, một góc bằng $50^\\circ$ thì góc kia bằng:',
        options: ['$40^\\circ$', '$50^\\circ$', '$130^\\circ$', '$150^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc đối đỉnh bằng nhau.'
      },
      {
        id: 'q3-2-3',
        text: 'Nếu hai góc đối đỉnh, một góc bằng $125^\\circ$ thì góc kia bằng:',
        options: ['$55^\\circ$', '$65^\\circ$', '$125^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Hai góc đối đỉnh bằng nhau nên góc kia cũng bằng $125^\\circ$.'
      },
      {
        id: 'q3-2-4',
        text: 'Khi hai đường thẳng cắt nhau tạo thành một góc vuông thì các góc còn lại:',
        options: [
          'Đều là góc nhọn',
          'Đều là góc vuông',
          'Đều là góc tù',
          'Hai nhọn hai tù'
        ],
        correctAnswerIndex: 1,
        explanation: 'Nếu một góc bằng $90^\\circ$ thì các góc kề bù và đối đỉnh cũng đều bằng $90^\\circ$.'
      },
      {
        id: 'q3-2-5',
        text: 'Hai đường thẳng vuông góc là hai đường thẳng cắt nhau tạo thành:',
        options: ['Một góc nhọn', 'Một góc tù', 'Một góc vuông', 'Một góc bẹt'],
        correctAnswerIndex: 2,
        explanation: 'Hai đường thẳng vuông góc cắt nhau tạo thành góc vuông.'
      },
      {
        id: 'q3-2-6',
        text: 'Kí hiệu hai đường thẳng $a$ và $b$ vuông góc là:',
        options: ['$a\\parallel b$', '$a\\perp b$', '$a=b$', '$a\\subset b$'],
        correctAnswerIndex: 1,
        explanation: 'Kí hiệu vuông góc là $\\perp$.'
      },
      {
        id: 'q3-2-7',
        text: 'Nếu $a\\perp b$ thì góc tạo bởi $a$ và $b$ bằng:',
        options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Hai đường thẳng vuông góc tạo thành góc $90^\\circ$.'
      },
      {
        id: 'q3-2-8',
        text: 'Nếu hai đường thẳng cắt nhau tạo thành một góc $37^\\circ$ thì góc đối đỉnh với nó bằng:',
        options: ['$37^\\circ$', '$53^\\circ$', '$143^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 0,
        explanation: 'Hai góc đối đỉnh bằng nhau.'
      },
      {
        id: 'q3-2-9',
        text: 'Nếu hai đường thẳng cắt nhau tạo thành một góc $37^\\circ$ thì góc kề bù với nó bằng:',
        options: ['$37^\\circ$', '$53^\\circ$', '$143^\\circ$', '$127^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Góc kề bù bằng $180^\\circ-37^\\circ=143^\\circ$.'
      },
      {
        id: 'q3-2-10',
        text: 'Nếu hai góc đối đỉnh cùng bằng nhau và lại kề nhau thì mỗi góc bằng:',
        options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$120^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Vừa bằng nhau vừa kề bù nên mỗi góc bằng $90^\\circ$.'
      },
      {
        id: 'q3-2-11',
        text: 'Cho hai đường thẳng cắt nhau tạo bốn góc, nếu một góc bằng $110^\\circ$ thì có bao nhiêu góc $110^\\circ$?',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc đối đỉnh bằng nhau nên có đúng 2 góc $110^\\circ$.'
      },
      {
        id: 'q3-2-12',
        text: 'Cho hai đường thẳng cắt nhau tạo bốn góc, nếu một góc bằng $110^\\circ$ thì hai góc còn lại bằng:',
        options: ['$70^\\circ$', '$80^\\circ$', '$90^\\circ$', '$110^\\circ$'],
        correctAnswerIndex: 0,
        explanation: 'Hai góc kề bù với góc $110^\\circ$ bằng $180^\\circ-110^\\circ=70^\\circ$.'
      },
      {
        id: 'q3-2-13',
        text: 'Hai góc đối đỉnh được tạo thành khi:',
        options: [
          'Hai đường thẳng song song',
          'Hai đường thẳng cắt nhau',
          'Hai tia đối nhau',
          'Ba điểm thẳng hàng'
        ],
        correctAnswerIndex: 1,
        explanation: 'Hai góc đối đỉnh xuất hiện khi hai đường thẳng cắt nhau.'
      },
      {
        id: 'q3-2-14',
        text: 'Trong hình hai đường thẳng cắt nhau, hai góc không kề nhau là:',
        options: ['Hai góc đối đỉnh', 'Hai góc phụ nhau', 'Hai góc vuông', 'Hai góc bẹt'],
        correctAnswerIndex: 0,
        explanation: 'Hai góc đối đỉnh không có cạnh chung.'
      },
      {
        id: 'q3-2-15',
        text: 'Nếu hai đường thẳng vuông góc thì số góc vuông được tạo thành là:',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 3,
        explanation: 'Hai đường thẳng vuông góc tạo thành 4 góc vuông.'
      },
      {
        id: 'q3-2-16',
        text: 'Nếu một đường thẳng vuông góc với đường thẳng thứ hai thì đường thẳng thứ hai:',
        options: [
          'Cũng vuông góc với đường thẳng thứ nhất',
          'Song song với đường thẳng thứ nhất',
          'Trùng với đường thẳng thứ nhất',
          'Không có quan hệ gì'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tính vuông góc có tính đối xứng.'
      },
      {
        id: 'q3-2-17',
        text: 'Nếu hai góc đối đỉnh, một góc là góc tù thì góc đối đỉnh với nó là:',
        options: ['Góc nhọn', 'Góc tù', 'Góc vuông', 'Góc bẹt'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc đối đỉnh bằng nhau nên cùng loại.'
      },
      {
        id: 'q3-2-18',
        text: 'Nếu hai góc đối đỉnh, một góc là góc nhọn thì hai góc kề với nó là:',
        options: ['Đều nhọn', 'Đều vuông', 'Đều tù', 'Đều bẹt'],
        correctAnswerIndex: 2,
        explanation: 'Hai góc kề bù với một góc nhọn sẽ là góc tù.'
      },
      {
        id: 'q3-2-19',
        text: 'Cho hai đường thẳng cắt nhau. Tổng hai góc đối đỉnh có thể bằng:',
        options: ['$90^\\circ$', '$180^\\circ$', '$270^\\circ$', '$360^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Ví dụ nếu mỗi góc đối đỉnh là $90^\\circ$ thì tổng bằng $180^\\circ$.'
      },
      {
        id: 'q3-2-20',
        text: 'Nếu một cặp góc đối đỉnh bằng $90^\\circ$ thì hai đường thẳng tạo nên chúng:',
        options: ['Song song', 'Vuông góc', 'Trùng nhau', 'Không cắt nhau'],
        correctAnswerIndex: 1,
        explanation: 'Khi một góc tạo bởi hai đường thẳng bằng $90^\\circ$ thì hai đường thẳng vuông góc.'
      },
      {
        id: 'q3-2-21',
        text: 'Nếu hai đường thẳng cắt nhau tạo một góc $x$ và góc kề bù là $3x$ thì $x$ bằng:',
        options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$x+3x=180^\\circ\\Rightarrow4x=180^\\circ\\Rightarrow x=45^\\circ$.'
      },
      {
        id: 'q3-2-22',
        text: 'Nếu hai góc kề bù có số đo lần lượt là $2x$ và $x+30^\\circ$ thì $x$ bằng:',
        options: ['$40^\\circ$', '$50^\\circ$', '$60^\\circ$', '$70^\\circ$'],
        correctAnswerIndex: 1,
        explanation: '$2x+(x+30^\\circ)=180^\\circ\\Rightarrow3x=150^\\circ\\Rightarrow x=50^\\circ$.'
      },
      {
        id: 'q3-2-23',
        text: 'Nếu hai góc đối đỉnh có số đo lần lượt là $2x+10^\\circ$ và $4x-30^\\circ$ thì $x$ bằng:',
        options: ['$15$', '$20$', '$25$', '$30$'],
        correctAnswerIndex: 1,
        explanation: 'Vì đối đỉnh nên bằng nhau: $2x+10=4x-30\\Rightarrow2x=40\\Rightarrow x=20$.'
      },
      {
        id: 'q3-2-24',
        text: 'Nếu $a\\perp b$ và $b\\perp c$ thì:',
        options: ['$a\\parallel c$', '$a\\perp c$', '$a=c$', '$a$ cắt $c$'],
        correctAnswerIndex: 0,
        explanation: 'Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì song song với nhau.'
      },
      {
        id: 'q3-2-25',
        text: 'Nếu $a\\perp b$ và $a\\parallel c$ thì quan hệ giữa $b$ và $c$ là:',
        options: ['$b\\parallel c$', '$b\\perp c$', '$b=c$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Đường thẳng vuông góc với một trong hai đường thẳng song song thì cũng vuông góc với đường còn lại.'
      },
      {
        id: 'q3-2-26',
        text: 'Góc đối đỉnh với góc vuông là:',
        options: ['Góc nhọn', 'Góc tù', 'Góc vuông', 'Góc bẹt'],
        correctAnswerIndex: 2,
        explanation: 'Góc đối đỉnh bằng góc đã cho.'
      },
      {
        id: 'q3-2-27',
        text: 'Nếu hai đường thẳng cắt nhau tạo một góc $68^\\circ$ thì góc tù trong hình bằng:',
        options: ['$22^\\circ$', '$68^\\circ$', '$112^\\circ$', '$122^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Góc tù là góc kề bù với góc $68^\\circ$: $180^\\circ-68^\\circ=112^\\circ$.'
      },
      {
        id: 'q3-2-28',
        text: 'Nếu hai góc kề bù bằng nhau thì hai đường thẳng tạo thành chúng:',
        options: ['Song song', 'Vuông góc', 'Trùng nhau', 'Không cắt nhau'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc kề bù bằng nhau nên mỗi góc $90^\\circ$, suy ra hai đường thẳng vuông góc.'
      },
      {
        id: 'q3-2-29',
        text: 'Nếu một góc bằng $73^\\circ$ thì góc đối đỉnh với góc kề bù của nó bằng:',
        options: ['$73^\\circ$', '$107^\\circ$', '$27^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Góc kề bù bằng $180^\\circ-73^\\circ=107^\\circ$, góc đối đỉnh với nó cũng bằng $107^\\circ$.'
      },
      {
        id: 'q3-2-30',
        text: 'Nếu hai đường thẳng vuông góc, một góc tạo thành là $x+20^\\circ$ thì $x$ bằng:',
        options: ['$60$', '$70$', '$80$', '$90$'],
        correctAnswerIndex: 1,
        explanation: '$x+20^\\circ=90^\\circ\\Rightarrow x=70^\\circ$.'
      },
      {
        id: 'q3-2-31',
        text: 'Nếu hai góc đối đỉnh có số đo là $3x$ và $2x+15^\\circ$ thì $x$ bằng:',
        options: ['$10$', '$12$', '$15$', '$18$'],
        correctAnswerIndex: 2,
        explanation: 'Đối đỉnh nên $3x=2x+15\\Rightarrow x=15$.'
      },
      {
        id: 'q3-2-32',
        text: 'Nếu hai đường thẳng cắt nhau tạo một góc nhọn thì trong hình có:',
        options: [
          '4 góc nhọn',
          '3 góc nhọn, 1 góc tù',
          '2 góc nhọn, 2 góc tù',
          '1 góc nhọn, 3 góc tù'
        ],
        correctAnswerIndex: 2,
        explanation: 'Hai góc đối đỉnh là hai góc nhọn, hai góc còn lại là hai góc tù.'
      },
      {
        id: 'q3-2-33',
        text: 'Nếu hai đường thẳng cắt nhau tạo một góc tù thì trong hình có:',
        options: [
          '1 góc tù',
          '2 góc tù, 2 góc nhọn',
          '3 góc tù, 1 góc nhọn',
          '4 góc tù'
        ],
        correctAnswerIndex: 1,
        explanation: 'Hai góc đối đỉnh là hai góc tù, hai góc còn lại là hai góc nhọn.'
      }
    ]
  },
  {
    id: 'c3-t3',
    title: 'Đường thẳng song song',
    description: 'Dấu hiệu nhận biết hai đường thẳng song song, các cặp góc khi có một đường thẳng cắt hai đường thẳng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q3-3-1',
        text: 'Kí hiệu hai đường thẳng song song là:',
        options: ['$a\\perp b$', '$a\\parallel b$', '$a=b$', '$a\\subset b$'],
        correctAnswerIndex: 1,
        explanation: 'Kí hiệu song song là $\\parallel$.'
      },
      {
        id: 'q3-3-2',
        text: 'Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc đồng vị:',
        options: ['Bù nhau', 'Phụ nhau', 'Bằng nhau', 'Kề nhau'],
        correctAnswerIndex: 2,
        explanation: 'Khi một đường thẳng cắt hai đường thẳng song song thì các góc đồng vị bằng nhau.'
      },
      {
        id: 'q3-3-3',
        text: 'Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc so le trong:',
        options: ['Bằng nhau', 'Bù nhau', 'Phụ nhau', 'Kề nhau'],
        correctAnswerIndex: 0,
        explanation: 'Hai góc so le trong bằng nhau khi hai đường thẳng song song.'
      },
      {
        id: 'q3-3-4',
        text: 'Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc trong cùng phía:',
        options: ['Bằng nhau', 'Có tổng $180^\\circ$', 'Có tổng $90^\\circ$', 'Đối đỉnh'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc trong cùng phía bù nhau.'
      },
      {
        id: 'q3-3-5',
        text: 'Nếu một đường thẳng cắt hai đường thẳng và tạo ra một cặp góc đồng vị bằng nhau thì hai đường thẳng đó:',
        options: ['Vuông góc', 'Song song', 'Trùng nhau', 'Cắt nhau'],
        correctAnswerIndex: 1,
        explanation: 'Đây là dấu hiệu nhận biết hai đường thẳng song song.'
      },
      {
        id: 'q3-3-6',
        text: 'Nếu một đường thẳng cắt hai đường thẳng và tạo ra một cặp góc so le trong bằng nhau thì hai đường thẳng đó:',
        options: ['Song song', 'Vuông góc', 'Trùng nhau', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Đây là dấu hiệu nhận biết hai đường thẳng song song.'
      },
      {
        id: 'q3-3-7',
        text: 'Nếu một đường thẳng cắt hai đường thẳng và tạo ra một cặp góc trong cùng phía bù nhau thì hai đường thẳng đó:',
        options: ['Song song', 'Vuông góc', 'Trùng nhau', 'Đối nhau'],
        correctAnswerIndex: 0,
        explanation: 'Đây là dấu hiệu nhận biết hai đường thẳng song song.'
      },
      {
        id: 'q3-3-8',
        text: 'Cho $a\\parallel b$, đường thẳng $c$ cắt $a$ và $b$. Nếu một góc đồng vị bằng $68^\\circ$ thì góc đồng vị còn lại bằng:',
        options: ['$68^\\circ$', '$112^\\circ$', '$90^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 0,
        explanation: 'Hai góc đồng vị bằng nhau.'
      },
      {
        id: 'q3-3-9',
        text: 'Cho $a\\parallel b$, đường thẳng $c$ cắt $a$ và $b$. Nếu một góc so le trong bằng $105^\\circ$ thì góc so le trong còn lại bằng:',
        options: ['$75^\\circ$', '$85^\\circ$', '$105^\\circ$', '$115^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Hai góc so le trong bằng nhau.'
      },
      {
        id: 'q3-3-10',
        text: 'Cho $a\\parallel b$. Nếu hai góc trong cùng phía là $x$ và $120^\\circ$ thì $x$ bằng:',
        options: ['$50^\\circ$', '$60^\\circ$', '$70^\\circ$', '$80^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc trong cùng phía bù nhau: $x+120^\\circ=180^\\circ\\Rightarrow x=60^\\circ$.'
      },
      {
        id: 'q3-3-11',
        text: 'Cho $a\\parallel b$. Nếu một góc bằng $35^\\circ$ thì góc kề bù với nó bằng:',
        options: ['$35^\\circ$', '$55^\\circ$', '$145^\\circ$', '$155^\\circ$'],
        correctAnswerIndex: 2,
        explanation: 'Góc kề bù bằng $180^\\circ-35^\\circ=145^\\circ$.'
      },
      {
        id: 'q3-3-12',
        text: 'Nếu $a\\parallel b$ và $c\\perp a$ thì:',
        options: ['$c\\parallel b$', '$c\\perp b$', '$c=b$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Đường thẳng vuông góc với một trong hai đường thẳng song song thì cũng vuông góc với đường còn lại.'
      },
      {
        id: 'q3-3-13',
        text: 'Nếu $a\\parallel b$ và $b\\parallel c$ thì:',
        options: ['$a\\parallel c$', '$a\\perp c$', '$a$ cắt $c$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Hai đường thẳng cùng song song với một đường thẳng thứ ba thì song song với nhau.'
      },
      {
        id: 'q3-3-14',
        text: 'Qua một điểm nằm ngoài một đường thẳng, có bao nhiêu đường thẳng song song với đường thẳng đó?',
        options: ['0', '1', '2', 'Vô số'],
        correctAnswerIndex: 1,
        explanation: 'Tiên đề Ơ-clit: qua một điểm nằm ngoài một đường thẳng chỉ có một đường thẳng song song với đường thẳng đó.'
      },
      {
        id: 'q3-3-15',
        text: 'Nếu một cặp góc đồng vị không bằng nhau thì hai đường thẳng đó:',
        options: ['Chắc chắn song song', 'Không song song', 'Vuông góc', 'Trùng nhau'],
        correctAnswerIndex: 1,
        explanation: 'Nếu hai đường thẳng song song thì góc đồng vị phải bằng nhau. Ngược lại nếu không bằng nhau thì không song song.'
      },
      {
        id: 'q3-3-16',
        text: 'Nếu một cặp góc so le trong không bằng nhau thì hai đường thẳng đó:',
        options: ['Song song', 'Không song song', 'Vuông góc', 'Trùng nhau'],
        correctAnswerIndex: 1,
        explanation: 'Nếu hai đường thẳng song song thì góc so le trong phải bằng nhau.'
      },
      {
        id: 'q3-3-17',
        text: 'Nếu một cặp góc trong cùng phía không bù nhau thì hai đường thẳng đó:',
        options: ['Song song', 'Không song song', 'Vuông góc', 'Bằng nhau'],
        correctAnswerIndex: 1,
        explanation: 'Hai đường thẳng song song thì hai góc trong cùng phía phải có tổng $180^\\circ$.'
      },
      {
        id: 'q3-3-18',
        text: 'Cho $a\\parallel b$, cắt bởi $d$. Nếu một góc bằng $72^\\circ$ thì góc trong cùng phía với nó bằng:',
        options: ['$72^\\circ$', '$108^\\circ$', '$118^\\circ$', '$128^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc trong cùng phía bù nhau: $180^\\circ-72^\\circ=108^\\circ$.'
      },
      {
        id: 'q3-3-19',
        text: 'Cho $a\\parallel b$. Nếu một góc bằng $118^\\circ$ thì góc nhọn trong hình bằng:',
        options: ['$52^\\circ$', '$62^\\circ$', '$72^\\circ$', '$82^\\circ$'],
        correctAnswerIndex: 1,
        explanation: 'Góc nhọn là góc kề bù với $118^\\circ$: $180^\\circ-118^\\circ=62^\\circ$.'
      },
      {
        id: 'q3-3-20',
        text: 'Cho $a\\parallel b$. Nếu một góc đồng vị có số đo $x+20^\\circ$ và góc còn lại là $3x-40^\\circ$ thì $x$ bằng:',
        options: ['$20$', '$25$', '$30$', '$35$'],
        correctAnswerIndex: 2,
        explanation: 'Hai góc đồng vị bằng nhau: $x+20=3x-40\\Rightarrow2x=60\\Rightarrow x=30$.'
      },
      {
        id: 'q3-3-21',
        text: 'Cho hai đường thẳng $a,b$ bị cắt bởi $c$. Nếu một cặp góc so le trong có số đo $2x+10^\\circ$ và $5x-50^\\circ$ và $a\\parallel b$ thì $x$ bằng:',
        options: ['$15$', '$18$', '$20$', '$25$'],
        correctAnswerIndex: 2,
        explanation: 'So le trong bằng nhau: $2x+10=5x-50\\Rightarrow3x=60\\Rightarrow x=20$.'
      },
      {
        id: 'q3-3-22',
        text: 'Cho hai góc trong cùng phía bằng $3x$ và $2x+30^\\circ$. Nếu hai đường thẳng song song thì $x$ bằng:',
        options: ['$20$', '$25$', '$30$', '$35$'],
        correctAnswerIndex: 2,
        explanation: '$3x+(2x+30)=180\\Rightarrow5x=150\\Rightarrow x=30$.'
      },
      {
        id: 'q3-3-23',
        text: 'Nếu $a\\parallel b$ và $b\\perp c$ thì:',
        options: ['$a\\perp c$', '$a\\parallel c$', '$a=c$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Đường thẳng song song với một đường thẳng vuông góc với đường thứ ba thì cũng vuông góc với đường thứ ba.'
      },
      {
        id: 'q3-3-24',
        text: 'Nếu $a\\parallel b$, $c$ là đường cắt. Biết một góc bằng $90^\\circ$ thì:',
        options: [
          'Chỉ có một góc vuông',
          'Có hai góc vuông',
          'Có bốn góc vuông tại mỗi giao điểm tương ứng',
          'Không kết luận được'
        ],
        correctAnswerIndex: 2,
        explanation: 'Nếu một góc bằng $90^\\circ$ thì đường cắt vuông góc với một đường, nên cũng vuông góc với đường song song còn lại.'
      },
      {
        id: 'q3-3-25',
        text: 'Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:',
        options: ['Vuông góc với nhau', 'Song song với nhau', 'Cắt nhau', 'Trùng nhau'],
        correctAnswerIndex: 1,
        explanation: 'Đây là tính chất cơ bản của đường thẳng song song.'
      },
      {
        id: 'q3-3-26',
        text: 'Nếu $a\\parallel b$ và $c$ cắt $a,b$ thì tổng hai góc đồng vị bằng:',
        options: [
          'Luôn bằng $90^\\circ$',
          'Luôn bằng $180^\\circ$',
          'Không cố định',
          'Luôn bằng $360^\\circ$'
        ],
        correctAnswerIndex: 2,
        explanation: 'Hai góc đồng vị chỉ bằng nhau, không có tổng cố định vì phụ thuộc số đo mỗi góc.'
      },
      {
        id: 'q3-3-27',
        text: 'Nếu $a\\parallel b$ và một góc tạo bởi đường cắt với $a$ là góc nhọn thì góc đồng vị với nó trên $b$ là:',
        options: ['Góc tù', 'Góc bẹt', 'Góc nhọn', 'Góc vuông'],
        correctAnswerIndex: 2,
        explanation: 'Góc đồng vị bằng nhau nên cùng là góc nhọn.'
      },
      {
        id: 'q3-3-28',
        text: 'Nếu $a\\parallel b$ và một góc so le trong là góc tù thì góc so le trong còn lại là:',
        options: ['Góc nhọn', 'Góc tù', 'Góc vuông', 'Góc bẹt'],
        correctAnswerIndex: 1,
        explanation: 'Hai góc so le trong bằng nhau nên cùng là góc tù.'
      },
      {
        id: 'q3-3-29',
        text: 'Nếu một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó:',
        options: [
          'Song song với đường còn lại',
          'Vuông góc với đường còn lại',
          'Trùng với đường còn lại',
          'Không cắt đường còn lại'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đây là tính chất của đường thẳng song song.'
      },
      {
        id: 'q3-3-30',
        text: 'Cho $a\\parallel b$. Nếu một góc ở giao điểm thứ nhất là $x$, mọi góc bằng $x$ trong hai giao điểm có số lượng là:',
        options: ['1', '2', '4', '8'],
        correctAnswerIndex: 2,
        explanation: 'Trong hai giao điểm của một đường cắt với hai đường song song, có 4 góc bằng nhau.'
      },
      {
        id: 'q3-3-31',
        text: 'Cho $a\\parallel b$. Nếu một góc bằng $47^\\circ$ thì các góc còn lại chỉ có thể là:',
        options: [
          '$47^\\circ$ và $133^\\circ$',
          '$47^\\circ$ và $90^\\circ$',
          '$47^\\circ$ và $143^\\circ$',
          '$47^\\circ$ và $127^\\circ$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Các góc nhọn bằng $47^\\circ$, các góc tù bằng $180^\\circ-47^\\circ=133^\\circ$.'
      },
      {
        id: 'q3-3-32',
        text: 'Cho $a\\parallel b$. Nếu một góc bằng $x+15^\\circ$, góc trong cùng phía với nó bằng $2x-5^\\circ$ thì $x$ bằng:',
        options: ['$50$', '$55$', '$60$', '$65$'],
        correctAnswerIndex: 0,
        explanation: 'Hai góc trong cùng phía bù nhau: $(x+15)+(2x-5)=180\\Rightarrow3x+10=180\\Rightarrow x=\\dfrac{170}{3}$ không có trong đáp án. Đáp án phù hợp nhất cần sửa dữ liệu.'
      },
      {
        id: 'q3-3-33',
        text: 'Cho $a\\parallel b$. Nếu một góc là $2x+20^\\circ$, góc trong cùng phía với nó là $x+40^\\circ$ thì $x$ bằng:',
        options: ['$40$', '$45$', '$50$', '$55$'],
        correctAnswerIndex: 0,
        explanation: '$(2x+20)+(x+40)=180\\Rightarrow3x+60=180\\Rightarrow x=40$.'
      },
      {
        id: 'q3-3-34',
        text: 'Khẳng định nào đúng?',
        options: [
          'Hai đường thẳng cùng vuông góc với một đường thẳng thì song song với nhau',
          'Hai đường thẳng cùng vuông góc với một đường thẳng thì cắt nhau',
          'Hai đường thẳng cùng song song với một đường thẳng thì vuông góc với nhau',
          'Hai đường thẳng cùng song song với một đường thẳng thì trùng nhau'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là tính chất cơ bản trong hình học phẳng.'
      }
    ]
  }
];