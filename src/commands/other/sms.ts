import { RichEmbed, User, Message } from 'discord.js';
import { usageEmbed } from '../../modules/errorEmbed';
export default function sms(args, message: Message) {
    let numer: User;
    if(message.mentions.users.first()) {
        numer = message.mentions.users.first();
    } else if(args[0]) {
        let bab = message.guild.members.get(args[0]).user
        if(typeof bab != 'undefined') {
            numer = bab;
        }
    } else {
        message.channel.send({embed: usageEmbed("*sms @ping/id wiadomość")})

        return;
    }
    let wiadomosc = args.slice(1).join(" ");
    if(typeof numer == 'undefined' || typeof wiadomosc == 'undefined') {
        message.channel.send({embed: usageEmbed("*sms @ping/id wiadomość")})
        /*const errEmbed = new RichEmbed()
            .setAuthor('Nougat', 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
            .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
            .setTitle('Należy użyć *sms @ping wiadomość');
        message.channel.send({
            embed: errEmbed
        });*/
        return;
    }
    numer.send('Wiadomość przychodząca od ' + message.author + ': ' + wiadomosc)
        .catch(() => {
            message.channel.send("Nie udało się wysłać wiadomości :/");
        })
    message.channel.send('Leci wiadomość');
}