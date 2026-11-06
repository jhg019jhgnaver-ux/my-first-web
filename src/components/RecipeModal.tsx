import { X, Clock, Flame, ListChecks, CookingPot } from 'lucide-react';
import type { Recipe } from '@/data/recipes';
import { useEffect } from 'react';

type Props = {
  recipe: Recipe;
  onClose: () => void;
};

export default function RecipeModal({ recipe, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-[fade-in-up_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="bg-[#f7f7f2] rounded-[2rem] max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56">
          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <h2 className="text-2xl font-bold drop-shadow">{recipe.emoji} {recipe.name}</h2>
          </div>
        </div>

        <div className="p-6">
          {recipe.description && (
            <p className="text-[#526b2b] bg-[#eef4df] rounded-xl px-4 py-3 mb-5 text-sm font-medium">
              {recipe.description}
            </p>
          )}

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-gray-50 rounded-2xl p-3 text-center">
              <Clock className="w-5 h-5 text-primary-500 mx-auto mb-1" />
              <p className="text-xs text-gray-400">조리시간</p>
              <p className="font-bold text-gray-800">{recipe.time}분</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3 text-center">
              <Flame className="w-5 h-5 text-primary-500 mx-auto mb-1" />
              <p className="text-xs text-gray-400">열량</p>
              <p className="font-bold text-gray-800">약 {recipe.calories}kcal</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3 text-center">
              <CookingPot className="w-5 h-5 text-primary-500 mx-auto mb-1" />
              <p className="text-xs text-gray-400">난이도</p>
              <p className="font-bold text-gray-800">{recipe.difficulty}</p>
            </div>
          </div>

          <section className="mb-6">
            <h3 className="flex items-center gap-2 font-bold text-gray-800 mb-3">
              <ListChecks className="w-5 h-5 text-accent-500" /> 재료
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {recipe.ingredients.map((ing) => (
                <li key={ing} className="flex items-center gap-2 text-sm text-gray-600 bg-[#eef1e7] rounded-xl px-3 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                  {ing}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="flex items-center gap-2 font-bold text-gray-800 mb-3">
              <CookingPot className="w-5 h-5 text-primary-500" /> 만드는 방법
            </h3>
            <ol className="space-y-3">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#7aa52d] text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
