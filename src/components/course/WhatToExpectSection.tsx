import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const WhatToExpectSection = () => {
  return (
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
            <p className="text-3xl font-bold text-primary">3 дня</p>
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
  );
};