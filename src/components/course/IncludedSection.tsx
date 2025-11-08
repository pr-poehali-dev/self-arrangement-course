import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const included = [
  '3 онлайн‑занятия по 3 часа',
  'Методички и чек‑листы',
  'Домашние практики',
  'Сертификат об окончании курса'
];

export const IncludedSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="Package" size={32} className="text-primary" />
        <h2 className="text-4xl font-bold">Что входит</h2>
      </div>
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="grid md:grid-cols-2 gap-6">
          {included.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Check" size={20} className="text-white" />
              </div>
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};