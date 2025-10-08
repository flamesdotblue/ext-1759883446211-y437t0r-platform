import React from 'react';
import { Rocket, Shield, Zap, Layers } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch-ready UX',
    desc: 'Beautiful defaults and patterns that help you ship polished experiences faster.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'Secure, accessible components that scale with your team and your audience.'
  },
  {
    icon: Zap,
    title: 'Fast by default',
    desc: 'Optimized rendering and lightweight interactions for snappy performance.'
  },
  {
    icon: Layers,
    title: 'Composable',
    desc: 'Modular building blocks that adapt to any product, workflow, or brand.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Everything you need to move faster</h2>
          <p className="mt-3 text-neutral-700">A flexible system that balances clarity with delight, designed for modern product teams.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} Icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-900 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-700">{desc}</p>
    </div>
  );
}
