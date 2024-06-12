import Mailjet, { Contact, LibraryResponse, Request } from 'node-mailjet';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RequestData } from 'node-mailjet/declarations/request/Request';

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
    // console.log('begin',req, 'end')
    // return res.status(200).json({ body: req.body })

    const { name, lastName, email, tel } = JSON.parse(req.body)

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
                    // email,
                    // familyName,
                    firstname: name,
                    name: `${name} ${lastName}`,
                    country: '_placeholder_ KZ',
                    newsletter_sub: 'some_string'
                    // tel,
                },
                Action: 'addnoforce',
                Email: email,
            })


        // const ContactID = result.body.Data[0].ID

        // const addMetaResult = await mailjet
        //     .put('contactdata')
        //     .id(ContactID)
        //     .request({
        //         Data: [
        //             {
        //                 // firstname: name,
        //                 name: `${name} ${familyName}`,
        //                 country: '_placeholder_',
        //                 // tel: tel,
        //             }
        //         ]
        //     })

    
        // const addToListResult: LibraryResponse<RequestData> = await mailjet.post('listrecipient').request({
        //     ContactID: ContactID,
        //     ListID: listID,
        //     IsUnsubscribed: false
        // });
    
        res.status(200).json({ body: result.body })    
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}