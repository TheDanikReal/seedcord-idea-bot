import "reflect-metadata/lite";

import { resolve } from "node:path";

import { GatewayIntentBits, Partials } from "discord.js";
import { Seedcord, Globals } from "seedcord";

Globals.envPaths = resolve(import.meta.dirname, "../.env");

export const Emojis = {
  success: "checkmark",
  error: "cross",
  loading: "ritual_loader_1",
  heart: "red_heart",
};

async function main(): Promise<void> {
  const seedcord = new Seedcord({
    bot: {
      clientOptions: {
        intents: [
          GatewayIntentBits.MessageContent,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildPresences,
          GatewayIntentBits.GuildMembers,
          GatewayIntentBits.GuildWebhooks,
        ],
        partials: [Partials.GuildMember, Partials.User],
      },
      interactions: {
        path: resolve(import.meta.dirname, "./handlers"),
      },
      commands: {
        path: resolve(import.meta.dirname, "./components/commands"),
      },
      events: {
        path: resolve(import.meta.dirname, "./events"),
      },
      emojis: Emojis,
    },
    effects: {
      path: resolve(import.meta.dirname, "./effects"),
    },
  });

  await seedcord.start();
}

declare module "seedcord" {}

await main().catch(() => process.exit(1));
