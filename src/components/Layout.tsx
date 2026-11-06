import { useEffect, useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [route, setRoute] = useState<string>(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (route === '#/privacy') {
    return <PrivacyPolicy />;
  }

  return (
    <>
      {children}
      <footer className="border-t border-white/10 bg-[#20251f] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-center text-sm text-white/50">
          <p className="flex items-center justify-center gap-2 mb-2">
            <UtensilsCrossed className="w-4 h-4 text-[#c7f36b]" />
            <span className="font-bold text-white">혼밥요리</span>
          </p>
          <p className="mb-3">귀찮아도 맛있게. 자취생의 현실 한 끼를 응원합니다.</p>
          <a
            href="#/privacy"
            className="text-white/55 hover:text-[#c7f36b] transition-colors underline underline-offset-2"
          >
            개인정보처리방침
          </a>
        </div>
      </footer>
    </>
  );
}
