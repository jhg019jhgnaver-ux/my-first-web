import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/recipes';

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">자주 묻는 질문</h2>
        <p className="text-gray-500 text-sm mt-1">궁금한 점이 있다면 여기서 먼저 찾아보세요</p>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-colors duration-200 ${
                isOpen ? 'border-primary-200 shadow-sm' : 'border-gray-100'
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-medium text-gray-800">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
