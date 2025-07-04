
export default interface ExtensionType {
  id: string;
  name: string;
  description: string;
  icon: {
    light: string,
    dark?: string,
  };
  isActive: boolean;
};

export type FilterType = 'All' | 'Active' | 'Inactive';

export type Theme = 'light' | 'dark';
