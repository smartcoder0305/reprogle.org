import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

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

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartypants: true,
    smartLists: true,
  };
}
