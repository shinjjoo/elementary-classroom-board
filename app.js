const STORAGE_KEY = 'elementary_classroom_board_bento_v2';

const VECTOR_PATHS = {
  book: `
    <path d="M4 6.5C4 5.4 4.9 4.5 6 4.5H11C12.1 4.5 13 5.4 13 6.5V19.5C13 18.7 12.3 18 11.5 18H5.5C4.7 18 4 17.3 4 16.5V6.5Z" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M20 6.5C20 5.4 19.1 4.5 18 4.5H13C11.9 4.5 11 5.4 11 6.5V19.5C11 18.7 11.7 18 12.5 18H18.5C19.3 18 20 17.3 20 16.5V6.5Z" fill="rgba(255,255,255,0.14)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M7 9H9.5M7 12.5H9.5" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
  `,
  math: `
    <rect x="4" y="4" width="16" height="16" rx="4.5" fill="rgba(255,255,255,0.24)" stroke="white" stroke-width="2.1"/>
    <path d="M8 9.5H11M9.5 8V11M13.5 9.5H16.5M8 15.5L10.5 13M10.5 15.5L8 13M13.5 13.5H16.5M13.5 16H16.5" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
  `,
  heart: `
    <path d="M12 20C12 20 4.5 15.2 4.5 9.3C4.5 6.9 6.4 5 8.8 5C10.3 5 11.5 5.8 12 6.8C12.5 5.8 13.7 5 15.2 5C17.6 5 19.5 6.9 19.5 9.3C19.5 15.2 12 20 12 20Z" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
  `,
  compass: `
    <circle cx="11" cy="11" r="6.5" fill="rgba(255,255,255,0.26)" stroke="white" stroke-width="2.1"/>
    <path d="M15.8 15.8L19.5 19.5" stroke="white" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M9 10.5L10.5 9L12.5 11L11 12.5L9 10.5Z" fill="white"/>
  `,
  art: `
    <path d="M12 4.5C7.6 4.5 4 7.9 4 12C4 16.1 7.4 19.5 11.5 19.5C12.9 19.5 14 18.4 14 17C14 16.4 13.7 15.9 13.4 15.5C13.1 15.1 13 14.6 13.5 14.2C14 13.8 14.7 14 15.5 14H16.5C18.4 14 20 12.4 20 10.5C20 7.1 16.4 4.5 12 4.5Z" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <circle cx="8.5" cy="10" r="1.3" fill="white"/>
    <circle cx="11.5" cy="8" r="1.3" fill="white"/>
    <circle cx="15" cy="9.5" r="1.3" fill="white"/>
  `,
  sprout: `
    <path d="M12 19.5V10.5" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M12 13.5C8 13.5 5.5 10.8 5.5 6.8C9.5 6.8 12 9.2 12 13.5Z" fill="rgba(255,255,255,0.32)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M12 11.5C15.5 11.5 18.5 9 18.5 5.5C15 5.5 12 7.8 12 11.5Z" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M8.5 19.5H15.5" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
  `,
  sun: `
    <circle cx="12" cy="12" r="4.5" fill="rgba(255,255,255,0.35)" stroke="white" stroke-width="2.1"/>
    <path d="M12 4V5.8M12 18.2V20M4 12H5.8M18.2 12H20M6.3 6.3L7.6 7.6M16.4 16.4L17.7 17.7M17.7 6.3L16.4 7.6M7.6 16.4L6.3 17.7" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
  `,
  leaf: `
    <path d="M6 18C6 11 10.5 5.5 18.5 5.5C18.5 13.5 13 18 6 18Z" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M5.5 18.5L13.5 10.5" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
  `,
  snow: `
    <path d="M12 4.5V19.5M4.5 12H19.5M6.8 6.8L17.2 17.2M17.2 6.8L6.8 17.2" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="2.2" fill="white"/>
  `,
  school: `
    <path d="M4.5 19.5V10.5L12 5L19.5 10.5V19.5H4.5Z" fill="rgba(255,255,255,0.26)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M9.5 19.5V14.5H14.5V19.5" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <circle cx="12" cy="10.2" r="1.5" fill="white"/>
  `,
  shield: `
    <path d="M12 4.5L18.5 7.2V12.2C18.5 16.1 15.7 18.8 12 20C8.3 18.8 5.5 16.1 5.5 12.2V7.2L12 4.5Z" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M9.5 12.2L11.2 13.9L14.8 10.3" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  `,
  star: `
    <path d="M12 4.5L14.3 9.2L19.5 9.9L15.7 13.6L16.6 18.8L12 16.3L7.4 18.8L8.3 13.6L4.5 9.9L9.7 9.2L12 4.5Z" fill="rgba(255,255,255,0.32)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
  `,
  pe: `
    <circle cx="12" cy="12" r="7.5" fill="rgba(255,255,255,0.25)" stroke="white" stroke-width="2.1"/>
    <path d="M12 4.5C14.5 7.5 14.5 16.5 12 19.5M12 4.5C9.5 7.5 9.5 16.5 12 19.5M4.8 10H19.2M4.8 14H19.2" stroke="white" stroke-width="1.9" stroke-linecap="round"/>
  `,
  music: `
    <path d="M9 17.5V7.5L18.5 5.5V15.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="6.8" cy="17.5" r="2.3" fill="rgba(255,255,255,0.35)" stroke="white" stroke-width="2.1"/>
    <circle cx="16.3" cy="15.5" r="2.3" fill="rgba(255,255,255,0.35)" stroke="white" stroke-width="2.1"/>
  `,
  bag: `
    <rect x="5.5" y="7.5" width="13" height="12" rx="3.8" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1"/>
    <path d="M9 7.5V6C9 4.9 9.9 4 11 4H13C14.1 4 15 4.9 15 6V7.5" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
    <path d="M5.5 12.2H18.5M12 11V13.8" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
  `,
  notebook: `
    <rect x="6" y="4.5" width="12.5" height="15" rx="2.8" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1"/>
    <path d="M4.5 8H7M4.5 12H7M4.5 16H7M9.5 9.5H15M9.5 13H13.5" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
  `,
  submit: `
    <path d="M4.5 13.5H8.5L10.2 15.5H13.8L15.5 13.5H19.5V18C19.5 19.1 18.6 20 17.5 20H6.5C5.4 20 4.5 19.1 4.5 18V13.5Z" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M12 4.5V12.5M12 12.5L9 9.5M12 12.5L15 9.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  `,
  milk: `
    <path d="M8 9.5L9.5 5H14.5L16 9.5V18.2C16 19.2 15.2 20 14.2 20H9.8C8.8 20 8 19.2 8 18.2V9.5Z" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M8 9.5H16M10.5 13.5H13.5" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
  `,
  water: `
    <path d="M12 4.5C12 4.5 6 11.2 6 15C6 18.3 8.7 20 12 20C15.3 20 18 18.3 18 15C18 11.2 12 4.5 12 4.5Z" fill="rgba(255,255,255,0.32)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M9.5 15.2C9.8 16.5 10.8 17.2 12.2 17.2" stroke="white" stroke-width="2" stroke-linecap="round"/>
  `,
  wash: `
    <circle cx="8.5" cy="7.5" r="2" fill="rgba(255,255,255,0.35)" stroke="white" stroke-width="1.9"/>
    <circle cx="15.5" cy="6.5" r="1.4" fill="white"/>
    <path d="M5.5 15.5C5.5 13.3 7.3 11.5 9.5 11.5H15C16.9 11.5 18.5 13.1 18.5 15C18.5 17.5 16.5 19.5 14 19.5H8.5C6.8 19.5 5.5 18.2 5.5 16.5V15.5Z" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
  `,
  restroom: `
    <circle cx="8.5" cy="6.5" r="2" fill="white"/>
    <circle cx="15.5" cy="6.5" r="2" fill="white"/>
    <path d="M6 11H11V15.5H9.8V19.5H7.2V15.5H6V11ZM13.5 11H17.5L18.8 16H16.8V19.5H14.2V16H12.2L13.5 11Z" fill="rgba(255,255,255,0.32)" stroke="white" stroke-width="1.8" stroke-linejoin="round"/>
  `,
  pencil: `
    <path d="M14.8 5.2L18.8 9.2L9.2 18.8H5.2V14.8L14.8 5.2Z" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M12.8 7.2L16.8 11.2" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
  `,
  clean: `
    <path d="M12 4.5L13.4 8.6L17.5 10L13.4 11.4L12 15.5L10.6 11.4L6.5 10L10.6 8.6L12 4.5Z" fill="rgba(255,255,255,0.35)" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M17.5 15L18.2 17L20.2 17.7L18.2 18.4L17.5 20.4L16.8 18.4L14.8 17.7L16.8 17L17.5 15Z" fill="white"/>
  `,
  chair: `
    <path d="M7.5 5V12.5H16.5V5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 12.5H18V15H6V12.5Z" fill="rgba(255,255,255,0.32)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M7.5 15V19.5M16.5 15V19.5" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
  `,
  coat: `
    <path d="M9 5.5L12 7.5L15 5.5L19.5 8.5L17.5 12L15.5 10.8V19.5H8.5V10.8L6.5 12L4.5 8.5L9 5.5Z" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
  `,
  letter: `
    <rect x="4.5" y="6.5" width="15" height="11" rx="2.5" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1"/>
    <path d="M5.5 7.5L12 12.5L18.5 7.5" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
  `,
  calendar: `
    <rect x="4.5" y="6" width="15" height="13.5" rx="3.2" fill="rgba(255,255,265,0.26)" stroke="white" stroke-width="2.1"/>
    <path d="M8.5 4.2V7.2M15.5 4.2V7.2M4.5 10.2H19.5" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
    <circle cx="9" cy="14" r="1.2" fill="white"/>
    <circle cx="12" cy="14" r="1.2" fill="white"/>
    <circle cx="15" cy="14" r="1.2" fill="white"/>
  `,
  bell: `
    <path d="M12 4.5C8.9 4.5 6.8 6.8 6.8 10V14.2L5 16.2H19L17.2 14.2V10C17.2 6.8 15.1 4.5 12 4.5Z" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="2.1" stroke-linejoin="round"/>
    <path d="M10 18.5C10.5 19.3 11.2 19.8 12 19.8C12.8 19.8 13.5 19.3 14 18.5" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
  `,
  settings: `
    <circle cx="12" cy="12" r="3.2" fill="rgba(255,255,255,0.32)" stroke="white" stroke-width="2.1"/>
    <path d="M12 4.5V6.5M12 17.5V19.5M4.5 12H6.5M17.5 12H19.5M6.7 6.7L8.1 8.1M15.9 15.9L17.3 17.3M17.3 6.7L15.9 8.1M8.1 15.9L6.7 17.3" stroke="white" stroke-width="2.1" stroke-linecap="round"/>
  `,
  check: `
    <circle cx="12" cy="12" r="7.5" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="2.1"/>
    <path d="M8.8 12.2L11 14.4L15.4 9.8" stroke="white" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
  `
};

function renderSoftIcon(iconKey, gradClass = 'grad-purple-blue', sizeClass = 'w-11 h-11', svgSize = 22) {
  const paths = VECTOR_PATHS[iconKey] || VECTOR_PATHS.star;
  return `
    <div class="soft-icon-tile ${gradClass} ${sizeClass}">
      <svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${paths}
      </svg>
    </div>
  `;
}

const DEFAULT_SUBJECTS = [
  { id: 'kor',    name: '국어',         icon: 'book',    grad: 'grad-pink-orange' },
  { id: 'math',   name: '수학',         icon: 'math',    grad: 'grad-purple-blue' },
  { id: 'bareun', name: '바른생활',     icon: 'heart',   grad: 'grad-mint-blue' },
  { id: 'seulgi', name: '슬기로운생활', icon: 'compass', grad: 'grad-sky-indigo' },
  { id: 'jeul',   name: '즐거운생활',   icon: 'art',     grad: 'grad-lavender-pink' },
  { id: 'spring', name: '봄 (통합)',     icon: 'sprout',  grad: 'grad-mint-blue' },
  { id: 'summer', name: '여름 (통합)',   icon: 'sun',     grad: 'grad-blue-cyan' },
  { id: 'autumn', name: '가을 (통합)',   icon: 'leaf',    grad: 'grad-peach-coral' },
  { id: 'winter', name: '겨울 (통합)',   icon: 'snow',    grad: 'grad-sky-indigo' },
  { id: 'school', name: '학교 (통합)',   icon: 'school',  grad: 'grad-purple-blue' },
  { id: 'safe',   name: '안전한 생활',   icon: 'shield',  grad: 'grad-pink-orange' },
  { id: 'chang',  name: '창체',         icon: 'star',    grad: 'grad-periwinkle-rose' },
  { id: 'read',   name: '독서',         icon: 'book',    grad: 'grad-sky-indigo' },
  { id: 'pe',     name: '체육·놀이',    icon: 'pe',      grad: 'grad-blue-cyan' },
  { id: 'music',  name: '노래·악기',    icon: 'music',   grad: 'grad-lavender-pink' },
  { id: 'art',    name: '만들기·그리기', icon: 'art',     grad: 'grad-peach-coral' }
];

const FREQUENT_TASK_PRESETS = [
  { icon: 'submit',   grad: 'grad-pink-orange',   title: '숙제 바구니에 내기',           tab: 'morning' },
  { icon: 'notebook', grad: 'grad-purple-blue',   title: '알림장 책상 위에 꺼내기',       tab: 'morning' },
  { icon: 'milk',     grad: 'grad-sky-indigo',    title: '우유 마시고 갑 접기',           tab: 'breaktime' },
  { icon: 'restroom', grad: 'grad-blue-cyan',     title: '쉬는 시간에 화장실 다녀오기',   tab: 'breaktime' },
  { icon: 'water',    grad: 'grad-mint-blue',     title: '물 한 컵 마시기',               tab: 'breaktime' },
  { icon: 'wash',     grad: 'grad-sky-indigo',    title: '점심 먹기 전 손 깨끗이 씻기',   tab: 'breaktime' },
  { icon: 'book',     grad: 'grad-purple-blue',   title: '다음 시간 교과서 꺼내 놓기',    tab: 'classprep' },
  { icon: 'pencil',   grad: 'grad-pink-orange',   title: '연필 3자루와 지우개 준비',     tab: 'classprep' },
  { icon: 'letter',   grad: 'grad-lavender-pink', title: '가정통신문 가방에 넣기',         tab: 'afterschool' },
  { icon: 'clean',    grad: 'grad-mint-blue',     title: '내 자리 주변 쓰레기 줍기',      tab: 'afterschool' },
  { icon: 'chair',    grad: 'grad-sky-indigo',    title: '의자 소리 나지 않게 넣기',      tab: 'afterschool' },
  { icon: 'coat',     grad: 'grad-peach-coral',   title: '외투와 물통 잊지 않고 챙기기',  tab: 'afterschool' }
];

const ROUTINE_TABS_META = [
  { key: 'morning',     label: '등교 후',       sub: '아침 루틴',     icon: 'sun',    grad: 'grad-pink-orange' },
  { key: 'classprep',   label: '수업 준비',     sub: '수업 시작 전',  icon: 'pencil', grad: 'grad-purple-blue' },
  { key: 'breaktime',   label: '쉬는·점심시간', sub: '휴식 및 점심',  icon: 'water',  grad: 'grad-blue-cyan' },
  { key: 'afterschool', label: '하교 전',       sub: '귀가 준비',     icon: 'bag',    grad: 'grad-periwinkle-rose' }
];

const WEEKDAYS = [
  { key: 'mon', label: '월', full: '월요일', jsDay: 1 },
  { key: 'tue', label: '화', full: '화요일', jsDay: 2 },
  { key: 'wed', label: '수', full: '수요일', jsDay: 3 },
  { key: 'thu', label: '목', full: '목요일', jsDay: 4 },
  { key: 'fri', label: '금', full: '금요일', jsDay: 5 }
];

function showToast(msg) {
  const el = document.getElementById('toastBanner');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    el.classList.add('hidden');
  }, 2400);
}

function getDefaultState() {
  return {
    className: '1학년 1반',
    soundEnabled: true,
    autoTimeSync: true,
    lastResetDate: new Date().toISOString().slice(0, 10),
    subjects: JSON.parse(JSON.stringify(DEFAULT_SUBJECTS)),
    weeklyTimetable: {
      mon: { count: 4, periods: ['kor', 'math', 'bareun', 'jeul', 'chang', 'read'] },
      tue: { count: 5, periods: ['kor', 'math', 'seulgi', 'jeul', 'safe', 'read'] },
      wed: { count: 4, periods: ['kor', 'math', 'bareun', 'chang', 'pe', 'read'] },
      thu: { count: 5, periods: ['kor', 'math', 'seulgi', 'jeul', 'read', 'art'] },
      fri: { count: 4, periods: ['kor', 'math', 'jeul', 'safe', 'chang', 'pe'] }
    },
    todayOverrides: {},
    bellSchedule: {
      morningStart: '08:30',
      morningEnd:   '09:00',
      periods: [
        { num: 1, start: '09:00', end: '09:40' },
        { num: 2, start: '09:50', end: '10:30' },
        { num: 3, start: '10:40', end: '11:20' },
        { num: 4, start: '11:30', end: '12:10' },
        { num: 5, start: '13:00', end: '13:40' },
        { num: 6, start: '13:50', end: '14:30' }
      ],
      lunchStart: '12:10',
      lunchEnd:   '13:00'
    },
    routines: {
      morning: [
        { id: 'm1', icon: 'bag',      grad: 'grad-purple-blue', title: '가방 정리하고 사물함에 넣기', repeat: 'daily', done: false },
        { id: 'm2', icon: 'submit',   grad: 'grad-pink-orange', title: '숙제와 알림장 바구니에 내기', repeat: 'daily', done: false },
        { id: 'm3', icon: 'water',    grad: 'grad-blue-cyan',   title: '내 물통 제자리에 두고 물 마시기', repeat: 'daily', done: false },
        { id: 'm4', icon: 'book',     grad: 'grad-sky-indigo',  title: '자리에 앉아 조용히 아침 독서하기', repeat: 'daily', done: false }
      ],
      classprep: [
        { id: 'c1', icon: 'book',     grad: 'grad-purple-blue', title: '이번 시간 교과서 꺼내 놓기', repeat: 'daily', done: false },
        { id: 'c2', icon: 'pencil',   grad: 'grad-pink-orange', title: '연필과 지우개 책상 위에 준비하기', repeat: 'daily', done: false },
        { id: 'c3', icon: 'chair',    grad: 'grad-sky-indigo',  title: '등을 펴고 바른 자세로 앉기', repeat: 'daily', done: false },
        { id: 'c4', icon: 'star',     grad: 'grad-periwinkle-rose', title: '선생님과 친구 바라보며 경청하기', repeat: 'daily', done: false }
      ],
      breaktime: [
        { id: 'b1', icon: 'book',     grad: 'grad-purple-blue', title: '다음 시간 교과서 먼저 꺼내 놓기', repeat: 'daily', done: false },
        { id: 'b2', icon: 'restroom', grad: 'grad-blue-cyan',   title: '화장실 미리 다녀오기', repeat: 'daily', done: false },
        { id: 'b3', icon: 'milk',     grad: 'grad-pink-orange', title: '우유나 물 마시고 손 깨끗이 씻기', repeat: 'daily', done: false },
        { id: 'b4', icon: 'shield',   grad: 'grad-mint-blue',   title: '교실과 복도에서 사뿐사뿐 걷기', repeat: 'daily', done: false }
      ],
      afterschool: [
        { id: 'a1', icon: 'notebook', grad: 'grad-pink-orange', title: '알림장과 안내장 가방에 넣기', repeat: 'daily', done: false },
        { id: 'a2', icon: 'clean',    grad: 'grad-mint-blue',   title: '책상 속과 내 자리 주변 정리하기', repeat: 'daily', done: false },
        { id: 'a3', icon: 'chair',    grad: 'grad-sky-indigo',  title: '의자 책상 안으로 바르게 넣기', repeat: 'daily', done: false },
        { id: 'a4', icon: 'coat',     grad: 'grad-purple-blue', title: '외투·물통·신발주머니 챙기기', repeat: 'daily', done: false }
      ]
    }
  };
}

let state = loadState();
let selectedWeekdayKey = getTodayWeekdayKey();
let activeRoutineTab = 'morning';
let manualSelectedPeriod = null;
let simulatedClockMinutes = null;
let editingPeriodIndex = null;
let lastAnnouncedSlotKey = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    const def = getDefaultState();
    const merged = { ...def, ...parsed };

    const todayStr = new Date().toISOString().slice(0, 10);
    if (merged.lastResetDate !== todayStr) {
      merged.lastResetDate = todayStr;
      merged.todayOverrides = {};
      Object.keys(merged.routines).forEach(tabKey => {
        merged.routines[tabKey] = merged.routines[tabKey]
          .filter(item => item.repeat !== 'today')
          .map(item => ({ ...item, done: false }));
      });
    }
    return merged;
  } catch (e) {
    return getDefaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

function getTodayWeekdayKey() {
  const d = new Date().getDay();
  const found = WEEKDAYS.find(w => w.jsDay === d);
  return found ? found.key : 'mon';
}

function getSubjectById(id) {
  return state.subjects.find(s => s.id === id) || state.subjects[0] || { id: 'kor', name: '국어', icon: 'book', grad: 'grad-pink-orange' };
}

function hmToMinutes(hm) {
  if (!hm || !hm.includes(':')) return 0;
  const [h, m] = hm.split(':').map(Number);
  return h * 60 + m;
}

function getNowMinutesAndSeconds() {
  if (simulatedClockMinutes !== null) {
    return { totalMinutes: simulatedClockMinutes, seconds: 0, isSimulated: true };
  }
  const now = new Date();
  return {
    totalMinutes: now.getHours() * 60 + now.getMinutes(),
    seconds: now.getSeconds(),
    isSimulated: false
  };
}

function evaluateCurrentTimeSlot() {
  const { totalMinutes, seconds } = getNowMinutesAndSeconds();
  const nowSec = totalMinutes * 60 + seconds;
  const bs = state.bellSchedule;
  const dayConfig = state.weeklyTimetable[selectedWeekdayKey] || state.weeklyTimetable.mon;
  const periodCount = dayConfig.count || 4;
  const activePeriods = bs.periods.slice(0, periodCount);

  const mStart = hmToMinutes(bs.morningStart) * 60;
  const mEnd   = hmToMinutes(bs.morningEnd) * 60;

  if (nowSec < mStart) {
    return {
      slotKey: 'before_school',
      type: 'morning',
      periodIndex: null,
      routineTab: 'morning',
      icon: 'sun',
      grad: 'grad-pink-orange',
      headline: '좋은 아침이에요! 등교 준비를 해요',
      subline: '가방을 정리하고 숙제를 제출해요',
      timeRange: `${bs.morningStart} 등교·아침활동`,
      progressPct: 100,
      remainingSec: Math.max(0, mStart - nowSec)
    };
  }
  if (nowSec >= mStart && nowSec < mEnd) {
    const total = Math.max(1, mEnd - mStart);
    const rem = Math.max(0, mEnd - nowSec);
    return {
      slotKey: 'morning_activity',
      type: 'morning',
      periodIndex: null,
      routineTab: 'morning',
      icon: 'sun',
      grad: 'grad-pink-orange',
      headline: '등교 후 아침 활동 시간이에요',
      subline: '가방을 정리하고 숙제를 제출해요',
      timeRange: `${bs.morningStart} ~ ${bs.morningEnd}`,
      progressPct: Math.round((rem / total) * 100),
      remainingSec: rem
    };
  }

  const lStart = hmToMinutes(bs.lunchStart) * 60;
  const lEnd   = hmToMinutes(bs.lunchEnd) * 60;
  if (nowSec >= lStart && nowSec < lEnd && periodCount >= 4) {
    const total = Math.max(1, lEnd - lStart);
    const rem = Math.max(0, lEnd - nowSec);
    return {
      slotKey: 'lunch_time',
      type: 'lunch',
      periodIndex: null,
      routineTab: 'breaktime',
      icon: 'wash',
      grad: 'grad-blue-cyan',
      headline: '점심시간이에요! 맛있게 식사해요',
      subline: '손을 깨끗이 씻고 질서를 지켜 급식을 먹어요',
      timeRange: `${bs.lunchStart} ~ ${bs.lunchEnd}`,
      progressPct: Math.round((rem / total) * 100),
      remainingSec: rem
    };
  }

  for (let i = 0; i < activePeriods.length; i++) {
    const p = activePeriods[i];
    const pStart = hmToMinutes(p.start) * 60;
    const pEnd   = hmToMinutes(p.end) * 60;
    const subjId = getEffectivePeriodSubjectId(selectedWeekdayKey, i);
    const subj   = getSubjectById(subjId);

    if (nowSec >= pStart && nowSec < pEnd) {
      const total = Math.max(1, pEnd - pStart);
      const rem = Math.max(0, pEnd - nowSec);
      return {
        slotKey: `period_${p.num}`,
        type: 'period',
        periodIndex: i,
        routineTab: 'classprep',
        icon: subj.icon,
        grad: subj.grad,
        headline: `지금은 ${p.num}교시 ${subj.name} 시간이에요`,
        subline: '교과서와 연필을 준비하고 선생님 말씀에 귀 기울여요',
        timeRange: `${p.start} ~ ${p.end}`,
        progressPct: Math.round((rem / total) * 100),
        remainingSec: rem
      };
    }

    if (i < activePeriods.length - 1) {
      const nextP = activePeriods[i + 1];
      const nextStart = hmToMinutes(nextP.start) * 60;
      if (nowSec >= pEnd && nowSec < nextStart) {
        const total = Math.max(1, nextStart - pEnd);
        const rem = Math.max(0, nextStart - nowSec);
        const nextSubj = getSubjectById(getEffectivePeriodSubjectId(selectedWeekdayKey, i + 1));
        return {
          slotKey: `break_after_${p.num}`,
          type: 'break',
          periodIndex: i + 1,
          routineTab: 'breaktime',
          icon: 'water',
          grad: 'grad-blue-cyan',
          headline: `쉬는 시간 (다음: ${nextP.num}교시 ${nextSubj.name})`,
          subline: '화장실에 다녀오고 다음 시간 교과서를 준비해요',
          timeRange: `${p.end} ~ ${nextP.start}`,
          progressPct: Math.round((rem / total) * 100),
          remainingSec: rem
        };
      }
    }
  }

  const lastP = activePeriods[activePeriods.length - 1];
  return {
    slotKey: 'after_school',
    type: 'afterschool',
    periodIndex: null,
    routineTab: 'afterschool',
    icon: 'bag',
    grad: 'grad-periwinkle-rose',
    headline: '수업 마침! 자리를 정리하고 하교해요',
    subline: '알림장과 소지품을 챙기고 안전하게 귀가해요',
    timeRange: `${lastP ? lastP.end : '13:40'} ~ 하교`,
    progressPct: 100,
    remainingSec: 0
  };
}

function getEffectivePeriodSubjectId(dayKey, periodIdx) {
  if (dayKey === getTodayWeekdayKey() && state.todayOverrides && state.todayOverrides[periodIdx]) {
    return state.todayOverrides[periodIdx];
  }
  const dayData = state.weeklyTimetable[dayKey] || state.weeklyTimetable.mon;
  return dayData.periods[periodIdx] || 'kor';
}

let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSchoolChime(force = false) {
  if (!force && !state.soundEnabled) return;
  const ctx = getAudioCtx();
  if (!ctx) return;

  const notes = [
    { freq: 659.25, delay: 0.0,  dur: 0.45 },
    { freq: 783.99, delay: 0.35, dur: 0.45 },
    { freq: 659.25, delay: 0.70, dur: 0.45 },
    { freq: 523.25, delay: 1.05, dur: 0.80 }
  ];
  notes.forEach(n => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.delay);
    gain.gain.setValueAtTime(0.001, ctx.currentTime + n.delay);
    gain.gain.exponentialRampToValueAtTime(0.28, ctx.currentTime + n.delay + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.delay + n.dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime + n.delay);
    osc.stop(ctx.currentTime + n.delay + n.dur + 0.05);
  });
  if (force) showToast('학교 차임벨이 울립니다');
}

function playStampSound(checked) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const freqs = checked ? [523.25, 659.25, 1046.5] : [440, 330];
  freqs.forEach((f, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    const start = ctx.currentTime + idx * 0.07;
    osc.frequency.setValueAtTime(f, start);
    gain.gain.setValueAtTime(0.2, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 0.24);
  });
}

function playCelebrationFanfare() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const melody = [
    { f: 523.25, d: 0.00, l: 0.18 },
    { f: 659.25, d: 0.16, l: 0.18 },
    { f: 783.99, d: 0.32, l: 0.18 },
    { f: 1046.5, d: 0.50, l: 0.55 }
  ];
  melody.forEach(n => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(n.f, ctx.currentTime + n.d);
    gain.gain.setValueAtTime(0.25, ctx.currentTime + n.d);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.d + n.l);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime + n.d);
    osc.stop(ctx.currentTime + n.d + n.l + 0.04);
  });
}

function renderStaticIcons() {
  const setIcon = (id, icon, grad, size, svgSize) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = renderSoftIcon(icon, grad, size, svgSize);
  };
  setIcon('headerCalendarIcon', 'calendar', 'grad-purple-blue', 'w-7 h-7', 15);
  setIcon('ctrlBellIcon', 'bell', 'grad-pink-orange', 'w-5 h-5', 12);
  setIcon('ctrlSoundIcon', 'bell', 'grad-sky-indigo', 'w-5 h-5', 12);
  setIcon('ctrlSettingsIcon', 'settings', 'grad-purple-blue', 'w-5 h-5', 12);
  setIcon('sectionTimetableIcon', 'calendar', 'grad-sky-indigo', 'w-7 h-7', 15);
  setIcon('sectionRoutineIcon', 'check', 'grad-purple-blue', 'w-9 h-9', 18);
  setIcon('celebrateStarIcon', 'star', 'grad-pink-orange', 'w-11 h-11', 22);
}

function updateHeaderClockAndTimer() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  const dateEl = document.getElementById('dateDisplay');
  if (dateEl) {
    dateEl.textContent = `${month}월 ${date}일`;
    dateEl.classList.add('whitespace-nowrap', 'truncate');
  }

  const dayBadge = document.getElementById('dayOfWeekBadge');
  if (dayBadge) {
    dayBadge.textContent = dayNames[now.getDay()];
    dayBadge.classList.add('whitespace-nowrap');
  }

  const classDisplay = document.getElementById('classNameDisplay');
  if (classDisplay) {
    classDisplay.textContent = state.className;
    classDisplay.classList.add('whitespace-nowrap', 'truncate');
  }

  const { totalMinutes, seconds, isSimulated } = getNowMinutesAndSeconds();
  const h24 = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const ampm = h24 < 12 ? '오전' : '오후';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;

  const ampmEl = document.getElementById('ampmDisplay');
  if (ampmEl) {
    ampmEl.textContent = isSimulated ? `${ampm} · 미리보기` : ampm;
    ampmEl.classList.add('whitespace-nowrap');
  }

  const clockEl = document.getElementById('clockDisplay');
  if (clockEl) {
    clockEl.textContent = `${h12}:${String(mins).padStart(2, '0')}`;
    clockEl.classList.add('whitespace-nowrap');
  }

  const secEl = document.getElementById('secondsDisplay');
  if (secEl) {
    secEl.textContent = `:${String(seconds).padStart(2, '0')}`;
    secEl.classList.add('whitespace-nowrap');
  }

  const btnRestore = document.getElementById('btnRestoreRealTime');
  if (btnRestore) {
    if (isSimulated) {
      btnRestore.classList.remove('hidden');
    } else {
      btnRestore.classList.add('hidden');
    }
    btnRestore.classList.add('whitespace-nowrap');
  }

  const slot = evaluateCurrentTimeSlot();

  if (lastAnnouncedSlotKey && lastAnnouncedSlotKey !== slot.slotKey && !isSimulated) {
    playSchoolChime(false);
  }
  lastAnnouncedSlotKey = slot.slotKey;

  if (state.autoTimeSync && manualSelectedPeriod === null) {
    if (activeRoutineTab !== slot.routineTab) {
      activeRoutineTab = slot.routineTab;
      renderRoutineSection();
    }
  }

  const iconSlot = document.getElementById('currentStatusIconSlot');
  const headlineEl = document.getElementById('currentStatusHeadline');
  const sublineEl = document.getElementById('currentStatusSubline');
  const timeRangeEl = document.getElementById('currentSlotTimeRange');
  const remTextEl = document.getElementById('remainingTimeText');
  const timerBarFill = document.getElementById('timerBarFill');
  const timerCirclePath = document.getElementById('timerCirclePath');

  if (manualSelectedPeriod !== null) {
    const pObj = state.bellSchedule.periods[manualSelectedPeriod];
    const subj = getSubjectById(getEffectivePeriodSubjectId(selectedWeekdayKey, manualSelectedPeriod));

    if (iconSlot) iconSlot.innerHTML = renderSoftIcon(subj.icon, subj.grad, 'w-14 h-14', 28);
    if (headlineEl) {
      headlineEl.textContent = `${pObj.num}교시 ${subj.name} 시간이에요`;
      headlineEl.classList.add('whitespace-nowrap', 'truncate');
    }
    if (sublineEl) {
      sublineEl.textContent = '교과서와 연필을 준비하고 선생님 말씀에 귀 기울여요';
      sublineEl.classList.add('whitespace-nowrap', 'truncate');
    }
    if (timeRangeEl) {
      timeRangeEl.textContent = `${pObj.start} ~ ${pObj.end}`;
      timeRangeEl.classList.add('whitespace-nowrap');
    }
    if (remTextEl) {
      remTextEl.textContent = '선택됨';
      remTextEl.classList.add('whitespace-nowrap');
    }
    if (timerBarFill) timerBarFill.style.width = '100%';
    if (timerCirclePath) timerCirclePath.setAttribute('stroke-dashoffset', '0');
  } else {
    if (iconSlot) iconSlot.innerHTML = renderSoftIcon(slot.icon, slot.grad, 'w-14 h-14', 28);
    if (headlineEl) {
      headlineEl.textContent = slot.headline;
      headlineEl.classList.add('whitespace-nowrap', 'truncate');
    }
    if (sublineEl) {
      sublineEl.textContent = slot.subline || '';
      sublineEl.classList.add('whitespace-nowrap', 'truncate');
    }
    if (timeRangeEl) {
      timeRangeEl.textContent = slot.timeRange;
      timeRangeEl.classList.add('whitespace-nowrap');
    }

    if (remTextEl) {
      if (slot.remainingSec > 0) {
        const rMin = Math.floor(slot.remainingSec / 60);
        const rSec = slot.remainingSec % 60;
        remTextEl.textContent = `${rMin}분 ${String(rSec).padStart(2, '0')}초`;
      } else {
        remTextEl.textContent = '완료';
      }
      remTextEl.classList.add('whitespace-nowrap');
    }

    if (timerBarFill) timerBarFill.style.width = `${slot.progressPct}%`;
    if (timerCirclePath) {
      const circumference = 163.36;
      const offset = circumference - (slot.progressPct / 100) * circumference;
      timerCirclePath.setAttribute('stroke-dashoffset', String(offset));
    }
  }

  const autoBadge = document.getElementById('autoModeBadge');
  if (autoBadge) {
    if (state.autoTimeSync && manualSelectedPeriod === null) {
      autoBadge.textContent = '시각 자동 연동';
      autoBadge.className = 'cursor-pointer px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-600 text-white shadow-2xs whitespace-nowrap';
    } else {
      autoBadge.textContent = '수동 선택 (클릭 시 자동)';
      autoBadge.className = 'cursor-pointer px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-200 text-slate-700 whitespace-nowrap';
    }
  }

  const soundBtn = document.getElementById('btnSoundToggle');
  const soundLabel = document.getElementById('soundToggleLabel');
  if (soundLabel) {
    soundLabel.textContent = state.soundEnabled ? '자동종' : '무음';
    soundLabel.classList.add('whitespace-nowrap');
  }
  if (soundBtn) {
    soundBtn.className = state.soundEnabled
      ? 'px-2 py-1.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-1 cursor-pointer transition whitespace-nowrap flex-shrink-0'
      : 'px-2 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 opacity-65 flex items-center gap-1 cursor-pointer transition whitespace-nowrap flex-shrink-0';
  }
}

function renderTimetableSection() {
  const tabsEl = document.getElementById('weekdayTabs');
  const todayKey = getTodayWeekdayKey();
  if (tabsEl) {
    tabsEl.innerHTML = WEEKDAYS.map(w => {
      const isSel = w.key === selectedWeekdayKey;
      const isToday = w.key === todayKey;
      return `
        <button onclick="selectWeekday('${w.key}')"
          class="px-2.5 py-1 rounded-xl text-xs font-extrabold cursor-pointer transition whitespace-nowrap ${
            isSel
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900'
          }">
          ${w.label}${isToday ? '·오늘' : ''}
        </button>
      `;
    }).join('');
  }

  const resetOverrideBtn = document.getElementById('btnResetTodayOverride');
  if (resetOverrideBtn) {
    const hasOverrides = selectedWeekdayKey === todayKey && state.todayOverrides && Object.keys(state.todayOverrides).length > 0;
    resetOverrideBtn.classList.toggle('hidden', !hasOverrides);
    resetOverrideBtn.classList.add('whitespace-nowrap');
  }

  const dayConfig = state.weeklyTimetable[selectedWeekdayKey] || state.weeklyTimetable.mon;
  const periodCount = dayConfig.count || 4;
  const slot = evaluateCurrentTimeSlot();
  const { totalMinutes } = getNowMinutesAndSeconds();

  [4, 5, 6].forEach(c => {
    const btn = document.getElementById(`btnCount${c}`);
    if (btn) {
      btn.className = c === periodCount
        ? 'px-2 py-1 rounded-lg font-extrabold bg-blue-600 text-white cursor-pointer whitespace-nowrap text-xs'
        : 'px-2 py-1 rounded-lg font-bold text-slate-500 hover:text-slate-800 cursor-pointer whitespace-nowrap text-xs';
    }
  });

  const listEl = document.getElementById('periodListContainer');
  if (!listEl) return;
  const cardsHtml = [];

  for (let i = 0; i < periodCount; i++) {
    const pTime = state.bellSchedule.periods[i] || { num: i + 1, start: '', end: '' };
    const subjId = getEffectivePeriodSubjectId(selectedWeekdayKey, i);
    const subj = getSubjectById(subjId);

    const isActive = manualSelectedPeriod !== null
      ? manualSelectedPeriod === i
      : (slot.type === 'period' && slot.periodIndex === i);
    const isUpcomingInBreak = manualSelectedPeriod === null && slot.type === 'break' && slot.periodIndex === i;
    const pEndMin = hmToMinutes(pTime.end);
    const isDone = manualSelectedPeriod === null && totalMinutes >= pEndMin && selectedWeekdayKey === todayKey;

    cardsHtml.push(`
      <div onclick="selectPeriodCard(${i})"
        class="bento-tile px-3 py-2 rounded-xl flex items-center justify-between gap-2 cursor-pointer transition ${
          isActive ? 'bento-period-active bg-blue-50/60 border-blue-400' : isDone ? 'bento-period-done opacity-75' : 'bg-white'
        }">
        
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <div class="w-11 py-1 rounded-lg ${
            isActive ? 'bg-blue-600 text-white' : 'bg-[#F3F7FC] text-slate-700 border border-slate-200/80'
          } text-xs font-black text-center flex-shrink-0 whitespace-nowrap leading-tight">
            ${i + 1}교시
          </div>

          ${renderSoftIcon(subj.icon, subj.grad, 'w-8 h-8', 16)}

          <div class="min-w-0 flex-1 flex items-center gap-1.5">
            <span class="text-sm md:text-base font-black text-slate-900 whitespace-nowrap truncate">
              ${escapeHtml(subj.name)}
            </span>
            <span class="text-[11px] font-bold text-slate-400 tabular-nums whitespace-nowrap">
              ${pTime.start}
            </span>
          </div>
        </div>

        <div class="flex items-center gap-1.5 flex-shrink-0">
          ${isActive ? `
            <span class="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-600 text-white shadow-2xs whitespace-nowrap">
              지금
            </span>
          ` : isUpcomingInBreak ? `
            <span class="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-50 text-blue-600 border border-blue-200 whitespace-nowrap">
              다음
            </span>
          ` : isDone ? `
            <span class="px-1.5 py-0.5 rounded-full text-[10px] font-bold text-slate-400 whitespace-nowrap">
              완료
            </span>
          ` : ''}

          <button onclick="event.stopPropagation(); openSubjectPickerModal(${i})"
            title="${i + 1}교시 과목 변경"
            class="px-2 py-1 rounded-lg text-[11px] font-extrabold bg-[#F8FAFC] hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-200 cursor-pointer transition whitespace-nowrap">
            변경
          </button>
        </div>
      </div>
    `);

    if (i === 3 && periodCount > 4) {
      const isLunchNow = manualSelectedPeriod === null && slot.type === 'lunch';
      cardsHtml.push(`
        <div onclick="selectLunchSlot()"
          class="px-3 py-2 rounded-xl border ${
            isLunchNow
              ? 'bg-blue-50 border-blue-300'
              : 'bg-[#F8FAFC] border-slate-200/80'
          } flex items-center justify-between gap-2 cursor-pointer transition whitespace-nowrap">
          <div class="flex items-center gap-2 min-w-0">
            ${renderSoftIcon('wash', 'grad-blue-cyan', 'w-7 h-7', 14)}
            <span class="text-xs md:text-sm font-black text-slate-800 whitespace-nowrap truncate">점심시간</span>
          </div>
          <span class="text-[11px] font-extrabold text-slate-400 tabular-nums whitespace-nowrap flex-shrink-0">
            ${state.bellSchedule.lunchStart}~${state.bellSchedule.lunchEnd}
          </span>
        </div>
      `);
    }
  }

  listEl.innerHTML = cardsHtml.join('');
}

function renderRoutineSection() {
  const tabsContainer = document.getElementById('routineTabsContainer');
  if (tabsContainer) {
    tabsContainer.className = 'flex items-center gap-1.5 flex-wrap';
    tabsContainer.innerHTML = ROUTINE_TABS_META.map(tab => {
      const isSel = tab.key === activeRoutineTab;
      return `
        <button onclick="selectRoutineTab('${tab.key}')"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs md:text-sm font-extrabold cursor-pointer transition whitespace-nowrap ${
            isSel
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-[#F8FAFC] text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
          }">
          ${renderSoftIcon(tab.icon, tab.grad, 'w-6 h-6', 13)}
          <span class="whitespace-nowrap">${escapeHtml(tab.label)}</span>
        </button>
      `;
    }).join('');
  }

  const currentTabMeta = ROUTINE_TABS_META.find(t => t.key === activeRoutineTab) || ROUTINE_TABS_META[0];
  const routineBoardTitle = document.getElementById('routineBoardTitle');
  if (routineBoardTitle) {
    routineBoardTitle.textContent = `${currentTabMeta.label} 우리가 할 일`;
    routineBoardTitle.classList.add('whitespace-nowrap', 'truncate');
  }

  const tasks = state.routines[activeRoutineTab] || [];

  const progressPill = document.getElementById('routineProgressPill');
  if (progressPill) {
    progressPill.classList.add('hidden');
  }
  const allBanner = document.getElementById('allCompleteBanner');
  if (allBanner) {
    allBanner.classList.add('hidden');
  }

  const gridEl = document.getElementById('routineCardsGrid');
  if (!gridEl) return;

  if (tasks.length === 0) {
    gridEl.innerHTML = `
      <div class="col-span-full py-8 text-center rounded-2xl bg-[#F8FAFC] border border-dashed border-slate-200">
        <div class="inline-block mb-1.5">${renderSoftIcon('sprout', 'grad-mint-blue', 'w-10 h-10', 20)}</div>
        <div class="text-sm md:text-base font-black text-slate-800 whitespace-nowrap truncate">등록된 할 일이 없습니다</div>
        <p class="text-xs font-bold text-slate-400 mt-0.5 whitespace-nowrap truncate">[+ 할 일 추가] 버튼으로 이 시간대 루틴을 등록해 보세요</p>
      </div>
    `;
    return;
  }

  gridEl.innerHTML = tasks.map((task, idx) => {
    const isTodaySpecial = task.repeat === 'today';
    return `
      <div class="bento-tile p-3.5 flex items-center justify-between gap-3 bg-white border border-slate-200/90 rounded-2xl ${
        isTodaySpecial ? 'bg-gradient-to-r from-blue-50/40 to-white border-blue-200' : ''
      }">
        <div class="flex items-center gap-3 min-w-0 flex-1">
          <span class="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 font-black text-xs flex items-center justify-center flex-shrink-0">
            ${idx + 1}
          </span>
          ${renderSoftIcon(task.icon || 'star', task.grad || 'grad-purple-blue', 'w-11 h-11', 22)}
          <span class="text-base md:text-lg font-extrabold text-slate-900 whitespace-nowrap truncate flex-1">
            ${escapeHtml(task.title)}
          </span>
          ${isTodaySpecial ? `
            <span class="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-50 text-blue-600 border border-blue-200 whitespace-nowrap flex-shrink-0">
              오늘
            </span>
          ` : ''}
        </div>

        <button onclick="event.stopPropagation(); deleteRoutineTask('${activeRoutineTab}', '${task.id}')"
          title="삭제"
          class="w-7 h-7 rounded-xl bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-slate-200/80 flex items-center justify-center text-xs font-bold cursor-pointer flex-shrink-0 transition">
          ✕
        </button>
      </div>
    `;
  }).join('');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderAll() {
  updateHeaderClockAndTimer();
  renderTimetableSection();
  renderRoutineSection();
}

function openClassNameEditor() {
  const wrap = document.getElementById('classNameInputWrap');
  const btn = document.getElementById('btnEditClassName');
  const inp = document.getElementById('classNameInput');
  if (!inp || !wrap || !btn) return;
  inp.value = state.className;
  btn.classList.add('hidden');
  wrap.classList.remove('hidden');
  wrap.classList.add('flex');
  inp.focus();
}

function saveClassName() {
  const inp = document.getElementById('classNameInput');
  const wrap = document.getElementById('classNameInputWrap');
  const btn = document.getElementById('btnEditClassName');
  if (!inp || !wrap || !btn) return;
  if (inp.value.trim()) {
    state.className = inp.value.trim();
    saveState();
  }
  wrap.classList.add('hidden');
  wrap.classList.remove('flex');
  btn.classList.remove('hidden');
  renderAll();
}

function selectWeekday(dayKey) {
  selectedWeekdayKey = dayKey;
  manualSelectedPeriod = null;
  renderAll();
}

function setDayPeriodCount(count) {
  if (!state.weeklyTimetable[selectedWeekdayKey]) return;
  state.weeklyTimetable[selectedWeekdayKey].count = count;
  saveState();
  renderAll();
}

function selectPeriodCard(periodIdx) {
  if (manualSelectedPeriod === periodIdx) {
    manualSelectedPeriod = null;
  } else {
    manualSelectedPeriod = periodIdx;
    activeRoutineTab = 'classprep';
  }
  renderAll();
}

function selectLunchSlot() {
  manualSelectedPeriod = null;
  activeRoutineTab = 'breaktime';
  renderAll();
}

function selectRoutineTab(tabKey) {
  activeRoutineTab = tabKey;
  state.autoTimeSync = false;
  saveState();
  renderAll();
}

function toggleAutoMode() {
  state.autoTimeSync = true;
  manualSelectedPeriod = null;
  simulatedClockMinutes = null;
  const slot = evaluateCurrentTimeSlot();
  activeRoutineTab = slot.routineTab;
  saveState();
  renderAll();
}

function toggleSoundEnabled() {
  state.soundEnabled = !state.soundEnabled;
  saveState();
  renderAll();
}

function toggleRoutineTaskDone(tabKey, taskId) {
  const list = state.routines[tabKey] || [];
  const item = list.find(t => t.id === taskId);
  if (!item) return;
  item.done = !item.done;
  saveState();
  renderRoutineSection();
}

function resetCurrentRoutineChecks() {
  const list = state.routines[activeRoutineTab] || [];
  list.forEach(t => { t.done = false; });
  saveState();
  renderRoutineSection();
  showToast('할 일 목록이 정돈되었습니다');
}

function deleteRoutineTask(tabKey, taskId) {
  state.routines[tabKey] = (state.routines[tabKey] || []).filter(t => t.id !== taskId);
  saveState();
  renderRoutineSection();
}

function resetTodayPeriodOverrides() {
  state.todayOverrides = {};
  saveState();
  renderAll();
}

function simulateTimeSlot(slotType) {
  state.autoTimeSync = true;
  manualSelectedPeriod = null;
  const bs = state.bellSchedule;
  if (slotType === 'morning') {
    simulatedClockMinutes = hmToMinutes(bs.morningStart) + 10;
  } else if (slotType === 'period1') {
    simulatedClockMinutes = hmToMinutes(bs.periods[0].start) + 15;
  } else if (slotType === 'break1') {
    simulatedClockMinutes = hmToMinutes(bs.periods[0].end) + 3;
  } else if (slotType === 'lunch') {
    simulatedClockMinutes = hmToMinutes(bs.lunchStart) + 20;
  } else if (slotType === 'afterschool') {
    const dayCount = (state.weeklyTimetable[selectedWeekdayKey]?.count || 4);
    const lastP = bs.periods[dayCount - 1] || bs.periods[3];
    simulatedClockMinutes = hmToMinutes(lastP.end) + 10;
  }
  const slot = evaluateCurrentTimeSlot();
  activeRoutineTab = slot.routineTab;
  renderAll();
}

function restoreRealTimeClock() {
  simulatedClockMinutes = null;
  state.autoTimeSync = true;
  manualSelectedPeriod = null;
  const slot = evaluateCurrentTimeSlot();
  activeRoutineTab = slot.routineTab;
  renderAll();
}

function openSubjectPickerModal(periodIdx) {
  editingPeriodIndex = periodIdx;
  const dayLabel = WEEKDAYS.find(w => w.key === selectedWeekdayKey)?.full || '';
  const titleEl = document.getElementById('subjectPickerTitle');
  if (titleEl) {
    titleEl.textContent = `${dayLabel} ${periodIdx + 1}교시 과목 선택`;
    titleEl.classList.add('whitespace-nowrap', 'truncate');
  }

  const currentSubjId = getEffectivePeriodSubjectId(selectedWeekdayKey, periodIdx);
  const grid = document.getElementById('subjectPickerGrid');
  if (!grid) return;

  grid.innerHTML = state.subjects.map(subj => {
    const isCurrent = subj.id === currentSubjId;
    return `
      <button onclick="applySubjectSelection('${subj.id}')"
        class="bento-tile p-3 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition ${
          isCurrent ? 'border-blue-600 bg-blue-50/60' : 'bg-white hover:bg-slate-50'
        }">
        ${renderSoftIcon(subj.icon, subj.grad, 'w-11 h-11', 22)}
        <span class="text-xs md:text-sm font-black text-slate-900 whitespace-nowrap truncate w-full text-center">${escapeHtml(subj.name)}</span>
      </button>
    `;
  }).join('');

  const modal = document.getElementById('subjectPickerModal');
  if (modal) modal.classList.remove('hidden');
}

function closeSubjectPickerModal() {
  const modal = document.getElementById('subjectPickerModal');
  if (modal) modal.classList.add('hidden');
  editingPeriodIndex = null;
}

function applySubjectSelection(subjId) {
  if (editingPeriodIndex === null) return;
  const chkBox = document.getElementById('chkSaveToWeeklyBase');
  const saveToWeekly = chkBox ? chkBox.checked : true;

  if (saveToWeekly) {
    state.weeklyTimetable[selectedWeekdayKey].periods[editingPeriodIndex] = subjId;
    if (selectedWeekdayKey === getTodayWeekdayKey() && state.todayOverrides) {
      delete state.todayOverrides[editingPeriodIndex];
    }
  } else {
    if (!state.todayOverrides) state.todayOverrides = {};
    state.todayOverrides[editingPeriodIndex] = subjId;
  }

  saveState();
  closeSubjectPickerModal();
  renderAll();
}

function openQuickAddTaskModal() {
  const tabSelect = document.getElementById('newTaskRoutineTab');
  if (tabSelect) tabSelect.value = activeRoutineTab;
  const titleInp = document.getElementById('newTaskTitleInput');
  if (titleInp) titleInp.value = '';

  const presetGrid = document.getElementById('frequentTaskPresetsGrid');
  if (presetGrid) {
    presetGrid.innerHTML = FREQUENT_TASK_PRESETS.map((p, idx) => `
      <button onclick="addPresetTask(${idx})"
        class="p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-blue-50 border border-slate-200 hover:border-blue-200 flex items-center gap-2 text-left text-xs font-extrabold text-slate-800 cursor-pointer transition whitespace-nowrap truncate">
        ${renderSoftIcon(p.icon, p.grad, 'w-7 h-7', 15)}
        <span class="whitespace-nowrap truncate flex-1">${escapeHtml(p.title)}</span>
      </button>
    `).join('');
  }

  const modal = document.getElementById('quickAddTaskModal');
  if (modal) modal.classList.remove('hidden');
  if (titleInp) setTimeout(() => titleInp.focus(), 80);
}

function closeQuickAddTaskModal() {
  const modal = document.getElementById('quickAddTaskModal');
  if (modal) modal.classList.add('hidden');
}

const ICON_DEFAULT_GRAD = {
  bag: 'grad-purple-blue',
  notebook: 'grad-pink-orange',
  submit: 'grad-pink-orange',
  milk: 'grad-sky-indigo',
  water: 'grad-blue-cyan',
  wash: 'grad-mint-blue',
  restroom: 'grad-blue-cyan',
  book: 'grad-purple-blue',
  pencil: 'grad-pink-orange',
  clean: 'grad-mint-blue',
  chair: 'grad-sky-indigo',
  coat: 'grad-peach-coral',
  letter: 'grad-lavender-pink',
  star: 'grad-periwinkle-rose'
};

function submitCustomTask() {
  const tabSelect = document.getElementById('newTaskRoutineTab');
  const repSelect = document.getElementById('newTaskRepeatType');
  const iconSelect = document.getElementById('newTaskIconSelect');
  const titleInp = document.getElementById('newTaskTitleInput');

  const tabKey = tabSelect ? tabSelect.value : activeRoutineTab;
  const repeat = repSelect ? repSelect.value : 'daily';
  const icon = iconSelect ? iconSelect.value : 'star';
  const grad = ICON_DEFAULT_GRAD[icon] || 'grad-purple-blue';
  const title = titleInp ? titleInp.value.trim() : '';

  if (!title) {
    showToast('할 일 내용을 입력해 주세요');
    return;
  }

  if (!state.routines[tabKey]) state.routines[tabKey] = [];
  state.routines[tabKey].push({
    id: 't_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
    icon,
    grad,
    title,
    repeat,
    done: false
  });

  activeRoutineTab = tabKey;
  state.autoTimeSync = false;
  saveState();
  closeQuickAddTaskModal();
  renderAll();
  showToast('새 할 일이 추가되었습니다');
}

function addPresetTask(presetIdx) {
  const p = FREQUENT_TASK_PRESETS[presetIdx];
  if (!p) return;
  const tabSelect = document.getElementById('newTaskRoutineTab');
  const repSelect = document.getElementById('newTaskRepeatType');

  const tabKey = (tabSelect && tabSelect.value) ? tabSelect.value : p.tab;
  const repeat = (repSelect && repSelect.value) ? repSelect.value : 'daily';

  if (!state.routines[tabKey]) state.routines[tabKey] = [];
  state.routines[tabKey].push({
    id: 't_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
    icon: p.icon,
    grad: p.grad,
    title: p.title,
    repeat,
    done: false
  });

  activeRoutineTab = tabKey;
  state.autoTimeSync = false;
  saveState();
  closeQuickAddTaskModal();
  renderAll();
  showToast('할 일이 추가되었습니다');
}

function openSettingsModal(initialTab = 'timetable') {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.remove('hidden');
  switchSettingsTab(initialTab);
}

function closeSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.add('hidden');
  renderAll();
}

function switchSettingsTab(tabName) {
  const tabs = ['timetable', 'schedule', 'subjects', 'backup'];
  tabs.forEach(t => {
    const btn = document.getElementById(`stab-${t}`);
    const pane = document.getElementById(`spane-${t}`);
    if (btn) {
      if (t === tabName) {
        btn.className = 'px-3.5 py-2 rounded-t-xl font-black text-xs md:text-sm border-b-2 border-blue-600 text-blue-600 cursor-pointer whitespace-nowrap';
      } else {
        btn.className = 'px-3.5 py-2 rounded-t-xl font-bold text-xs md:text-sm border-b-2 border-transparent text-slate-500 hover:text-slate-800 cursor-pointer whitespace-nowrap';
      }
    }
    if (pane) {
      if (t === tabName) {
        pane.classList.remove('hidden');
      } else {
        pane.classList.add('hidden');
      }
    }
  });

  if (tabName === 'timetable') renderWeeklyEditorTable();
  if (tabName === 'schedule') renderBellScheduleEditor();
  if (tabName === 'subjects') renderSubjectsManager();
}

function renderWeeklyEditorTable() {
  const container = document.getElementById('weeklyEditorTableContainer');
  if (!container) return;
  const subjectOptionsHtml = (selectedId) => state.subjects.map(s =>
    `<option value="${s.id}" ${s.id === selectedId ? 'selected' : ''}>${escapeHtml(s.name)}</option>`
  ).join('');

  let html = `
    <table class="w-full border-collapse text-xs md:text-sm">
      <thead>
        <tr class="border-b border-slate-200 text-left">
          <th class="p-2 font-black text-slate-700 whitespace-nowrap">교시</th>
          ${WEEKDAYS.map(w => `
            <th class="p-2 font-black text-slate-700 whitespace-nowrap">
              <div class="flex items-center justify-between gap-1">
                <span>${w.full}</span>
                <select onchange="updateWeeklyDayCount('${w.key}', Number(this.value))"
                  class="px-1.5 py-0.5 rounded-lg bg-[#F3F7FC] border border-slate-200 text-xs font-extrabold text-blue-700">
                  ${[4, 5, 6].map(c => `<option value="${c}" ${state.weeklyTimetable[w.key].count === c ? 'selected' : ''}>${c}교시</option>`).join('')}
                </select>
              </div>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
  `;

  for (let pIdx = 0; pIdx < 6; pIdx++) {
    html += `<tr class="border-b border-slate-100">`;
    html += `<td class="p-2 font-black text-slate-700 whitespace-nowrap">${pIdx + 1}교시</td>`;
    WEEKDAYS.forEach(w => {
      const dayData = state.weeklyTimetable[w.key];
      const isActivePeriod = pIdx < dayData.count;
      const subjId = dayData.periods[pIdx] || 'kor';
      html += `
        <td class="p-1.5 ${isActivePeriod ? '' : 'opacity-35'}">
          <select onchange="updateWeeklyPeriodSubject('${w.key}', ${pIdx}, this.value)"
            class="w-full px-2.5 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 font-extrabold text-xs text-slate-800">
            ${subjectOptionsHtml(subjId)}
          </select>
        </td>
      `;
    });
    html += `</tr>`;
  }

  html += `</tbody></table>`;
  container.innerHTML = html;
}

function updateWeeklyDayCount(dayKey, count) {
  state.weeklyTimetable[dayKey].count = count;
  saveState();
  renderWeeklyEditorTable();
}

function updateWeeklyPeriodSubject(dayKey, periodIdx, subjId) {
  state.weeklyTimetable[dayKey].periods[periodIdx] = subjId;
  saveState();
}

function renderBellScheduleEditor() {
  const bs = state.bellSchedule;
  const container = document.getElementById('bellScheduleEditorContainer');
  if (!container) return;

  let html = `
    <div class="p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between gap-2 text-xs md:text-sm whitespace-nowrap">
      <span class="font-black text-slate-800 whitespace-nowrap">등교·아침활동</span>
      <div class="flex items-center gap-1 flex-shrink-0">
        <input type="time" value="${bs.morningStart}" onchange="updateBellTime('morningStart', this.value)"
          class="px-2 py-1 rounded-lg bg-white border border-slate-200 font-extrabold" />
        <span>~</span>
        <input type="time" value="${bs.morningEnd}" onchange="updateBellTime('morningEnd', this.value)"
          class="px-2 py-1 rounded-lg bg-white border border-slate-200 font-extrabold" />
      </div>
    </div>

    <div class="p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between gap-2 text-xs md:text-sm whitespace-nowrap">
      <span class="font-black text-slate-800 whitespace-nowrap">점심시간</span>
      <div class="flex items-center gap-1 flex-shrink-0">
        <input type="time" value="${bs.lunchStart}" onchange="updateBellTime('lunchStart', this.value)"
          class="px-2 py-1 rounded-lg bg-white border border-slate-200 font-extrabold" />
        <span>~</span>
        <input type="time" value="${bs.lunchEnd}" onchange="updateBellTime('lunchEnd', this.value)"
          class="px-2 py-1 rounded-lg bg-white border border-slate-200 font-extrabold" />
      </div>
    </div>
  `;

  bs.periods.forEach((p, idx) => {
    html += `
      <div class="p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between gap-2 text-xs md:text-sm whitespace-nowrap">
        <span class="font-black text-slate-800 whitespace-nowrap">${p.num}교시</span>
        <div class="flex items-center gap-1 flex-shrink-0">
          <input type="time" value="${p.start}" onchange="updatePeriodBellTime(${idx}, 'start', this.value)"
            class="px-2 py-1 rounded-lg bg-white border border-slate-200 font-extrabold" />
          <span>~</span>
          <input type="time" value="${p.end}" onchange="updatePeriodBellTime(${idx}, 'end', this.value)"
            class="px-2 py-1 rounded-lg bg-white border border-slate-200 font-extrabold" />
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function updateBellTime(field, val) {
  if (!val) return;
  state.bellSchedule[field] = val;
  saveState();
}

function updatePeriodBellTime(idx, field, val) {
  if (!val) return;
  state.bellSchedule.periods[idx][field] = val;
  saveState();
}

function resetDefaultBellSchedule() {
  state.bellSchedule = getDefaultState().bellSchedule;
  saveState();
  renderBellScheduleEditor();
  showToast('기본 시정표로 복원되었습니다');
}

function renderSubjectsManager() {
  const grid = document.getElementById('subjectsManagerGrid');
  if (!grid) return;
  grid.innerHTML = state.subjects.map(s => {
    return `
      <div class="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between gap-2 whitespace-nowrap">
        <div class="flex items-center gap-2 min-w-0 flex-1">
          ${renderSoftIcon(s.icon, s.grad, 'w-8 h-8', 16)}
          <span class="font-black text-xs md:text-sm text-slate-800 whitespace-nowrap truncate">${escapeHtml(s.name)}</span>
        </div>
        ${state.subjects.length > 3 ? `
          <button onclick="deleteSubject('${s.id}')" title="과목 삭제"
            class="w-6 h-6 rounded-lg bg-white hover:bg-rose-500 text-slate-400 hover:text-white border border-slate-200 text-xs font-black cursor-pointer flex-shrink-0 transition">
            ✕
          </button>
        ` : ''}
      </div>
    `;
  }).join('');
}

function addCustomSubject() {
  const icon = document.getElementById('customSubjIcon')?.value || 'star';
  const nameInp = document.getElementById('customSubjName');
  const name = nameInp ? nameInp.value.trim() : '';
  const grad = document.getElementById('customSubjGrad')?.value || 'grad-purple-blue';

  if (!name) {
    showToast('과목 이름을 입력해 주세요');
    return;
  }

  state.subjects.push({
    id: 'subj_' + Date.now(),
    name,
    icon,
    grad
  });
  if (nameInp) nameInp.value = '';
  saveState();
  renderSubjectsManager();
  showToast('새 과목이 등록되었습니다');
}

function deleteSubject(subjId) {
  if (state.subjects.length <= 3) return;
  state.subjects = state.subjects.filter(s => s.id !== subjId);
  saveState();
  renderSubjectsManager();
}

function exportDataToJson() {
  const dataStr = JSON.stringify(state, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const today = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `우리반_시간표_할일_설정_${today}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('설정 파일이 다운로드되었습니다');
}

function importDataFromJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed.weeklyTimetable || !parsed.routines) {
        showToast('올바른 설정 파일이 아닙니다');
        return;
      }
      state = { ...getDefaultState(), ...parsed };
      saveState();
      closeSettingsModal();
      renderAll();
      showToast('설정을 성공적으로 불러왔습니다');
    } catch (err) {
      showToast('파일을 읽는 중 오류가 발생했습니다');
    }
  };
  reader.readAsText(file);
}

function resetAllToFactoryDefaults() {
  state = getDefaultState();
  saveState();
  closeSettingsModal();
  renderAll();
  showToast('초기 상태로 되돌렸습니다');
}

function initBoard() {
  renderStaticIcons();
  const initialSlot = evaluateCurrentTimeSlot();
  activeRoutineTab = initialSlot.routineTab;
  renderAll();
  setInterval(() => {
    updateHeaderClockAndTimer();
  }, 1000);
  setInterval(() => {
    renderTimetableSection();
  }, 15000);
}

initBoard();
