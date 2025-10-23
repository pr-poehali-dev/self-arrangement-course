import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface PricingSectionProps {
  onPaymentClick: () => void;
}

export const PricingSection = ({ onPaymentClick }: PricingSectionProps) => {
  return (
    <section id="contact" className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="CreditCard" size={32} className="text-primary" />
        <h2 className="text-4xl font-bold">Стоимость и участие</h2>
      </div>
      <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 text-center">
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground">Полная стоимость</p>
            <p className="text-5xl font-bold text-primary">25 000 ₽</p>
            <p className="text-muted-foreground">Доступна рассрочка</p>
          </div>
          <Separator />
          <p className="text-lg text-muted-foreground">Онлайн‑группа до 12 человек</p>
          <div className="flex flex-col items-center gap-4">
            <Button 
              size="lg" 
              className="btn-golden-shine text-xl px-12 py-7 rounded-full hover:scale-105 transition-transform shadow-xl"
              onClick={onPaymentClick}
            >
              Записаться на курс
            </Button>
            <p className="text-sm text-muted-foreground">или отсканируйте QR-код для оплаты</p>
            <img 
              src="https://cdn.poehali.dev/files/40c71828-54b7-48c2-941b-285191aeb093.png" 
              alt="QR-код для оплаты" 
              className="w-48 h-48 rounded-lg border-2 border-primary/20 shadow-md cursor-pointer hover:scale-105 transition-transform"
              onClick={onPaymentClick}
            />
            <div className="pt-6 border-t border-primary/20 w-full space-y-3">
              <p className="text-sm text-muted-foreground mb-4">Есть вопросы? Напишите мне:</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all shadow-lg"
                  onClick={() => window.open('https://t.me/ubelovacoach', '_blank')}
                >
                  <Icon name="Send" size={24} className="mr-2" />
                  Telegram
                </Button>
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all shadow-lg"
                  onClick={() => window.open('https://wa.me/79515871027', '_blank')}
                >
                  <Icon name="Phone" size={24} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
