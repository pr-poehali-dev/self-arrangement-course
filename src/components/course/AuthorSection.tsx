import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const AuthorSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="Star" size={32} className="text-primary" />
        <h2 className="text-4xl font-bold">Автор курса</h2>
      </div>
      <Card className="p-8 bg-card/80 backdrop-blur border-primary/20">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <img 
            src="https://cdn.poehali.dev/files/238e003b-e895-4303-bff6-4175b5a15a73.jpg" 
            alt="Белова Юлия" 
            className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20 shadow-xl"
          />
          <h3 className="text-3xl font-bold">Белова Юлия</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Психолог, коуч, расстановщик, автор книги "15 секретов как полюбить себя", автор и ведущая расстановочных шоу "Ключи к Жизни" и терапевтических групп.
          </p>
          <p className="text-xl font-semibold text-primary mt-4">
            Более 20 лет практики и 1000 клиентов по всему миру
          </p>
        </div>
      </Card>
    </section>
  );
};
