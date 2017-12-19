import { LinkFormatPipe } from './link-format.pipe';
import { Pipe } from '@angular/compiler/src/core';

describe('LinkFormatPipe', () => {

  it('create an instance', () => {
    const pipe = new LinkFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format comiclink to comic link', () => {
    const pipe = new LinkFormatPipe();
    expect(pipe.transform('comiclink')).toBe('comic link');
  });
});
