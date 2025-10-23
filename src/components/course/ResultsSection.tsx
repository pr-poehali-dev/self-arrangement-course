import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const results = [
  'Понимаешь принципы системных связей',
  'Умеешь самостоятельно проводить мини‑расстановки',
  'Чувствуешь тело и поле, умеешь считывать динамики',
  'Видишь, где нарушен баланс и как его восстановить',
  'Получаешь инструмент для работы с любыми запросами'
];

export const ResultsSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="Target" size={32} className="text-primary" />
        <h2 className="text-4xl font-bold">Результат</h2>
      </div>
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Check" size={20} className="text-white" />
              </div>
              <p className="text-lg leading-relaxed">{result}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
