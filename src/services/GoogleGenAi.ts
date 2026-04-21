/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { GenerateContentResponse, GoogleGenAI } from "@google/genai";
import MetaDataBuilder from "../utils/metadata/types/metadatabuilder.js";
import IMetadata from "../utils/metadata/types/metadata.js";

const GEMINI_MODEL =
   process.env.GEMINI_MODEL || "gemini-3.1-flash-lite-preview";

export async function pullRecipeFromUrl(url: string): Promise<string> {
   console.log("Initializing GoogleGenAI client to pull recipe from URL:", url);
   const ai = new GoogleGenAI({}); // pull Gemini key from environment variables
   console.log(
      "Initializing GoogleGenAI model with system instructions for pulling recipe from URL",
   );
   const response = ai.models
      .generateContent({
         model: GEMINI_MODEL,
         contents: `URL: ${url}`,
         config: {
            temperature: 0.2, // we want this to be as deterministic as possible, since we're relying on the output to be in a specific format
            systemInstruction: `
            You are a helpful assistant for parsing recipes from the web.
            Given a URL, you will pull the ingredients and instructions for
            the recipe on that page and return it as a string.

            Individual ingredients and instructions should be separated by newlines.
            The ingredients should be listed first,
            followed by a blank line, and then the instructions.

            You should output the minimum necessary text to convey the
            ingredients and instructions, and omit any extraneous information.
            `,
         },
      })
      .then((response: GenerateContentResponse) => {
         console.log(response.text);
         return response.text ?? "";
      })
      .catch((e: Error) => {
         console.log("Failed to pull recipe from URL:", e);
      });
   return (await response) ?? "";
}

export async function pullRecipeMetadataFromUrl(
   url: string,
): Promise<IMetadata> {
   console.log("Pulling recipe metadata from URL:", url);
   const ai = new GoogleGenAI({}); // pull Gemini key from environment variables
   console.log(
      "Initializing GoogleGenAI model with system instructions for pulling recipe from URL",
   );
   console.log("Generating content from model to pull recipe from URL:", url);
   const response = ai.models
      .generateContent({
         model: GEMINI_MODEL,
         contents: `URL: ${url}`,
         config: {
            temperature: 0.2, // we want this to be as deterministic as possible, since we're relying on the output to be in a specific format
            systemInstruction: `
            You are a helpful assistant for parsing recipe metadata from the web.
            Given a URL, you will pull the title, description, author, and image for
            the recipe on that page and return it as a JSON object with the following format:
            
            {
               "source": string;
               "author": string;
               "title": string;
               "description": string;
               "imageUrl": string;
               "url": string;
            }

            The "source" field should be the name of the website the recipe is from (e.g. "AllRecipes", "Food Network", etc).
            The "author" field should be the name of the person who created the recipe, if available.
            The "title" field should be the title of the recipe.
            The "description" field should be a brief description of the recipe, if available.
            The "imageUrl" field should be a URL to a thumbnail of the recipe, if available.
            The "url" field should be the original URL of the recipe.

            You should only include information that is explicitly stated on the page, and not make any assumptions or inferences.
            The image should only be included if it can be viewed directly by the user
            who will have the link by navigating to that url. It should be pulled from og:image if possible.

            You should output the minimum necessary text to convey the
            metadata, and omit any extraneous information.
            The output must be returned as parsable JSON in the exact format specified above.
            `,
         },
      })
      .then((response: GenerateContentResponse) => {
         console.log(response.text);
         const metadata = response.text;
         try {
            if (!metadata) {
               throw new Error("No metadata returned from model");
            }
            const parsed = JSON.parse(metadata);
            const builder = new MetaDataBuilder();
            builder.setProperty("og:title", parsed.title);
            builder.setProperty("og:description", parsed.description);
            builder.setProperty("og:image", parsed.imageUrl);
            builder.setProperty("og:url", parsed.url);
            builder.setProperty("og:site_name", parsed.source);
            return builder.build();
         } catch (e) {
            console.log("Failed to parse metadata response:", e);
            throw new Error("Failed to parse metadata response");
         }
      });
   return response;
}
