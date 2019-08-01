const Discord = require('discord.js')
const bot = new Discord.Client()
const webhookf = new Discord.WebhookClient('562691511167483915','xAFRR2LS2pqubpBcWOuOag3fQqeiml-fdq1SNLOmikz1jKZtcJCrmgXD4p3gGU0ILuoI')
const webhook8b = new Discord.WebhookClient('563883050824368128','Cqwlow7CXnIea95MQmfWdMAwZuDHiAh0Ufb6PO2N244pA8hUDajBNTGt_N62D6ZS70qO')
const webhook6d = new Discord.WebhookClient('563900694638100491','XF8cPyd0TDQSWrncuw2ltwgM8wYQcvH_JC5yTqOo9ftxC_5cXc1535AFA2Y5mmT5NP5N')
const webhookpof = new Discord.WebhookClient('563915601186258955','7HkOfo5TSxn0czUACUL6boKeHSNzfcVrS_tP0Jlw_2O1z_kcUj7uUWf2Jw1nTKlTjnKi')
const webhooke = new Discord.WebhookClient('563939082779099136','8oTx6eBC6sznxIxny0vzD0IvJ_TOD6BKQgg8J3nETuzM-S4kZmWuqRjFMcq43qldVesW')
const webhookbj = new Discord.WebhookClient('563951813045518346','vsf9tOWf6am_domUMIqTnOXfk5kTZpOq-8sKCRmFC3_u2jQY_3aieQU5P1qhuYzY_vl4')

// Fonctions du programme du bot Discord

function random(min, max){
     min = Math.ceil(1);
     max = Math.floor(4);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

 function test(min, max){
     min = Math.ceil(1);
     max = Math.floor(21);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

 function random3(min, max){
     min = Math.ceil(1);
     max = Math.floor(6);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

  function random4(min, max){
     min = Math.ceil(1);
     max = Math.floor(2);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

   function random5(min, max){
     min = Math.ceil(0);
     max = Math.floor(10);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

    function randombj1(min, max){
     min = Math.ceil(3);
     max = Math.floor(21);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

function randombj2(min, max){
     min = Math.ceil(6);
     max = Math.floor(21);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

 function randombj3(min, max){
     min = Math.ceil(9);
     max = Math.floor(21);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

 function randombj4(min, max){
     min = Math.ceil(12);
     max = Math.floor(21);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

 function randombj5(min, max){
     min = Math.ceil(15);
     max = Math.floor(21);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

//Instance
bot.on('ready', function() {
	bot.user.setGame('Anthem').catch(console.error)
	console.log("\n\n=======================================================")
	console.log("Le bot s'est correctement connecté au serveur Discord")
	console.log("=======================================================\n\n")
})

//Accueil et départ des membres et attribution d'un rôle

bot.on("guildMemberAdd", member => {
	let role = member.guild.roles.find("name", "Sans licence")
	random()
	if (randnum ==1){
	member.guild.channels.find("name", "discussion").send(`1️ ➡️ :alegendary:  hey ! un ${member} sauvage apparaît. :alegendary:.`)
	}

	if (randnum ==2){
	member.guild.channels.find("name", "discussion").send(`2 ➡️ Bienvenue ${member} ! N'oublies pas de passer par #քrésentation et à utiliser le vocal de temps en temps pour discuter avec nous 😉.`)
	}

	if (randnum ==3){
	member.guild.channels.find("name", "discussion").send(`3 ➡️ salut  ${member}, Tu gagnes le droit de te présenter sur #քrésentation et de venir fêter ça en vocal avec nous 😉.`)
	}

	if (randnum ==4){
	member.guild.channels.find("name", "discussion").send(`4 ➡️ :eyes: ${member}, vient de se glisser dans le serveur. chuuut plus un bruit ! 😉.`)
	}
	member.addRole(role)
}) 

bot.on("guildMemberRemove", member => {
	random()
	if (randnum ==1){
	member.guild.channels.find("name", "départs").send(`1 ➡️ ${member} vient de nous quitter ! Bonne chance à lui pour le reste de son aventure 👋🏻.`)
	}

	if (randnum ==2){
	member.guild.channels.find("name", "départs").send(`2 ➡️ ${member} vient quitter le navire ! Puisse t'il ne jamais faire naufrage par la suite 👋🏻.`)
	}

	if (randnum ==3){
	member.guild.channels.find("name", "départs").send(`3 ➡️ ${member} vient de claquer la porte ! 1 de perdu, 10 de retrouvés 👋🏻.`)
	}

	if (randnum ==4){
	member.guild.channels.find("name", "départs").send(`4 ➡️ Patience est mère de vertus, ${member} àragequit .`)
	}
}) 

bot.on("guildMemberAdd", member => {
	let role = member.guild.roles.find("name", "Sans licence")
	member.addRole(role)
}) 

//Commandes générales

bot.on('message', function(message) {
	if (message.content === '!help') {
		message.channel.send('```**|=====| Commandes serveur |=====|**' + 
			'\n-!serv : Affiche les informations relatives au serveur Discord.' +
			'\n-!servs : Affiche les informations relatives au serveur Discord de manière structurée (phrases).' +
			'\n\n**|=====| Général |=====|**' +
			'\n-!help : Affiche les commades disponibles du bot.' +
			'\n\n**|=====| Fun/Minigame |=====|**' +
			'\n-dfbj1 : Jeu du BlackJack. Niveau de difficulté 1 (peaceful).' +
			'\n-dfbj2 : Jeu du BlackJack. Niveau de difficulté 2 (easy).' +
			'\n-dfbj3 : Jeu du BlackJack. Niveau de difficulté 3 (normal).' +
			'\n-dfbj4 : Jeu du BlackJack. Niveau de difficulté 4 (hard).' +
			'\n-dfbj5 : Jeu du BlackJack. Niveau de difficulté 5 (crazy).' +
			'\n-dfe10 : Jeu des échelle. Exemple de formulation : Sur une échelle de 1 à 10 + votre qquestion.' +
			'\n-dfpoff : Jeu de pile ou face. Ici, vous pariez que la pièce tombera sur face.' +
			'\n-dfpofp : Jeu de pile ou face. Ici, vous pariez que la pièce tombera sur pile.' +
			'\n-dfpoff :  Jeu de pile ou face. Ici, affiche le score global des joueurs et du bot .' +
			'\n-df6d : Lancé de dé à six faces.' +
			'\n-df8ball : Jeu du 8ball affichant une réponse à une de vos questions pouvant être répondu par oui ou non. Exemple : df8ball Suis-je majeur ?```')
                        user = message.member.user.tag
			console.log("\n\nL'utilisateur " + user + " a utilisé la commande !help.")
	}

	if (message.content === '!help2') {
		const embed = new Discord.RichEmbed()
  			.setTitle("**Utilisation** : `df<ma_commande>`")
  			.setAuthor("!help2", "https://cdn.discordapp.com/attachments/430306848793690114/606586848130760720/embleme_alliance.small.png")
			.setColor(0x00AE86)
			.setTimestamp()
			.setFooter("©️DontFall")
			.setThumbnail("https://cdn.discordapp.com/attachments/542010625401028608/564525321261416448/Dont_Fall-small-size-.png")
			.addField("Commandes serveur",
    			"-!serv : Affiche les informations relatives au serveur Discord.")
			.setImage("https://cdn.discordapp.com/attachments/430306848793690114/606587651822452742/Sans_titre-3.png")
		message.channel.send({embed});
	}

	if (message.content === '!help3') {
		message.channel.send('**|=====| Commandes serveur |=====|**' + 
			'\n-!serv : Affiche les informations relatives au serveur Discord.' +
			'\n\n**|=====| Général |=====|**' +
			'\n-!help : Affiche les commades disponibles du bot.')
	}

	if (message.content === '!serv') {
		let server_name = message.guild.name
		let server_size = message.guild.members.size
		let cdate = message.guild.CreatedAt
    	let mdate = message.member.joinedAt
    	let numero = message.guild.MemberCount
		message.channel.send('**Nom du serveur** : "' + server_name + '"' + '\n**Créé le** : ' + cdate + '\n**Membres inscrits** : ' + server_size + '\n\n**Rejoint le** : ' + mdate + '\n**Id** : ' + numero)
		user = message.member.user.tag
		console.log("\n\nL'utilisateur " + user + " a utilisé la commande !serv.")
	}
		if (message.content === '!servs') {
    	let nom = message.guild.name
    	let cdate = message.guild.CreatedAt
    	let mdate = message.member.joinedAt
    	let numero = message.guild.MemberCount
    	message.channel.send('Le serveur **' + nom + '** a été créé le **' + cdate + '**.' + '\nVous l"avez rejoint le **' + mdate + '** et en êtes ainsi le membre n°**' + numero + '**.')
	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande !servs.")
}


    /*if (message.content === 'df8ball') {
		test()
		if (alea ==1){
		message.channel.send(Jamais)
		}

		if (alea ==2){
		message.channel.send(Absolument pas)
		}

		if (alea ==3){
		message.channel.send(Pas du tout)
		}

		if (alea ==4){
		message.channel.send(Non)
		}
	}*/
    

    if (message.content === 'dfwebhook') {
    	webhookf.send('Je n"ai pas encore de rôle pour le moment 😕' + '\nhttps://data.photofunky.net/output/image/9/4/6/e/946e99/photofunky.gif')
    	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande dfwebhook.")
    }

})

//Commande fun ( jeux ) :

/*
bot.on('message', function(message) {
	if (message.content === 'df8ball') {
		test()
		if (randnum ==1){
		message.channel.send('Jamais')
		}

		if (randnum ==2){
		message.channel.send('Absolument pas')
		}

		if (randnum ==3){
		message.channel.send('Pas du tout')
		}

		if (randnum ==4){
		message.channel.send('Non')
		}
	}
})
*/

/*
bot.on('message', function(message) {
	if (message.content === 'df8ball') {
		test()
		if (alea ==1){
		message.channel.send(Jamais)
		}

		if (alea ==2){
		message.channel.send(Absolument pas)
		}

		if (alea ==3){
		message.channel.send(Pas du tout)
		}

		if (alea ==4){
		message.channel.send(Non)
		}
	}
})
*/


bot.on('message', function(message) {
if (message.content.startsWith("df8ball")) 
{
	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande df8ball.")
        test()
		switch (randnum) 
		{
  			case 1:
    			webhook8b.send('🎱Jamais🎱')
    		break;
  			case 2:
    			webhook8b.send('🎱Absolument pas🎱')
    		break;
    		case 3:
    			webhook8b.send('🎱Pas du tout🎱')
    		break;
    		case 4:
    			webhook8b.send('🎱Non🎱')
    		break;
    		case 5:
    			webhook8b.send('🎱Pas vraiment🎱')
    		break;
    		case 6:
    			webhook8b.send('🎱Plutôt pas🎱')
    		break;
    		case 7:
    			webhook8b.send('🎱Ni oui ni non🎱')
    		break;
    		case 8:
    			webhook8b.send('🎱Moyennement🎱')
    		break;
    		case 9:
    			webhook8b.send('🎱Partiellement🎱')
    		break;
    		case 10:
    			webhook8b.send('🎱Un peu🎱')
    		break;
    		case 11:
    			webhook8b.send('🎱Pas mal🎱')
    		break;
    		case 12:
    			webhook8b.send('🎱Plutôt🎱')
    		break;
  			case 13:
    			webhook8b.send('🎱Oui🎱')
    		break;
    		case 14:
    			webhook8b.send('🎱Absolument🎱')
    		break;
    		case 15:
    			webhook8b.send('🎱Beaucoup🎱')
    		break;
    		case 16:
    			webhook8b.send('🎱Enormement🎱')
    		break;
    		case 17:
    			webhook8b.send('🎱Bien plus que tu ne le penses🎱')
    		break;
    		case 18:
    			webhook8b.send('🎱A la folie🎱')
			break;
    		case 19:
    			webhook8b.send('🎱Passionement🎱')
			break;
    		case 20:
    			webhook8b.send('🎱Naturellement🎱')
			break;
    		case 21:
    			webhook8b.send('🎱Elementaire mon cher Watson🎱')
    		break;
  			default:
    			webhook8b.send('🎱Je ne sais pas ... OwO🎱')
    		break;
		}
	}
})

bot.on('message', function(message) {
if (message.content.startsWith("df6d")) 
{
	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande df6d.")
        random3()
		switch (randnum) 
		{
  			case 1:
    			webhook6d.send('🎲Le résultat est 1 (⚀) !🎲')
    		break;
  			case 2:
    			webhook6d.send('🎲Le résultat est 2 (⚁) !🎲')
    		break;
    		case 3:
    			webhook6d.send('🎲Le résultat est 3 (⚂) !🎲')
    		break;
    		case 4:
    			webhook6d.send('🎲Le résultat est 4 (⚃) !🎲')
    		break;
    		case 5:
    			webhook6d.send('🎲Le résultat est 5 (⚄) !🎲')
    		break;
    		case 6:
    			webhook6d.send('🎲Le résultat est 6 (⚅) !🎲')
    		break;
  			default:
    			webhook6d.send('🎲Le dé a été mal lancé :/🎲')
    		break;
		}
	}
})

bot.on('message', function(message) {

let scorej = 0
let scoreb = 0
let scorejo
let scorebo

if (message.content.startsWith("dfpoff")) 
{
	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande dfpoff.")
        random4()
		switch (randnum) 
		{
			// 1 = pile et 2 = face :
  			case 1:
    			webhookpof.send("Désolé pour vous, c'est perdu :/")
    			scorebo = scoreb + 1
                scorejo = scorej
    		break;
  			case 2:
    			webhookpof.send("Bien joué, vous avez gagné ;)")
    			scorebo = scoreb
                scorejo = scorej + 1
    		break;
  			default:
    			webhookpof.send('La pièce a été mal lancée :/')
    			scorebo = scoreb
                scorejo = scorej
    		break;
		}
	}

if (message.content.startsWith("dfpofp")) 
{
	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande dfpofp.")
        random4()
		switch (randnum) 
		{
			// 1 = pile et 2 = face :
  			case 1:
    			webhookpof.send("Bien joué, vous avez gagné ;)")
    			scorebo = scoreb
                scorejo = scorej + 1
    		break;
  			case 2:
    			webhookpof.send("Désolé pour vous, c'est perdu :/")
    			scorebo = scoreb + 1
                scorejo = scorej
    		break;
  			default:
    			webhookpof.send('La pièce a été mal lancée :/')
    			scorebo = scoreb
                scorejo = scorej
    		break;
		}
	}

if (message.content.startsWith("dfpofr")) 
{
		user = message.member.user.tag
		console.log("\n\nL'utilisateur " + user + " a utilisé la commande dfpofr.")
		webhookpof.send('Le score du bot est de ' + scorebo + ' points et celui des joueurs est de ' + scorejo + ' points.')
	}

})

bot.on('message', function(message) {
if (message.content.startsWith("dfe10")) 
{
	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande dfe10.")
        random5()
		switch (randnum) 
		{
			case 0:
    			webhooke.send('Je dirais 0 ;)')
    		break;
  			case 1:
    			webhooke.send('Je dirais 1 ;)')
    		break;
  			case 2:
    			webhooke.send('Je dirais 2 ;)')
    		break;
    		case 3:
    			webhooke.send('Je dirais 3 ;)')
    		break;
    		case 4:
    			webhooke.send('Je dirais 4 ;)')
    		break;
    		case 5:
    			webhooke.send('Je dirais 5 ;)')
    		break;
    		case 6:
    			webhooke.send('Je dirais 6 ;)')
    		break;
    		case 7:
    			webhooke.send('Je dirais 7 ;)')
    		break;
  			case 8:
    			webhooke.send('Je dirais 8 ;)')
    		break;
    		case 9:
    			webhooke.send('Je dirais 9 ;)')
    		break;
    		case 10:
    			webhooke.send('Je dirais 10 ;)')
    		break;
  			default:
    			webhooke.send('Je ne peux pas répondre à cela.')
    		break;
		}
	}
})

bot.on('message', function(message) {
if (message.content.startsWith("dfbj1")) 
{
	let scorebjj = 0
	let scorebjb = 0

	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande dfbj1.")
        randombj1()
		switch (randnum) 
		{
    		case 3:
    			webhookbj.send('Le score du joueur est de 3')
    			scorebjj = 3
    		break;
    		case 4:
    			webhookbj.send('Le score du joueur est de 4')
    			scorebjj = 4
    		break;
    		case 5:
    			webhookbj.send('Le score du joueur est de 5')
    			scorebjj = 5
    		break;
    		case 6:
    			webhookbj.send('Le score du joueur est de 6')
    			scorebjj = 6
    		break;
    		case 7:
    			webhookbj.send('Le score du joueur est de 7')
    			scorebjj = 7
    		break;
  			case 8:
    			webhookbj.send('Le score du joueur est de 8')
    			scorebjj = 8
    		break;
    		case 9:
    			webhookbj.send('Le score du joueur est de 9')
    			scorebjj = 9
    		break;
    		case 10:
    			webhookbj.send('Le score du joueur est de 10')
    			scorebjj = 10
    		break;
    		case 11:
    			webhookbj.send('Le score du joueur est de 11')
    			scorebjj = 11
    		break;
  			case 12:
    			webhookbj.send('Le score du joueur est de 12')
    			scorebjj = 12
    		break;
  			case 13:
    			webhookbj.send('Le score du joueur est de 13')
    			scorebjj = 13
    		break;
    		case 14:
    			webhookbj.send('Le score du joueur est de 14')
    			scorebjj = 14
    		break;
  			case 15:
    			webhookbj.send('Le score du joueur est de 15')
    			scorebjj = 15
    		break;
    		case 16:
    			webhookbj.send('Le score du joueur est de 16')
    			scorebjj = 16
    		break;
    		case 17:
    			webhookbj.send('Le score du joueur est de 17')
    			scorebjj = 17
    		break;
    		case 18:
    			webhookbj.send('Le score du joueur est de 18')
    			scorebjj = 18
    		break;
  			case 19:
    			webhookbj.send('Le score du joueur est de 19')
    			scorebjj = 19
    		break;
  			case 20:
    			webhookbj.send('Le score du joueur est de 20')
    			scorebjj = 20
    		break;
    		case 21:
    			webhookbj.send('Le score du joueur est de 21')
    			scorebjj = 21
    		break;
  			default:
    			webhookbj.send('Je ne peux pas répondre à cela.')
    		break;
		}
				
		randombj1()
		switch (randnum) 
		{
    		case 3:
    			webhookbj.send('Le score du bot est de 3')
    			scorebjb = 3
    		break;
    		case 4:
    			webhookbj.send('Le score du bot est de 4')
                scorebjb = 4
    		break;
    		case 5:
    			webhookbj.send('Le score du bot est de 5')
				scorebjb = 5
    		break;
    		case 6:
    			webhookbj.send('Le score du bot est de 6')
				scorebjb = 6
    		break;
    		case 7:
    			webhookbj.send('Le score du bot est de 7')
				scorebjb = 7
    		break;
  			case 8:
    			webhookbj.send('Le score du bot est de 8')
				scorebjb = 8
    		break;
    		case 9:
    			webhookbj.send('Le score du bot est de 9')
				scorebjb = 9
    		break;
    		case 10:
    			webhookbj.send('Le score du bot est de 10')
				scorebjb = 10
    		break;
    		case 11:
    			webhookbj.send('Le score du bot est de 11')
				scorebjb = 11
    		break;
  			case 12:
    			webhookbj.send('Le score du bot est de 12')
				scorebjb = 12
    		break;
  			case 13:
    			webhookbj.send('Le score du bot est de 13')
				scorebjb = 13
    		break;
    		case 14:
    			webhookbj.send('Le score du bot est de 14')
				scorebjb = 14
    		break;
  			case 15:
    			webhookbj.send('Le score du bot est de 15')
				scorebjb = 15
    		break;
    		case 16:
    			webhookbj.send('Le score du bot est de 16')
				scorebjb = 16
    		break;
    		case 17:
    			webhookbj.send('Le score du bot est de 17')
				scorebjb = 17
    		break;
    		case 18:
    			webhookbj.send('Le score du bot est de 18')
				scorebjb = 18
    		break;
  			case 19:
    			webhookbj.send('Le score du bot est de 19')
				scorebjb = 19 
    		break;
  			case 20:
    			webhookbj.send('Le score du bot est de 20')
				scorebjb = 20
    		break;
    		case 21:
    			webhookbj.send('Le score du bot est de 21')
				scorebjb = 21
    		break;
  			default:
    			webhookbj.send('Je ne peux pas répondre à cela.')
    		break;
		}

		if (scorebjj>scorebjb) {
			webhookbj.send('Le joueur remporte la victoire.')
		}

		if (scorebjj===scorebjb) {
			webhookbj.send('Le match est nul.')
		}

		if (scorebjj<scorebjb) {
			webhookbj.send('Le bot remporte la victoire.')
		}

	}
})

bot.on('message', function(message) {
if (message.content.startsWith("dfbj2")) 
{
	let scorebjj = 0
	let scorebjb = 0

	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande dfbj2.")
        randombj2()
		switch (randnum) 
		{
    		case 3:
    			webhookbj.send('Le score du joueur est de 3')
    			scorebjj = 3
    		break;
    		case 4:
    			webhookbj.send('Le score du joueur est de 4')
    			scorebjj = 4
    		break;
    		case 5:
    			webhookbj.send('Le score du joueur est de 5')
    			scorebjj = 5
    		break;
    		case 6:
    			webhookbj.send('Le score du joueur est de 6')
    			scorebjj = 6
    		break;
    		case 7:
    			webhookbj.send('Le score du joueur est de 7')
    			scorebjj = 7
    		break;
  			case 8:
    			webhookbj.send('Le score du joueur est de 8')
    			scorebjj = 8
    		break;
    		case 9:
    			webhookbj.send('Le score du joueur est de 9')
    			scorebjj = 9
    		break;
    		case 10:
    			webhookbj.send('Le score du joueur est de 10')
    			scorebjj = 10
    		break;
    		case 11:
    			webhookbj.send('Le score du joueur est de 11')
    			scorebjj = 11
    		break;
  			case 12:
    			webhookbj.send('Le score du joueur est de 12')
    			scorebjj = 12
    		break;
  			case 13:
    			webhookbj.send('Le score du joueur est de 13')
    			scorebjj = 13
    		break;
    		case 14:
    			webhookbj.send('Le score du joueur est de 14')
    			scorebjj = 14
    		break;
  			case 15:
    			webhookbj.send('Le score du joueur est de 15')
    			scorebjj = 15
    		break;
    		case 16:
    			webhookbj.send('Le score du joueur est de 16')
    			scorebjj = 16
    		break;
    		case 17:
    			webhookbj.send('Le score du joueur est de 17')
    			scorebjj = 17
    		break;
    		case 18:
    			webhookbj.send('Le score du joueur est de 18')
    			scorebjj = 18
    		break;
  			case 19:
    			webhookbj.send('Le score du joueur est de 19')
    			scorebjj = 19
    		break;
  			case 20:
    			webhookbj.send('Le score du joueur est de 20')
    			scorebjj = 20
    		break;
    		case 21:
    			webhookbj.send('Le score du joueur est de 21')
    			scorebjj = 21
    		break;
  			default:
    			webhookbj.send('Je ne peux pas répondre à cela.')
    		break;
		}
				
		randombj2()
		switch (randnum) 
		{
    		case 3:
    			webhookbj.send('Le score du bot est de 3')
    			scorebjb = 3
    		break;
    		case 4:
    			webhookbj.send('Le score du bot est de 4')
                scorebjb = 4
    		break;
    		case 5:
    			webhookbj.send('Le score du bot est de 5')
				scorebjb = 5
    		break;
    		case 6:
    			webhookbj.send('Le score du bot est de 6')
				scorebjb = 6
    		break;
    		case 7:
    			webhookbj.send('Le score du bot est de 7')
				scorebjb = 7
    		break;
  			case 8:
    			webhookbj.send('Le score du bot est de 8')
				scorebjb = 8
    		break;
    		case 9:
    			webhookbj.send('Le score du bot est de 9')
				scorebjb = 9
    		break;
    		case 10:
    			webhookbj.send('Le score du bot est de 10')
				scorebjb = 10
    		break;
    		case 11:
    			webhookbj.send('Le score du bot est de 11')
				scorebjb = 11
    		break;
  			case 12:
    			webhookbj.send('Le score du bot est de 12')
				scorebjb = 12
    		break;
  			case 13:
    			webhookbj.send('Le score du bot est de 13')
				scorebjb = 13
    		break;
    		case 14:
    			webhookbj.send('Le score du bot est de 14')
				scorebjb = 14
    		break;
  			case 15:
    			webhookbj.send('Le score du bot est de 15')
				scorebjb = 15
    		break;
    		case 16:
    			webhookbj.send('Le score du bot est de 16')
				scorebjb = 16
    		break;
    		case 17:
    			webhookbj.send('Le score du bot est de 17')
				scorebjb = 17
    		break;
    		case 18:
    			webhookbj.send('Le score du bot est de 18')
				scorebjb = 18
    		break;
  			case 19:
    			webhookbj.send('Le score du bot est de 19')
				scorebjb = 19 
    		break;
  			case 20:
    			webhookbj.send('Le score du bot est de 20')
				scorebjb = 20
    		break;
    		case 21:
    			webhookbj.send('Le score du bot est de 21')
				scorebjb = 21
    		break;
  			default:
    			webhookbj.send('Je ne peux pas répondre à cela.')
    		break;
		}

		if (scorebjj>scorebjb) {
			webhookbj.send('Le joueur remporte la victoire.')
		}

		if (scorebjj===scorebjb) {
			webhookbj.send('Le match est nul.')
		}

		if (scorebjj<scorebjb) {
			webhookbj.send('Le bot remporte la victoire.')
		}

	}
})

bot.on('message', function(message) {
if (message.content.startsWith("dfbj3")) 
{
	let scorebjj = 0
	let scorebjb = 0

	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande dfbj3.")
        randombj3()
		switch (randnum) 
		{
    		case 3:
    			webhookbj.send('Le score du joueur est de 3')
    			scorebjj = 3
    		break;
    		case 4:
    			webhookbj.send('Le score du joueur est de 4')
    			scorebjj = 4
    		break;
    		case 5:
    			webhookbj.send('Le score du joueur est de 5')
    			scorebjj = 5
    		break;
    		case 6:
    			webhookbj.send('Le score du joueur est de 6')
    			scorebjj = 6
    		break;
    		case 7:
    			webhookbj.send('Le score du joueur est de 7')
    			scorebjj = 7
    		break;
  			case 8:
    			webhookbj.send('Le score du joueur est de 8')
    			scorebjj = 8
    		break;
    		case 9:
    			webhookbj.send('Le score du joueur est de 9')
    			scorebjj = 9
    		break;
    		case 10:
    			webhookbj.send('Le score du joueur est de 10')
    			scorebjj = 10
    		break;
    		case 11:
    			webhookbj.send('Le score du joueur est de 11')
    			scorebjj = 11
    		break;
  			case 12:
    			webhookbj.send('Le score du joueur est de 12')
    			scorebjj = 12
    		break;
  			case 13:
    			webhookbj.send('Le score du joueur est de 13')
    			scorebjj = 13
    		break;
    		case 14:
    			webhookbj.send('Le score du joueur est de 14')
    			scorebjj = 14
    		break;
  			case 15:
    			webhookbj.send('Le score du joueur est de 15')
    			scorebjj = 15
    		break;
    		case 16:
    			webhookbj.send('Le score du joueur est de 16')
    			scorebjj = 16
    		break;
    		case 17:
    			webhookbj.send('Le score du joueur est de 17')
    			scorebjj = 17
    		break;
    		case 18:
    			webhookbj.send('Le score du joueur est de 18')
    			scorebjj = 18
    		break;
  			case 19:
    			webhookbj.send('Le score du joueur est de 19')
    			scorebjj = 19
    		break;
  			case 20:
    			webhookbj.send('Le score du joueur est de 20')
    			scorebjj = 20
    		break;
    		case 21:
    			webhookbj.send('Le score du joueur est de 21')
    			scorebjj = 21
    		break;
  			default:
    			webhookbj.send('Je ne peux pas répondre à cela.')
    		break;
		}
				
		randombj3()
		switch (randnum) 
		{
    		case 3:
    			webhookbj.send('Le score du bot est de 3')
    			scorebjb = 3
    		break;
    		case 4:
    			webhookbj.send('Le score du bot est de 4')
                scorebjb = 4
    		break;
    		case 5:
    			webhookbj.send('Le score du bot est de 5')
				scorebjb = 5
    		break;
    		case 6:
    			webhookbj.send('Le score du bot est de 6')
				scorebjb = 6
    		break;
    		case 7:
    			webhookbj.send('Le score du bot est de 7')
				scorebjb = 7
    		break;
  			case 8:
    			webhookbj.send('Le score du bot est de 8')
				scorebjb = 8
    		break;
    		case 9:
    			webhookbj.send('Le score du bot est de 9')
				scorebjb = 9
    		break;
    		case 10:
    			webhookbj.send('Le score du bot est de 10')
				scorebjb = 10
    		break;
    		case 11:
    			webhookbj.send('Le score du bot est de 11')
				scorebjb = 11
    		break;
  			case 12:
    			webhookbj.send('Le score du bot est de 12')
				scorebjb = 12
    		break;
  			case 13:
    			webhookbj.send('Le score du bot est de 13')
				scorebjb = 13
    		break;
    		case 14:
    			webhookbj.send('Le score du bot est de 14')
				scorebjb = 14
    		break;
  			case 15:
    			webhookbj.send('Le score du bot est de 15')
				scorebjb = 15
    		break;
    		case 16:
    			webhookbj.send('Le score du bot est de 16')
				scorebjb = 16
    		break;
    		case 17:
    			webhookbj.send('Le score du bot est de 17')
				scorebjb = 17
    		break;
    		case 18:
    			webhookbj.send('Le score du bot est de 18')
				scorebjb = 18
    		break;
  			case 19:
    			webhookbj.send('Le score du bot est de 19')
				scorebjb = 19 
    		break;
  			case 20:
    			webhookbj.send('Le score du bot est de 20')
				scorebjb = 20
    		break;
    		case 21:
    			webhookbj.send('Le score du bot est de 21')
				scorebjb = 21
    		break;
  			default:
    			webhookbj.send('Je ne peux pas répondre à cela.')
    		break;
		}

		if (scorebjj>scorebjb) {
			webhookbj.send('Le joueur remporte la victoire.')
		}

		if (scorebjj===scorebjb) {
			webhookbj.send('Le match est nul.')
		}

		if (scorebjj<scorebjb) {
			webhookbj.send('Le bot remporte la victoire.')
		}

	}
})

bot.on('message', function(message) {
if (message.content.startsWith("dfbj4")) 
{
	let scorebjj = 0
	let scorebjb = 0

	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande dfbj4.")
        randombj4()
		switch (randnum) 
		{
    		case 3:
    			webhookbj.send('Le score du joueur est de 3')
    			scorebjj = 3
    		break;
    		case 4:
    			webhookbj.send('Le score du joueur est de 4')
    			scorebjj = 4
    		break;
    		case 5:
    			webhookbj.send('Le score du joueur est de 5')
    			scorebjj = 5
    		break;
    		case 6:
    			webhookbj.send('Le score du joueur est de 6')
    			scorebjj = 6
    		break;
    		case 7:
    			webhookbj.send('Le score du joueur est de 7')
    			scorebjj = 7
    		break;
  			case 8:
    			webhookbj.send('Le score du joueur est de 8')
    			scorebjj = 8
    		break;
    		case 9:
    			webhookbj.send('Le score du joueur est de 9')
    			scorebjj = 9
    		break;
    		case 10:
    			webhookbj.send('Le score du joueur est de 10')
    			scorebjj = 10
    		break;
    		case 11:
    			webhookbj.send('Le score du joueur est de 11')
    			scorebjj = 11
    		break;
  			case 12:
    			webhookbj.send('Le score du joueur est de 12')
    			scorebjj = 12
    		break;
  			case 13:
    			webhookbj.send('Le score du joueur est de 13')
    			scorebjj = 13
    		break;
    		case 14:
    			webhookbj.send('Le score du joueur est de 14')
    			scorebjj = 14
    		break;
  			case 15:
    			webhookbj.send('Le score du joueur est de 15')
    			scorebjj = 15
    		break;
    		case 16:
    			webhookbj.send('Le score du joueur est de 16')
    			scorebjj = 16
    		break;
    		case 17:
    			webhookbj.send('Le score du joueur est de 17')
    			scorebjj = 17
    		break;
    		case 18:
    			webhookbj.send('Le score du joueur est de 18')
    			scorebjj = 18
    		break;
  			case 19:
    			webhookbj.send('Le score du joueur est de 19')
    			scorebjj = 19
    		break;
  			case 20:
    			webhookbj.send('Le score du joueur est de 20')
    			scorebjj = 20
    		break;
    		case 21:
    			webhookbj.send('Le score du joueur est de 21')
    			scorebjj = 21
    		break;
  			default:
    			webhookbj.send('Je ne peux pas répondre à cela.')
    		break;
		}
				
		randombj4()
		switch (randnum) 
		{
    		case 3:
    			webhookbj.send('Le score du bot est de 3')
    			scorebjb = 3
    		break;
    		case 4:
    			webhookbj.send('Le score du bot est de 4')
                scorebjb = 4
    		break;
    		case 5:
    			webhookbj.send('Le score du bot est de 5')
				scorebjb = 5
    		break;
    		case 6:
    			webhookbj.send('Le score du bot est de 6')
				scorebjb = 6
    		break;
    		case 7:
    			webhookbj.send('Le score du bot est de 7')
				scorebjb = 7
    		break;
  			case 8:
    			webhookbj.send('Le score du bot est de 8')
				scorebjb = 8
    		break;
    		case 9:
    			webhookbj.send('Le score du bot est de 9')
				scorebjb = 9
    		break;
    		case 10:
    			webhookbj.send('Le score du bot est de 10')
				scorebjb = 10
    		break;
    		case 11:
    			webhookbj.send('Le score du bot est de 11')
				scorebjb = 11
    		break;
  			case 12:
    			webhookbj.send('Le score du bot est de 12')
				scorebjb = 12
    		break;
  			case 13:
    			webhookbj.send('Le score du bot est de 13')
				scorebjb = 13
    		break;
    		case 14:
    			webhookbj.send('Le score du bot est de 14')
				scorebjb = 14
    		break;
  			case 15:
    			webhookbj.send('Le score du bot est de 15')
				scorebjb = 15
    		break;
    		case 16:
    			webhookbj.send('Le score du bot est de 16')
				scorebjb = 16
    		break;
    		case 17:
    			webhookbj.send('Le score du bot est de 17')
				scorebjb = 17
    		break;
    		case 18:
    			webhookbj.send('Le score du bot est de 18')
				scorebjb = 18
    		break;
  			case 19:
    			webhookbj.send('Le score du bot est de 19')
				scorebjb = 19 
    		break;
  			case 20:
    			webhookbj.send('Le score du bot est de 20')
				scorebjb = 20
    		break;
    		case 21:
    			webhookbj.send('Le score du bot est de 21')
				scorebjb = 21
    		break;
  			default:
    			webhookbj.send('Je ne peux pas répondre à cela.')
    		break;
		}

		if (scorebjj>scorebjb) {
			webhookbj.send('Le joueur remporte la victoire.')
		}

		if (scorebjj===scorebjb) {
			webhookbj.send('Le match est nul.')
		}

		if (scorebjj<scorebjb) {
			webhookbj.send('Le bot remporte la victoire.')
		}

	}
})

bot.on('message', function(message) {
if (message.content.startsWith("dfbj5")) 
{
	let scorebjj = 0
	let scorebjb = 0

	user = message.member.user.tag
	console.log("\n\nL'utilisateur " + user + " a utilisé la commande dfbj5.")
        randombj5()
		switch (randnum) 
		{
    		case 3:
    			webhookbj.send('Le score du joueur est de 3')
    			scorebjj = 3
    		break;
    		case 4:
    			webhookbj.send('Le score du joueur est de 4')
    			scorebjj = 4
    		break;
    		case 5:
    			webhookbj.send('Le score du joueur est de 5')
    			scorebjj = 5
    		break;
    		case 6:
    			webhookbj.send('Le score du joueur est de 6')
    			scorebjj = 6
    		break;
    		case 7:
    			webhookbj.send('Le score du joueur est de 7')
    			scorebjj = 7
    		break;
  			case 8:
    			webhookbj.send('Le score du joueur est de 8')
    			scorebjj = 8
    		break;
    		case 9:
    			webhookbj.send('Le score du joueur est de 9')
    			scorebjj = 9
    		break;
    		case 10:
    			webhookbj.send('Le score du joueur est de 10')
    			scorebjj = 10
    		break;
    		case 11:
    			webhookbj.send('Le score du joueur est de 11')
    			scorebjj = 11
    		break;
  			case 12:
    			webhookbj.send('Le score du joueur est de 12')
    			scorebjj = 12
    		break;
  			case 13:
    			webhookbj.send('Le score du joueur est de 13')
    			scorebjj = 13
    		break;
    		case 14:
    			webhookbj.send('Le score du joueur est de 14')
    			scorebjj = 14
    		break;
  			case 15:
    			webhookbj.send('Le score du joueur est de 15')
    			scorebjj = 15
    		break;
    		case 16:
    			webhookbj.send('Le score du joueur est de 16')
    			scorebjj = 16
    		break;
    		case 17:
    			webhookbj.send('Le score du joueur est de 17')
    			scorebjj = 17
    		break;
    		case 18:
    			webhookbj.send('Le score du joueur est de 18')
    			scorebjj = 18
    		break;
  			case 19:
    			webhookbj.send('Le score du joueur est de 19')
    			scorebjj = 19
    		break;
  			case 20:
    			webhookbj.send('Le score du joueur est de 20')
    			scorebjj = 20
    		break;
    		case 21:
    			webhookbj.send('Le score du joueur est de 21')
    			scorebjj = 21
    		break;
  			default:
    			webhookbj.send('Je ne peux pas répondre à cela.')
    		break;
		}
				
		randombj5()
		switch (randnum) 
		{
    		case 3:
    			webhookbj.send('Le score du bot est de 3')
    			scorebjb = 3
    		break;
    		case 4:
    			webhookbj.send('Le score du bot est de 4')
                scorebjb = 4
    		break;
    		case 5:
    			webhookbj.send('Le score du bot est de 5')
				scorebjb = 5
    		break;
    		case 6:
    			webhookbj.send('Le score du bot est de 6')
				scorebjb = 6
    		break;
    		case 7:
    			webhookbj.send('Le score du bot est de 7')
				scorebjb = 7
    		break;
  			case 8:
    			webhookbj.send('Le score du bot est de 8')
				scorebjb = 8
    		break;
    		case 9:
    			webhookbj.send('Le score du bot est de 9')
				scorebjb = 9
    		break;
    		case 10:
    			webhookbj.send('Le score du bot est de 10')
				scorebjb = 10
    		break;
    		case 11:
    			webhookbj.send('Le score du bot est de 11')
				scorebjb = 11
    		break;
  			case 12:
    			webhookbj.send('Le score du bot est de 12')
				scorebjb = 12
    		break;
  			case 13:
    			webhookbj.send('Le score du bot est de 13')
				scorebjb = 13
    		break;
    		case 14:
    			webhookbj.send('Le score du bot est de 14')
				scorebjb = 14
    		break;
  			case 15:
    			webhookbj.send('Le score du bot est de 15')
				scorebjb = 15
    		break;
    		case 16:
    			webhookbj.send('Le score du bot est de 16')
				scorebjb = 16
    		break;
    		case 17:
    			webhookbj.send('Le score du bot est de 17')
				scorebjb = 17
    		break;
    		case 18:
    			webhookbj.send('Le score du bot est de 18')
				scorebjb = 18
    		break;
  			case 19:
    			webhookbj.send('Le score du bot est de 19')
				scorebjb = 19 
    		break;
  			case 20:
    			webhookbj.send('Le score du bot est de 20')
				scorebjb = 20
    		break;
    		case 21:
    			webhookbj.send('Le score du bot est de 21')
				scorebjb = 21
    		break;
  			default:
    			webhookbj.send('Je ne peux pas répondre à cela.')
    		break;
		}

		if (scorebjj>scorebjb) {
			webhookbj.send('Le joueur remporte la victoire.')
		}

		if (scorebjj===scorebjb) {
			webhookbj.send('Le match est nul.')
		}

		if (scorebjj<scorebjb) {
			webhookbj.send('Le bot remporte la victoire.')
		}

	}
})

bot.login(process.env.TOKEN);
