import { BaseCommandInteraction, Client } from "discord.js"
import { Command } from "../Command"
import isUp from '../utils/isUp';

export const IsisDown: Command = {
    name: "tudown",
    description: "Gibt bescheid ob ISIS, Moses oder Autolab down ist",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        var isisUp: boolean = await isUp('https://isis.tu-berlin.de/')
        var mosesUp: boolean = await isUp('https://moseskonto.tu-berlin.de/moses/index.html')
        var autolabUp: boolean = await isUp('https://autolab.service.tu-berlin.de/')

        await interaction.followUp({
            ephemeral: true,
            content: `ISIS: ${isisUp ? 'up' : 'down'} \nMoses: ${mosesUp ? 'up' : 'down'} \nAutolab: ${autolabUp ? 'up' : 'down'}`
        })
    }
};