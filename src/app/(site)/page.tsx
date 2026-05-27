import Image from "next/image";
import Link from "next/link";
import { countries } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const imageMap = new Map(PlaceHolderImages.map((img) => [img.id, img]));

  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://res.cloudinary.com/dz6kxumoo/image/upload/v1772903324/Planning_a_Trip_Can_Bring_as_Much_Joy_as_the_Trip_Itself_%EF%B8%8F__Studies_show_that_the_excitement_of_planning_a_vacation_can_boost_happiness_levels_just_as_much_as_the_journey_itself_So_why_not_start_dreaming_now_qqytlh.jpg"
          alt="A person planning a trip with a map"
          fill
          className="object-cover"
          priority
          data-ai-hint="person planning trip"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-headline font-bold mb-4 drop-shadow-lg">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Trippit helps you explore the world's most fascinating destinations.
            Plan your dream trip with AI-powered itineraries and community reviews.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/planner">
              Plan with AI <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Explore Top Destinations
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Start your journey from one of these incredible countries.
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
      </section>
    </>
  );
}
