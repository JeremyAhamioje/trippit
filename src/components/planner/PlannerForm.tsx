"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { countries } from "@/lib/data";
import type { GeneratePersonalizedTripItineraryOutput } from "@/ai/flows/generate-personalized-trip-itineraries";

const formSchema = z.object({
  country: z.string().min(1, "Please select a country."),
  travelDates: z.string().min(1, "Please enter your travel dates."),
  budget: z.string().min(1, "Please specify your budget."),
  activityPreferences: z.string().min(10, "Please describe your preferred activities in more detail."),
});

type PlannerFormProps = {
  handleTripPlanning: (data: z.infer<typeof formSchema>) => Promise<GeneratePersonalizedTripItineraryOutput>;
};

export function PlannerForm({ handleTripPlanning }: PlannerFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      travelDates: "",
      budget: "",
      activityPreferences: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setItinerary(null);
    try {
      const result = await handleTripPlanning(values);
      if (result.itinerary.includes('Sorry')) {
         toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: result.itinerary,
        });
      } else {
        setItinerary(result.itinerary);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem with our AI. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-2">
            <Wand2 className="text-primary"/>
            Create Your Itinerary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destination Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country to visit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((c) => (
                          <SelectItem key={c.id} value={c.name}>
                            {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="travelDates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Travel Dates</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'Next summer', 'December 10-20'" {...field} />
                    </FormControl>
                    <FormDescription>
                      When are you planning to travel?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., '$2000-$3000', 'Luxury', 'Budget-conscious'" {...field} />
                    </FormControl>
                    <FormDescription>
                      What's your approximate budget for the trip?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="activityPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Activity Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'I love historical sites, trying local food, and relaxing on the beach. Not a fan of nightlife.'"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                     <FormDescription>
                      What do you enjoy doing on vacation?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="lg" className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate My Trip"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="flex items-center justify-center">
        <Card className="w-full min-h-[400px] shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Your Personalized Itinerary</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full pt-16">
                 <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                 <p className="text-muted-foreground">Crafting your perfect trip...</p>
              </div>
            )}
            {itinerary && (
              <div className="prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-xl font-headline font-bold text-primary mt-6 mb-2 border-b pb-1">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-base font-semibold mt-4 mb-1">{children}</h3>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">{children}</strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-1 ml-2">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-sm text-muted-foreground">{children}</li>
                  ),
                  p: ({ children }) => (
                    <p className="text-sm text-muted-foreground mb-2">{children}</p>
                  ),
                }}
              >
                {itinerary}
              </ReactMarkdown>
              </div>
            )}
            {!isLoading && !itinerary && (
              <div className="text-center text-muted-foreground pt-16">
                <p>Your generated trip plan will appear here.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
