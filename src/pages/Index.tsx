import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const results = [
    'Понимаешь принципы системных связей',
    'Умеешь самостоятельно проводить мини‑расстановки',
    'Чувствуешь тело и поле, умеешь считывать динамики',
    'Видишь, где нарушен баланс и как его восстановить',
    'Получаешь инструмент для работы с любыми запросами'
  ];

  const included = [
    '5 онлайн‑занятий по 3 часа',
    'Методички и чек‑листы',
    'Записи занятий',
    'Домашние практики',
    'Сертификат об окончании курса'
  ];

  const whoFor = [
    'Для тех, кто чувствует, что застрял в повторяющихся сценариях',
    'Для тех, кто хочет разобраться в отношениях, деньгах, семье, но не знает, с чего начать',
    'Для тех, кто уже в терапии и хочет глубже понимать системные процессы',
    'Для психологов, коучей, помогающих специалистов, которые хотят добавить системное мышление в свою практику'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-secondary">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <circle cx="150" cy="150" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <line x1="50" y1="50" x2="150" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 space-y-24">
        <section className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
            <Icon name="Sparkles" size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Сам себе расстановщик
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
            5 дней, чтобы увидеть свои системы и научиться менять жизнь изнутри
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Пошаговый онлайн‑курс по системным расстановкам для личного роста, осознаний и внутреннего баланса
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform shadow-lg"
            onClick={scrollToContact}
          >
            Записаться на курс
          </Button>
        </section>

        <Separator className="my-16" />

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

        <section className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Calendar" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Что тебя ждёт</h2>
          </div>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary">5 дней</p>
                <p className="text-muted-foreground">по 3 часа онлайн</p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                  <Icon name="Lightbulb" size={32} className="text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary">Теория + практика</p>
                <p className="text-muted-foreground">живое взаимодействие</p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                  <Icon name="Video" size={32} className="text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary">Zoom-группа</p>
                <p className="text-muted-foreground">разборы и обратная связь</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="BookOpen" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Программа курса</h2>
          </div>
          <div className="space-y-6">
            {programDays.map((day, index) => (
              <Card key={index} className="p-8 bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl group">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                      {day.day}
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{day.title}</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-primary">Теория:</span> {day.theory}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-primary">Практика:</span> {day.practice}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Target" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Результат после курса</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Icon name="Check" size={18} className="text-white" />
                  </div>
                  <p className="text-lg leading-relaxed">{result}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

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

        <section className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="MessageSquare" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Отзывы</h2>
          </div>
          <Card className="p-8 bg-card/80 backdrop-blur border-primary/20">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-lg italic text-muted-foreground leading-relaxed">
                  «За 5 дней я увидела, как меняется восприятие. После курса я стала понимать, почему в жизни всё повторяется — и как это менять.»
                </p>
                <p className="font-semibold text-primary">— Марина К.</p>
              </div>
            </div>
          </Card>
        </section>

        <section id="contact" className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="CreditCard" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Стоимость и участие</h2>
          </div>
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 text-center">
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">Полная стоимость</p>
                <p className="text-5xl font-bold text-primary">Уточняйте цену</p>
                <p className="text-muted-foreground">Доступна рассрочка</p>
              </div>
              <Separator />
              <p className="text-lg text-muted-foreground">Онлайн‑группа до 12 человек</p>
              <Button 
                size="lg" 
                className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-transform shadow-xl"
              >
                Записаться на курс
              </Button>
            </div>
          </Card>
        </section>

        <section className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Star" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Автор курса</h2>
          </div>
          <Card className="p-8 bg-card/80 backdrop-blur border-primary/20">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                <Icon name="User" size={48} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold">Юлия...</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Психолог, расстановщик, методолог, более 35 лет практики.
                Автор обучающих программ, ведущая расстановочных шоу и терапевтических марафонов.
              </p>
            </div>
          </Card>
        </section>

        <section className="text-center space-y-8 py-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
            <Icon name="Zap" size={40} className="text-primary" />
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-bold leading-tight">
              Ты можешь продолжать искать ответы снаружи,<br />
              а можешь научиться видеть их внутри
            </p>
            <p className="text-xl text-muted-foreground">
              «Сам себе расстановщик» — это твой инструмент, чтобы наконец понять, как всё связано
            </p>
            <p className="text-2xl font-semibold text-primary">
              💫 Запишись и начни видеть систему своей жизни уже сейчас
            </p>
            <Button 
              size="lg" 
              className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-transform shadow-xl"
              onClick={scrollToContact}
            >
              Хочу на курс
            </Button>
          </div>
        </section>

        <footer className="text-center py-8 text-muted-foreground">
          <p>© 2025 Сам себе расстановщик. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;