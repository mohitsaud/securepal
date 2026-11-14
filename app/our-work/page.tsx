import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageMetadata } from '@/lib/seo-metadata';

const projectPhotos = [
  {
    src: '/images/projects/bn-north-lakes/network-rack.jpg',
    alt: 'Network equipment installed in a cabinet at BN North Lakes',
    caption: 'Network rack and installed equipment',
  },
  {
    src: '/images/projects/bn-north-lakes/rack-equipment.jpg',
    alt: 'Network rack with patch panel and connected equipment',
    caption: 'Rack, patch panel and network equipment',
  },
  {
    src: '/images/projects/bn-north-lakes/structured-cabling.jpg',
    alt: 'Structured cabling routed along the wall',
    caption: 'Structured cabling',
  },
  {
    src: '/images/projects/bn-north-lakes/network-outlets.jpg',
    alt: 'Network outlets installed at the work area',
    caption: 'Network outlets',
  },
  {
    src: '/images/projects/bn-north-lakes/equipment-cabinet.jpg',
    alt: 'Network equipment arranged inside a cabinet',
    caption: 'Equipment cabinet',
  },
  {
    src: '/images/projects/bn-north-lakes/installation-area.jpg',
    alt: 'On-site network installation area',
    caption: 'On-site installation',
  },
];

export const metadata: Metadata = createPageMetadata({
  title: 'Our Work | BN North Lakes Network Installation',
  description:
    'See SecurePal’s on-site network equipment, structured cabling, and network outlet work at BN North Lakes.',
  path: '/our-work',
});

export default function OurWorkPage() {
  return (
    <>
      <section className="bg-background py-14 sm:py-20">
        <div className="container">
          <p className="text-sm font-semibold text-primary">Our work</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Network installation at BN North Lakes.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A closer look at the network rack, cabling, and outlets installed
            on site by SecurePal.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="bn-north-lakes-title"
        className="bg-secondary py-12 sm:py-16"
      >
        <div className="container">
          <div className="mb-8 grid gap-5 sm:mb-10 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <MapPin aria-hidden="true" className="h-4 w-4 text-primary" />
                BN North Lakes
              </p>
              <h2
                id="bn-north-lakes-title"
                className="mt-3 text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
              >
                Network infrastructure and office setup
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-right">
              Network equipment, structured cabling, and network outlets.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectPhotos.map(({ src, alt, caption }, index) => (
              <li
                key={src}
                className={index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <figure className="h-full overflow-hidden rounded-xl bg-white">
                  <div
                    className={`relative overflow-hidden bg-slate-200 ${
                      index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes={
                        index === 0
                          ? '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw'
                          : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      }
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                    {caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-border pt-7 sm:flex-row sm:items-center">
            <p className="max-w-xl text-base leading-7 text-navy">
              Planning an IT or network setup for your workplace?
            </p>
            <Button asChild className="bg-primary text-white hover:bg-brand-hover">
              <Link href="/contact#enquiry">
                Talk to SecurePal <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
