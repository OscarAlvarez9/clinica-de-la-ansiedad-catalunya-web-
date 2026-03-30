export function calculateReadingTime(content: any): string {
    if (!content) return '2 min de lectura';
    
    // Estimate words from Contentful Rich Text
    let text = '';
    
    const extractText = (node: any) => {
        if (node.value) {
            text += node.value + ' ';
        }
        if (node.content) {
            node.content.forEach(extractText);
        }
    };
    
    if (typeof content === 'string') {
        text = content;
    } else {
        extractText(content);
    }
    
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    
    return `${minutes} min de lectura`;
}

export interface Heading {
    id: string;
    text: string;
    level: 2 | 3;
}

export function extractHeadings(content: any): Heading[] {
    const headings: Heading[] = [];
    if (!content || !content.content) return headings;

    content.content.forEach((node: any) => {
        if (node.nodeType === 'heading-2' || node.nodeType === 'heading-3') {
            const text = node.content
                .filter((c: any) => c.nodeType === 'text')
                .map((c: any) => c.value)
                .join('');
            
            if (text) {
                headings.push({
                    id: text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'),
                    text: text,
                    level: node.nodeType === 'heading-2' ? 2 : 3
                });
            }
        }
    });

    return headings;
}
