import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

const model = process.env.GEMINI_MODEL_ID ?? 'gemini-2.5-flash';

export const ai = genkit({
  plugins: [googleAI()],
  model: `googleai/${model}`,
});
