// suicide by podnf (pb2007)
var deathmsg = ["You commited suicide.","You decided that life wasn't worth living anymore.","You killed yourself.","You resetted.","You oofed yourself.","You took cyanide.",
	"You ate lead.","You pressed the suicide button.","You decided live isn't worth it.","You died.","You performed seppuku.","You beheaded yourself.",
	"You shot your brains to bits.","You shot a hole in your heart.","You put C4 on yourself and detonated it.","You drank bleach.","You drank antifreeze.",
	"You drank mercury.","You ate uranium.","You ate plutonium.","You drank toxic waste from a nuclear reactor.","You electrocuted yourself.",
	"You stuck a fork in an outlet.","You drowned yourself.","You made your heart disappear with magic.","You angered a bear and got mauled to death.",
	"You set yourself on fire.","You ate an expired cake.","You stuck a fork in a toaster while it was on.","You crashed your plane trying to fly.",
	"You crawled into a washing machine and turned it on.","You stopped on the train tracks.","You walked onto the nearest highway.","You started a car accident.",
	"You jumped into a spike pit.","You accessed the server console and ran p.kill().","You picked the wrong house, fool!","You dropped an anvil on your head.",
	"You were a victim of spontaneous combustion.","You made your head disappear with magic.","You ate so much food your guts exploded.","You took expired pills.",
	"You stopped your heart on command.","You sold both of your kidneys and suffered kidney failure.","You spawned a creeper and let it blow up.",
	"You cut off all of your body parts and bled to death.","You angered the gods and got struck by lightning."];
var randomnumber;

Game.command("suicide", (p, i) => {
	randomnumber = Math.floor(Math.random() * 47);
	if ( p.speed == 0 ) {
		p.message("You can't do that right now!");
	} else {
		p.message(deathmsg[randomnumber]);
		p.kill();
	}
});

