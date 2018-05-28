import { RichEmbed } from 'discord.js';

export default function git(message) {
    let color = (Math.random() * 0xFFFFFF << 0);
    const infoEmbed = new RichEmbed()
    .setAuthor("Nougat", 'https://cdn.discordapp.com/avatars/429587398511427584/d72e2f45262f7f7bdf956df2270752e3.jpg?size=1024')
    .setColor(color.toString(16))
    .setTitle("Nougat jest open source!")
    .setDescription("No bo większość botów nie jest.")
    .addField("Link do repo", "https://github.com/pizza61/nougat")
    .addField("Strona", "https://pizza61.github.io/nougat");
    message.channel.send({embed: infoEmbed})
}