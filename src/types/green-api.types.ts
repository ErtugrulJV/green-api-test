export interface IGreenCredentials {
	idInstance: string
	apiTokenInstance: string
}

export interface IGetSettingsResponse {
	wid: string
	countryInstance: string
	typeAccount: string
	webhookUrl: string
	webhookUrlToken: string
	delaySendMessagesMilliseconds: number
	markIncomingMessagesReaded: string
	markIncomingMessagesReadedOnReply: string
	outgoingWebhook: string
	incomingWebhook: string
	outgoingMessageWebhook: string
	outgoingAPIMessageWebhook: string

	[key: string]: unknown
}

export interface IGetStateInstanceResponse {
	stateInstance:
		| 'notAuthorized'
		| 'authorized'
		| 'blocked'
		| 'sleepMode'
		| 'starting'
}

export interface ISendMessagePayload {
	chatId: string
	message: string
}

export interface ISendMessageResponse {
	idMessage: string
}

export interface ISendFileByUrlPayload {
	chatId: string
	urlFile: string
	fileName?: string
	caption?: string
}

export interface ISendFileByUrlResponse {
	idMessage: string
}
