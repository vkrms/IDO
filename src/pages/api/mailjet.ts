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


    const queryData: Contact.PostContactBody = {
        Name: 'Test Person',
        Email: 'somebody+1@example.com',
    }

    const result: LibraryResponse<Contact.PostContactResponse> = await mailjet.post('contact').request(queryData)

    const ContactID = result.body.Data[0].ID

    const listID = process.env.MJ_LIST_ID;

    const addToListResult: LibraryResponse<RequestData> = await mailjet.post('listrecipient').request({
        ContactID: ContactID,
        ListID: listID,
        IsUnsubscribed: false
    });

    res.status(200).json({ body: addToListResult.body })    
}