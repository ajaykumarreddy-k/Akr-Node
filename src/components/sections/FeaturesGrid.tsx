import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { FeatureCard } from '../ui/FeatureCard';
import { FEATURES } from '../../constants';

export function FeaturesGrid() {
  return (
    <Section id="features" className="bg-white">
      <Container>
        <div className="flex justify-between items-baseline mb-12 border-b border-gray-200 pb-5">
          <h3 className="text-[22px] font-medium tracking-tight text-slate-900">Our distinct approach to creating value</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.slice(0, 4).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard 
                index={index}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
