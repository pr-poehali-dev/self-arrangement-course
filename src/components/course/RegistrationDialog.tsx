import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: { name: string; phone: string; email: string };
  onFormDataChange: (data: { name: string; phone: string; email: string }) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const RegistrationDialog = ({
  open,
  onOpenChange,
  formData,
  onFormDataChange,
  onSubmit,
}: RegistrationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Записаться на курс</DialogTitle>
          <DialogDescription className="text-center">
            Заполните форму, и мы перенаправим вас на страницу оплаты
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              placeholder="Введите ваше имя"
              value={formData.name}
              onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={(e) => onFormDataChange({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => onFormDataChange({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full" size="lg">
            Продолжить к оплате
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
