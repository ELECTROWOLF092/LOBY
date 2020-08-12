//////////////////////BOT////////////////////////
const { Client, MessageEmbed  } = require("discord.js");
const client = new Client();
var prefix = 'l!';
client.on("ready", () => {
  client.user.setPresence( {
  
activity: {name: `l!help,l!Phelp BETA V.1.1.5.2, https://discord.gg/QKfgQyT (soporte)`,
type: "WATCHING"},
status:"online"});})
console.log("LISTO PA BOTEAR B)");

client.on("ready", () => {
  console.log("LISTO PA BOTEAR");
});

var bannedwords = "fuck,shit,slut,whore".split(",");

client.on("message", msg => {
  if (msg.guild === null) return;

  for (i=0;i<bannedwords.length;i++) {
    if (msg.content.toLowerCase().includes(bannedwords[i])) {
      msg.delete();
      msg.reply("porfa vor no seas grosero :3");
      return;
    }
  }

  if (msg.author.bot) return;
  if (!msg.member.hasPermission("ADMINISTRATOR")) return;

  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  msg.delete();
  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " **ah sido kickeado exelentemente por**" + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send("**ah ocurrido un error**");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " **ah sido baneado exelentemente por**" + msg.author.username + " por " + mc + " dias!");
    }).catch(e => {
      msg.channel.send("**ah ocurrido un error**");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + "ah sido muteao exitosamente");
      }).catch(e => {
        msg.channel.send("ah ocurrido un error");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + "ah sido unmuteao exitosamente");
      }).catch(e => {
        msg.channel.send("ah ocurrido un error");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "clear")) {
    var mc = msg.content.split(" ")[1];
    msg.channel.bulkDelete(mc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "eval")) {
    var sc = msg.content.substring(msg.content.indexOf(" "));
    eval(sc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "calc")) {
    var ca = msg.content.substring(msg.content.indexOf(" "));
    msg.reply(ca + " is " + eval(ca).toFixed(2));
  }
});

client.login('NzMwNTg2NDAyODYwODI2Nzc2.XwuBbw.KECoAJqHwBsTohZ5nfcN-N58cRs');
client.on("message", message =>{
  if (message.content === ("l!help")){
    const embed = new MessageEmbed()
      .setTitle('**🌟Ayuda🌟**')
      .setColor(0x07EBFB)
      .setDescription('Comandos oficiales de loby bot:')
      .setThumbnail('https://gem-ti.com/site/wp-content/uploads/2014/06/small_left_screen.gif')
      .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
      .addField("**‼⚠Informacion⚠‼**", "l!infoserver,l!canal")
      .addField("**💡PREFIX💡**", "l!  l!p(musica)")
    .addField("**👥Interaccion/social👥**", " l!hola,l!adios,l!xd,l!jaja,l!:v,l!quiero admin,l!caiese,l-!8ball,l!hackbot SE VIENEN MAS")
    .addField("**👥Interracion con mencion(@ o ping)👥**", "l!golpe,l!raiu,l!kill,l!abrazo,l!esquiva,l!chao,l!hack,BEEP BOOP---SE VIENEN MAS")
    .addField("**🎼MUSICA🎼**", "l!phelp paar verlos :3")
      .addField("**📥Invitacion📥**", "l!invite")
      .addField("**⚙⚠Mod/Admins⚠⚙**", "l!ban,l!kick,l!clear,l!calc(para calcular lo q quieras por ejemplo 5+5),y con automod que elimina las groserias :3")
      .addField("**⚙️soporte o ideas⚙️**", "https://discord.gg/QKfgQyT")
    .addField("**⚙️Version⚙️**", "Beta V.1.1.5.2")
      .setTimestamp()
    client.user.username
    client.user.avatarURL()
    message.member.displayName
    message.author.avatarURL()
    message.channel.send(embed);
  }
})

  client.on("message", message =>{
  if (message.content === ("l!infoserver")){
    const embed = new MessageEmbed()
    .setTitle('**⚠️Información del servidor⚠️**')
      .setColor(0x07EBFB)
      .setDescription('**Información actual del servidor**')
      .addField('**Nombre del servidor**', message.guild.name, true)
      .addField('**Integrantes**', message.guild.memberCount, true)
      .addField('**ID**',message.guild.id)
      .addField('**Owner**', message.guild.owner)
      .addField('**Region**', message.guild.region)
      .addField('**Nivel de verificacion**', message.guild.verificationLevel)
      .addField('**creado el**', message.guild.createdAt)
      .addField('**icono**', message.guild.icon)
      .addField('**verified**',message.guild.verified)
     .addField('**canal afk**', message.guild.afkChannel)
       .addField('**canales**', message.guild.Channels)
    
    
  
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail('https://media.giphy.com/media/dahnt6nqwan1S/giphy.gif')
      .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
      .setTimestamp()
      .setURL('https://discord.gg/QKfgQyT');
    client.user.username
    client.user.avatarURL()
    message.member.displayName
    message.author.avatarURL()
    message.channel.send(embed);
  }
})
 client.on("message", message =>{
  if (message.content === ("l!adios")){
    const embed = new MessageEmbed()
      .setTitle('**👋despedida👋**')
      .setColor(0x07EBFB)
      .setDescription(' ')
      .setTimestamp()
      .setImage('https://media.discordapp.net/attachments/673980548733075466/709934672360243220/93586493_1492070717639919_3902484985398951936_n.png')
    client.user.username
    client.user.avatarURL()
    message.member.displayName
    message.author.avatarURL()
    message.channel.send(embed);
  }
   })

        client.on("message", message =>{
  if (message.content === ("l!invite")){
    const embed = new MessageEmbed()
    .setTitle('**📥invitacion📥**')
      .setColor(0x07EBFB)
      .setDescription('**aca podras invitar al bot**:https://discord.com/oauth2/authorize?client_id=730586402860826776&scope=bot&permissions=2146958847')
      .setTimestamp()
      .setThumbnail('http://www.aytogor.es/images/buttons/buzon.gif')
    client.user.username
    client.user.avatarURL()
    message.member.displayName
    message.author.avatarURL()
    message.channel.send(embed);
    }
})

        client.on("message", message =>{
  if (message.content === ("l!canal")){
    const embed = new MessageEmbed()
    .setTitle('**📥Canal📥**')
      .setColor(0x07EBFB)
      .setDescription('**aca podras suscribirte al canal de mi creador (electric)**:https://www.youtube.com/c/Electricwolf082')
    .setThumbnail('https://media.discordapp.net/attachments/459755555733504001/731911257673826365/logo.png?width=613&height=613')
      .setTimestamp()
    client.user.username
    client.user.avatarURL()
    message.member.displayName
    message.author.avatarURL()
    message.channel.send(embed);
    }
})
 client.on("message", message =>{
  if (message.content === ("l!hola")){
    const embed = new MessageEmbed()
      .setTitle('**👋saludos👋**')
      .setColor(0x07EBFB)
      .setDescription('Hola como te va bro :3')
      .setTimestamp()
    client.user.username
    client.user.avatarURL()
    message.member.displayName
    message.author.avatarURL()
    message.channel.send(embed);
  }
   })
        client.on("message", message =>{
  if (message.content === ("l!xd")){
    const embed = new MessageEmbed()
    .setTitle('**xd**')
      .setColor(0x07EBFB)
      .setDescription('xdxdxd')
    .setThumbnail('https://media.discordapp.net/attachments/731968851058622508/732203854216691712/69tdq8LJePL1fC1Ywoel5hNykb9q6VhevE4e9KwigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABo9hfP0DWZJJ1Lo.png')
      .setTimestamp()
    client.user.username
    client.user.avatarURL()
    message.member.displayName
    message.author.avatarURL()
    message.channel.send(embed);
    }
})
  
        client.on("message", message =>{
  if (message.content === ("l!jaja")){
    const embed = new MessageEmbed()
    .setTitle('**JAJJAJAJA**')
      .setColor(0x07EBFB)
      .setDescription('no se de que te reis pero..,JAJAJAJAJAJAJ')
    .setThumbnail('https://media.discordapp.net/attachments/731968851058622508/732205760855015511/maxresdefault.png?width=451&height=254')
      .setTimestamp()
    client.user.username
    client.user.avatarURL()
    message.member.displayName
    message.author.avatarURL()
    message.channel.send(embed);
    }
})
//////////////////////////////////////////////

//Si contiene algunas de estas palabras borra el mensaje
client.on('message', msg => {
  if(msg.content.includes('put0')
     || msg.content.includes('mierda')
     || msg.content.includes('chupaverga')
     || msg.content.includes('boludo')
     || msg.content.includes('estupido')
    ){msg.delete()
    msg.reply('**Cuidado con las malas palabras**')
    }});

//Si contiene algunas de estas palabras borra el mensaje
client.on('message', msg => {
  if(msg.content.includes('culo')
     || msg.content.includes('orto')
     || msg.content.includes('Orto')
     || msg.content.includes('qlo')
    ){msg.delete()
    msg.reply('**Cuidado con lo q dices q te pueden dan warn**')
    }});

//Si contiene algunas de estas palabras borra el mensaje
client.on('message', msg => {
  if(msg.content.includes('conchaetumadre')
     || msg.content.includes('concha')
     || msg.content.includes('pwt@')
     || msg.content.includes('puta')
    ){msg.delete()
    msg.reply('**Cuidado con lo q dices q te dan warn**')
    }});
        
        
        client.on('message', msg => {
  if(msg.content.includes('Carajo')
     || msg.content.includes('pelotudo')
     || msg.content.includes('puto')
     || msg.content.includes('malapalabra')
     || msg.content.includes('Puta')
     || msg.content.includes('Puto')
     || msg.content.includes('pto')
     || msg.content.includes('Pto')
     || msg.content.includes('pvt0')
     ||msg.content.includes('MIERDA')
     ||msg.content.includes('PUTO')
     ||msg.content.includes('fak')
     ||msg.content.includes('FAK')
     ||msg.content.includes('FUCK')
      ||msg.content.includes('mieda')
     ||msg.content.includes('mrda')
     ||msg.content.includes('chingados')
     ||msg.content.includes('CHINGADOS')
     ||msg.content.includes('Chingados')
     ||msg.content.includes('Ching tu madre')
     ||msg.content.includes('ching tu madre')
     ||msg.content.includes('chinga tu madre')
     ||msg.content.includes('Chinga tu madre')
     ||msg.content.includes('CHINGA TU MADRE')
          ||msg.content.includes('gei')
          ||msg.content.includes('gay')
     ||msg.content.includes('pipi')
     ||msg.content.includes('PIPI')
     ||msg.content.includes('Pipi')
     ||msg.content.includes('caca')
     ||msg.content.includes('Caca')
     ||msg.content.includes('CACA')
    ){msg.delete()
    msg.reply('**Cuidado con lo q dices q te dan warn**')
    }}); 

//sin embed//
client.on("message", message =>{
  if (message.content === ("l!:v")){
    message.reply ('**:v**,en **2020?**,aunque bueno mi creador(electric)lo usa .-.')
}
})
client.on("message", message =>{
  if (message.content === ("l!=v")){
    message.reply ('**:v**,en **2020?**,un momento ese no es el orginal .-.')
}
})
client.on("message", message =>{
  if (message.content === ("l!caiese")){
    message.reply ('yo no me callo mientras q no me **programen** a callarme **B)**')
}
})
client.on("message", message =>{
  if (message.content === ("l!hay alguien vivo?")){
    message.reply ('yo soy un bot asi q no estoy vivo pero los seres vivos si lo estan :3')
}
})

client.on("message", message =>{
  if (message.content === ("l!quiero admin")){
    message.reply ('yo no doy preguntale al lider men :v')
}
})
client.on('message', msg => {
   var mem = msg.mentions.members.first();
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("l!golpe")) {
    msg.channel.send(mem.displayName + " a**h sido atacado por:(q miedo esta agresivo :u)** " + msg.author.username + "https://tenor.com/view/animated-couple-hit-gif-10694370");
  }})
client.on('message', msg => {
   var mem = msg.mentions.members.first();
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("l!raiu")) {
    msg.channel.send(mem.displayName + " **ah recivido un raiu de parte de:** " + msg.author.username + "https://tenor.com/view/fenix-negra-fênix-negra-mutante-tempestade-raio-gif-14133144");
  }})
client.on('message', msg => {
   var mem = msg.mentions.members.first();
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("l!hack")) {
    msg.channel.send(mem.displayName + " **ah SI--DO HACK...EA---DO POR..-BEEP** " + msg.author.username + "  https://tenor.com/xRDo.gif ");
  }})
client.on('message', msg => {
   var mem = msg.mentions.members.first();
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("l!kill")) {
    msg.channel.send(mem.displayName + " **ah sido asesinado por:** " + msg.author.username + "https://tenor.com/bnWFm.gif ");
  }})
client.on('message', msg => {
   var mem = msg.mentions.members.first();
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("l!abrazo")) {
    msg.channel.send(mem.displayName + " **ah sido abrazado por:** " + msg.author.username + "https://tenor.com/view/hug-gif-7495111");
  }})
client.on('message', msg => {
   var mem = msg.mentions.members.first();
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("l!esquiva")) {
    msg.channel.send(mem.displayName + " **ah fallado el ataque por que:** " + msg.author.username + "  lo esquivo(POBRE XD)    https://media.discordapp.net/attachments/719614772953481258/725775936154501160/Mi_video7.gif");
  }})
client.on("message" , msg => {
    var Mensajes = ["si", "nopi nopi", "sera posible?", "claro que shi mi pana B)" , "Nel pastel"  , "puede ser.. puede ser..." , "pa q preguntas eso si ya sabes :/" , "BEEP BEEP tengo un corto en los circuitos BEEP BEEP"];
    var aleatorio = Math.floor(Math.random()*(Mensajes.length));
    if(msg.content.startsWith("l-!8ball")){
       msg.reply(Mensajes[aleatorio]);
      }
  });
client.on('message', msg => {
   var mem = msg.mentions.members.first();
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("l!chao")) {
    msg.channel.send(msg.author.username + "   **se ah despedido de:**   " + mem.displayName + "https://tenor.com/tGw4.gif ");
  }})