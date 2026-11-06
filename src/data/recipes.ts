export type Recipe = {
  id: string;
  name: string;
  emoji: string;
  image: string;
  time: number;
  difficulty: '초간단' | '쉬움' | '보통';
  calories: number;
  description?: string;
  tags: string[];
  ingredients: string[];
  steps: string[];
  popular: boolean;
};

export const recipes: Recipe[] = [
  {
    id: 'tuna-mayo-rice', name: '참치마요 덮밥', emoji: '🐟',
    image: '/images/recipe-01.webp', time: 7, difficulty: '초간단', calories: 520,
    description: '참치캔 하나로 끝내는 실패 없는 한 그릇',
    tags: ['밥', '초간단', '불 없이', '인기'],
    ingredients: ['밥 1공기', '참치캔 1/2개', '마요네즈 1큰술', '간장 1작은술', '김가루 약간', '계란 1개(선택)'],
    steps: ['참치는 기름을 가볍게 빼고 마요네즈와 섞어요.', '밥 위에 참치마요를 올려요.', '간장을 가장자리에 살짝 두르고 김가루를 뿌려요.', '계란프라이까지 올리면 든든한 한 끼 완성!'], popular: true,
  },
  {
    id: 'soy-egg-rice', name: '간장계란밥', emoji: '🍳',
    image: '/images/recipe-02.webp', time: 5, difficulty: '초간단', calories: 440,
    description: '냉장고에 계란밖에 없을 때 최고의 선택',
    tags: ['밥', '계란', '초간단', '인기'],
    ingredients: ['밥 1공기', '계란 1~2개', '간장 1큰술', '참기름 1작은술', '김가루 약간'],
    steps: ['팬에 기름을 두르고 계란프라이를 취향껏 익혀요.', '따뜻한 밥 위에 계란을 올려요.', '간장과 참기름을 넣고 김가루를 뿌려 비벼 먹어요.'], popular: true,
  },
  {
    id: 'kimchi-fried-rice', name: '스팸 김치볶음밥', emoji: '🍚',
    image: '/images/recipe-03.webp', time: 10, difficulty: '쉬움', calories: 610,
    description: '남은 김치와 스팸으로 만드는 자취방 국룰',
    tags: ['밥', '한식', '팬 하나', '인기'],
    ingredients: ['밥 1공기', '김치 1/2컵', '스팸 1/4캔', '대파 약간', '고추장 1/2큰술(선택)', '계란 1개'],
    steps: ['김치와 스팸을 잘게 썰어요.', '팬에 대파와 스팸을 볶다가 김치를 넣어요.', '밥을 넣고 고루 볶아요. 필요하면 고추장을 조금 넣어요.', '계란프라이를 올리면 끝!'], popular: true,
  },
  {
    id: 'cream-rose-pasta', name: '꾸덕 로제 파스타', emoji: '🍝',
    image: '/images/recipe-04.webp', time: 12, difficulty: '쉬움', calories: 650,
    description: '시판 소스로 카페 느낌 내는 원팬 메뉴',
    tags: ['면', '양식', '팬 하나'],
    ingredients: ['파스타면 1인분', '로제 소스 1/2컵', '우유 1/3컵', '베이컨 2줄(선택)', '후추 약간'],
    steps: ['면을 포장지 안내대로 삶고 면수는 조금 남겨요.', '팬에 베이컨을 볶고 로제 소스와 우유를 넣어요.', '삶은 면을 넣고 1~2분 섞어요.', '소스가 너무 되직하면 면수를 조금 넣고 후추로 마무리해요.'], popular: true,
  },
  {
    id: 'tuna-gochujang-bibim', name: '참치 고추장 비빔밥', emoji: '🥗',
    image: '/images/recipe-05.webp', time: 8, difficulty: '초간단', calories: 530,
    description: '불 안 써도 되는 냉장고 털이 한 그릇',
    tags: ['밥', '한식', '불 없이'],
    ingredients: ['밥 1공기', '참치 1/2캔', '상추 또는 샐러드 채소 한 줌', '고추장 1큰술', '참기름 1작은술', '계란 1개(선택)'],
    steps: ['채소를 씻어 물기를 빼고 먹기 좋게 잘라요.', '밥 위에 채소와 기름 뺀 참치를 올려요.', '고추장과 참기름을 넣고 비벼요.', '계란프라이를 추가하면 더 든든해요.'], popular: true,
  },
  {
    id: 'garlic-butter-noodles', name: '마늘버터 간장면', emoji: '🍜',
    image: '/images/recipe-06.webp', time: 10, difficulty: '초간단', calories: 490,
    description: '라면 말고 색다른 면이 당기는 날',
    tags: ['면', '초간단', '팬 하나'],
    ingredients: ['우동면 또는 소면 1인분', '버터 1조각', '다진 마늘 1작은술', '간장 1큰술', '설탕 1/2작은술', '쪽파 약간'],
    steps: ['면을 삶거나 포장 안내에 따라 데워요.', '팬에 버터와 마늘을 약불로 볶아요.', '간장과 설탕, 면을 넣고 빠르게 섞어요.', '쪽파나 김가루를 올려 마무리해요.'], popular: false,
  },
  {
    id: 'spam-mayo-toast', name: '스팸 치즈 토스트', emoji: '🥪',
    image: '/images/recipe-07.webp', time: 8, difficulty: '초간단', calories: 480,
    description: '아침에도 야식에도 든든한 8분 토스트',
    tags: ['간식', '아침', '팬 하나'],
    ingredients: ['식빵 2장', '스팸 2조각', '슬라이스 치즈 1장', '계란 1개', '마요네즈 약간'],
    steps: ['스팸을 얇게 썰어 팬에 노릇하게 구워요.', '같은 팬에 계란을 부쳐요.', '식빵에 스팸, 계란, 치즈를 올려요.', '팬 뚜껑을 덮고 약불로 치즈를 녹여요.'], popular: false,
  },
  {
    id: 'soy-chicken-bowl', name: '간장 닭다리살 덮밥', emoji: '🍗',
    image: '/images/recipe-08.webp', time: 15, difficulty: '쉬움', calories: 590,
    description: '냉동 닭다리살로 만드는 단짠단짠 덮밥',
    tags: ['밥', '고기', '단백질'],
    ingredients: ['밥 1공기', '닭다리살 150g', '간장 1큰술', '올리고당 1큰술', '다진 마늘 1/2작은술', '양파 약간'],
    steps: ['닭다리살은 한입 크기로 자르고 키친타월로 물기를 닦아요.', '팬에 닭고기를 익히고 양파를 넣어요.', '간장, 올리고당, 마늘을 넣고 윤기 나게 졸여요.', '밥 위에 올려 소스를 끼얹어요.'], popular: true,
  },
  {
    id: 'tofu-egg-bowl', name: '두부계란 덮밥', emoji: '🥚',
    image: '/images/recipe-09.webp', time: 10, difficulty: '초간단', calories: 420,
    description: '재료비 부담 적고 단백질도 챙기는 메뉴',
    tags: ['밥', '계란', '초간단'],
    ingredients: ['밥 1공기', '두부 1/3모', '계란 1개', '간장 1큰술', '참기름 약간', '대파 약간'],
    steps: ['두부는 물기를 빼고 작은 큐브로 잘라요.', '팬에 두부를 굽다가 간장을 넣어요.', '계란을 풀어 넣고 부드럽게 익혀요.', '밥 위에 올리고 대파와 참기름을 더해요.'], popular: false,
  },
  {
    id: 'curry-quick', name: '3분 즉석카레 업그레이드', emoji: '🍛',
    image: '/images/recipe-10.webp', time: 6, difficulty: '초간단', calories: 560,
    description: '레토르트 카레에 계란 하나면 충분해',
    tags: ['밥', '초간단', '전자레인지'],
    ingredients: ['즉석카레 1팩', '밥 1공기', '계란 1개', '냉동 브로콜리 약간(선택)'],
    steps: ['즉석카레를 제품 안내에 따라 데워요.', '냉동 브로콜리를 함께 데우면 채소도 간편하게 추가돼요.', '밥 위에 카레를 붓고 계란프라이를 올려요.'], popular: false,
  },
  {
    id: 'tortilla-pizza', name: '또띠아 전자레인지 피자', emoji: '🍕',
    image: '/images/recipe-11.webp', time: 7, difficulty: '초간단', calories: 390,
    description: '오븐 없이 만드는 초간단 야식',
    tags: ['간식', '전자레인지', '초간단'],
    ingredients: ['또띠아 1장', '토마토소스 2큰술', '모짜렐라 치즈 한 줌', '햄 또는 옥수수 약간'],
    steps: ['또띠아에 토마토소스를 얇게 펴 발라요.', '치즈와 준비한 토핑을 올려요.', '전자레인지에서 치즈가 녹을 때까지 1~2분씩 확인하며 데워요.'], popular: false,
  },
  {
    id: 'soybean-sprout-soup', name: '숙주 계란국', emoji: '🍲',
    image: '/images/recipe-12.webp', time: 10, difficulty: '쉬움', calories: 160,
    description: '밥만 있을 때 곁들이기 좋은 따뜻한 국',
    tags: ['한식', '국물', '초간단'],
    ingredients: ['숙주 한 줌', '계란 1개', '물 500ml', '국간장 1큰술', '다진 마늘 약간', '대파 약간'],
    steps: ['냄비에 물과 국간장, 마늘을 넣고 끓여요.', '숙주를 넣고 3~4분 끓여요.', '계란을 풀어 둘러 넣고 한소끔 더 끓여요.', '대파를 넣고 간을 맞춰요.'], popular: false,
  },
];

export const tips = [
  { icon: '🧊', title: '냉동실은 자취생의 치트키', desc: '대파·다진 마늘·볶음밥 채소는 소분 냉동해 두면 버리는 재료가 줄고 요리 시간이 짧아져요.' },
  { icon: '🍳', title: '설거지는 팬 하나로', desc: '볶고 졸이고 덮밥으로 마무리하는 원팬 메뉴를 골라보세요. 조리도 뒷정리도 훨씬 간단해져요.' },
  { icon: '🛒', title: '돌려 쓰는 기본템 장보기', desc: '계란, 참치캔, 두부, 냉동채소, 김치처럼 여러 메뉴에 겹쳐 쓰는 재료부터 준비해요.' },
  { icon: '💸', title: '배달 대신 한 그릇', desc: '밥 + 단백질 재료 + 냉동채소 조합이면 냉장고 재료로도 꽤 든든한 한 끼를 만들 수 있어요.' },
  { icon: '⏱️', title: '귀찮은 날은 10분 컷', desc: '손질이 적은 재료와 전자레인지·즉석식품을 똑똑하게 섞어 요리 부담을 낮춰보세요.' },
  { icon: '🧂', title: '양념은 기본 4개부터', desc: '간장, 고추장, 참기름, 다진 마늘만 있어도 한식 자취 메뉴 대부분의 맛을 잡을 수 있어요.' },
];

export const faqs = [
  { q: '요리를 거의 안 해봤는데 뭘 먼저 만들까요?', a: '간장계란밥이나 참치마요 덮밥부터 시작해 보세요. 재료가 적고 조리 과정도 짧아서 부담이 적어요.' },
  { q: '전자레인지로 만들 수 있는 메뉴도 있나요?', a: '즉석카레 업그레이드나 또띠아 피자처럼 전자레인지 중심으로 만들 수 있는 메뉴가 있어요. 용기와 제품 포장지의 전자레인지 사용 가능 여부를 꼭 확인하세요.' },
  { q: '재료를 최소한으로 사려면 무엇이 좋을까요?', a: '계란, 참치캔, 두부, 김치, 냉동채소, 밥을 기본으로 두면 덮밥·볶음밥·간단한 국까지 다양하게 만들 수 있어요.' },
  { q: '레시피의 조리 시간과 칼로리는 정확한가요?', a: '조리 시간과 열량은 재료와 조리 환경에 따라 달라지는 대략적인 참고값이에요. 제품과 사용량에 따라 차이가 날 수 있어요.' },
];
