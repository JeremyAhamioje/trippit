'use client';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { countries } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LandmarkPage() {
  const params = useParams();
  const { slug, landmarkSlug } = params;

  const country = countries.find((c) => c.slug === slug);
  const landmark = country?.landmarks.find((l) => l.slug === landmarkSlug);
  const imageMap = new Map(PlaceHolderImages.map((img) => [img.id, img]));

  if (!country || !landmark) {
    notFound();
  }

  const landmarkImage = imageMap.get(landmark.imageId);

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href={`/countries/${country.slug}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to {country.name}
          </Link>
        </div>

        <section className="relative w-full h-[50vh] md:h-[65vh] rounded-lg overflow-hidden mb-12">
            {landmarkImage && (
                <Image
                    src={landmarkImage.imageUrl}
                    alt={landmark.name}
                    fill
                    className="object-cover"
                    data-ai-hint={landmarkImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-2 drop-shadow-lg">
                    {landmark.name}
                </h1>
            </div>
        </section>

        <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {landmark.description}
            </p>
        </div>
      </div>
    </div>
  );
}
