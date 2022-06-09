import { createElement } from '../helpers/domHelper';
import {fightersDetails} from '../helpers/mockData';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  if(fighter) {
    const fighterImg = createFighterImage(fighter);
    const fighterName = createElement({ tagName: 'h4' });
    const fighterDetails = createElement({
      tagName: 'div',
      className: 'fighter-details'
    });
    const fighterDetailsWrapper = createElement({
      tagName: 'div',
      className: 'fighter-details-wrapper'
    });
    fighterDetails.innerHTML = `
      <div class="fighter-detail-cell">
        <p><svg id="Capa_1" class="icon" enable-background="new 0 0 512 512" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m61 14-28.705 26.983-6.909 6.494-8.863-8.863 6.432-6.842 27.045-28.772h11z" fill="#35d7fd"/><path d="m50 3-27.045 28.772-6.432 6.842 4.432 4.431 29.045-29.045z" fill="#bbf9ff"/><path d="m20.955 43.045 4.431 4.432 6.909-6.494 28.705-26.983h-11z" fill="#03b3e2"/><path d="m40 49-9.091 4-19.909-19.909 4-9.091 10 10v5h5z" fill="#ffd257"/><path d="m28.032 46.123-10.155-10.155a10.082 10.082 0 0 1 -2.1-11.19l-.777-.778-4 9.091 19.909 19.909 9.091-4-.778-.778a10.082 10.082 0 0 1 -11.19-2.099z" fill="#f89c5b"/><path d="m11 57 11.955-11.955-4.063-4.062-12.017 12.017z" fill="#895e7a"/><path d="m8.045 54 11.955-11.955-1.108-1.062-12.017 12.017z" fill="#aa889f"/><path d="m3 53h8v8h-8z" fill="#f89c5b"/><path d="m3 53h8a0 0 0 0 1 0 0 8 8 0 0 1 -8 8 0 0 0 0 1 0 0v-8a0 0 0 0 1 0 0z" fill="#ffd257"/><path d="m6 56h2v2h-2z" fill="#e94561"/><path d="m22.5 30.681h2v19.639h-2z" fill="#ffe8ae" transform="matrix(.707 -.707 .707 .707 -21.755 28.479)"/><path d="m34 4 1.414 2.586 2.586 1.414-2.586 1.414-1.414 2.586-1.414-2.586-2.586-1.414 2.586-1.414z" fill="#bbf9ff"/><path d="m55 31 1.414 2.586 2.586 1.414-2.586 1.414-1.414 2.586-1.414-2.586-2.586-1.414 2.586-1.414z" fill="#bbf9ff"/><g fill="#35d7fd"><path d="m21 16h2v2h-2z"/><path d="m21 20h2v2h-2z"/><path d="m19 18h2v2h-2z"/><path d="m23 18h2v2h-2z"/></g><circle cx="23" cy="41" fill="#e94561" r="5"/><circle cx="23" cy="41" fill="#c6ec6b" r="2"/><path d="m23.82 39.18a1.992 1.992 0 0 1 -2.64 2.64 2 2 0 1 0 2.64-2.64z" fill="#58a066"/><circle cx="23" cy="38" fill="#fff" r="1"/><path d="m47.282 14h-3.548a.718.718 0 0 1 -.508-1.226l3.548-3.548a.718.718 0 0 1 1.226.508v3.548a.719.719 0 0 1 -.718.718z" fill="#fff"/><path d="m41.366 16h2.667a.815.815 0 0 1 .576 1.391l-7.37 7.37a.815.815 0 0 1 -.577.239h-1.847a.814.814 0 0 1 -.609-1.356l6.551-7.371a.818.818 0 0 1 .609-.273z" fill="#fff"/></svg>
        ${fighter.attack}</p>
      </div>
      <div class="fighter-detail-cell">
        <p><svg id="Capa_1" class="icon" enable-background="new 0 0 512 512" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg">><style>.a{fill:#26B99A;}</style><path d="M29 0c0 0-6.7 8-22 8v19.1c0 10 4.3 19.6 12.2 25.7C21.9 55 25.2 56.9 29 58c3.8-1.1 7.1-3 9.8-5.2C46.7 46.7 51 37.1 51 27.1V8C35.7 8 29 0 29 0z" class="a"/><path d="M7 8v19.1c0 10 4.3 19.6 12.2 25.7C21.9 55 25.2 56.9 29 58V0C29 0 22.3 8 7 8z" fill="#22967A"/><path d="M29 51.7c-2.1-0.8-4.2-2-6.1-3.6C16.7 43.2 13 35.4 13 27.1V13.6c7.4-0.9 12.6-3.5 16-5.8 3.4 2.3 8.6 4.9 16 5.8v13.5c0 8.3-3.7 16.2-9.9 21C33.2 49.6 31.1 50.8 29 51.7z" fill="#14A085"/><path d="M13 13.6v13.5c0 8.3 3.7 16.2 9.9 21 2 1.5 4 2.7 6.1 3.6V7.8C25.6 10.1 20.4 12.7 13 13.6z" class="a"/></svg>
        ${fighter.defense}</p>
      </div>
      <div class="fighter-detail-cell">
        <p><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><path d="M256 481c-3.5 0-7-1.2-9.9-3.7-21.8-19.1-42.6-36.8-62.1-53.4C73.8 330 0 267.9 0 177.5 0 94 59 31 136 31c60.7 0 99.6 42.4 120 80.5C276.4 73.4 315.3 31 376 31c77 0 136 63 136 146.5 0 90.4-73.8 152.4-184 246.4-19.5 16.6-40.3 34.3-62.1 53.4C263 479.8 259.5 481 256 481z" fill="#FD3018"/><path d="M265.9 477.3c21.8-19.1 42.6-36.8 62.1-53.4C438.2 330 512 267.9 512 177.5 512 94 453 31 376 31c-60.7 0-99.6 42.4-120 80.5V481C259.5 481 263 479.8 265.9 477.3z" fill="#E61E14"/></svg>
        ${fighter.health}</p>
      </div>
    `;
    fighterName.innerText = fighter.name;
    fighterDetailsWrapper.append(fighterName, fighterDetails);
    fighterElement.append(fighterImg, fighterDetailsWrapper);
  }

  return fighterElement;
}
  // fightersDetails.forEach( (element) => element.name == fighter ? createFighterImage(element) : false);

  // todo: show fighter info (image, name, health, etc.)



export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
