import { Command } from "./Command";
import { Hello } from "./commands/Hello";
import { IsisDown } from "./commands/IsisDown";

export const Commands: Command[] = [IsisDown, Hello];