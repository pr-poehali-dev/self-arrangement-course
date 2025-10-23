import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const whoFor = [
  'Для тех, кто чувствует, что застрял в повторяющихся сценариях',
  'Для тех, кто хочет разобраться в отношениях, деньгах, семье, но не знает, с чего начать',
  'Для тех, кто уже в терапии и хочет глубже понимать системные процессы',
  'Для психологов, коучей, помогающих специалистов, которые хотят добавить системное мышление в свою практику'
];

export const WhoForSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="Users" size={32} className="text-primary" />
        <h2 className="text-4xl font-bold">Для кого этот курс</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {whoFor.map((item, index) => (
          <Card key={index} className="p-6 bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Check" size={18} className="text-primary" />
              </div>
              <p className="text-lg leading-relaxed">{item}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
