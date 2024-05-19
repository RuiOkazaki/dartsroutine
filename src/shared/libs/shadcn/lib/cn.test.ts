import { describe, expect, test } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  test('配列を受け取り合成することができる', () => {
    expect(cn(['hoge', 'fuga'])).toBe('hoge fuga');
  });
});
