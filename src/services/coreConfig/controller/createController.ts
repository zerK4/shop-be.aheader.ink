import { NextApiRequest, NextApiResponse } from 'next';
import { createCoreConfigService } from '../services/createService';

export const createCoreConfig = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { query, query: { protocol, host }} = req;
    const url: string = query.url as string;
    
    const up = url.split('/');
    const name = up[up.length - 1];

    const sss = {
        name, host, url, protocol
    }

    const { message, data, status } = await createCoreConfigService(sss);

    return res.status(200).send({
        message: message,
        data: data,
        status: status,
    });
};
