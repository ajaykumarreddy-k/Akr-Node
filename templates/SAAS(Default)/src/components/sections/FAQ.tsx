import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { FAQItem } from '../ui/FAQItem';
import { FAQS } from '../../constants';

export function FAQ() {
  return (
    <Section id="faq" className="bg-white">
      <Container className="max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="flex flex-col">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FAQItem 
                question={faq.question}
                answer={faq.answer}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
