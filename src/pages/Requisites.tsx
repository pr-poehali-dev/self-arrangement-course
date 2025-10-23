import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Requisites = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-secondary">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Button>
        </Link>

        <div className="bg-card rounded-lg shadow-lg p-8 space-y-6">
          <h1 className="text-4xl font-bold">Реквизиты</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-foreground">Индивидуальный предприниматель</h2>
              <p className="text-lg">ИП Белова Юлия Валерьевна</p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-[200px_1fr] gap-2">
                <span className="font-medium text-foreground">ИНН:</span>
                <span>421811836987</span>
              </div>
              <div className="grid grid-cols-[200px_1fr] gap-2">
                <span className="font-medium text-foreground">ОГРНИП:</span>
                <span>324420500072696</span>
              </div>
              <div className="grid grid-cols-[200px_1fr] gap-2">
                <span className="font-medium text-foreground">Юридический адрес:</span>
                <span>654018, Россия, Кемеровская область - Кузбасс, г. Новокузнецк, р-н Центральный, пр-кт Октябрьский, д. 45, кв. 38</span>
              </div>
            </div>

            <div className="pt-4 border-t space-y-3">
              <h3 className="font-semibold text-foreground text-lg">Банковские реквизиты</h3>
              <div className="grid grid-cols-[200px_1fr] gap-2">
                <span className="font-medium text-foreground">Расчетный счет:</span>
                <span>40802810800006476909</span>
              </div>
              <div className="grid grid-cols-[200px_1fr] gap-2">
                <span className="font-medium text-foreground">Банк:</span>
                <span>АО «ТБанк»</span>
              </div>
              <div className="grid grid-cols-[200px_1fr] gap-2">
                <span className="font-medium text-foreground">ИНН банка:</span>
                <span>7710140679</span>
              </div>
              <div className="grid grid-cols-[200px_1fr] gap-2">
                <span className="font-medium text-foreground">БИК банка:</span>
                <span>044525974</span>
              </div>
              <div className="grid grid-cols-[200px_1fr] gap-2">
                <span className="font-medium text-foreground">Корр. счет банка:</span>
                <span>30101810145250000974</span>
              </div>
              <div className="grid grid-cols-[200px_1fr] gap-2">
                <span className="font-medium text-foreground">Адрес банка:</span>
                <span>127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requisites;