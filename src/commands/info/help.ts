import { RichEmbed, Message } from 'discord.js';
let config = require('../../../../settings.json')

export default function help(message: Message) {
    let color = 0x2f7d32;
    const pomoca = new RichEmbed()
    .setAuthor("Nougat - Prefix: " + config.prefix, 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
        .setColor(color.toString(16))
        .setTitle("https://pizza61.github.io/nougat")
        .setDescription("Użycie: nazwa komendy <obowiązkowy argument|albo inny> [nieobowiazkowy argument]. \nPamiętaj, aby przed nazwą komendy umieścić prefix. \nUżycie komendy bez potrzebnych arg. może skutkować pojawieniem się wyjasnienia.")

    const pomoc = new RichEmbed()
    .setAuthor("Nougat - Prefix: " + config.prefix, 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
        .setColor(color.toString(16))
        .addField('I n t e r a k t y w n e', '`pozwij`, `sprzedaj`')
        .addField('Ekonomia', '`zaplac <osoba> <kwota>`, `kup <id>`, `biedronka`, `hajs`')
        .addField('Zabawa', '`8pilka <zapytanie>`, `odwroc <tekst do odwrocenia>`, `ciastko`, `statek <pierwszy> <drugi>`, `mono`, `wybierz <co wybrac oddzielone |>`')
        .addField('Społecznościowe', '`sms <osoba> <wiadomosc>`')
        .addField('Informacja', '`yt <nazwa kanalu>`, `userinfo [uzytkownik]`, `git`, `check`, `checkme`')
        .addField('Obrazki', 'Do każdej wiadomości z komendą dołącz obrazek: `kolory`, `rozjasnij`, `sepia`, `przekrec`')
        .addField('Administracja', '`nazwa <nowa nazwa bota>`, `warn <uzytkownik> [powod]`, `czysc <ilosc wiadomosci>`, `zakazane`, `autorole <nazwa roli|usun>`')
        .setFooter('Nougat v3.0 (30.05.2018) by Pizza, hostuje '+config.host)
    message.author.send({embed: pomoca})
    message.author.send({embed: pomoc})
}

/*exports.run = (message, Discord, prefix, hostuje) => {
   
}*/