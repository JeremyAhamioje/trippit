'use client';
import Image from 'next/image';
import Link from 'next/link';
import { countries } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ExplorePage() {
  const imageMap = new Map(PlaceHolderImages.map((img) => [img.id, img]));

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-headline font-bold">
          Explore Destinations
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Browse through our curated list of amazing countries to visit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {countries.map((country) => {
          const image = imageMap.get(country.imageId);
          return (
            <Card
              key={country.id}
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <Link href={`/countries/${country.slug}`} className="block">
                <CardHeader className="p-0">
                  {image && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        data-ai-hint={image.imageHint}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-2xl mb-2">
                    {country.name}
                  </CardTitle>
                  <CardDescription>{country.description}</CardDescription>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
