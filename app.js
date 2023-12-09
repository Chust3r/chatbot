import botWhatsApp from '@bot-whatsapp/bot'
import QRPortalWeb from '@bot-whatsapp/portal'
import BaileysProvider from '@bot-whatsapp/provider/baileys'
import MockAdapter from '@bot-whatsapp/database/mock'

import { flows } from './flows/flows.js'

const { createBot, createProvider, createFlow } = botWhatsApp

const main = async () => {
	const adapterDB = new MockAdapter()
	const adapterFlow = createFlow(flows)
	const adapterProvider = createProvider(BaileysProvider)

	createBot({
		flow: adapterFlow,
		provider: adapterProvider,
		database: adapterDB,
	})

	QRPortalWeb()
}

main()
