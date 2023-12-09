import botWhatsApp from '@bot-whatsapp/bot'
import { email, horario, redes, telfono, ubicacion } from '../utils/regex.js'

const { addKeyword } = botWhatsApp

//→ Flow principal

const flowPrincipal = addKeyword(['!hola', '!hi', '!holi'])
	.addAnswer('Hola que tal 👻, somos *Fulanitos y Asociados S.A de C.V*')
	.addAnswer('¿En que te podemos ayudar?')

//→ Flow de horario

const flowHorario = addKeyword(horario, { regex: true }).addAnswer(
	`Claro que si crack 🥴
Lunes - Viernes de 10 am a 4:00 pm
Sábados y Domingos vamos a misa 🙏`
)

//→ Flow de ubicación

const flowUbicacion = addKeyword(ubicacion, { regex: true }).addAnswer(
	`Para que o que,eres policía? 🤣
Estamos ubicados en Salvador Colín Num. 113
Colonia Valle Verde. enfrente del Picasso 🥴🔥`
)

//→ Flow de redes sociales

const flowRedes = addKeyword(redes, { regex: true })
	.addAnswer(
		`Nos pueden escontrar en todas las redes como
*@fulanitos&asociados* 💙`
	)
	.addAnswer(
		`Y nuestro sitio web 
*www.fulanitosyasociados.urss*`
	)

//→ Flow de contacto (email)

const flowEmail = addKeyword(email, { regex: true }).addAnswer(
	`Nos puedes contactor como:
*soporte@fulanitosyasociados.urss* 🤪`
)

//→ Flow de contacto (telefono)

const flowTelefono = addKeyword(telfono, { regex: true }).addAnswer(
	`Claro!
*55 1538 2828*
No llames el Domingo que solo contestamos a Disosito 🙏`
)

const flows = [
	flowPrincipal,
	flowUbicacion,
	flowRedes,
	flowEmail,
	flowHorario,
	flowTelefono,
]

export { flows }
