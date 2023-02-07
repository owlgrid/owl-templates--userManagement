import dotenv from 'dotenv';

dotenv.config();

export async function sendEmail(email: string, message: { Subject: string, TextPart: string, HTMLPart: string }) {
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
                Name: 'Me',
            },
            To: [
                {
                Email: 'arthur@owlgrid.com',
                Name: 'You',
                },
            ],
            ...message
        }
        ],
    });
    return (await request).body;
}