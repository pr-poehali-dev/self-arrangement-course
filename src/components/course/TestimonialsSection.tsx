import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    text: 'Поняла, почему последние 3 года работала с постоянным выгоранием. На второй день сделала расстановку на тему денег — через неделю получила повышение',
    author: 'Марина, 34 года',
    gradient: 'from-primary to-accent'
  },
  {
    text: 'Увидел паттерн в отношениях с отцом, который тянулся 40 лет. После курса впервые поговорили по душам без напряжения',
    author: 'Дмитрий, 42 года',
    gradient: 'from-accent to-primary'
  },
  {
    text: 'Разобралась, откуда страх принимать решения. Теперь делаю расстановки перед важными выборами — помогает увидеть правильный путь',
    author: 'Анна, 29 лет',
    gradient: 'from-primary/70 to-accent/70'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="MessageSquare" size={32} className="text-primary" />
        <h2 className="text-4xl font-bold">Отзывы</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-8 bg-card/80 backdrop-blur border-primary/20">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
                  <Icon name="User" size={32} className="text-white" />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-lg italic text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
                <p className="font-semibold text-primary">— {testimonial.author}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
