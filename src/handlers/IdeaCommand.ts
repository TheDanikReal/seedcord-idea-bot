import {
  ChatInputCommandInteraction,
  MessageFlags,
  TextDisplayBuilder,
} from "discord.js";
import { InteractionHandler, SlashRoute } from "seedcord";
import { client, errorMessage, prompt, Vars } from "../utils";

@SlashRoute("idea")
export class IdeaHandler extends InteractionHandler<ChatInputCommandInteraction> {
  async execute(): Promise<void> {
    const ideaSection = new TextDisplayBuilder().setContent(
      "Generating your idea",
    );
    await this.event.reply({
      components: [ideaSection],
      flags: MessageFlags.IsComponentsV2,
    });
    const userQuery = this.event.options.getString("prompt", true);
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: "Generate an idea for " + userQuery },
      ],
      model: Vars.model,
      max_completion_tokens: 1000,
    });
    const ideaText =
      response.choices[0]?.message.content?.slice(0, 2000) ?? errorMessage;

    await this.event.editReply({
      components: [ideaSection.setContent(ideaText)],
      flags: MessageFlags.IsComponentsV2,
    });
  }
}
