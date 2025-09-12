import { LucideIconData } from 'lucide-angular';

export interface MenuItem {
  name: string;
  icon: LucideIconData;
  route?: string;
}
