import dotenv from 'dotenv';
import { Mail } from '../types/type';

dotenv.config();

export async function sendEmail(message: Mail) {
    const Mailjet = require('node-mailjet');
    const mailjet = new Mailjet({
        apiKey: process.env.MailJet_APIKey || 'your-api-key',
        apiSecret: process.env.MailJet_SecretKey || 'your-api-secret'
      });
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
            From: {
                Email: 'arthur@owlgrid.com',
                Name: 'Owlgrid',
            },
            To: [
                {
                Email: message.Recipient.Email,
                Name: message.Recipient.Name,
                },
            ],
            Subject: message.Subject,
            TextPart: message.TextPart,
            HTMLPart: message.HTMLPart,
        }
        ],
    });
    return (await request).body;
}