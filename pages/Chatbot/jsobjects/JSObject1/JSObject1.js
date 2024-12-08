/**
 * @Project GiaoDienUser
 * @Author TT(trungthanhcva2206@gmail.com@gmail.com)
 * @Copyright (C) 2024 CHK. All rights reserved
 * @License GNU/GPL version 3.0
 */
export default {

	chatHistory: [{role: "CHATBOT", message: "How can I help you today?"}],

	async sendMessage(){
		const newMessage = { role: "USER", message: Input1.text };
		this.chatHistory.push(newMessage); 
		const reply = await addMessage.run();
		const responseMessage = reply[0]?.output || "No response from API";
		this.chatHistory.push({role:"CHATBOT", message: responseMessage});
		resetWidget('Input1')
		return this.chatHistory;
	}

}
