import { useEffect } from 'react';

/**
 * Google AdSense 스크립트를 페이지에 주입합니다.
 *
 * 사용 방법:
 * 1. index.html 의 <head> 에 아래 코드를 추가하세요 (ca-pub-XXXX 부분은 본인의 AdSense 퍼블리셔 ID로 교체):
 *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
 *    또는 아래 컴포넌트에 ADSENSE_CLIENT_ID 를 입력해 주입할 수 있습니다.
 * 2. <AdSlot slot="1234567890" /> 처럼 광고를 넣을 자리에 배치하세요.
 *    slot 번호는 AdSense 관리자 페이지에서 광고 단위를 생성한 뒤 발급받은 값입니다.
 */

const ADSENSE_CLIENT_ID = ''; // 예: 'ca-pub-1234567890123456'

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function useAdSenseScript() {
  useEffect(() => {
    if (!ADSENSE_CLIENT_ID) return;
    if (document.getElementById('adsbygoogle-script')) return;
    const s = document.createElement('script');
    s.id = 'adsbygoogle-script';
    s.async = true;
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }, []);
}

type AdSlotProps = {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
};

export default function AdSlot({ slot, format = 'auto', responsive = true, className = '' }: AdSlotProps) {
  useAdSenseScript();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense 미연동 시 무시
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
