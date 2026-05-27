'use server';
/**
 * @fileOverview A trip planner AI agent.
 *
 * - generatePersonalizedTripItinerary - A function that handles the trip planning process.
 * - GeneratePersonalizedTripItineraryInput - The input type for the generatePersonalizedTripItinerary function.
 * - GeneratePersonalizedTripItineraryOutput - The return type for the generatePersonalizedTripItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedTripItineraryInputSchema = z.object({
  travelDates: z.string().describe('The desired travel dates for the trip.'),
  budget: z.string().describe('The budget for the trip (e.g., \'\$1000-2000\').'),
  activityPreferences: z.string().describe('A description of preferred activities (e.g., \'hiking, museums, and local food\').'),
  country: z.string().describe('The country to visit.'),
});
export type GeneratePersonalizedTripItineraryInput = z.infer<typeof GeneratePersonalizedTripItineraryInputSchema>;

const GeneratePersonalizedTripItineraryOutputSchema = z.object({
  itinerary: z.string().describe('A personalized trip itinerary based on the user preferences.'),
});
export type GeneratePersonalizedTripItineraryOutput = z.infer<typeof GeneratePersonalizedTripItineraryOutputSchema>;

export async function generatePersonalizedTripItinerary(input: GeneratePersonalizedTripItineraryInput): Promise<GeneratePersonalizedTripItineraryOutput> {
  return generatePersonalizedTripItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedTripItineraryPrompt',
  input: {schema: GeneratePersonalizedTripItineraryInputSchema},
  output: {schema: GeneratePersonalizedTripItineraryOutputSchema},
  prompt: `You are a trip planning expert. Generate a detailed, day-by-day itinerary for a trip to {{{country}}}.

Travel Dates: {{{travelDates}}}
Budget: {{{budget}}}
Activity Preferences: {{{activityPreferences}}}

Format the itinerary using markdown with this structure:
- A short intro paragraph summarizing the trip
- Each day as a ## heading (e.g. ## Day 1: Arrival & City Highlights)
- Under each day, use **Morning**, **Afternoon**, and **Evening** bold subheadings
- Use bullet points for individual activities
- End with a ## Practical Tips section covering budget breakdown, best transport options, and packing notes`,
});

const generatePersonalizedTripItineraryFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedTripItineraryFlow',
    inputSchema: GeneratePersonalizedTripItineraryInputSchema,
    outputSchema: GeneratePersonalizedTripItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
