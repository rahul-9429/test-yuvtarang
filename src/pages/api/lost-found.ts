import { Redis } from '@upstash/redis';
import type { NextApiRequest, NextApiResponse } from 'next';

const redis = Redis.fromEnv();

interface LostFoundItem {
  id: number;
  name: string;
  contact: string;
  item: string;
  description: string;
  status: 'lost' | 'found';
}

const handleSubmission = async (data: LostFoundItem, res: NextApiResponse) => {
  try {
    const key = `lost-found-items`;
    await redis.lpush(key, JSON.stringify(data));
    res.status(200).json({ message: 'Item reported successfully!' });
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ message: 'Error saving item', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

const getItems = async (res: NextApiResponse) => {
  try {
    const key = `lost-found-items`;
    const items = await redis.lrange(key, 0, -1);

    if (!items.length) return res.status(200).json([]);

    const parsedItems = items.map((item) => {
      try {
        return JSON.parse(item);
      } catch (error) {
        return { message: 'Invalid data format', item };
      }
    });

    res.status(200).json(parsedItems);
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).json({ message: 'Error retrieving items', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return handleSubmission(req.body, res);
  }

  if (req.method === 'GET') {
    return getItems(res);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
