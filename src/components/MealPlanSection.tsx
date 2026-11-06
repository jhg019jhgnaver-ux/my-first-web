import { RefreshCw, Sun, Moon, Cloud } from 'lucide-react';
import type { Recipe } from '@/data/recipes';
import { mealSlots, formatDate } from '@/data/mealPlan';

type Props = {
  plan: Recipe[];
  onRefresh: () => void;
  onPick: (r: Recipe) => void;
};

const slotIcon = [Sun, Cloud, Moon];

export default function MealPlanSection({ plan, onRefresh, onPick }: Props) {
  const today = new Date();

  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl p-6 sm:p-8 border border-primary-100/60">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">오늘의 식단 추천</h2>
          <p className="text-gray-500 text-sm mt-1">{formatDate(today)}</p>
        </div>
        <button
          onClick={onRefresh}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 active:scale-95 transition-all shadow-md shadow-primary-200"
        >
          <RefreshCw className="w-4 h-4" /> 다시 추천
        </button>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {mealSlots.map((slot, i) => {
          const Icon = slotIcon[i];
          const r = plan[i];
          return (
            <button
              key={slot.label}
              onClick={() => onPick(r)}
              className="text-left bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-bold text-gray-800">{slot.emoji} {slot.label}</p>
                  <p className="text-xs text-gray-400">{slot.time}</p>
                </div>
              </div>
              {r ? (
                <>
                  <img src={r.image} alt={r.name} className="w-full h-24 object-cover rounded-xl mb-3" loading="lazy" />
                  <p className="font-bold text-gray-800">{r.name}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {r.time}분 · 약 {r.calories}kcal
                  </p>
                </>
              ) : (
                <p className="text-gray-300 text-sm">메뉴 없음</p>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
