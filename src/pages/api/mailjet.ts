import Mailjet, { Contact, LibraryResponse, Request } from 'node-mailjet';
import type { NextApiRequest, NextApiResponse } from 'next'

const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
    // config,
    // options,
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, lastName, email, tel, country } = JSON.parse(req.body)

    const queryData: Contact.PostContactBody = {
        Name: `${name} ${lastName}`,
        Email: email,
    }

    console.log({ queryData })

    const listID = process.env.MJ_LIST_ID

    if (!listID) return res.status(500).json({ error: 'List ID not found' })

    try {
        // const result: LibraryResponse<Contact.PostContactResponse> = await mailjet.post('contact').request(queryData)
    
        const result = await mailjet.post('contactslist')
            .id(listID)
            .action('managecontact')
            .request({
                Name: `${name} ${lastName}`,
                Properties: {
                    // newsletter_sub: 'some_string'
                    firstname: name,
                    name: `${name} ${lastName}`,
                    tel,
                    country,
                },
                Action: 'addnoforce',
                Email: email,
            })
    
        res.status(200).json({ body: result.body })    
    } catch (error) {
        res.status(500).json({ error: (error as Error).message })
    }
}