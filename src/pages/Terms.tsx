import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
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
          <h1 className="text-4xl font-bold">Договор оферты</h1>
          
          <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
            <p>Здесь будет размещен договор оферты.</p>
            <p>Вы можете добавить свой текст в этот раздел.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
