import { test } from 'node:test';
import assert from 'node:assert/strict';
import { kanAnnuleren } from '../src/annuleren.js';

test('om 9:30 mag je nog annuleren', () => {
  assert.equal(kanAnnuleren(new Date('2026-11-12T09:30')), true);
});

test('om 9:59 mag je nog net annuleren', () => {
  assert.equal(kanAnnuleren(new Date('2026-11-12T09:59')), true);
});

test('om precies 10:00 mag je niet meer annuleren', () => {
  assert.equal(kanAnnuleren(new Date('2026-11-12T10:00')), false);
});

test('om 10:15 mag je niet meer annuleren', () => {
  assert.equal(kanAnnuleren(new Date('2026-11-12T10:15')), false);
});
