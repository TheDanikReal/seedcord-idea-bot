import { RegisterCommand, BuilderComponent } from "seedcord";

@RegisterCommand("global")
export class IdeaCommand extends BuilderComponent<"command"> {
  constructor() {
    super("command");

    this.instance
      .setName("idea")
      .setDescription("Generate an idea with LLMs")
      .addStringOption((option) =>
        option
          .setName("prompt")
          .setDescription("Prompt for idea")
          .setRequired(true),
      );
  }
}
