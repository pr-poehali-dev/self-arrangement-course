import { useEffect, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { HeroSection } from '@/components/course/HeroSection';
import { WhoForSection } from '@/components/course/WhoForSection';
import { WhatToExpectSection } from '@/components/course/WhatToExpectSection';
import { ProgramSection } from '@/components/course/ProgramSection';
import { ResultsSection } from '@/components/course/ResultsSection';
import { IncludedSection } from '@/components/course/IncludedSection';
import { TestimonialsSection } from '@/components/course/TestimonialsSection';
import { AuthorSection } from '@/components/course/AuthorSection';
import { PricingSection } from '@/components/course/PricingSection';
import { CTASection } from '@/components/course/CTASection';
import { RegistrationDialog } from '@/components/course/RegistrationDialog';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePayment = () => {
    setShowDialog(true);
  };

  const handleSuccess = () => {
    toast({
      title: 'Заявка отправлена!',
      description: 'Переходим к оплате...',
    });
    
    setTimeout(() => {
      window.open('https://b2b.cbrpay.ru/BS1C006JSRILA2I39HVPQDG7CN7IDNM2', '_blank');
    }, 1000);
  };

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
        <HeroSection isVisible={isVisible} onScrollToContact={scrollToContact} />
        
        <Separator className="my-16" />
        
        <WhoForSection />
        <WhatToExpectSection />
        <ProgramSection />
        <ResultsSection />
        <IncludedSection />
        <TestimonialsSection />
        <AuthorSection />
        <PricingSection onPaymentClick={handlePayment} />
        <CTASection onPaymentClick={handlePayment} />

        <footer className="text-center py-8 text-muted-foreground">
          <p>© 2025 Сам себе расстановщик. Все права защищены.</p>
        </footer>
      </div>

      <RegistrationDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default Index;