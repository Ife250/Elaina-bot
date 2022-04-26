import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `    ♥️MY MASTER GROUP♥️\n\n*🎇Kingsley support:🎇* *https://chat.whatsapp.com/BWauo3lHpRwFQNHGJDwU12*\n\n*💫JOIN MY WAP (GROUP)💫*:*https://chat.whatsapp.com/IDZRRpcy0ZpLCetx1I9rFt*`,
           MessageType.text
        ))
        const n = [
            'https://c.tenor.com/oSQvUimhICgAAAPo/majo-no-tabitabi-the-journey-of-elaina.mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Sent you the support Link in personal message \n` }
        )

        }
}
