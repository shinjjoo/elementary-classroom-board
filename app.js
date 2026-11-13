const STORAGE_KEY = 'elementary_classroom_board_bento_v5';

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

function renderPeriodSquircleIcon(periodNum, isNext = false) {
  const gradClass = isNext ? 'grad-blue-cyan' : 'grad-sky-indigo';
  const label = isNext ? '다음·' + periodNum + '교시' : '교시';
  return `
    <div class="soft-icon-tile ${gradClass} period-squircle">
      <span class="period-squircle-num">${periodNum}</span>
      <span class="period-squircle-label">${label}</span>
    </div>
  `;
}

const DEFAULT_SUBJECTS = [
  // 기본 교과
  { id: 'kor',        name: '국어',       icon: 'book',     grad: 'grad-pink-orange' },
  { id: 'math',       name: '수학',       icon: 'math',     grad: 'grad-purple-blue' },
  { id: 'chang',      name: '창체',       icon: 'star',     grad: 'grad-periwinkle-rose' },
  { id: 'safe',       name: '안전한 생활', icon: 'shield',   grad: 'grad-mint-blue' },
  { id: 'read',       name: '독서',       icon: 'book',     grad: 'grad-sky-indigo' },
  { id: 'pe',         name: '체육·놀이',  icon: 'pe',       grad: 'grad-blue-cyan' },

  // 1학년 통합교과 (8과목)
  { id: 'g1_school',  name: '학교',       icon: 'school',   grad: 'grad-purple-blue', grade: 1 },
  { id: 'g1_people',  name: '사람들',     icon: 'heart',    grad: 'grad-pink-orange', grade: 1 },
  { id: 'g1_korea',   name: '우리나라',   icon: 'compass',  grad: 'grad-sky-indigo', grade: 1 },
  { id: 'g1_explore', name: '탐험',       icon: 'compass',  grad: 'grad-blue-cyan', grade: 1 },
  { id: 'g1_day',     name: '하루',       icon: 'sun',      grad: 'grad-peach-coral', grade: 1 },
  { id: 'g1_promise', name: '약속',       icon: 'shield',   grad: 'grad-mint-blue', grade: 1 },
  { id: 'g1_imagine', name: '상상',       icon: 'star',     grad: 'grad-lavender-pink', grade: 1 },
  { id: 'g1_story',   name: '이야기',     icon: 'book',     grad: 'grad-periwinkle-rose', grade: 1 },

  // 2학년 통합교과 (8과목)
  { id: 'g2_me',      name: '나',         icon: 'heart',    grad: 'grad-pink-orange', grade: 2 },
  { id: 'g2_nature',  name: '자연',       icon: 'sprout',   grad: 'grad-mint-blue', grade: 2 },
  { id: 'g2_village', name: '마을',       icon: 'school',   grad: 'grad-sky-indigo', grade: 2 },
  { id: 'g2_world',   name: '세계',       icon: 'compass',  grad: 'grad-purple-blue', grade: 2 },
  { id: 'g2_season',  name: '계절',       icon: 'leaf',     grad: 'grad-peach-coral', grade: 2 },
  { id: 'g2_person',  name: '인물',       icon: 'star',     grad: 'grad-lavender-pink', grade: 2 },
  { id: 'g2_object',  name: '물건',       icon: 'art',      grad: 'grad-blue-cyan', grade: 2 },
  { id: 'g2_memory',  name: '기억',       icon: 'notebook', grad: 'grad-periwinkle-rose', grade: 2 }
];

const FREQUENT_TASK_PRESETS = [
  { icon: 'submit',   grad: 'grad-pink-orange',   title: '숙제 바구니에 내기',           tab: 'morning' },
  { icon: 'notebook', grad: 'grad-purple-blue',   title: '알림장 책상 위에 꺼내기',       tab: 'morning' },
  { icon: 'milk',     grad: 'grad-sky-indigo',    title: '우유 마시고 갑 접기',           tab: 'lunchtime' },
  { icon: 'restroom', grad: 'grad-blue-cyan',     title: '쉬는 시간에 화장실 다녀오기',   tab: 'breaktime' },
  { icon: 'water',    grad: 'grad-mint-blue',     title: '물 한 컵 마시기',               tab: 'breaktime' },
  { icon: 'wash',     grad: 'grad-sky-indigo',    title: '점심 먹기 전 손 깨끗이 씻기',   tab: 'lunchtime' },
  { icon: 'book',     grad: 'grad-purple-blue',   title: '다음 시간 교과서 꺼내 놓기',    tab: 'classprep' },
  { icon: 'pencil',   grad: 'grad-pink-orange',   title: '연필 3자루와 지우개 준비',     tab: 'classprep' },
  { icon: 'letter',   grad: 'grad-lavender-pink', title: '가정통신문 가방에 넣기',         tab: 'afterschool' },
  { icon: 'clean',    grad: 'grad-mint-blue',     title: '내 자리 주변 쓰레기 줍기',      tab: 'afterschool' },
  { icon: 'chair',    grad: 'grad-sky-indigo',    title: '의자 소리 나지 않게 넣기',      tab: 'afterschool' },
  { icon: 'coat',     grad: 'grad-peach-coral',   title: '외투와 물통 잊지 않고 챙기기',  tab: 'afterschool' }
];

const ROUTINE_TABS_META = [
  { key: 'morning',     label: '등교 후',   sub: '아침 루틴',   icon: 'sun',    grad: 'grad-pink-orange' },
  { key: 'classprep',   label: '수업 준비', sub: '수업 시작 전', icon: 'pencil', grad: 'grad-purple-blue' },
  { key: 'breaktime',   label: '쉬는시간',  sub: '교시 사이 휴식', icon: 'water', grad: 'grad-blue-cyan' },
  { key: 'lunchtime',   label: '점심시간',  sub: '급식 및 휴식', icon: 'wash',   grad: 'grad-mint-blue' },
  { key: 'afterschool', label: '하교 전',   sub: '귀가 준비',   icon: 'bag',    grad: 'grad-periwinkle-rose' }
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
  const defaultNoticeDate = new Date().toISOString().slice(0, 10);

  const defaultStudents = [
    { id: 's1', num: 1, name: '김하늘' },
    { id: 's2', num: 2, name: '이도윤' },
    { id: 's3', num: 3, name: '박서아' },
    { id: 's4', num: 4, name: '정시우' },
    { id: 's5', num: 5, name: '최지유' },
    { id: 's6', num: 6, name: '강민준' },
    { id: 's7', num: 7, name: '조예은' },
    { id: 's8', num: 8, name: '윤유찬' },
    { id: 's9', num: 9, name: '장하은' },
    { id: 's10', num: 10, name: '임주원' },
    { id: 's11', num: 11, name: '한서진' },
    { id: 's12', num: 12, name: '오지호' },
    { id: 's13', num: 13, name: '서채원' },
    { id: 's14', num: 14, name: '신은우' },
    { id: 's15', num: 15, name: '권수아' },
    { id: 's16', num: 16, name: '황준우' },
    { id: 's17', num: 17, name: '안다은' },
    { id: 's18', num: 18, name: '송시현' },
    { id: 's19', num: 19, name: '류도현' },
    { id: 's20', num: 20, name: '문예린' }
  ];

  return {
    className: '1학년 1반',
    soundEnabled: true,
    autoTimeSync: true,
    preClassAlertEnabled: true,
    lastResetDate: defaultNoticeDate,
    subjects: JSON.parse(JSON.stringify(DEFAULT_SUBJECTS)),
    weeklyTimetable: {
      mon: { count: 4, periods: ['kor', 'math', 'g1_school', 'g1_day', 'chang', 'read'] },
      tue: { count: 5, periods: ['kor', 'math', 'g1_people', 'g1_promise', 'safe', 'read'] },
      wed: { count: 4, periods: ['kor', 'math', 'g1_school', 'chang', 'pe', 'read'] },
      thu: { count: 5, periods: ['kor', 'math', 'g1_imagine', 'g1_story', 'read', 'safe'] },
      fri: { count: 4, periods: ['kor', 'math', 'g1_day', 'safe', 'chang', 'pe'] }
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
        { id: 'm1', icon: 'bag',      grad: 'grad-purple-blue', title: '가방 정리하고 사물함에 넣기', repeat: 'daily', done: false, highlight: 1 },
        { id: 'm2', icon: 'submit',   grad: 'grad-pink-orange', title: '숙제와 알림장 바구니에 내기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'm3', icon: 'water',    grad: 'grad-blue-cyan',   title: '내 물통 제자리에 두고 물 마시기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'm4', icon: 'calendar', grad: 'grad-sky-indigo',  title: '오늘 시간표 확인하고 교과서 꺼내기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'm5', icon: 'book',     grad: 'grad-purple-blue', title: '자리에 앉아 조용히 아침 독서하기', repeat: 'daily', done: false, highlight: 0 }
      ],
      classprep: [
        { id: 'c1', icon: 'book',     grad: 'grad-purple-blue', title: '이번 시간 교과서 책상 위에 꺼내기', repeat: 'daily', done: false, highlight: 1 },
        { id: 'c2', icon: 'pencil',   grad: 'grad-pink-orange', title: '연필 3자루와 지우개 준비하기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'c3', icon: 'bag',      grad: 'grad-blue-cyan',   title: '물통과 장난감은 책상 속에 넣기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'c4', icon: 'chair',    grad: 'grad-sky-indigo',  title: '허리를 펴고 바른 자세로 앉기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'c5', icon: 'star',     grad: 'grad-periwinkle-rose', title: '선생님과 친구 바라보며 귀 기울이기', repeat: 'daily', done: false, highlight: 0 }
      ],
      breaktime: [
        { id: 'b1', icon: 'book',     grad: 'grad-purple-blue', title: '다음 시간 교과서와 준비물 미리 꺼내기', repeat: 'daily', done: false, highlight: 1 },
        { id: 'b2', icon: 'restroom', grad: 'grad-blue-cyan',   title: '화장실 미리 다녀와서 비누로 손 씻기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'b3', icon: 'water',    grad: 'grad-mint-blue',   title: '내 자리에서 물 한 모금 마시기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'b4', icon: 'shield',   grad: 'grad-sky-indigo',  title: '교실과 복도에서 사뿐사뿐 천천히 걷기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'b5', icon: 'chair',    grad: 'grad-pink-orange', title: '종이 치면 바로 자리에 앉아 기다리기', repeat: 'daily', done: false, highlight: 0 }
      ],
      lunchtime: [
        { id: 'l1', icon: 'wash',     grad: 'grad-mint-blue',   title: '급식 먹기 전 비누로 손 깨끗이 씻기', repeat: 'daily', done: false, highlight: 1 },
        { id: 'l2', icon: 'heart',    grad: 'grad-pink-orange', title: '차례를 지켜 조용히 줄 서서 급식 받기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'l3', icon: 'milk',     grad: 'grad-sky-indigo',  title: '바른 자세로 앉아 골고루 감사히 먹기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'l4', icon: 'clean',    grad: 'grad-mint-blue',   title: '내가 먹은 식판과 자리 깨끗이 정리하기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'l5', icon: 'water',    grad: 'grad-blue-cyan',   title: '식사 후 양치질하거나 입 헹구고 휴식하기', repeat: 'daily', done: false, highlight: 0 }
      ],
      afterschool: [
        { id: 'a1', icon: 'notebook', grad: 'grad-pink-orange', title: '알림장과 안내장 가방에 챙겨 넣기', repeat: 'daily', done: false, highlight: 1 },
        { id: 'a2', icon: 'clean',    grad: 'grad-mint-blue',   title: '책상 서랍 속과 내 자리 주변 정리하기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'a3', icon: 'chair',    grad: 'grad-sky-indigo',  title: '의자를 책상 안으로 소리 없이 넣기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'a4', icon: 'coat',     grad: 'grad-purple-blue', title: '외투·물통·신발주머니 빠짐없이 챙기기', repeat: 'daily', done: false, highlight: 0 },
        { id: 'a5', icon: 'heart',    grad: 'grad-lavender-pink', title: '선생님과 친구들에게 인사하고 하교하기', repeat: 'daily', done: false, highlight: 0 }
      ]
    },
    notices: {},
    frequentPhrases: [
      '내일 놀이체육 수업(활동하기 편한 옷 입고 오기)',
      '가정통신문 부모님께 드리고 확인받아 오기',
      '해지기 전에 집에 일찍 귀가하기',
      '내일 준비물: 색연필, 사인펜, 가위, 풀 챙겨 오기',
      '독서록에 책 1권 읽고 느낀 점 적어 오기',
      '비 오는 날 우산 챙기고 차조심·길조심하기'
    ],
    students: defaultStudents,
    checkCategories: [
      { id: 'morning',  label: '아침활동',    icon: '☀️' },
      { id: 'homework', label: '과제·알림장', icon: '📒' },
      { id: 'milk',     label: '우유·급식',   icon: '🥛' },
      { id: 'reading',  label: '아침독서',    icon: '📚' }
    ],
    studentChecks: {
      morning: {},
      homework: {},
      milk: {},
      reading: {},
      custom: {}
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
let dismissedPreAlertSlotKey = null;
let preAlertPreviewTimer = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    const def = getDefaultState();
    const merged = { ...def, ...parsed };
    if (!merged.routines) merged.routines = def.routines;
    if (!merged.routines.lunchtime) {
      merged.routines.lunchtime = def.routines.lunchtime;
    }
    if (!merged.checkCategories || !merged.checkCategories.length) {
      merged.checkCategories = def.checkCategories;
    }

    const todayStr = new Date().toISOString().slice(0, 10);
    if (merged.lastResetDate !== todayStr) {
      merged.lastResetDate = todayStr;
      merged.todayOverrides = {};
      Object.keys(merged.routines).forEach(tabKey => {
        merged.routines[tabKey] = merged.routines[tabKey]
          .filter(item => item.repeat !== 'today')
          .map(item => ({ ...item, done: false }));
      });
      if (merged.studentChecks) {
        Object.keys(merged.studentChecks).forEach(catKey => {
          merged.studentChecks[catKey] = {};
        });
      }
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
      headline: `등교 후 '아침 활동'`,
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
      headline: `등교 후 '아침 활동'`,
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
      routineTab: 'lunchtime',
      icon: 'wash',
      grad: 'grad-mint-blue',
      headline: `즐거운 '점심시간'`,
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
        periodNum: p.num,
        subjectName: subj.name,
        routineTab: 'classprep',
        icon: subj.icon,
        grad: subj.grad,
        headline: `'${subj.name}'`,
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
          nextPeriodNum: nextP.num,
          nextSubjectName: nextSubj.name,
          routineTab: 'breaktime',
          icon: 'water',
          grad: 'grad-blue-cyan',
          headline: `쉬는 시간 · '${nextSubj.name}'`,
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
    headline: `일과 마침 '하교 준비'`,
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
let masterCompressor = null;
let masterGain = null;

function initAudioUnlock() {
  const unlockEvents = ['click', 'touchstart', 'keydown'];
  const unlockHandler = () => {
    const ctx = getAudioCtx();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    unlockEvents.forEach(evt => document.removeEventListener(evt, unlockHandler, true));
  };
  unlockEvents.forEach(evt => document.addEventListener(evt, unlockHandler, { once: true, capture: true }));
}

function getAudioCtx() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
      try {
        masterCompressor = audioCtx.createDynamicsCompressor();
        masterCompressor.threshold.setValueAtTime(-24, audioCtx.currentTime);
        masterCompressor.knee.setValueAtTime(30, audioCtx.currentTime);
        masterCompressor.ratio.setValueAtTime(12, audioCtx.currentTime);
        masterCompressor.attack.setValueAtTime(0.003, audioCtx.currentTime);
        masterCompressor.release.setValueAtTime(0.25, audioCtx.currentTime);

        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(1.0, audioCtx.currentTime);

        masterCompressor.connect(masterGain);
        masterGain.connect(audioCtx.destination);
      } catch (e) {
        masterCompressor = null;
        masterGain = null;
      }
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function getAudioDestination(ctx) {
  return masterCompressor || ctx.destination;
}

function playSchoolChime(force = false) {
  if (!force && !state.soundEnabled) return;
  const ctx = getAudioCtx();
  if (!ctx) return;

  const notes = [
    { freq: 659.25, delay: 0.0,  dur: 0.50 }, // E5
    { freq: 783.99, delay: 0.40, dur: 0.50 }, // G5
    { freq: 659.25, delay: 0.80, dur: 0.50 }, // E5
    { freq: 523.25, delay: 1.20, dur: 0.95 }  // C5
  ];
  notes.forEach(n => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.delay);
    gain.gain.setValueAtTime(0.001, ctx.currentTime + n.delay);
    gain.gain.exponentialRampToValueAtTime(0.50, ctx.currentTime + n.delay + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.delay + n.dur);
    osc.connect(gain);
    gain.connect(getAudioDestination(ctx));
    osc.start(ctx.currentTime + n.delay);
    osc.stop(ctx.currentTime + n.delay + n.dur + 0.05);
  });
  if (force) showToast('🔔 학교 차임벨이 울립니다');
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
    gain.gain.setValueAtTime(0.40, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);
    osc.connect(gain);
    gain.connect(getAudioDestination(ctx));
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
    { f: 1046.5, d: 0.50, l: 0.65 }
  ];
  melody.forEach(n => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(n.f, ctx.currentTime + n.d);
    gain.gain.setValueAtTime(0.48, ctx.currentTime + n.d);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.d + n.l);
    osc.connect(gain);
    gain.connect(getAudioDestination(ctx));
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
  setIcon('dockNoticeIcon', 'notebook', 'grad-mint-blue', 'w-5 h-5', 12);
  setIcon('dockCheckIcon', 'check', 'grad-purple-blue', 'w-5 h-5', 12);
  setIcon('dockTimerIcon', 'sun', 'grad-pink-orange', 'w-5 h-5', 12);
}

function updateHeaderClockAndTimer() {
  const now = new Date();
  const todayDateStr = now.toISOString().slice(0, 10);
  if (state.lastResetDate !== todayDateStr) {
    state.lastResetDate = todayDateStr;
    state.todayOverrides = {};
    if (state.studentChecks) {
      Object.keys(state.studentChecks).forEach(catKey => {
        state.studentChecks[catKey] = {};
      });
    }
    if (state.routines) {
      Object.keys(state.routines).forEach(tabKey => {
        state.routines[tabKey] = state.routines[tabKey]
          .filter(item => item.repeat !== 'today')
          .map(item => ({ ...item, done: false }));
      });
    }
    saveState();
    renderStudentCheckGrid();
    renderHeroActivityCheckPanel();
  }

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
  const periodBadgeSlot = document.getElementById('currentPeriodBadgeSlot');
  const headlineEl = document.getElementById('currentStatusHeadline');
  const sublineEl = document.getElementById('currentStatusSubline');
  const timeRangeEl = document.getElementById('currentSlotTimeRange');
  const remTextEl = document.getElementById('remainingTimeText');
  const timerBarFill = document.getElementById('timerBarFill');
  const timerCirclePath = document.getElementById('timerCirclePath');

  if (manualSelectedPeriod !== null) {
    const pObj = state.bellSchedule.periods[manualSelectedPeriod];
    const subj = getSubjectById(getEffectivePeriodSubjectId(selectedWeekdayKey, manualSelectedPeriod));

    if (periodBadgeSlot) {
      periodBadgeSlot.classList.remove('hidden');
      periodBadgeSlot.innerHTML = renderPeriodSquircleIcon(pObj.num, false);
    }
    if (iconSlot) iconSlot.innerHTML = renderSoftIcon(subj.icon, subj.grad, 'w-14 h-14', 28);
    if (headlineEl) {
      headlineEl.textContent = `'${subj.name}'`;
      headlineEl.classList.add('whitespace-nowrap');
    }
    if (sublineEl) {
      sublineEl.textContent = '교과서와 연필을 준비하고 선생님 말씀에 귀 기울여요';
      sublineEl.classList.add('whitespace-nowrap');
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
    if (slot.type === 'period') {
      if (periodBadgeSlot) {
        periodBadgeSlot.classList.remove('hidden');
        periodBadgeSlot.innerHTML = renderPeriodSquircleIcon(slot.periodNum, false);
      }
    } else if (slot.type === 'break') {
      if (periodBadgeSlot) {
        periodBadgeSlot.classList.remove('hidden');
        periodBadgeSlot.innerHTML = renderPeriodSquircleIcon(slot.nextPeriodNum, true);
      }
    } else {
      // morning, lunch, afterschool
      if (periodBadgeSlot) {
        periodBadgeSlot.classList.add('hidden');
        periodBadgeSlot.innerHTML = '';
      }
    }

    if (iconSlot) iconSlot.innerHTML = renderSoftIcon(slot.icon, slot.grad, 'w-14 h-14', 28);
    if (headlineEl) {
      headlineEl.textContent = slot.headline;
      headlineEl.classList.add('whitespace-nowrap');
    }
    if (sublineEl) {
      sublineEl.textContent = slot.subline || '';
      sublineEl.classList.add('whitespace-nowrap');
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
      ? 'w-full py-2 px-2.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center gap-1.5 cursor-pointer transition whitespace-nowrap'
      : 'w-full py-2 px-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 opacity-65 flex items-center justify-center gap-1.5 cursor-pointer transition whitespace-nowrap';
  }

  // Pre-Class Alert Toggle Button state
  const btnPreAlert = document.getElementById('btnPreAlertToggle');
  const txtPreAlert = document.getElementById('preAlertToggleText');
  if (btnPreAlert) {
    btnPreAlert.className = state.preClassAlertEnabled
      ? 'cursor-pointer px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-500 text-white shadow-2xs whitespace-nowrap flex-shrink-0 flex items-center gap-1 transition'
      : 'cursor-pointer px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-slate-200 text-slate-600 whitespace-nowrap flex-shrink-0 flex items-center gap-1 transition';
  }
  if (txtPreAlert) {
    txtPreAlert.textContent = state.preClassAlertEnabled ? '30초전 알림 ON' : '30초전 알림 OFF';
  }

  // Automatic Pre-Class 30-Second Alert Trigger
  if (state.preClassAlertEnabled && !preAlertPreviewTimer) {
    const isPrepSlot = slot.type === 'break' || slot.type === 'lunch' || slot.type === 'morning';
    if (isPrepSlot && slot.remainingSec <= 30 && slot.remainingSec > 0) {
      if (dismissedPreAlertSlotKey !== slot.slotKey) {
        showPreClassAlertModal(slot.remainingSec, slot.periodIndex);
      }
    } else if (slot.type === 'period') {
      const modal = document.getElementById('preClassAlertModal');
      if (modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        playSchoolChime(true);
        showToast('🔔 수업이 시작되었습니다! 자리에 바르게 앉아요');
      }
      dismissedPreAlertSlotKey = null;
    }
  }

  requestAnimationFrame(() => fitAllTextsWithoutTruncation());
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
            <span class="subject-name text-sm md:text-base font-black text-slate-900 whitespace-nowrap truncate">
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
            class="w-7 h-7 rounded-lg bg-[#F8FAFC] hover:bg-blue-50 text-slate-500 hover:text-blue-600 border border-slate-200 hover:border-blue-200 flex items-center justify-center cursor-pointer transition flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
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
  requestAnimationFrame(() => fitAllTextsWithoutTruncation());
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
    const highlight = task.highlight || 0;
    const highlightClass = highlight === 1 ? 'task-highlight-amber' : highlight === 2 ? 'task-highlight-rose' : '';
    const badgeBg = highlight === 1 ? 'bg-amber-500 text-white' : highlight === 2 ? 'bg-rose-500 text-white' : 'bg-blue-600 text-white';

    return `
      <div class="bento-tile flex-1 min-h-[54px] px-4 py-2.5 flex items-center justify-between gap-3.5 bg-white border border-slate-200/90 rounded-2xl ${
        isTodaySpecial ? 'bg-gradient-to-r from-blue-50/40 to-white border-blue-200' : ''
      } ${highlightClass}">
        <div class="flex items-center gap-3.5 min-w-0 flex-1">
          <span class="w-8 h-8 rounded-xl ${badgeBg} font-black text-sm md:text-base flex items-center justify-center flex-shrink-0 shadow-2xs">
            ${idx + 1}
          </span>
          ${renderSoftIcon(task.icon || 'star', task.grad || 'grad-purple-blue', 'w-11 h-11', 22)}
          <span class="text-lg md:text-2xl xl:text-[1.65rem] font-black text-slate-900 whitespace-nowrap truncate flex-1 leading-snug py-0.5">
            ${escapeHtml(task.title)}
          </span>
          ${isTodaySpecial ? `
            <span class="px-2.5 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-600 border border-blue-200 whitespace-nowrap flex-shrink-0">
              오늘
            </span>
          ` : ''}
        </div>

        <div class="flex items-center gap-2 flex-shrink-0">
          <button onclick="event.stopPropagation(); toggleRoutineTaskHighlight('${activeRoutineTab}', '${task.id}')"
            title="할 일 강조 색상 변경 (일반 → 중요 → 꼭!)"
            class="px-2.5 h-8 rounded-xl ${
              task.highlight === 1
                ? 'bg-amber-500 text-white border-amber-600'
                : task.highlight === 2
                ? 'bg-rose-500 text-white border-rose-600'
                : 'bg-slate-50 hover:bg-amber-50 text-slate-500 hover:text-amber-600 border-slate-200/80'
            } border flex items-center justify-center gap-1 text-xs font-extrabold cursor-pointer flex-shrink-0 transition whitespace-nowrap">
            <span>★</span>
            <span>${task.highlight === 1 ? '중요' : task.highlight === 2 ? '꼭!' : '강조'}</span>
          </button>

          <button onclick="event.stopPropagation(); openEditRoutineTaskModal('${activeRoutineTab}', '${task.id}')"
            title="할 일 내용 수정"
            class="w-8 h-8 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 border border-slate-200/80 flex items-center justify-center cursor-pointer flex-shrink-0 transition">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </button>

          <button onclick="event.stopPropagation(); deleteRoutineTask('${activeRoutineTab}', '${task.id}')"
            title="삭제"
            class="w-8 h-8 rounded-xl bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-slate-200/80 flex items-center justify-center text-xs font-bold cursor-pointer flex-shrink-0 transition">
            ✕
          </button>
        </div>
      </div>
    `;
  }).join('');
  requestAnimationFrame(() => fitAllTextsWithoutTruncation());
}

function toggleRoutineTaskHighlight(tabKey, taskId) {
  const list = state.routines[tabKey] || [];
  const item = list.find(t => t.id === taskId);
  if (!item) return;
  item.highlight = ((item.highlight || 0) + 1) % 3;
  playStampSound(item.highlight > 0);
  saveState();
  renderRoutineSection();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fitAllTextsWithoutTruncation() {
  const selectors = [
    '#currentStatusHeadline',
    '#currentStatusSubline',
    '#routineCardsGrid .bento-tile span.flex-1',
    '#periodListContainer .bento-tile span.truncate',
    '#heroIncompleteStudentsList button span.truncate'
  ];

  const scaleFactors = [0.94, 0.88, 0.82, 0.76, 0.70, 0.64, 0.58, 0.52, 0.46, 0.40];

  selectors.forEach(sel => {
    const elements = document.querySelectorAll(sel);
    elements.forEach(el => {
      // 1. Reset inline styles to default computed styles
      el.style.removeProperty('font-size');
      el.style.removeProperty('letter-spacing');

      if (el.clientWidth <= 0) return;

      // Check if text overflows container width
      if (el.scrollWidth > el.clientWidth) {
        // Step 1: Reduce letter-spacing with !important
        el.style.setProperty('letter-spacing', '-0.04em', 'important');
        if (el.scrollWidth <= el.clientWidth) return;

        el.style.setProperty('letter-spacing', '-0.065em', 'important');
        if (el.scrollWidth <= el.clientWidth) return;

        // Step 2: Gradually reduce font-size with !important (down to min 11px)
        const computedStyle = window.getComputedStyle(el);
        const baseFontSize = parseFloat(computedStyle.fontSize);
        if (isNaN(baseFontSize) || baseFontSize <= 0) return;

        for (const factor of scaleFactors) {
          const nextSize = Math.max(11, Math.round(baseFontSize * factor * 10) / 10);
          el.style.setProperty('font-size', `${nextSize}px`, 'important');
          if (el.scrollWidth <= el.clientWidth) {
            break;
          }
          if (nextSize <= 11) {
            break;
          }
        }
      }
    });
  });
}

function renderAll() {
  updateHeaderClockAndTimer();
  renderTimetableSection();
  renderRoutineSection();
  renderHeroActivityCheckPanel();
  requestAnimationFrame(() => fitAllTextsWithoutTruncation());
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
  activeRoutineTab = 'lunchtime';
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

let editingRoutineTaskContext = null;

function openEditRoutineTaskModal(tabKey, taskId) {
  const list = state.routines[tabKey] || [];
  const task = list.find(t => t.id === taskId);
  if (!task) return;

  editingRoutineTaskContext = { tabKey, taskId };

  const iconSelect = document.getElementById('editTaskIconSelect');
  if (iconSelect) iconSelect.value = task.icon || 'star';

  const repSelect = document.getElementById('editTaskRepeatType');
  if (repSelect) repSelect.value = task.repeat || 'daily';

  const titleInp = document.getElementById('editTaskTitleInput');
  if (titleInp) titleInp.value = task.title || '';

  const modal = document.getElementById('editRoutineTaskModal');
  if (modal) modal.classList.remove('hidden');
  if (titleInp) setTimeout(() => titleInp.focus(), 80);
}

function closeEditRoutineTaskModal() {
  const modal = document.getElementById('editRoutineTaskModal');
  if (modal) modal.classList.add('hidden');
  editingRoutineTaskContext = null;
}

function saveEditedRoutineTask() {
  if (!editingRoutineTaskContext) return;
  const { tabKey, taskId } = editingRoutineTaskContext;
  const list = state.routines[tabKey] || [];
  const task = list.find(t => t.id === taskId);
  if (!task) {
    closeEditRoutineTaskModal();
    return;
  }

  const titleInp = document.getElementById('editTaskTitleInput');
  const iconSelect = document.getElementById('editTaskIconSelect');
  const repSelect = document.getElementById('editTaskRepeatType');

  const title = titleInp ? titleInp.value.trim() : '';
  if (!title) {
    showToast('할 일 내용을 입력해 주세요');
    return;
  }

  const icon = iconSelect ? iconSelect.value : (task.icon || 'star');
  const repeat = repSelect ? repSelect.value : (task.repeat || 'daily');
  const grad = ICON_DEFAULT_GRAD[icon] || task.grad || 'grad-purple-blue';

  task.title = title;
  task.icon = icon;
  task.repeat = repeat;
  task.grad = grad;

  saveState();
  closeEditRoutineTaskModal();
  renderRoutineSection();
  showToast('할 일이 수정되었습니다');
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

/* ==========================================================================
   TOOL 1: PRE-CLASS 30-SECOND ALERT MODAL & PREVIEW
   ========================================================================== */

function showPreClassAlertModal(remainingSec, nextPeriodIdx) {
  const modal = document.getElementById('preClassAlertModal');
  if (!modal) return;

  const targetPeriodIdx = (nextPeriodIdx !== null && nextPeriodIdx !== undefined) ? nextPeriodIdx : 0;
  const subjId = getEffectivePeriodSubjectId(selectedWeekdayKey, targetPeriodIdx);
  const subj = getSubjectById(subjId);
  const periodNum = targetPeriodIdx + 1;

  // 1. Next Period Squircle Badge
  const periodSlot = document.getElementById('preAlertPeriodBadgeSlot');
  if (periodSlot) {
    periodSlot.innerHTML = renderPeriodSquircleIcon(periodNum, false);
  }

  // 2. Large Subject Soft Icon
  const iconSlot = document.getElementById('preAlertIconSlot');
  if (iconSlot) {
    iconSlot.innerHTML = renderSoftIcon(subj.icon, subj.grad, 'w-24 h-24 md:w-28 md:h-28', 52);
  }

  // 3. Countdown Number
  const numEl = document.getElementById('preAlertCountdownNum');
  if (numEl) numEl.textContent = Math.max(1, remainingSec);

  // 4. Concise Title & Prep Message
  const titleEl = document.getElementById('preAlertTitle');
  if (titleEl) {
    titleEl.textContent = `${periodNum}교시 '${subj.name}' 곧 시작!`;
  }

  const msgEl = document.getElementById('preAlertPrepMessage');
  if (msgEl) {
    msgEl.textContent = '아래 3가지를 지금 바로 준비해요!';
  }

  // 5. Subject-tailored 3-Step Action Cards
  const card1El = document.getElementById('preAlertCard1Title');
  const card2El = document.getElementById('preAlertCard2Title');
  const card3El = document.getElementById('preAlertCard3Title');

  let card1Text = `'${subj.name}' 책 꺼내기`;
  let card2Text = '연필·지우개 준비';
  let card3Text = '자리에 조용히 앉기';

  const sid = (subj.id || '').toLowerCase();
  const sname = subj.name || '';

  if (sid === 'pe' || sname.includes('체육') || sname.includes('놀이')) {
    card1Text = '물통·손수건 챙기기';
    card2Text = '운동화 끈 단단히 묶기';
    card3Text = '조용히 줄 서서 대기';
  } else if (sid === 'art' || sname.includes('미술') || sname.includes('만들기') || sname.includes('그리기')) {
    card1Text = '미술 준비물 꺼내기';
    card2Text = '색연필·가위·풀 준비';
    card3Text = '책상 정리하고 앉기';
  } else if (sid === 'music' || sname.includes('음악') || sname.includes('노래') || sname.includes('악기')) {
    card1Text = `'${subj.name}' 책·악기 준비`;
    card2Text = '바른 자세로 손 모으기';
    card3Text = '조용히 자리에 앉기';
  } else if (sid === 'read' || sname.includes('독서')) {
    card1Text = '읽을 책 1권 꺼내기';
    card2Text = '독서록·필기도구 준비';
    card3Text = '조용히 책 읽기 대기';
  }

  if (card1El) card1El.textContent = card1Text;
  if (card2El) card2El.textContent = card2Text;
  if (card3El) card3El.textContent = card3Text;

  // 6. Progress Bar
  const barEl = document.getElementById('preAlertProgressBar');
  if (barEl) {
    const pct = Math.max(0, Math.min(100, Math.round((remainingSec / 30) * 100)));
    barEl.style.width = `${pct}%`;
  }

  // When opening for the first time, immediately play school chime with force=true
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    playSchoolChime(true);
  } else {
    // While modal is open, play countdown tick beeps at 5, 4, 3, 2, 1 seconds
    if (remainingSec >= 1 && remainingSec <= 5) {
      playTimerTickBeep(remainingSec);
    }
  }
}

function dismissPreClassAlert() {
  const modal = document.getElementById('preClassAlertModal');
  if (modal) modal.classList.add('hidden');

  if (preAlertPreviewTimer) {
    clearInterval(preAlertPreviewTimer);
    preAlertPreviewTimer = null;
  }

  const slot = evaluateCurrentTimeSlot();
  dismissedPreAlertSlotKey = slot.slotKey;
  showToast('준비 완료! 힘차게 수업을 시작해 볼까요?');
}

function togglePreClassAlert() {
  state.preClassAlertEnabled = !state.preClassAlertEnabled;
  saveState();
  updateHeaderClockAndTimer();
  showToast(state.preClassAlertEnabled ? '수업 30초 전 준비 알림이 켜졌습니다' : '수업 30초 전 준비 알림이 꺼졌습니다');
}

function triggerPreClassAlertPreview() {
  if (preAlertPreviewTimer) {
    clearInterval(preAlertPreviewTimer);
    preAlertPreviewTimer = null;
  }

  let sec = 30;
  const slot = evaluateCurrentTimeSlot();
  const nextIdx = slot.periodIndex !== null ? slot.periodIndex : 1;

  showPreClassAlertModal(sec, nextIdx);

  preAlertPreviewTimer = setInterval(() => {
    sec--;
    if (sec <= 0) {
      clearInterval(preAlertPreviewTimer);
      preAlertPreviewTimer = null;
      const modal = document.getElementById('preClassAlertModal');
      if (modal) modal.classList.add('hidden');
      playSchoolChime(true);
      showToast('🔔 30초 준비 완료! 수업이 시작되었습니다');
    } else {
      showPreClassAlertModal(sec, nextIdx);
    }
  }, 1000);
}

/* ==========================================================================
   TOOL 2: NOTICE BOARD & CHALKBOARD DRAWING
   ========================================================================== */

let noticeDrawMode = false;
let noticePenColor = '#FDE047';
let noticeIsHighlighter = false;
let isDrawingNotice = false;
let lastDrawX = 0;
let lastDrawY = 0;

function openNoticeBoardModal() {
  const modal = document.getElementById('noticeBoardModal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const dateInput = document.getElementById('noticeDateInput');
  if (dateInput && !dateInput.value) {
    dateInput.value = todayStr;
  }

  const targetDate = (dateInput && dateInput.value) ? dateInput.value : todayStr;
  loadNoticeForDate(targetDate);
  const editor = document.getElementById('noticeEditorArea');
  if (editor) {
    editor.style.lineHeight = '1.55';
    editor.querySelectorAll('*').forEach(el => {
      if (el.style && el.style.lineHeight) el.style.lineHeight = '1.55';
    });
  }
  initNoticeCanvasEvents();
  renderFrequentPhrasesList();
}

function closeNoticeBoardModal() {
  const modal = document.getElementById('noticeBoardModal');
  if (modal) modal.classList.add('hidden');
}

function toggleNoticeFullscreen() {
  const modal = document.getElementById('noticeBoardModal');
  const card = document.getElementById('noticeBoardCard');
  if (!card) return;

  if (card.classList.contains('max-w-6xl')) {
    card.classList.remove('max-w-6xl', 'h-[90vh]');
    card.classList.add('w-full', 'h-full', 'rounded-none');
    if (modal) modal.classList.remove('p-2', 'md:p-4');
  } else {
    card.classList.remove('w-full', 'h-full', 'rounded-none');
    card.classList.add('max-w-6xl', 'h-[90vh]');
    if (modal) modal.classList.add('p-2', 'md:p-4');
  }
}

function formatNoticeDateDisplay(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length < 3) return dateStr;
  const m = Number(parts[1]);
  const d = Number(parts[2]);
  const dt = new Date(parts[0], m - 1, d);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return `${m}월 ${d}일 (${days[dt.getDay()]})`;
}

function loadNoticeForDate(dateStr) {
  const dateFmt = document.getElementById('noticeDateFormatted');
  const dateTitle = document.getElementById('noticeBoardDateTitle');
  const formattedText = formatNoticeDateDisplay(dateStr);

  if (dateFmt) dateFmt.textContent = formattedText;
  if (dateTitle) dateTitle.textContent = formattedText;

  const classTitle = document.getElementById('noticeClassTitle');
  if (classTitle) classTitle.textContent = `${state.className} [${new Date().getFullYear()}]`;

  const dateData = (state.notices && state.notices[dateStr]) || {
    html: '',
    bgTheme: 'chalkboard',
    fontSize: 38,
    drawingDataUrl: ''
  };

  const editor = document.getElementById('noticeEditorArea');
  if (editor) {
    editor.innerHTML = dateData.html || '';
    editor.style.fontSize = `${dateData.fontSize || 38}px`;
    editor.style.lineHeight = '1.55';
    editor.querySelectorAll('*').forEach(el => {
      if (el.style && el.style.lineHeight) el.style.lineHeight = '1.55';
    });
  }

  setNoticeBgTheme(dateData.bgTheme || 'chalkboard', false);
  restoreNoticeCanvas(dateData.drawingDataUrl || '');
  updateNoticeFontSizeBadge(dateData.fontSize || 38);
}

function saveNoticeData() {
  const dateInput = document.getElementById('noticeDateInput');
  const dateStr = dateInput ? dateInput.value : new Date().toISOString().slice(0, 10);
  const editor = document.getElementById('noticeEditorArea');
  const html = editor ? editor.innerHTML : '';
  const currentFontSize = editor ? parseInt(window.getComputedStyle(editor).fontSize, 10) || 38 : 38;

  const surface = document.getElementById('noticeSurfaceWrap');
  let bgTheme = 'chalkboard';
  if (surface) {
    if (surface.classList.contains('notice-bg-note15')) bgTheme = 'note15';
    else if (surface.classList.contains('notice-bg-note10')) bgTheme = 'note10';
  }

  const canvas = document.getElementById('noticeDrawCanvas');
  const drawingDataUrl = canvas ? canvas.toDataURL() : '';

  if (!state.notices) state.notices = {};
  state.notices[dateStr] = {
    html,
    bgTheme,
    fontSize: currentFontSize,
    drawingDataUrl
  };

  saveState();
  renderNoticeHistoryList();
  showToast(`${formatNoticeDateDisplay(dateStr)} 알림장이 저장되었습니다!`);
}

function setNoticeBgTheme(theme, save = true) {
  const surface = document.getElementById('noticeSurfaceWrap');
  const btnChalk = document.getElementById('btnBgChalkboard');
  const btnN15 = document.getElementById('btnBgNote15');
  const btnN10 = document.getElementById('btnBgNote10');

  if (surface) {
    surface.classList.remove('notice-bg-chalkboard', 'notice-bg-note15', 'notice-bg-note10');
    surface.classList.add(`notice-bg-${theme}`);
  }

  [btnChalk, btnN15, btnN10].forEach(b => {
    if (b) {
      b.className = 'px-2.5 py-1 rounded-lg font-bold text-slate-600 hover:bg-slate-100 transition';
    }
  });

  if (theme === 'chalkboard' && btnChalk) {
    btnChalk.className = 'px-3 py-1 rounded-lg font-black bg-slate-800 text-white shadow-2xs transition';
  } else if (theme === 'note15' && btnN15) {
    btnN15.className = 'px-3 py-1 rounded-lg font-black bg-blue-600 text-white shadow-2xs transition';
  } else if (theme === 'note10' && btnN10) {
    btnN10.className = 'px-3 py-1 rounded-lg font-black bg-blue-600 text-white shadow-2xs transition';
  }

  if (save) saveNoticeData();
}

function updateNoticeFontSizeBadge(size) {
  const badge = document.getElementById('noticeFontSizeBadge');
  if (badge) badge.textContent = `${size}px`;
}

function changeNoticeFontSize(delta) {
  const editor = document.getElementById('noticeEditorArea');
  if (!editor) return;
  const cur = parseInt(window.getComputedStyle(editor).fontSize, 10) || 38;
  const step = (cur >= 60 || (cur + delta >= 60))
    ? (delta > 0 ? 8 : -8)
    : (delta > 0 ? 6 : -6);
  const next = Math.max(20, Math.min(128, cur + (delta > 0 ? Math.abs(step) : -Math.abs(step))));
  editor.style.fontSize = `${next}px`;
  editor.style.lineHeight = '1.55';
  editor.querySelectorAll('*').forEach(el => {
    if (el.style && el.style.lineHeight) el.style.lineHeight = '1.55';
  });
  updateNoticeFontSizeBadge(next);
}

function setNoticeMaxFontSize() {
  const editor = document.getElementById('noticeEditorArea');
  if (!editor) return;
  editor.style.fontSize = '128px';
  editor.style.lineHeight = '1.55';
  editor.querySelectorAll('*').forEach(el => {
    if (el.style && el.style.lineHeight) el.style.lineHeight = '1.55';
  });
  updateNoticeFontSizeBadge(128);
}

function execNoticeFormat(cmd) {
  document.execCommand(cmd, false, null);
  const editor = document.getElementById('noticeEditorArea');
  if (editor) editor.focus();
}

function setNoticeTextColor(color) {
  document.execCommand('foreColor', false, color);
  const editor = document.getElementById('noticeEditorArea');
  if (editor) editor.focus();
}

/* Notice Canvas Drawing */
function initNoticeCanvasEvents() {
  const canvas = document.getElementById('noticeDrawCanvas');
  const surface = document.getElementById('noticeSurfaceWrap');
  if (!canvas || !surface || canvas.__eventsBound) return;

  const resize = () => {
    const rect = surface.getBoundingClientRect();
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
      const prevData = canvas.toDataURL();
      canvas.width = rect.width;
      canvas.height = rect.height;
      if (prevData && prevData.length > 30) {
        restoreNoticeCanvas(prevData);
      }
    }
  };
  resize();
  window.addEventListener('resize', resize);

  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDraw = (e) => {
    if (!noticeDrawMode) return;
    isDrawingNotice = true;
    const pos = getPos(e);
    lastDrawX = pos.x;
    lastDrawY = pos.y;
    e.preventDefault();
  };

  const draw = (e) => {
    if (!isDrawingNotice || !noticeDrawMode) return;
    const pos = getPos(e);
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(lastDrawX, lastDrawY);
    ctx.lineTo(pos.x, pos.y);

    if (noticeIsHighlighter) {
      ctx.strokeStyle = noticePenColor;
      ctx.lineWidth = 18;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = 0.35;
    } else {
      ctx.strokeStyle = noticePenColor;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = 1.0;
    }

    ctx.stroke();
    lastDrawX = pos.x;
    lastDrawY = pos.y;
    e.preventDefault();
  };

  const stopDraw = () => {
    isDrawingNotice = false;
  };

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  window.addEventListener('mouseup', stopDraw);

  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  window.addEventListener('touchend', stopDraw);

  canvas.__eventsBound = true;
}

function toggleNoticeDrawMode() {
  noticeDrawMode = !noticeDrawMode;
  const canvas = document.getElementById('noticeDrawCanvas');
  const label = document.getElementById('drawModeLabel');
  const btn = document.getElementById('btnToggleDrawMode');

  if (noticeDrawMode) {
    if (canvas) canvas.classList.remove('pointer-events-none');
    if (label) label.textContent = '판서 그리기 ON';
    if (btn) btn.className = 'px-2.5 py-1.5 rounded-xl bg-amber-500 text-white font-black flex items-center gap-1 cursor-pointer transition shadow-2xs';
  } else {
    if (canvas) canvas.classList.add('pointer-events-none');
    if (label) label.textContent = '판서 그리기 OFF';
    if (btn) btn.className = 'px-2.5 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-black flex items-center gap-1 cursor-pointer transition';
  }
}

function setNoticePenColor(color) {
  noticePenColor = color;
  noticeIsHighlighter = false;
  if (!noticeDrawMode) toggleNoticeDrawMode();
}

function toggleNoticeHighlighter() {
  noticeIsHighlighter = !noticeIsHighlighter;
  const btn = document.getElementById('btnNoticeHighlighter');
  if (btn) {
    btn.className = noticeIsHighlighter
      ? 'px-2 py-1 rounded-xl bg-yellow-300 border border-yellow-400 text-amber-950 font-black cursor-pointer shadow-2xs transition'
      : 'px-2 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-yellow-50 cursor-pointer transition';
  }
  if (!noticeDrawMode) toggleNoticeDrawMode();
}

function clearNoticeCanvas() {
  const canvas = document.getElementById('noticeDrawCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function restoreNoticeCanvas(dataUrl) {
  const canvas = document.getElementById('noticeDrawCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!dataUrl) return;

  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = dataUrl;
}

/* Frequent Phrases Drawer */
function toggleFrequentPhrasesDrawer() {
  const drawer = document.getElementById('frequentPhrasesDrawer');
  if (drawer) drawer.classList.toggle('hidden');
}

function renderFrequentPhrasesList() {
  const list = document.getElementById('frequentPhrasesList');
  if (!list) return;
  const phrases = state.frequentPhrases || [];
  list.innerHTML = phrases.map((text, idx) => `
    <button onclick="insertFrequentPhrase(${idx})"
      class="px-3 py-1.5 rounded-xl bg-white hover:bg-amber-100 border border-amber-200 text-slate-800 font-bold text-xs whitespace-nowrap cursor-pointer transition flex items-center gap-1 shadow-2xs">
      <span>➕</span>
      <span>${escapeHtml(text)}</span>
    </button>
  `).join('');
}

function insertFrequentPhrase(idx) {
  const text = state.frequentPhrases[idx];
  if (!text) return;
  const editor = document.getElementById('noticeEditorArea');
  if (!editor) return;

  const existingLines = editor.innerText.split('\n').filter(l => l.trim().length > 0);
  const nextNum = existingLines.length + 1;
  const newLine = document.createElement('div');
  newLine.textContent = `${nextNum}. ${text}`;
  editor.appendChild(newLine);
  editor.focus();
  playStampSound(true);
}

/* Notice History Drawer */
function toggleNoticeHistoryDrawer() {
  const drawer = document.getElementById('noticeHistoryDrawer');
  if (!drawer) return;
  drawer.classList.toggle('hidden');
  renderNoticeHistoryList();
}

function renderNoticeHistoryList() {
  const list = document.getElementById('noticeHistoryList');
  if (!list) return;
  const notices = state.notices || {};
  const dates = Object.keys(notices).sort().reverse();

  if (dates.length === 0) {
    list.innerHTML = `<span class="text-xs text-slate-400 font-bold">저장된 알림장이 없습니다</span>`;
    return;
  }

  list.innerHTML = dates.map(d => `
    <button onclick="document.getElementById('noticeDateInput').value='${d}'; loadNoticeForDate('${d}');"
      class="px-2.5 py-1 rounded-xl bg-white hover:bg-blue-100 border border-blue-200 text-slate-800 font-extrabold text-xs whitespace-nowrap cursor-pointer transition shadow-2xs">
      ${formatNoticeDateDisplay(d)}
    </button>
  `).join('');
}

/* ==========================================================================
   TOOL 3: STUDENT ACTIVITY & HOMEWORK CHECKLIST
   ========================================================================== */

let activeStudentCheckCategory = 'morning';
let studentCheckFilterMode = 'all';

function ensureActiveCheckCategoryValid() {
  const cats = state.checkCategories || [];
  if (!cats.some(c => c.id === activeStudentCheckCategory)) {
    activeStudentCheckCategory = cats[0]?.id || 'morning';
  }
}

function openStudentCheckModal() {
  const modal = document.getElementById('studentCheckModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  ensureActiveCheckCategoryValid();
  renderStudentCheckTabs();
  renderStudentCheckGrid();
}

function closeStudentCheckModal() {
  const modal = document.getElementById('studentCheckModal');
  if (modal) modal.classList.add('hidden');
}

function switchCheckCategory(catKey) {
  activeStudentCheckCategory = catKey;
  renderStudentCheckTabs();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();
}

function renderStudentCheckTabs() {
  const tabs = document.getElementById('checkCategoryTabs');
  if (!tabs) return;
  ensureActiveCheckCategoryValid();
  const categories = state.checkCategories || [];
  tabs.innerHTML = categories.map(c => {
    const isSel = c.id === activeStudentCheckCategory;
    return `
      <div class="inline-flex items-center rounded-xl transition ${
        isSel
          ? 'bg-indigo-600 text-white shadow-xs'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
      }">
        <button onclick="switchCheckCategory('${c.id}')"
          class="pl-3 py-1.5 pr-1 font-black text-xs md:text-sm cursor-pointer whitespace-nowrap flex items-center gap-1.5">
          <span>${c.icon ? c.icon + ' ' : ''}${escapeHtml(c.label)}</span>
        </button>
        <button onclick="event.stopPropagation(); deleteCheckCategory('${c.id}')" title="활동 삭제"
          class="mr-1.5 ml-0.5 px-1.5 py-0.5 rounded-lg hover:bg-black/15 text-[10px] font-black cursor-pointer transition">
          ✕
        </button>
      </div>
    `;
  }).join('');
}

function addCheckCategory() {
  const input = document.getElementById('newCheckCategoryInput');
  if (!input) return;
  const name = input.value.trim();
  if (!name) {
    showToast('활동 이름을 입력해 주세요');
    return;
  }
  if (!state.checkCategories) state.checkCategories = [];
  const newId = 'cat_' + Date.now();
  state.checkCategories.push({
    id: newId,
    label: name,
    icon: '⭐'
  });
  if (!state.studentChecks) state.studentChecks = {};
  state.studentChecks[newId] = {};
  activeStudentCheckCategory = newId;
  input.value = '';
  saveState();
  renderStudentCheckTabs();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();
  showToast(`'${name}' 활동 항목이 추가되었습니다!`);
}

function deleteCheckCategory(catId) {
  if (!state.checkCategories || state.checkCategories.length <= 1) {
    showToast('최소 1개의 활동 항목이 필요합니다');
    return;
  }
  const target = state.checkCategories.find(c => c.id === catId);
  const targetName = target ? target.label : '활동';
  state.checkCategories = state.checkCategories.filter(c => c.id !== catId);
  if (state.studentChecks && state.studentChecks[catId]) {
    delete state.studentChecks[catId];
  }
  if (activeStudentCheckCategory === catId) {
    activeStudentCheckCategory = state.checkCategories[0]?.id || 'morning';
  }
  saveState();
  renderStudentCheckTabs();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();
  showToast(`'${targetName}' 항목이 삭제되었습니다`);
}

function setStudentCheckFilter(filterMode) {
  studentCheckFilterMode = filterMode;
  const btnAll = document.getElementById('btnCheckFilterAll');
  const btnInc = document.getElementById('btnCheckFilterIncomplete');

  if (filterMode === 'all') {
    if (btnAll) btnAll.className = 'px-2.5 py-1 rounded-lg text-xs font-black bg-indigo-600 text-white shadow-2xs transition';
    if (btnInc) btnInc.className = 'px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition';
  } else {
    if (btnAll) btnAll.className = 'px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition';
    if (btnInc) btnInc.className = 'px-2.5 py-1 rounded-lg text-xs font-black bg-indigo-600 text-white shadow-2xs transition';
  }

  renderStudentCheckGrid();
}

function toggleStudentCheckStatus(studentId) {
  ensureActiveCheckCategoryValid();
  if (!state.studentChecks) state.studentChecks = {};
  if (!state.studentChecks[activeStudentCheckCategory]) {
    state.studentChecks[activeStudentCheckCategory] = {};
  }
  const current = state.studentChecks[activeStudentCheckCategory][studentId] || 0;
  const next = (current + 1) % 3;
  state.studentChecks[activeStudentCheckCategory][studentId] = next;

  if (next === 1) {
    playStampSound(true);
  } else if (next === 2) {
    playStampSound(false);
  }

  saveState();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();

  // Check if all students completed
  const students = state.students || [];
  const checks = state.studentChecks[activeStudentCheckCategory] || {};
  const completedCount = students.filter(s => checks[s.id] === 1).length;
  if (students.length > 0 && completedCount === students.length) {
    playCelebrationFanfare();
    showToast('🎉 우리 반 모든 친구가 활동을 완료했습니다! 참 잘했어요!');
  }
}

function quickCompleteStudentFromHero(studentId) {
  ensureActiveCheckCategoryValid();
  if (!state.studentChecks) state.studentChecks = {};
  if (!state.studentChecks[activeStudentCheckCategory]) {
    state.studentChecks[activeStudentCheckCategory] = {};
  }
  state.studentChecks[activeStudentCheckCategory][studentId] = 1;
  playStampSound(true);
  saveState();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();

  const students = state.students || [];
  const checks = state.studentChecks[activeStudentCheckCategory] || {};
  const completedCount = students.filter(s => checks[s.id] === 1).length;
  if (students.length > 0 && completedCount === students.length) {
    playCelebrationFanfare();
    showToast('🎉 우리 반 모든 친구가 활동을 완료했습니다! 참 잘했어요!');
  }
}

function markAllStudentsCheck(status) {
  ensureActiveCheckCategoryValid();
  if (!state.studentChecks) state.studentChecks = {};
  if (!state.studentChecks[activeStudentCheckCategory]) {
    state.studentChecks[activeStudentCheckCategory] = {};
  }
  const students = state.students || [];
  students.forEach(s => {
    state.studentChecks[activeStudentCheckCategory][s.id] = status;
  });

  if (status === 1) {
    playCelebrationFanfare();
    showToast('전원 완료 처리되었습니다!');
  } else {
    showToast('전체 초기화되었습니다');
  }

  saveState();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();
}

function renderStudentCheckGrid() {
  const grid = document.getElementById('studentCheckGrid');
  if (!grid) return;
  ensureActiveCheckCategoryValid();

  const students = state.students || [];
  const checks = (state.studentChecks && state.studentChecks[activeStudentCheckCategory]) || {};

  const completedCount = students.filter(s => checks[s.id] === 1).length;
  const totalCount = students.length;
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const sumText = document.getElementById('studentCheckSummaryText');
  if (sumText) sumText.textContent = `완료 ${completedCount}명 / 전체 ${totalCount}명 (${pct}%)`;

  const bar = document.getElementById('studentCheckProgressBar');
  if (bar) bar.style.width = `${pct}%`;

  const filtered = students.filter(s => {
    const st = checks[s.id] || 0;
    if (studentCheckFilterMode === 'incomplete') return st !== 1;
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 font-bold">
        ${studentCheckFilterMode === 'incomplete' ? '모든 친구가 완료했습니다! 👏' : '등록된 학생이 없습니다'}
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(s => {
    const st = checks[s.id] || 0;
    const cardBg = st === 1
      ? 'bg-indigo-50/80 border-indigo-400 text-indigo-900 shadow-sm'
      : st === 2
      ? 'bg-amber-50/90 border-amber-400 text-amber-900 shadow-sm'
      : 'bg-white border-slate-200/90 text-slate-800 hover:border-indigo-300';

    const numBadge = st === 1
      ? 'bg-indigo-600 text-white'
      : st === 2
      ? 'bg-amber-500 text-white'
      : 'bg-slate-100 text-slate-600';

    const statusPill = st === 1
      ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-black bg-indigo-600 text-white shadow-2xs">완료 ★</span>`
      : st === 2
      ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-black bg-amber-500 text-white shadow-2xs">확인필요</span>`
      : `<span class="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-100 text-slate-400">미확인</span>`;

    return `
      <button onclick="toggleStudentCheckStatus('${s.id}')"
        class="bento-tile p-3 rounded-2xl border flex flex-col justify-between gap-2 text-left cursor-pointer transition select-none ${cardBg}">
        <div class="flex items-center justify-between w-full">
          <span class="w-6 h-6 rounded-lg ${numBadge} text-xs font-black flex items-center justify-center flex-shrink-0">
            ${s.num}
          </span>
          ${statusPill}
        </div>
        <div class="text-base md:text-lg font-black truncate w-full pt-1">
          ${escapeHtml(s.name)}
        </div>
      </button>
    `;
  }).join('');
}

function renderHeroActivityCheckPanel() {
  const panel = document.getElementById('heroActivityCheckPanel');
  if (!panel) return;
  ensureActiveCheckCategoryValid();

  // 1. Render pills
  const pillsEl = document.getElementById('heroCheckCategoryPills');
  const categories = state.checkCategories || [];
  if (pillsEl) {
    pillsEl.innerHTML = categories.map(c => {
      const isSel = c.id === activeStudentCheckCategory;
      return `
        <button onclick="switchCheckCategory('${c.id}')"
          class="px-2 py-0.5 rounded-lg text-xs font-black transition cursor-pointer whitespace-nowrap ${
            isSel
              ? 'bg-indigo-600 text-white shadow-2xs'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
          }">
          <span>${c.icon ? c.icon + ' ' : ''}${escapeHtml(c.label)}</span>
        </button>
      `;
    }).join('');
  }

  // 2. Calculate incomplete students
  const students = state.students || [];
  const checks = (state.studentChecks && state.studentChecks[activeStudentCheckCategory]) || {};
  const incompleteList = students.filter(s => (checks[s.id] || 0) !== 1);
  const total = students.length;

  // 3. Update count badge
  const badgeEl = document.getElementById('heroIncompleteCountBadge');
  if (badgeEl) {
    if (incompleteList.length === 0 && total > 0) {
      badgeEl.className = 'px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap';
      badgeEl.textContent = `전원 완료! (${total}명)`;
    } else {
      badgeEl.className = 'px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-rose-50 text-rose-600 border border-rose-200 whitespace-nowrap';
      badgeEl.textContent = `미완료 ${incompleteList.length}명 / ${total}명`;
    }
  }

  // 4. Update incomplete student badge list (max 20 students in 10-col grid)
  const listEl = document.getElementById('heroIncompleteStudentsList');
  if (listEl) {
    if (incompleteList.length === 0 && total > 0) {
      listEl.innerHTML = `
        <div class="col-span-full py-1.5 px-3 rounded-xl bg-blue-50/90 border border-blue-200 text-center text-xs md:text-sm font-extrabold text-blue-700 whitespace-nowrap">
          🎉 모든 친구들이 활동을 완료했어요! 참 잘했어요!
        </div>
      `;
    } else if (total === 0) {
      listEl.innerHTML = `
        <div class="col-span-full py-1 text-center text-xs font-bold text-slate-400 whitespace-nowrap">
          등록된 학생이 없습니다
        </div>
      `;
    } else {
      const displayList = incompleteList.slice(0, 20);
      listEl.innerHTML = displayList.map(s => `
        <button onclick="quickCompleteStudentFromHero('${s.id}')"
          title="${s.num}번 ${escapeHtml(s.name)} — 클릭 시 완료 처리"
          class="w-full py-1 px-1 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs font-black text-slate-800 hover:text-blue-700 cursor-pointer transition flex items-center justify-center gap-0.5 whitespace-nowrap truncate shadow-2xs">
          <span class="text-[10px] font-extrabold text-blue-600 flex-shrink-0">${s.num}.</span>
          <span class="truncate">${escapeHtml(s.name)}</span>
        </button>
      `).join('');
    }
  }
  requestAnimationFrame(() => fitAllTextsWithoutTruncation());
}

function renderRosterIndividualList() {
  const container = document.getElementById('rosterIndividualList');
  if (!container) return;
  const students = state.students || [];

  if (students.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-4 text-center text-xs font-bold text-amber-700">
        등록된 학생이 없습니다. [+ 학생 1명 추가] 버튼으로 등록해 보세요.
      </div>
    `;
    return;
  }

  container.innerHTML = students.map((s, idx) => `
    <div class="flex items-center gap-1.5 p-1.5 rounded-xl bg-white border border-amber-200 shadow-2xs hover:border-amber-400 transition" data-student-id="${s.id}">
      <input type="number" value="${s.num}"
        min="1" max="999"
        onchange="updateStudentItemField('${s.id}', 'num', this.value)"
        class="w-14 px-1.5 py-1 rounded-lg bg-white border border-slate-300 text-xs font-black text-indigo-700 text-center outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300"
        title="학생 번호" />
      <input type="text" value="${escapeHtml(s.name)}"
        onchange="updateStudentItemField('${s.id}', 'name', this.value)"
        class="flex-1 min-w-0 px-2 py-1 rounded-lg bg-white border border-slate-300 text-xs font-extrabold text-slate-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300"
        placeholder="이름"
        title="학생 이름" />
      <button type="button" onclick="removeStudentFromRoster('${s.id}')"
        class="px-1.5 py-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 font-bold text-xs cursor-pointer transition flex-shrink-0"
        title="학생 삭제">✕</button>
    </div>
  `).join('');
}

function updateStudentItemField(studentId, field, value) {
  if (!state.students) state.students = [];
  const target = state.students.find(s => s.id === studentId);
  if (!target) return;

  if (field === 'num') {
    const parsedNum = parseInt(value, 10);
    target.num = isNaN(parsedNum) ? 1 : parsedNum;
  } else if (field === 'name') {
    target.name = String(value).trim();
  }

  saveState();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();

  // Also sync rosterTextarea bulk preview
  const textarea = document.getElementById('rosterTextarea');
  if (textarea) {
    textarea.value = (state.students || []).map(s => `${s.num}. ${s.name}`).join(', ');
  }
}

function addSingleStudentToRoster() {
  if (!state.students) state.students = [];
  const maxNum = state.students.reduce((max, s) => Math.max(max, Number(s.num) || 0), 0);
  const nextNum = maxNum + 1;
  const newId = 's_' + Date.now() + '_' + Math.floor(Math.random() * 1000);

  state.students.push({
    id: newId,
    num: nextNum,
    name: `학생${nextNum}`
  });

  saveState();
  renderRosterIndividualList();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();

  const textarea = document.getElementById('rosterTextarea');
  if (textarea) {
    textarea.value = (state.students || []).map(s => `${s.num}. ${s.name}`).join(', ');
  }

  // Scroll to bottom of individual list
  const container = document.getElementById('rosterIndividualList');
  if (container) container.scrollTop = container.scrollHeight;

  showToast(`${nextNum}번 학생이 추가되었습니다.`);
}

function removeStudentFromRoster(studentId) {
  if (!state.students) state.students = [];
  const target = state.students.find(s => s.id === studentId);
  const targetName = target ? `${target.num}번 ${target.name}` : '학생';

  state.students = state.students.filter(s => s.id !== studentId);

  // Clean up check states for removed student
  if (state.studentChecks) {
    Object.keys(state.studentChecks).forEach(cat => {
      if (state.studentChecks[cat]) {
        delete state.studentChecks[cat][studentId];
      }
    });
  }

  saveState();
  renderRosterIndividualList();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();

  const textarea = document.getElementById('rosterTextarea');
  if (textarea) {
    textarea.value = (state.students || []).map(s => `${s.num}. ${s.name}`).join(', ');
  }

  showToast(`${targetName}을(를) 명단에서 삭제했습니다.`);
}

function saveStudentIndividualChanges() {
  saveState();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();
  showToast('학생 명단 변경사항이 저장되었습니다!');
}

function toggleRosterEditor() {
  const panel = document.getElementById('rosterEditorPanel');
  if (!panel) return;
  panel.classList.toggle('hidden');
  if (!panel.classList.contains('hidden')) {
    renderRosterIndividualList();
    const textarea = document.getElementById('rosterTextarea');
    if (textarea) {
      textarea.value = (state.students || []).map(s => `${s.num}. ${s.name}`).join(', ');
    }
  }
}

function saveStudentRoster() {
  const textarea = document.getElementById('rosterTextarea');
  if (!textarea) return;
  const raw = textarea.value.trim();
  if (!raw) {
    showToast('학생 이름을 입력해 주세요');
    return;
  }

  // Split by newline or comma
  const tokens = raw
    .split(/[\n,]+/)
    .map(t => t.trim())
    .filter(t => t.length > 0);

  if (tokens.length === 0) {
    showToast('유효한 학생 데이터가 없습니다');
    return;
  }

  const oldStudents = state.students || [];
  const usedOldIds = new Set();
  let lastAssignedNum = 0;

  const parsedItems = tokens.map((token, idx) => {
    // Check if token begins with number: e.g. "21. 김하늘", "21번 김하늘", "21 김하늘", "21.김하늘"
    const match = token.match(/^\s*(\d+)(?:번|\.|\s)*\s*(.+)$/);
    let num;
    let name;
    if (match) {
      num = parseInt(match[1], 10);
      name = match[2].trim();
      lastAssignedNum = num;
    } else {
      num = lastAssignedNum + 1;
      lastAssignedNum = num;
      name = token.trim();
    }
    return { num, name };
  }).filter(item => item.name.length > 0);

  if (parsedItems.length === 0) {
    showToast('유효한 학생 이름이 없습니다');
    return;
  }

  // Preserve existing student IDs and check states
  state.students = parsedItems.map((item, idx) => {
    // 1. Try matching by exact name first
    let matched = oldStudents.find(o => !usedOldIds.has(o.id) && o.name === item.name);
    // 2. If not matched by name, match by same index position
    if (!matched && oldStudents[idx] && !usedOldIds.has(oldStudents[idx].id)) {
      matched = oldStudents[idx];
    }
    const id = matched ? matched.id : ('s_' + Date.now() + '_' + idx);
    usedOldIds.add(id);

    return {
      id,
      num: item.num,
      name: item.name
    };
  });

  saveState();
  renderRosterIndividualList();
  renderStudentCheckGrid();
  renderHeroActivityCheckPanel();
  showToast(`${state.students.length}명의 학생 명단이 저장되었습니다!`);
}

/* ==========================================================================
   TOOL 5: ACTIVITY TIMER, STOPWATCH & CLASSROOM SFX
   ========================================================================== */

let activityTimerMode = 'countdown';
let activityTimerTotalSec = 300;
let activityTimerRemainingSec = 300;
let activityStopwatchElapsedSec = 0;
let activityTimerRunning = false;
let activityTimerInterval = null;

function openActivityTimerModal() {
  const modal = document.getElementById('activityTimerModal');
  const mini = document.getElementById('miniFloatingTimer');
  const win = document.getElementById('activityTimerWindow');
  if (mini) mini.classList.add('hidden');
  if (modal) modal.classList.remove('hidden');
  updateActivityTimerDisplay();
  requestAnimationFrame(() => {
    applyTimerWindowScale(win ? win.offsetWidth : 520, win ? win.offsetHeight : 460);
  });
}

function closeActivityTimerModal() {
  const modal = document.getElementById('activityTimerModal');
  if (modal) modal.classList.add('hidden');
  if (activityTimerRunning) {
    minimizeToFloatingTimer();
  }
}

function minimizeToFloatingTimer() {
  const modal = document.getElementById('activityTimerModal');
  const mini = document.getElementById('miniFloatingTimer');
  if (modal) modal.classList.add('hidden');
  if (mini) mini.classList.remove('hidden');
  updateMiniTimerDisplay();
}

function expandFromFloatingTimer() {
  const mini = document.getElementById('miniFloatingTimer');
  if (mini) mini.classList.add('hidden');
  openActivityTimerModal();
}

function closeActivityTimerCompletely() {
  const mini = document.getElementById('miniFloatingTimer');
  if (mini) mini.classList.add('hidden');
  pauseActivityTimer();
  resetActivityTimer();
  showToast('활동 타이머가 종료되었습니다');
}

function setActivityTimerMode(mode) {
  pauseActivityTimer();
  activityTimerMode = mode;

  const btnCd = document.getElementById('btnTimerModeCountdown');
  const btnSw = document.getElementById('btnTimerModeStopwatch');

  if (mode === 'countdown') {
    if (btnCd) btnCd.className = 'px-3 py-1 rounded-lg text-xs font-black bg-blue-600 text-white shadow-2xs transition';
    if (btnSw) btnSw.className = 'px-3 py-1 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-200 transition';
  } else {
    if (btnCd) btnCd.className = 'px-3 py-1 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-200 transition';
    if (btnSw) btnSw.className = 'px-3 py-1 rounded-lg text-xs font-black bg-blue-600 text-white shadow-2xs transition';
  }

  resetActivityTimer();
}

function setActivityTimerPreset(seconds) {
  if (activityTimerMode !== 'countdown') setActivityTimerMode('countdown');
  pauseActivityTimer();
  activityTimerTotalSec = seconds;
  activityTimerRemainingSec = seconds;
  updateActivityTimerDisplay();
}

function addActivityTimerSeconds(sec) {
  if (activityTimerMode === 'countdown') {
    activityTimerTotalSec += sec;
    activityTimerRemainingSec += sec;
    updateActivityTimerDisplay();
  }
}

function toggleActivityTimerStartPause() {
  if (activityTimerRunning) {
    pauseActivityTimer();
  } else {
    startActivityTimer();
  }
}

function startActivityTimer() {
  activityTimerRunning = true;
  updateTimerPlayButtons();

  // Play short starting confirmation beep so teacher knows audio is working
  playTimerStartBeep();

  if (activityTimerInterval) clearInterval(activityTimerInterval);
  activityTimerInterval = setInterval(() => {
    if (activityTimerMode === 'countdown') {
      activityTimerRemainingSec--;

      // 10s ~ 6s: light prep ticks (440Hz)
      if (activityTimerRemainingSec >= 6 && activityTimerRemainingSec <= 10) {
        playTimerPrepTick(activityTimerRemainingSec);
      }
      // 5s ~ 1s: prominent countdown beeps (587.33Hz -> 1s 880Hz, gain 0.45)
      else if (activityTimerRemainingSec >= 1 && activityTimerRemainingSec <= 5) {
        playTimerTickBeep(activityTimerRemainingSec);
      }

      if (activityTimerRemainingSec <= 0) {
        activityTimerRemainingSec = 0;
        pauseActivityTimer();
        playTimerFinishAlarm();
        showToast('🔔 활동 시간이 종료되었습니다! 모두 자리에 앉아요');
      }
    } else {
      activityStopwatchElapsedSec++;
    }

    updateActivityTimerDisplay();
    updateMiniTimerDisplay();
  }, 1000);

  updateActivityTimerDisplay();
  updateMiniTimerDisplay();
}

function pauseActivityTimer() {
  activityTimerRunning = false;
  if (activityTimerInterval) {
    clearInterval(activityTimerInterval);
    activityTimerInterval = null;
  }
  updateTimerPlayButtons();
}

function resetActivityTimer() {
  pauseActivityTimer();
  if (activityTimerMode === 'countdown') {
    activityTimerRemainingSec = activityTimerTotalSec;
  } else {
    activityStopwatchElapsedSec = 0;
  }
  updateActivityTimerDisplay();
  updateMiniTimerDisplay();
}

function updateTimerPlayButtons() {
  const mainBtn = document.getElementById('btnActivityTimerStartPause');
  const miniBtn = document.getElementById('btnMiniTimerStartPause');

  if (mainBtn) {
    mainBtn.innerHTML = activityTimerRunning ? '일시정지 ❚❚' : '시작 ▶';
    mainBtn.className = activityTimerRunning
      ? 'flex-1 max-w-xs py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-base shadow-lg shadow-amber-500/25 cursor-pointer transition'
      : 'flex-1 max-w-xs py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-base shadow-lg shadow-blue-500/25 cursor-pointer transition';
  }

  if (miniBtn) {
    miniBtn.innerHTML = activityTimerRunning ? '❚❚' : '▶';
    miniBtn.className = activityTimerRunning
      ? 'px-2 py-1 rounded-lg bg-amber-500 text-white font-black text-xs cursor-pointer hover:bg-amber-600'
      : 'px-2 py-1 rounded-lg bg-blue-600 text-white font-black text-xs cursor-pointer hover:bg-blue-700';
  }
}

function formatMinSec(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateActivityTimerDisplay() {
  const disp = document.getElementById('activityTimerDisplay');
  const sub = document.getElementById('activityTimerSubStatus');
  const circle = document.getElementById('activityTimerCirclePath');
  const circumference = 326.73;

  if (activityTimerMode === 'countdown') {
    const str = formatMinSec(activityTimerRemainingSec);
    if (disp) disp.textContent = str;

    const pct = activityTimerTotalSec > 0
      ? activityTimerRemainingSec / activityTimerTotalSec
      : 0;

    if (circle) {
      const offset = circumference - pct * circumference;
      circle.setAttribute('stroke-dashoffset', String(offset));

      if (activityTimerRemainingSec <= 10) {
        circle.setAttribute('stroke', '#EF4444');
      } else if (activityTimerRemainingSec <= 60) {
        circle.setAttribute('stroke', '#F59E0B');
      } else {
        circle.setAttribute('stroke', '#2563EB');
      }
    }

    if (sub) {
      if (activityTimerRemainingSec === 0) {
        sub.textContent = '활동이 끝났습니다! 모두 자리에 앉아요';
        sub.className = 'font-black text-rose-600 leading-tight text-center max-w-[82%] break-keep';
      } else if (activityTimerRemainingSec <= 10) {
        sub.textContent = '마무리할 시간이에요! 10초 전!';
        sub.className = 'font-black text-rose-600 leading-tight text-center max-w-[82%] break-keep animate-pulse';
      } else if (activityTimerRemainingSec <= 60) {
        sub.textContent = '남은 시간 1분! 활동을 정리해요';
        sub.className = 'font-extrabold text-amber-600 leading-tight text-center max-w-[82%] break-keep';
      } else {
        sub.textContent = '집중해서 활동을 시작해요!';
        sub.className = 'font-extrabold text-blue-600 leading-tight text-center max-w-[82%] break-keep';
      }
    }
  } else {
    const str = formatMinSec(activityStopwatchElapsedSec);
    if (disp) disp.textContent = str;
    if (sub) {
      sub.textContent = '스톱워치가 진행 중입니다';
      sub.className = 'font-extrabold text-indigo-600 leading-tight text-center max-w-[82%] break-keep';
    }
    if (circle) {
      circle.setAttribute('stroke-dashoffset', '0');
      circle.setAttribute('stroke', '#6366F1');
    }
  }
}

function updateMiniTimerDisplay() {
  const disp = document.getElementById('miniTimerDisplay');
  const title = document.getElementById('miniTimerTitle');
  const taskInp = document.getElementById('activityTimerTaskTitle');

  if (disp) {
    disp.textContent = activityTimerMode === 'countdown'
      ? formatMinSec(activityTimerRemainingSec)
      : formatMinSec(activityStopwatchElapsedSec);
  }

  if (title) {
    const customTitle = taskInp ? taskInp.value.trim() : '';
    title.textContent = customTitle || (activityTimerMode === 'countdown' ? '활동 타이머' : '스톱워치');
  }
}

function playTimerStartBeep() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(880, ctx.currentTime);
  gain.gain.setValueAtTime(0.001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.45, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
  osc.connect(gain);
  gain.connect(getAudioDestination(ctx));
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.14);
}

function playTimerPrepTick(sec) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(440, ctx.currentTime);
  gain.gain.setValueAtTime(0.001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.28, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
  osc.connect(gain);
  gain.connect(getAudioDestination(ctx));
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.09);
}

function playTimerTickBeep(sec) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  const freq = sec === 1 ? 880 : 587.33; // 1 second left is high-pitched 880Hz
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(0.001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.45, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
  osc.connect(gain);
  gain.connect(getAudioDestination(ctx));
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.18);
}

function playTimerFinishAlarm() {
  const ctx = getAudioCtx();
  if (!ctx) return;

  // 1. Double Bell ring (C6 - G5 - C6 twice)
  const bellChords = [
    { freqs: [1046.5, 1318.5], start: 0.00, dur: 0.22 },
    { freqs: [1046.5, 1318.5], start: 0.25, dur: 0.28 }
  ];

  bellChords.forEach(chord => {
    chord.freqs.forEach(f => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, ctx.currentTime + chord.start);
      gain.gain.setValueAtTime(0.001, ctx.currentTime + chord.start);
      gain.gain.exponentialRampToValueAtTime(0.50, ctx.currentTime + chord.start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + chord.start + chord.dur);
      osc.connect(gain);
      gain.connect(getAudioDestination(ctx));
      osc.start(ctx.currentTime + chord.start);
      osc.stop(ctx.currentTime + chord.start + chord.dur + 0.04);
    });
  });

  // 2. Triumphant Fanfare Melody (~2.5s duration)
  // G4 -> C5 -> E5 -> G5 -> E5 -> G5(high)
  const fanfareNotes = [
    { freq: 523.25, start: 0.60, dur: 0.18 }, // C5
    { freq: 659.25, start: 0.78, dur: 0.18 }, // E5
    { freq: 783.99, start: 0.96, dur: 0.22 }, // G5
    { freq: 659.25, start: 1.20, dur: 0.16 }, // E5
    { freq: 783.99, start: 1.38, dur: 0.22 }, // G5
    { freq: 1046.50, start: 1.62, dur: 0.85 } // C6 (long finish)
  ];

  fanfareNotes.forEach(n => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.start);
    gain.gain.setValueAtTime(0.001, ctx.currentTime + n.start);
    gain.gain.exponentialRampToValueAtTime(0.50, ctx.currentTime + n.start + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.start + n.dur);
    osc.connect(gain);
    gain.connect(getAudioDestination(ctx));
    osc.start(ctx.currentTime + n.start);
    osc.stop(ctx.currentTime + n.start + n.dur + 0.05);
  });
}

function playAttentionSound(type) {
  const ctx = getAudioCtx();
  if (!ctx) return;

  if (type === 'whistle') {
    // Sharp referee whistle with frequency modulation trill
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(2600, ctx.currentTime);

    lfo.frequency.setValueAtTime(28, ctx.currentTime);
    lfoGain.gain.setValueAtTime(300, ctx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);

    osc.connect(gain);
    gain.connect(getAudioDestination(ctx));

    osc.start(ctx.currentTime);
    lfo.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.75);
    lfo.stop(ctx.currentTime + 0.75);
    showToast('📢 삐익! 선생님을 바라보세요!');
  } else if (type === 'xylophone') {
    // Bright ascending arpeggio (C5 - E5 - G5 - C6)
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const start = ctx.currentTime + idx * 0.14;
      osc.frequency.setValueAtTime(f, start);
      gain.gain.setValueAtTime(0.48, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.5);
      osc.connect(gain);
      gain.connect(getAudioDestination(ctx));
      osc.start(start);
      osc.stop(start + 0.55);
    });
    showToast('🎵 또롱또롱! 주의 집중 시간입니다');
  } else if (type === 'clap') {
    // Rhythmic celebration claps
    [0.0, 0.16, 0.32, 0.52].forEach((timeOffset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, ctx.currentTime + timeOffset);
      gain.gain.setValueAtTime(0.48, ctx.currentTime + timeOffset);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + timeOffset + 0.1);
      osc.connect(gain);
      gain.connect(getAudioDestination(ctx));
      osc.start(ctx.currentTime + timeOffset);
      osc.stop(ctx.currentTime + timeOffset + 0.12);
    });
    showToast('👏 짝짝짝! 칭찬의 박수!');
  }
}

function applyTimerWindowScale(width, height) {
  const win = document.getElementById('activityTimerWindow');
  const stage = document.getElementById('activityTimerGaugeStage');
  const gaugeWrap = document.getElementById('activityTimerGaugeWrap');
  const disp = document.getElementById('activityTimerDisplay');
  const sub = document.getElementById('activityTimerSubStatus');
  if (!gaugeWrap) return;

  const fallbackW = Math.max(120, (width || (win ? win.offsetWidth : 520)) - 48);
  const fallbackH = Math.max(120, (height || (win ? win.offsetHeight : 460)) - 250);
  const availW = stage && stage.clientWidth > 0 ? stage.clientWidth : fallbackW;
  const availH = stage && stage.clientHeight > 0 ? stage.clientHeight : fallbackH;

  // Maintain strict 1:1 aspect ratio inside the available stage area
  const gaugeSize = Math.round(Math.max(84, Math.min(availW, availH) - 6));
  gaugeWrap.style.width = `${gaugeSize}px`;
  gaugeWrap.style.height = `${gaugeSize}px`;

  if (disp) {
    const targetFontSize = Math.round(Math.max(18, gaugeSize * 0.24));
    disp.style.fontSize = `${targetFontSize}px`;
    disp.style.lineHeight = '1.05';
  }
  if (sub) {
    const targetSubSize = Math.round(Math.max(9, Math.min(28, gaugeSize * 0.068)));
    sub.style.fontSize = `${targetSubSize}px`;
    sub.style.marginTop = `${Math.max(2, Math.round(gaugeSize * 0.025))}px`;
  }
}

function initTimerWindowDragAndResize() {
  const modal = document.getElementById('activityTimerModal');
  const win = document.getElementById('activityTimerWindow');
  const header = document.getElementById('activityTimerDragHeader');
  const resizeHandle = document.getElementById('activityTimerResizeHandle');
  const mini = document.getElementById('miniFloatingTimer');

  // 1. Draggable Activity Timer Window (#activityTimerDragHeader -> #activityTimerWindow)
  if (header && win) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    const onDragStart = (e) => {
      // Don't drag if clicking buttons or input
      if (e.target.closest('button') || e.target.closest('input')) return;
      isDragging = true;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;

      const rect = win.getBoundingClientRect();
      // Remove translate(-50%, -50%) if present
      if (win.style.transform && win.style.transform.includes('translate')) {
        win.style.transform = 'none';
        win.style.left = `${rect.left}px`;
        win.style.top = `${rect.top}px`;
      }
      initialLeft = parseFloat(win.style.left) || rect.left;
      initialTop = parseFloat(win.style.top) || rect.top;

      document.addEventListener('mousemove', onDragMove);
      document.addEventListener('mouseup', onDragEnd);
      document.addEventListener('touchmove', onDragMove, { passive: false });
      document.addEventListener('touchend', onDragEnd);
      if (e.cancelable) e.preventDefault();
    };

    const onDragMove = (e) => {
      if (!isDragging) return;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      const dx = clientX - startX;
      const dy = clientY - startY;

      const winWidth = win.offsetWidth;
      const winHeight = win.offsetHeight;
      const maxLeft = Math.max(10, window.innerWidth - winWidth - 10);
      const maxTop = Math.max(10, window.innerHeight - winHeight - 10);

      const newLeft = Math.max(10, Math.min(maxLeft, initialLeft + dx));
      const newTop = Math.max(10, Math.min(maxTop, initialTop + dy));

      win.style.left = `${newLeft}px`;
      win.style.top = `${newTop}px`;
      if (e.cancelable) e.preventDefault();
    };

    const onDragEnd = () => {
      isDragging = false;
      document.removeEventListener('mousemove', onDragMove);
      document.removeEventListener('mouseup', onDragEnd);
      document.removeEventListener('touchmove', onDragMove);
      document.removeEventListener('touchend', onDragEnd);
    };

    header.addEventListener('mousedown', onDragStart);
    header.addEventListener('touchstart', onDragStart, { passive: false });
  }

  // 2. Resizable Activity Timer Window (#activityTimerResizeHandle -> #activityTimerWindow)
  if (resizeHandle && win) {
    let isResizing = false;
    let startX = 0;
    let startY = 0;
    let initialW = 0;
    let initialH = 0;

    const onResizeStart = (e) => {
      isResizing = true;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;

      const rect = win.getBoundingClientRect();
      if (win.style.transform && win.style.transform.includes('translate')) {
        win.style.transform = 'none';
        win.style.left = `${rect.left}px`;
        win.style.top = `${rect.top}px`;
      }
      initialW = win.offsetWidth;
      initialH = win.offsetHeight;

      document.addEventListener('mousemove', onResizeMove);
      document.addEventListener('mouseup', onResizeEnd);
      document.addEventListener('touchmove', onResizeMove, { passive: false });
      document.addEventListener('touchend', onResizeEnd);
      if (e.cancelable) e.preventDefault();
    };

    const onResizeMove = (e) => {
      if (!isResizing) return;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      const dw = clientX - startX;
      const dh = clientY - startY;

      const minW = 300;
      const maxW = Math.round(window.innerWidth * 0.95);
      const minH = 360;
      const maxH = Math.round(window.innerHeight * 0.92);

      const targetW = Math.max(minW, Math.min(maxW, initialW + dw));
      const targetH = Math.max(minH, Math.min(maxH, initialH + dh));

      win.style.width = `${targetW}px`;
      win.style.height = `${targetH}px`;
      applyTimerWindowScale(targetW, targetH);
      if (e.cancelable) e.preventDefault();
    };

    const onResizeEnd = () => {
      isResizing = false;
      document.removeEventListener('mousemove', onResizeMove);
      document.removeEventListener('mouseup', onResizeEnd);
      document.removeEventListener('touchmove', onResizeMove);
      document.removeEventListener('touchend', onResizeEnd);
    };

    resizeHandle.addEventListener('mousedown', onResizeStart);
    resizeHandle.addEventListener('touchstart', onResizeStart, { passive: false });
  }

  if (win && typeof ResizeObserver !== 'undefined') {
    const timerWinObserver = new ResizeObserver(() => {
      if (modal && !modal.classList.contains('hidden')) {
        requestAnimationFrame(() => applyTimerWindowScale(win.offsetWidth, win.offsetHeight));
      }
    });
    timerWinObserver.observe(win);
  }

  // 3. Draggable Mini Floating Timer (#miniFloatingTimer)
  if (mini) {
    let isDraggingMini = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    const onMiniDragStart = (e) => {
      if (e.target.closest('button')) return;
      isDraggingMini = true;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;

      const rect = mini.getBoundingClientRect();
      mini.style.bottom = 'auto';
      mini.style.right = 'auto';
      mini.style.left = `${rect.left}px`;
      mini.style.top = `${rect.top}px`;
      initialLeft = rect.left;
      initialTop = rect.top;

      document.addEventListener('mousemove', onMiniDragMove);
      document.addEventListener('mouseup', onMiniDragEnd);
      document.addEventListener('touchmove', onMiniDragMove, { passive: false });
      document.addEventListener('touchend', onMiniDragEnd);
      if (e.cancelable) e.preventDefault();
    };

    const onMiniDragMove = (e) => {
      if (!isDraggingMini) return;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      const dx = clientX - startX;
      const dy = clientY - startY;

      const maxLeft = Math.max(10, window.innerWidth - mini.offsetWidth - 10);
      const maxTop = Math.max(10, window.innerHeight - mini.offsetHeight - 10);

      mini.style.left = `${Math.max(10, Math.min(maxLeft, initialLeft + dx))}px`;
      mini.style.top = `${Math.max(10, Math.min(maxTop, initialTop + dy))}px`;
      if (e.cancelable) e.preventDefault();
    };

    const onMiniDragEnd = () => {
      isDraggingMini = false;
      document.removeEventListener('mousemove', onMiniDragMove);
      document.removeEventListener('mouseup', onMiniDragEnd);
      document.removeEventListener('touchmove', onMiniDragMove);
      document.removeEventListener('touchend', onMiniDragEnd);
    };

    mini.addEventListener('mousedown', onMiniDragStart);
    mini.addEventListener('touchstart', onMiniDragStart, { passive: false });
  }
}

function initBoard() {
  initAudioUnlock();
  renderStaticIcons();
  const initialSlot = evaluateCurrentTimeSlot();
  activeRoutineTab = initialSlot.routineTab;
  renderAll();
  initTimerWindowDragAndResize();
  window.addEventListener('resize', () => {
    requestAnimationFrame(() => fitAllTextsWithoutTruncation());
  });
  setInterval(() => {
    updateHeaderClockAndTimer();
  }, 1000);
  setInterval(() => {
    renderTimetableSection();
  }, 15000);
}

initBoard();

