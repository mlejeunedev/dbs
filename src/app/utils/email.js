import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
    '648cdca895bad5ad078dd14cfb110be2',
   'b803f5407ae5f8c768ac2ff6011cd33c',
);

export async function sendEmail({ to, from, subject, message }) {
    const emailData = {
        Messages: [
            {
                From: {
                    Email: from,
                    Name: 'Design By Solenne',
                },
                To: [
                    {
                        Email: to,
                        Name: 'Recipient Name',
                    },
                ],
                Subject: subject,
                TextPart: message,
            },
        ],
    };

    try {
        const result = await mailjet.post('send', { version: 'v3.1' }).request(emailData);
        console.log('Email sent successfully!');
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}