import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { STATISTICS } from '../../constants';

export function Statistics() {
  return (
    <Section className="bg-slate-900 text-white py-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATISTICS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
