import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
                A modern way to engage with your audience
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-neutral-700 max-w-2xl">
                Experience an interactive, minimalist design that responds to every move. Built for teams who value clarity, performance, and a beautiful user experience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 transition"
                >
                  Start Free Trial
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition"
                >
                  See Features
                </a>
              </div>
              <div className="mt-6 text-sm text-neutral-600">
                No credit card required. 14-day free trial.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
