import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Hello: Command = {
    name: "hello",
    description: "Grüßt dich",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Hey >=D!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};