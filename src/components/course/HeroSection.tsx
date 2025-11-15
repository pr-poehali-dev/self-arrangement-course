import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  isVisible: boolean;
  onScrollToContact: () => void;
}

export const HeroSection = ({ isVisible, onScrollToContact }: HeroSectionProps) => {
  return (
    <section className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
        <Icon name="Sparkles" size={40} className="golden-accent" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
        Сам себе расстановщик
      </h1>
      <p className="text-2xl md:text-3xl max-w-3xl mx-auto">
        <span className="text-primary">3 дня</span>, чтобы увидеть свои системы и <span className="golden-accent">научиться менять жизнь</span> изнутри
      </p>
      <div className="text-lg text-muted-foreground max-w-3xl mx-auto space-y-4">
        <p>
          «Сам себе расстановщик» — курс для тех, кто действует, достигает, помогает другим,
          но хочет наконец понять, что реально мешает идти вперёд.
        </p>
        <p>
          Ты научишься видеть глубинные причины повторяющихся сценариев — в делах, деньгах, отношениях — и находить решения без борьбы и надрыва.
        </p>
        <p>
          Это пошаговый инструмент, который возвращает ясность, устойчивость и внутреннюю силу.
          После курса ты перестанешь искать ответы вовне — и начнёшь управлять своей жизнью изнутри.
        </p>
      </div>
      <Button 
        size="lg" 
        className="btn-golden-shine text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform shadow-lg"
        onClick={onScrollToContact}
      >
        Записаться на курс
      </Button>
    </section>
  );
};