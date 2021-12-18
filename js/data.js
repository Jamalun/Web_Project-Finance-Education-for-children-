const qnaList = [
  {
    q: '1. 나는 세뱃돈을 받으면 ____',
    a: [
      { answer: 'a. 전부 저축한다.', type: [0] },
      { answer: 'b. 일부 저축한다.', type: [1] },
      { answer: 'c. 빠른 시일 내에 써버린다.', type: [2] },
    ]
  },
  {
    q: '2. 사고 싶은 것이 생기면 ____ ',
    a: [
      { answer: 'a. 가격 비교한 후 충분히 고민한 다음 구매한다.', type: [0] },
      { answer: 'b. 가격을 비교한 후 바로 구매한다.', type: [1] },
      { answer: 'c. 가격 비교 없이 바로 산다.', type: [2] },
    ]
  },
  {
    q: '3. 샤프가 고장나서 문구점에 갔다. 내가 하는 행동은?',
    a: [
      { answer: 'a. 샤프만 사고 바로 문구점에서 나온다.', type: [0] },
      { answer: 'b. 계획에 없던 것들도 추가 구매한다.', type: [1] },
      { answer: 'c. 샤프를 사러 갔다는 사실조차 까먹고 다른 것을 구매한다.', type: [2] }
    ]
  }

]

const infoList = [
  {
    name: '짠돌이구나 ~',
    desc: '너무 좋은 소비습관을 가졌구나 ~ 앞으로도 그렇게 해줘 ! '
  },
  {
    name: '보통이구나~',
    desc: '나랑 경제 공부 더 열심히 해서 좋은 소비습관을 가지면 더 멋지지 않을까 ~? '
  },
  {
    name: '흥청이구나 ~',
    desc: '소비습관이 아직 잘 안 잡혔구나.. 내가 쉽게 알려줄테니까 한번 잘 따라와봐 ~'
  },
]

const quizList = [{
    q: '1. 중간중간 주기적으로 돈을 넣는 저축방식은?',
    a: [{
        answer: 'a. 정기예금',
        type: [0]
      },
      {
        answer: 'b. 정기적금',
        type: [1]
      },
    ]
  },
  {
    q: '2. 다음 중 카드사가 우선 값을 지불해주는 카드는? ',
    a: [{
        answer: 'a. 신용카드',
        type: [1]
      },
      {
        answer: 'b. 체크카드',
        type: [0]
      },
    ]
  },
  {
    q: '3. 회사의 주인이 될 수 있고 주체적으로 투자가 가능한 것은?',
    a: [{
        answer: 'a. 펀드',
        type: [0]
      },
      {
        answer: 'b. 주식',
        type: [1]
      },
    ]
  },
  {
    q: '4. 다음 중 개념에 맞는 설명으로 짝 지어지지 않은 것은?',
    a: [{
        answer: 'a. 입출금통장 : 한 번 돈을 넣고 나면 다시 뺄 수 없는 통장이다. ',
        type: [1]
      },
      {
        answer: 'b. 이자율 :  돈을 빌린 후 그에 대한 대가로 추가되는 값의 비율이다.',
        type: [0]
      },
      {
        answer: 'c. 비트코인 : 실물로 존재하는 것이 아닌 디지털 상에 존재하는 화폐이다. ',
        type: [0]
      },
    ]
  },
  {
    q: '5. 다음 중 올바른 판단으로 알맞은 것은?',
    a: [{
        answer: 'a. 주식 투자보다는 펀드 투자가 항상 옳지!',
        type: [0]
      },
      {
        answer: 'b. 돈을 빌릴 땐 이자율이 낮은 상품을 골라야지!',
        type: [1]
      },
      {
        answer: 'c. 체크카드를 사용하기보단 할부가 가능한 신용카드를 사용해야지!',
        type: [0]
      }
    ]
  }
]

const infoList_2 = [
  {
    name: '선물은 하리보야.',
    desc: '너무 많이 틀렸네ㅠㅠ <br>다시 한 번 복습해보는 게 좋겠어!'
  },
  {
    name: '선물은 떡볶이야.',
    desc: '2문제 맞았어!<br> 다시 한 번 더 복습해볼래?'
  },
  {
    name: '선물은 아이스크림이야.',
    desc: '3문제 맞았어~ <br>한 번 더 복습해보는 게 어때?  확실히 알고 넘어가자!'
  },
  {
    name: '선물은 치킨이야.',
    desc: '4문제 맞았어~ <br>수고했어! 다음 번엔 다섯 문제 다 맞추도록 해보자!'
  },
  {
    name: '선물은 소고기야.',
    desc: '우와 5문제 다 맞았어! <br>오늘 나 따라다니느라 수고했어~!'
  },
]

const infoList_3 = [
  {
    name: '선물은 에어팟이야.',
    desc: '너무 많이 틀렸네ㅠㅠ <br>다시 한 번 복습해보는 게 좋겠어!'
  },
  {
    name: '선물은 애플워치야.',
    desc: '2문제 맞았어~ <br>다시 한 번 더 복습해볼래?'
  },
  {
    name: '선물은 아이폰이야.',
    desc: '3문제 맞았어~ <br>한 번 더 복습해보는 게 어때?  확실히 알고 넘어가자!'
  },
  {
    name: '선물은 아이패드야.',
    desc: '4문제 맞았어~ <br>수고했어! 다음 번엔 다섯 문제 다 맞추도록 해보자!'
  },
  {
    name: '선물은 맥북이야.',
    desc: '우와 5문제 다 맞았어! <br>오늘 나 따라다니느라 수고했어~!'
  },
]

const infoList_4 = [
  {
    name: '선물은 문화상품권이야.',
    desc: '너무 많이 틀렸네ㅠㅠ<br> 다시 한 번 복습해보는 게 좋겠어!'
  },
  {
    name: '선물은 영화 티켓이야.',
    desc: '2문제 맞았어~ <br>다시 한 번 더 복습해볼래?'
  },
  {
    name: '선물은 콘서트 티켓이야.',
    desc: '3문제 맞았어~ <br>한 번 더 복습해보는 게 어때?  확실히 알고 넘어가자!'
  },
  {
    name: '선물은 비행기 티켓이야.',
    desc: '4문제 맞았어~ <br>수고했어! 다음 번엔 다섯 문제 다 맞추도록 해보자!'
  },
  {
    name: '선물은 여행 패키지 상품권이야.',
    desc: '우와 5문제 다 맞았어! <br>오늘 나 따라다니느라 수고했어~!'
  },
]
