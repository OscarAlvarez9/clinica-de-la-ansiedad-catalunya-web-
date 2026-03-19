import { createClient } from 'contentful';

// Validate that environment variables are set
if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is missing from environment variables');
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN is missing from environment variables');
}

// Client for published production content
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

// Optional client for draft content preview
export const previewClient = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
  ? createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
      host: 'preview.contentful.com',
    })
  : client;

// --- Interfaces based on projected schema ---

// BlogPost Interface
export interface BlogPost {
  titulo: string;
  slug: string;
  metaDescripcion?: string;
  contenido: any; // Rich Text Document
  imagenDestacada?: {
    fields: {
      file: {
        url: string;
        details: {
          image: { width: number; height: number };
        };
      };
      title: string;
    };
  };
  autor?: {
    fields: {
      nombre: string;
      avatar?: any;
    }
  };
  fechaPublicacion: string;
  categoria?: any[]; // Entry links
}

// Generic fetching function with preview support
export async function getEntries<T>(contentType: string, isPreview = false, order?: string[]) {
  const currentClient = isPreview ? previewClient : client;
  
  const query: any = {
    content_type: contentType,
  };

  if (order) {
    query.order = order;
  }
  
  try {
    const entries = await currentClient.getEntries<React.ComponentProps<any>>(query);
    return entries.items;
  } catch (error) {
    console.error(`Error fetching ${contentType} from Contentful:`, error);
    return [];
  }
}

export async function getEntryBySlug(contentType: string, slug: string, isPreview = false) {
  const currentClient = isPreview ? previewClient : client;
  
  try {
    // We sanitize the target slug for comparison
    const targetSlug = slug.replace(/^\/|\/$/g, '');
    
    // Fetch all entries of this type and find the one that matches after sanitization
    // This is more robust than a direct field match if slugs in CMS have inconsistent slashes
    const entries = await currentClient.getEntries<React.ComponentProps<any>>({
      content_type: contentType,
      limit: 100, // Reasonable limit for a blog
    });
    
    const matchedEntry = entries.items.find((entry: any) => {
      const entrySlug = (entry.fields.slug || '').replace(/^\/|\/$/g, '');
      return entrySlug === targetSlug;
    });
    
    return matchedEntry || null;
  } catch (error) {
    console.error(`Error fetching ${contentType} ${slug} from Contentful:`, error);
    return null;
  }
}
