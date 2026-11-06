import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-md shadow-primary-200">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <span className="font-bold text-lg">혼밥요리</span>
          </a>
          <a href="#/" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
            홈으로
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 pb-20">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-10">
          <h1 className="text-3xl font-black text-gray-900 mb-2">개인정보처리방침</h1>
          <p className="text-sm text-gray-400 mb-10">최종 수정일: 2026년 11월 6일</p>

          <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">1. 개요</h2>
              <p>
                혼밥요리(이하 "본 사이트")는 방문자의 개인정보를 존중하며, 관련 법령을 준수합니다.
                본 사이트는 회원가입 및 로그인 기능을 제공하지 않으며, 방문자가 자신의 이름, 이메일,
                전화번호 등 식별 가능한 개인정보를 입력하도록 요구하지 않습니다.
              </p>
              <p className="mt-3">
                다만, 본 사이트는 향후 Google AdSense 광고를 게재할 예정이며, 광고 서비스 과정에서
                쿠키 및 유사 기술을 통해 자동으로 수집되는 정보가 있습니다. 본 방침은 이러한 정보의
                수집 및 이용에 관한 사항을 안내합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">2. 자동으로 수집되는 정보</h2>
              <p>본 사이트는 다음 정보를 자동으로 수집할 수 있습니다.</p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2"><span className="text-primary-500">•</span><span><strong className="text-gray-700">쿠키(Cookie):</strong> 방문자의 브라우저에 저장되는 작은 텍스트 파일로, 광고 게재 및 사이트 이용 통계 분석에 활용됩니다.</span></li>
                <li className="flex gap-2"><span className="text-primary-500">•</span><span><strong className="text-gray-700">IP 주소:</strong> 방문자의 인터넷 연결 위치를 식별하기 위해 자동 수집될 수 있으며, 광고 게재 및 부정 이용 방지 목적으로 활용됩니다.</span></li>
                <li className="flex gap-2"><span className="text-primary-500">•</span><span><strong className="text-gray-700">방문 기록:</strong> 방문한 페이지, 체류 시간, 접속 시간 등의 브라우징 정보가 수집될 수 있습니다.</span></li>
                <li className="flex gap-2"><span className="text-primary-500">•</span><span><strong className="text-gray-700">브라우저 및 기기 정보:</strong> 브라우저 종류, 운영체제, 화면 크기 등의 기기 환경 정보가 수집될 수 있습니다.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">3. Google AdSense 및 제3자에 의한 데이터 수집</h2>
              <p>
                본 사이트는 Google AdSense를 통해 광고를 게재합니다. Google을 포함한 제3자 광고 파트너는
                쿠키를 사용하여 방문자의 이전 방문 기록을 바탕으로 광고를 게재하거나, 방문자의 관심사에
                따라 맞춤형 광고를 제공할 수 있습니다.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2"><span className="text-primary-500">•</span><span>Google은 쿠키를 통해 방문자의 IP 주소, 광고 클릭 데이터, 방문 기록 등을 수집하여 광고의 효과를 측정하고 맞춤형 광고를 제공합니다.</span></li>
                <li className="flex gap-2"><span className="text-primary-500">•</span><span>이러한 데이터는 Google의 개인정보처리방침에 따라 처리되며, 본 사이트는 해당 데이터의 수집 및 이용 과정에 직접 관여하지 않습니다.</span></li>
                <li className="flex gap-2"><span className="text-primary-500">•</span><span>Google을 포함한 광고 파트너의 데이터 수집 및 이용에 대한 자세한 내용은 Google의 개인정보처리방침 및 광고 설정 페이지에서 확인하실 수 있습니다.</span></li>
              </ul>
              <p className="mt-3">
                방문자는 브라우저 설정에서 쿠키를 차단하거나,{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 underline hover:text-primary-700"
                >
                  Google 광고 설정
                </a>
                을 통해 맞춤형 광고를 비활성화할 수 있습니다. 쿠키를 차단할 경우 일부 기능이 제한될 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">4. 수집한 정보의 이용 목적</h2>
              <p>수집된 정보는 다음 목적에 한해 활용됩니다.</p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2"><span className="text-primary-500">•</span><span>Google AdSense를 통한 광고 게재 및 맞춤형 광고 제공</span></li>
                <li className="flex gap-2"><span className="text-primary-500">•</span><span>광고 효율 측정 및 통계 분석</span></li>
                <li className="flex gap-2"><span className="text-primary-500">•</span><span>사이트 서비스 개선 및 운영</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">5. 회원가입 및 개인정보 입력</h2>
              <p>
                본 사이트는 회원가입, 로그인, 게시판 등의 기능을 제공하지 않으며, 방문자로부터
                이름, 이메일, 연락처 등의 개인정보를 직접 수집하지 않습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">6. 쿠키 설정 및 거부 방법</h2>
              <p>
                방문자는 웹 브라우저의 설정을 통해 쿠키의 저장을 거부하거나 삭제할 수 있습니다.
                다만, 쿠키 저장을 거부할 경우 광고 게재가 제한되거나 사이트의 일부 기능이
                정상적으로 작동하지 않을 수 있습니다.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2"><span className="text-primary-500">•</span><span>Chrome: 설정 &gt; 개인정보 및 보안 &gt; 쿠키 및 기타 사이트 데이터</span></li>
                <li className="flex gap-2"><span className="text-primary-500">•</span><span>Safari: 환경설정 &gt; 개인정보 보호 &gt; 쿠키 및 웹사이트 데이터</span></li>
                <li className="flex gap-2"><span className="text-primary-500">•</span><span>Edge: 설정 &gt; 쿠키 및 사이트 권한 &gt; 쿠키 및 사이트 데이터</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">7. 개인정보처리방침의 변경</h2>
              <p>
                본 사이트는 Google AdSense 연동 여부 및 관련 법령의 변화에 따라 본 개인정보처리방침을
                수시로 변경할 수 있으며, 변경 시 이 페이지에 게시합니다. 변경된 방침은 게시된 시점부터
                적용됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">8. 문의</h2>
              <p>
                본 개인정보처리방침에 관한 문의사항이 있으시면 사이트 하단의 연락처를 통해
                문의해 주시기 바랍니다.
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <a
              href="#/"
              className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              ← 홈으로 돌아가기
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
