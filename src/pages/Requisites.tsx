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

            <div className="space-y-2">
              <p>Здесь будут размещены реквизиты:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>ИНН</li>
                <li>ОГРНИП</li>
                <li>Расчетный счет</li>
                <li>Банк</li>
                <li>БИК</li>
                <li>Корр. счет</li>
                <li>Юридический адрес</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requisites;
