import Mailjet, { Contact, LibraryResponse } from 'node-mailjet';

const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
    // config,
    // options,
})

/// nextjs boilerplate

import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {


    const queryData: Contact.PostContactBody = {
        Name: 'Test Person',
        Email: 'somebody@example.com',
    }

    const result: LibraryResponse<Contact.PostContactResponse> = await mailjet.post('contact').request(queryData)

    // const ContactID = result.body.Data[0].ID

    res.status(200).json({ body: result.body })    
}