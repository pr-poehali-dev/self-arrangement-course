import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const programDays = [
  {
    day: 1,
    title: 'Основы системного мышления',
    theory: 'Законы систем, место человека в роду, баланс давать–брать',
    practice: 'Первая мини‑диагностика «Я в своей жизни», работа на листочках, телесное считывание поля'
  },
  {
    day: 2,
    title: 'Инструменты и первые техники',
    theory: 'Как использовать фигурки, стулья, листочки, как читать поле',
    practice: 'Техника «Стул» и мини‑работа «Я – работа – деньги – страх»'
  },
  {
    day: 3,
    title: 'Работа с запросами',
    theory: 'Как формулировать запрос, виды тем: отношения, родители, деньги',
    practice: 'Расстановки на темы «Родители», «Бывшие отношения», «Путь и страх успеха»'
  },
  {
    day: 4,
    title: 'Интеграция',
    theory: 'Как завершать процесс, сохранять энергию, не залипать в чужие истории',
    practice: 'Самостоятельная расстановка, обратная связь, медитация «Я в своей жизни»'
  },
  {
    day: 5,
    title: 'Экзаменационный день',
    theory: 'Тест, самостоятельная мини‑работа, обсуждение',
    practice: 'Результат: уверенность в самостоятельных расстановках, понимание динамик'
  }
];

export const ProgramSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="BookOpen" size={32} className="text-primary" />
        <h2 className="text-4xl font-bold">Программа курса</h2>
      </div>
      <div className="space-y-6">
        {programDays.map((day) => (
          <Card key={day.day} className="p-6 bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{day.day}</span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-primary">{day.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="Book" size={18} className="text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">Теория:</span> {day.theory}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Zap" size={18} className="text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">Практика:</span> {day.practice}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
