import type { ReactNode } from 'react';

export interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

export function FeatureCard({ index, title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-[#F6F7F9] rounded-[1.25rem] p-8 flex flex-col justify-between aspect-[3/4] group cursor-pointer relative overflow-hidden transition-colors hover:bg-[#F0F2F5]">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-widest">
            0{index + 1}
          </span>
          {icon && <div className="text-gray-400">{icon}</div>}
        </div>
        <h4 className="text-lg font-medium leading-snug text-slate-900">{title}</h4>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
}
