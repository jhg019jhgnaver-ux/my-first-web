import { useMemo, useState, useCallback } from 'react';
import { UtensilsCrossed, ChefHat, Sparkles, ArrowDown, Clock3, Flame } from 'lucide-react';
import { recipes, type Recipe } from '@/data/recipes';
import SearchBar from '@/components/SearchBar';
import RecipeCard from '@/components/RecipeCard';
import RecipeModal from '@/components/RecipeModal';
import MealPlanSection from '@/components/MealPlanSection';
import TipsSection from '@/components/TipsSection';
import FaqSection from '@/components/FaqSection';
import Layout from '@/components/Layout';

const filters = ['전체', '밥', '면', '한식', '고기', '간식', '초간단', '전자레인지', '불 없이'];

function pickRandomPlan(pool: Recipe[], count: number): Recipe[] {
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}

export default function App() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('전체');
  const [selected, setSelected] = useState<Recipe | null>(null);
  const [plan, setPlan] = useState<Recipe[]>(() => pickRandomPlan(recipes, 3));

  const refreshPlan = useCallback(() => setPlan(pickRandomPlan(recipes, 3)), []);

  const filtered = useMemo(() => recipes.filter((r) => {
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || r.name.toLowerCase().includes(q) ||
      r.description?.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q)) ||
      r.ingredients.some((i) => i.toLowerCase().includes(q));
    const matchesFilter = activeFilter === '전체' || r.tags.includes(activeFilter);
    return matchesQuery && matchesFilter;
  }), [query, activeFilter]);

  const popular = recipes.filter((r) => r.popular);

  return (
    <Layout>
      <div className="min-h-screen bg-[#f7f7f2] text-[#20251f]">
        <header className="sticky top-0 z-40 bg-[#f7f7f2]/90 backdrop-blur-xl border-b border-black/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between">
            <a href="#" className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-2xl bg-[#c7f36b] text-[#20251f] flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" />
              </span>
              <span className="font-black tracking-tight text-xl">혼밥<span className="text-[#7aa52d]">요리.</span></span>
            </a>
            <nav className="hidden sm:flex items-center gap-7 text-sm font-semibold text-[#687064]">
              <a href="#recipes" className="hover:text-[#20251f]">레시피</a>
              <a href="#mealplan" className="hover:text-[#20251f]">오늘 뭐 먹지?</a>
              <a href="#tips" className="hover:text-[#20251f]">자취 꿀팁</a>
              <a href="#faq" className="hover:text-[#20251f]">FAQ</a>
            </nav>
            <a href="#recipes" className="rounded-full bg-[#20251f] text-white text-xs sm:text-sm font-bold px-4 py-2.5 hover:bg-[#3b4537] transition-colors">메뉴 고르기 ↗</a>
          </div>
        </header>

        <section className="relative overflow-hidden bg-[#20251f] text-white">
          <div className="absolute -right-20 -top-28 w-[26rem] h-[26rem] rounded-full bg-[#c7f36b]/15 blur-3xl" />
          <div className="absolute -left-24 bottom-[-12rem] w-[28rem] h-[28rem] rounded-full bg-[#c7f36b]/10 blur-3xl" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs sm:text-sm text-[#d8f7a4] font-semibold mb-7">
                <Sparkles className="w-4 h-4" /> 자취생의 현실 한 끼 큐레이션
              </span>
              <h1 className="text-[2.65rem] sm:text-6xl md:text-7xl font-black tracking-[-0.06em] leading-[1.08]">
                오늘 뭐 먹지?<br />
                <span className="text-[#c7f36b]">귀찮아도 맛있게.</span>
              </h1>
              <p className="text-white/65 text-base sm:text-lg mt-6 leading-relaxed max-w-xl">
                장보기는 최소로, 설거지는 가볍게.<br className="hidden sm:block" />
                자취방에서 5~15분이면 완성되는 현실 레시피만 모았어요.
              </p>
              <div className="mt-8 max-w-2xl">
                <SearchBar value={query} onChange={setQuery} />
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-white/55">
                <span className="flex items-center gap-2"><Clock3 className="w-4 h-4 text-[#c7f36b]" /> 평균 10분 내외</span>
                <span className="flex items-center gap-2"><Flame className="w-4 h-4 text-[#c7f36b]" /> 초보도 가능한 난이도</span>
                <span className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#c7f36b]" /> 현재 {recipes.length}개 레시피</span>
              </div>
            </div>
            <a href="#recipes" className="absolute bottom-7 right-6 sm:right-8 hidden sm:flex items-center gap-2 text-xs text-white/45 hover:text-white/80">
              메뉴 구경하기 <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 space-y-20">
          <section id="recipes" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-7">
              <div>
                <p className="text-xs font-black tracking-[0.18em] text-[#7aa52d] uppercase mb-2">what's cooking</p>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight">{query || activeFilter !== '전체' ? '찾은 메뉴' : '지금 많이 찾는 메뉴'}<span className="text-[#9bbd5b]">.</span></h2>
                <p className="text-[#7b8276] text-sm mt-2">{filtered.length}개의 레시피 · 하나 골라서 오늘 한 끼 해결!</p>
              </div>
              <span className="text-xs font-semibold text-[#858b80] bg-white border border-black/5 rounded-full px-3 py-2 w-fit">NO 로그인 · NO 복잡한 재료</span>
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-5">
              {filters.map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)}
                  className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeFilter === f ? 'bg-[#20251f] text-[#c7f36b]' : 'bg-white text-[#6c7468] border border-black/5 hover:border-[#9bbd5b]'
                  }`}>{f === '전체' ? '✳ 전체' : f}</button>
              ))}
            </div>
            {filtered.length ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((r) => <RecipeCard key={r.id} recipe={r} onClick={() => setSelected(r)} />)}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-[2rem] border border-black/5">
                <p className="text-5xl mb-4">🥲</p>
                <p className="font-bold text-[#20251f]">이 조합은 아직 없어요.</p>
                <p className="text-sm text-[#858b80] mt-2">다른 재료나 메뉴로 검색해 볼까요?</p>
              </div>
            )}
          </section>

          <div id="mealplan" className="scroll-mt-24"><MealPlanSection plan={plan} onRefresh={refreshPlan} onPick={setSelected} /></div>
          <div id="tips" className="scroll-mt-24"><TipsSection /></div>
          <div id="faq" className="scroll-mt-24"><FaqSection /></div>
        </main>
        {selected && <RecipeModal recipe={selected} onClose={() => setSelected(null)} />}
      </div>
    </Layout>
  );
}
