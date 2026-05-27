import { PlannerForm } from "@/components/planner/PlannerForm";
import type { GeneratePersonalizedTripItineraryInput, GeneratePersonalizedTripItineraryOutput } from "@/ai/flows/generate-personalized-trip-itineraries";
import { generatePersonalizedTripItinerary } from "@/ai/flows/generate-personalized-trip-itineraries";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

async function handleTripPlanning(data: GeneratePersonalizedTripItineraryInput): Promise<GeneratePersonalizedTripItineraryOutput> {
  "use server";
  try {
    const result = await generatePersonalizedTripItinerary(data);
    return result;
  } catch (e) {
    console.error(e);
    // The AI flow can be flaky. In a real app, we'd have more robust error handling.
    return { itinerary: 'Sorry, I was unable to generate an itinerary. Please try again.' };
  }
}

export default function PlannerPage() {
  const plannerHeroImage = PlaceHolderImages.find(img => img.id === 'planner_hero');

  return (
    <div>
      <section className="relative bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
                AI-Powered Trip Planner
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                Let our AI craft a personalized itinerary just for you. Tell us
                your preferences, and we'll handle the rest, creating a unique
                journey tailored to your tastes and budget.
              </p>
            </div>
            {plannerHeroImage && (
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                 <Image
                    src={plannerHeroImage.imageUrl}
                    alt={plannerHeroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={plannerHeroImage.imageHint}
                  />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container mx-auto px-4 py-16 md:py-24">
           <PlannerForm handleTripPlanning={handleTripPlanning} />
        </div>
      </section>
    </div>
  );
}
