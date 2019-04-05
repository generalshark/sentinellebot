const Discord = require('discord.js')
const bot = new Discord.Client()
const webhookf = new Discord.WebhookClient('562691511167483915','xAFRR2LS2pqubpBcWOuOag3fQqeiml-fdq1SNLOmikz1jKZtcJCrmgXD4p3gGU0ILuoI')

// Fonctions du programme du bot Discord

function random(min, max){
     min = Math.ceil(1);
     max = Math.floor(4);
     randnum = Math.floor(Math.random() * (max - min +1)+ min);
 }

 function test(min, max){
     min = Math.ceil(1);
     max = Math.floor(21);
     alea = Math.floor(Math.random() * (max - min +1)+ min);
 }

//Instance
bot.on('ready', function() {
	bot.user.setGame('Ceci est un test | dfhelp').catch(console.error)
	console.log("\\\\\\\\\\\\\\\\\\\\")
	console.log("Le bot s'est correctement connecté au serveur Discord")
	console.log("////////////////////")
})

//Accueil et départ des membres et attribution d'un rôle

bot.on("guildMemberAdd", member => {
	let role = member.guild.roles.find("name", "Nouveaux")
	random()
	if (randnum ==1){
	member.guild.channels.find("name", "discussion").send(`1️ ➡️ Bienvenue ${member} ! N'hésites pas à te présenter dans le chanel #քrésentation et à venir nous parler en vocal dès que tu pourras 😉.`)
	}

	if (randnum ==2){
	member.guild.channels.find("name", "discussion").send(`2 ➡️ Bienvenue ${member} ! N'oublies pas de passer par #քrésentation et à utiliser le vocal de temps en temps pour discuter avec nous 😉.`)
	}

	if (randnum ==3){
	member.guild.channels.find("name", "discussion").send(`3 ➡️ Félicitations ${member}, tu es notre 100 ème membre ! Tu gagnes le droit de te présenter sur #քrésentation et de venir fêter ça en vocal avec nous 😉.`)
	}

	if (randnum ==4){
	member.guild.channels.find("name", "discussion").send(`4 ➡️ ${member}, mon élève tu seras ! Sur #քrésentation tu t'introduiras puis en vocal avec nous tu te défouleras 😉.`)
	}
	member.addRole(role)
}) 

bot.on("guildMemberRemove", member => {
	random()
	if (randnum ==1){
	member.guild.channels.find("name", "discussion").send(`1 ➡️ ${member} vient de nous quitter ! Bonne chance à lui pour le reste de son aventure 👋🏻.`)
	}

	if (randnum ==2){
	member.guild.channels.find("name", "discussion").send(`2 ➡️ ${member} vient quitter le navire ! Puisse t'il ne jamais faire naufrage par la suite 👋🏻.`)
	}

	if (randnum ==3){
	member.guild.channels.find("name", "discussion").send(`3 ➡️ ${member} vient de claquer la porte ! 1 de perdu, 10 de retrouvés ... j'espère ... 👋🏻.`)
	}

	if (randnum ==4){
	member.guild.channels.find("name", "discussion").send(`4 ➡️ Patience est mère de vertus, ${member} est père/mère de ragequit 😉.`)
	}
}) 

bot.on("guildMemberAdd", member => {
	let role = member.guild.roles.find("name", "Nouveaux")
	member.addRole(role)
}) 

//Commandes générales

bot.on('message', function(message) {
	if (message.content === 'dfhelp') {
		message.channel.send('**|=====| Commandes serveur |=====|**' + 
			'\n-dfinserv : Affiche les informations relatives au serveur Discord.' +
			'\n\n**|=====| Général |=====|**' +
			'\n-dfhelp : Affiche les commades disponibles du bot.')
	}

	if (message.content === 'dfhelp2') {
		message.channel.send('```**|=====| Commandes serveur |=====|**' + 
			'\n-dfinserv : Affiche les informations relatives au serveur Discord.' +
			'\n\n**|=====| Général |=====|**' +
			'\n-dfhelp : Affiche les commades disponibles du bot.```')
	}

	if (message.content === 'dfhelp3') {
		message.channel.send('**|=====| Commandes serveur |=====|**' + 
			'\n-dfinserv : Affiche les informations relatives au serveur Discord.' +
			'\n\n**|=====| Général |=====|**' +
			'\n-dfhelp : Affiche les commades disponibles du bot.')
	}

	if (message.content === 'dfiserv') {
		let server_name = message.guild.name
		let server_size = message.guild.members.size
		let cdate = message.guild.CreatedAt
    	let mdate = message.member.joinedAt
    	let numero = message.guild.MemberCount
		message.channel.send('**Nom du serveur** : "' + server_name + '"' + '\n**Créé le** : ' + cdate + '\n**Membres inscrits** : ' + server_size + '\n\n**Rejoint le** : ' + mdate + '\n**Id** : ' + numero)
	}
		if (message.content === 'dftest') {
    	let nom = message.guild.name
    	let cdate = message.guild.CreatedAt
    	let mdate = message.member.joinedAt
    	let numero = message.guild.MemberCount
    	message.channel.send('Le serveur **' + nom + '** a été créé le **' + cdate + '**.' + '\nVous l"avez rejoint le **' + mdate + '** et en êtes ainsi le membre n°**' + numero + '**.')
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
    }

})

//Commande fun ( jeux ) :

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

/*
bot.on('message', function(message) {
if (message.content === 'df8ball') {
        random2()
		switch (alea) {
  			case '1':
    			message.channel.send(Jamais);
    		break;
  			case '2':
    			message.channel.send(Absolument pas);
    		break;
    		case '3':
    			message.channel.send(Pas du tout);
    		break;
    		case '4':
    			message.channel.send(Non);
    		break;
    		case '5':
    			message.channel.send(Pas vraiment);
    		break;
    		case '6':
    			message.channel.send(Plutôt pas);
    		break;
    		case '7':
    			message.channel.send(Ni oui ni non);
    		break;
    		case '8':
    			message.channel.send(Moyennement);
    		break;
    		case '9':
    			message.channel.send(Partiellement);
    		break;
    		case '10':
    			message.channel.send(Un peu);
    		break;
    		case '11':
    			message.channel.send(Pas mal);
    		break;
    		case '12':
    			message.channel.send(Plutôt);
    		break;
  			case '13':
    			message.channel.send(Oui);
    		break;
    		case '14':
    			message.channel.send(Absolument);
    		break;
    		case '15':
    			message.channel.send(Beaucoup);
    		break;
    		case '16':
    			message.channel.send(Enormement);
    		break;
    		case '17':
    			message.channel.send(Bien plus que tu ne le penses);
    		break;
    		case '18':
    			message.channel.send(A la folie);
    		break;
    		case '19':
    			message.channel.send(Passionement);
    		break;
    		case '20':
    			message.channel.send(Naturellement);
    		break;
    		case '21':
    			message.channel.send(Elementaire mon cher Watson);
    		break;
  			default:
    			message.channel.send(Je ne sais pas ... OwO);
    		break;
		}
	}
})


*/
bot.login('process.env.TOKEN');
