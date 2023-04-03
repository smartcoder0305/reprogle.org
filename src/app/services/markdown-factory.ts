import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

/**
 * This factory returns all the custom
 */
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.heading = (text: string, level: number) => {
    let fontSize: string;
    switch (level) {
      case 1:
        fontSize = 'text-4xl';
        break;
      case 2:
        fontSize = 'text-3xl';
        break;
      case 3:
        fontSize = 'text-2xl';
        break;
      default:
        fontSize = 'text-xl';
    }
    return `<h${level} class="font-heading ${fontSize}">${text}</h${level}>`;
  };

  renderer.link = (
    href: string | null,
    title: string | null,
    text: string | null
  ) => {
    return `<a href="${href}" title="${title}" class="underline">${text}</a>`;
  };

  renderer.list = (body: string, ordered: boolean) => {
    let returnTag;

    if (ordered) {
      returnTag = `<ol class="list-decimal mb-4">${body}</ol>`;
    } else {
      returnTag = `<ul class="list-disc mb-4">${body}</ul>`;
    }

    return returnTag;
  };

  // TODO: If we ever use tasks in the Markdown, we'll need to include code for it here
  renderer.listitem = (text: string) => {
    return `<li class="mb-1">${text}</li>`;
  };

  renderer.paragraph = (src: string) => {
    return `<p class="mb-4">${src}</p>`;
  };

  renderer.codespan = (code: string) => {
    return `<code class="bg-slate-800 px-2 rounded-[0.25rem] mx-0.5 inline-block">${code}</code>`;
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartypants: true,
    smartLists: true,
  };
}
