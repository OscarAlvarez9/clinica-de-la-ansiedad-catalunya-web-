import { createClient } from 'contentful';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function run() {
  try {
    const types = await client.getContentTypes();
    console.log(JSON.stringify(types.items.map(ct => ({
        id: ct.sys.id,
        name: ct.name,
        fields: ct.fields.map(f => ({
            id: f.id,
            name: f.name,
            type: f.type,
            required: f.required
        }))
    })), null, 2));
  } catch (error) {
    console.error('Error fetching content types', error);
  }
}

run();
