import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CTASectionProps {
  onPaymentClick: () => void;
}

export const CTASection = ({ onPaymentClick }: CTASectionProps) => {
  return (
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
          Запишись и начни видеть и менять систему своей жизни уже сейчас
        </p>
        <Button 
          size="lg" 
          className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-transform shadow-xl"
          onClick={onPaymentClick}
        >
          Хочу на курс
        </Button>
      </div>
    </section>
  );
};
