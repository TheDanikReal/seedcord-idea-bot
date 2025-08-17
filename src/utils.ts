import { Envapt } from "envapt";
import OpenAI from "openai";
import { Globals } from "seedcord";

export class Vars extends Globals {
  @Envapt("AI_ENDPOINT")
  public static readonly endpoint: string;

  @Envapt("AI_TOKEN")
  public static readonly token: string;

  @Envapt("AI_MODEL")
  public static readonly model: string;
}

export const client = new OpenAI({
  baseURL: Vars.endpoint,
  apiKey: Vars.token,
});
export const prompt =
  "you're an ai assistant for generating ideas," +
  "ideas should be short, less than 2000 characters";
export const errorMessage = "Something went wrong!";
