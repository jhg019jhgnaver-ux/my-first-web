import { Clock, Flame, ChefHat, ArrowUpRight } from 'lucide-react';
import type { Recipe } from '@/data/recipes';

type Props = { recipe: Recipe; onClick: () => void };

export default function RecipeCard({ recipe, onClick }: Props) {
  return (
    <button onClick={onClick} className="group text-left bg-white rounded-[1.65rem] overflow-hidden border border-black/[0.045] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(32,37,31,0.10)] transition-all duration-300">
      <div className="relative h-52 sm:h-56 overflow-hidden bg-[#e9ebdf]">
        <img src={recipe.image} alt={`${recipe.name} 음식 사진`} loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.045] transition-transform duration-700"
 />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5 pointer-events-none" />
        <div className="absolute top-3.5 left-3.5 flex gap-2">
          {recipe.popular && <span className="rounded-full bg-[#c7f36b] text-[#20251f] text-[11px] font-black px-3 py-1.5">EDITOR'S PICK</span>}
          {recipe.time <= 8 && <span className="rounded-full bg-white/90 text-[#30372d] text-[11px] font-bold px-3 py-1.5">⚡ {recipe.time}분 컷</span>}
        </div>
        <span className="absolute bottom-4 left-4 text-white text-2xl font-black tracking-tight drop-shadow-md">{recipe.emoji} {recipe.name}</span>
        <span className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 text-[#20251f] flex items-center justify-center group-hover:bg-[#c7f36b] transition-colors"><ArrowUpRight className="w-4 h-4" /></span>
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-sm text-[#7d8577] line-clamp-1 mb-4">{recipe.description || '자취방에서 간단하게 만들 수 있는 한 끼'}</p>
        <div className="flex items-center gap-4 text-xs text-[#747c70] mb-4">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#85a83d]" />{recipe.time}분</span>
          <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-[#d68c45]" />약 {recipe.calories}kcal</span>
          <span className="flex items-center gap-1.5"><ChefHat className="w-3.5 h-3.5 text-[#85a83d]" />{recipe.difficulty}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {recipe.tags.filter((t) => t !== '인기').slice(0, 3).map((t) => <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#f2f4ec] text-[#6d795d]">#{t}</span>)}
        </div>
      </div>
    </button>
  );
}
