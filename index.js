module.exports = function ChatMemes(mod) {
	
	mod.command.add(["meme"], (arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10) => {
		
		if(arg_1 === "0" 	|| arg_1 === "1" 	|| arg_1 === "2" 	|| arg_1 === "3" 	|| arg_1 === "4" 	|| arg_1 === "9"
		|| arg_1 === "11" 	|| arg_1 === "12" 	|| arg_1 === "13" 	|| arg_1 === "14" 	|| arg_1 === "15" 	|| arg_1 === "16"	
		|| arg_1 === "17" 	|| arg_1 === "18" 	|| arg_1 === "21" 	|| arg_1 === "25" 	|| arg_1 === "26" 	|| arg_1 === "27"
		|| arg_1 === "32" 	|| arg_1 === "213" 	|| arg_1 === "214")
		{
			
			if (arg_2 == null)
			{
				mod.command.message("Put your text")
				return;
			}
			
			if (arg_3 == null)
			{
				arg_3 = "";
			}
			else
			{
				arg_3 = " " + arg_3;
			}
			
			if (arg_4 == null)
			{
				arg_4 = "";
			}
			else
			{
				arg_4 = " " + arg_4;
			}
			
			if (arg_5 == null)
			{
				arg_5 = "";
			}
			else
			{
				arg_5 = " " + arg_5;
			}
			
			if (arg_6 == null)
			{
				arg_6 = "";
			}
			else
			{
				arg_6 = " " + arg_6;
			}
			
			if (arg_7 == null)
			{
				arg_7 = "";
			}
			else
			{
				arg_7 = " " + arg_7;
			}
			
			if (arg_8 == null)
			{
				arg_8 = "";
			}
			else
			{
				arg_8 = " " + arg_8;
			}
			
			if (arg_9 == null)
			{
				arg_9 = "";
			}
			else
			{
				arg_9 = " " + arg_9;
			}
			
			if (arg_10 == null)
			{
				arg_10 = "";
			}
			else
			{
				arg_10 = " " + arg_10;
			}
			
			sendMessage(arg_2 + arg_3 + arg_4 + arg_5 + arg_6 + arg_7 + arg_8 + arg_9 + arg_10  , arg_1)
		}
		else
		{
			mod.command.message("/8 meme [Num Channel] [Text]")
			mod.command.message("---------------------------------")
			mod.command.message("Num Channel")
			mod.command.message("# say = 0 | party = 1 | guild = 2 | area = 3 | trade = 4 | greet = 9 | private = 11-18 | p-notice = 21 | emote = 26 | global = 27 | r-notice = 25 | raid = 32 | megaphone = 213 | guild-adv = 214")
			mod.command.message("---------------------------------")
		}
	})
		
		
//Function
	
	function sendMessage(msg, chl) {
		mod.send('C_CHAT', 1 , {
		channel: chl ? chl : 21,
		message: msg
		});
	}
};
