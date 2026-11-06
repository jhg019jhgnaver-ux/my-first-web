import { tips } from '@/data/recipes';

export default function TipsSection() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">자취생 요리 꿀팁</h2>
        <p className="text-gray-500 text-sm mt-1">시간과 비용을 아끼는 실전 노하우</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tips.map((tip) => (
          <div
            key={tip.title}
            className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
          >
            <div className="text-3xl mb-3">{tip.icon}</div>
            <h3 className="font-bold text-gray-800 mb-2">{tip.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
