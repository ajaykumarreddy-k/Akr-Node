import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Button } from './Button';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card className={cn(
      "h-full flex flex-col relative overflow-hidden transition-all duration-300",
      plan.popular ? "border-blue-600 shadow-xl scale-105 z-10" : "border-slate-200 hover:border-slate-300 hover:shadow-md"
    )}>
      {plan.popular && (
        <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-600" />
      )}
      <CardHeader>
        {plan.popular && (
          <div className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-2">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl text-slate-900">{plan.name}</CardTitle>
        <CardDescription className="min-h-[40px] text-slate-500">{plan.description}</CardDescription>
        <div className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight text-slate-900">
          {plan.price}
          {plan.price !== 'Custom' && <span className="ml-1 text-xl font-medium text-slate-500">/mo</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-4">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-blue-600" />
              </div>
              <p className="ml-3 text-sm text-slate-700">{feature}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant={plan.popular ? "default" : "outline"}
          size="lg"
        >
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  );
}
