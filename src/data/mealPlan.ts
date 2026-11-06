export type MealSlot = {
  label: string;
  time: string;
  emoji: string;
};

export const mealSlots: MealSlot[] = [
  { label: '아침', time: '08:00', emoji: '🌅' },
  { label: '점심', time: '12:30', emoji: '☀️' },
  { label: '저녁', time: '19:00', emoji: '🌙' },
];

const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

export function getDayName(date: Date): string {
  return dayNames[date.getDay()];
}

export function formatDate(date: Date): string {
  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${getDayName(date)}요일`;
}
