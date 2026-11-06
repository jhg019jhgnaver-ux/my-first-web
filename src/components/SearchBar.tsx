import { Search, X } from 'lucide-react';

type Props = { value: string; onChange: (v: string) => void };
const suggestions = ['계란', '참치', '전자레인지', '밥', '면'];

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="w-full">
      <div className="relative flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.16)]">
        <Search className="w-5 h-5 text-[#7aa52d] shrink-0" />
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
          placeholder="냉장고에 있는 재료를 검색해 봐 (예: 계란, 참치)"
          className="flex-1 min-w-0 bg-transparent outline-none text-[#20251f] placeholder:text-[#9ca397] text-sm sm:text-base" />
        {value && <button onClick={() => onChange('')} className="text-[#8b9386] hover:text-[#20251f]" aria-label="검색어 지우기"><X className="w-5 h-5" /></button>}
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-3 px-1">
        <span className="text-xs text-white/45 font-semibold">이런 재료?</span>
        {suggestions.map((s) => <button key={s} onClick={() => onChange(s)} className="text-xs px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/75 hover:bg-[#c7f36b] hover:text-[#20251f] transition-colors">{s}</button>)}
      </div>
    </div>
  );
}
