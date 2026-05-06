// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber true', () => {
    expect(isPhoneNumber("510-999-8888")).toBe(true);
});

test('isPhoneNumber true2', () => {
    expect(isPhoneNumber("511-111-1111")).toBe(true);
});

test('isPhoneNumber false', () => {
    expect(isPhoneNumber("545-787-9")).toBe(false);
});

test('isPhoneNumber false2', () => {
    expect(isPhoneNumber("333")).toBe(false);
});

//Email
test('isEmail true', () => {
    expect(isEmail("anl084@ucsd.edu")).toBe(true);
});

test('isEmail true2', () => {
    expect(isEmail("random_email@gmail.com")).toBe(true);
});

test('isEmail false', () => {
    expect(isEmail("a.l.c@g.m.n")).toBe(false);
});

test('isEmail false2', () => {
    expect(isPhoneNumber("somewebsite.com")).toBe(false);
});

// isStrongPasswordTessts
test('isStrongPasswordTessts true', () => {
    expect( isStrongPassword("b34somest_a")).toBe(true);
});

test('isStrongPasswordTessts true2', () => {
    expect(isStrongPassword("A123")).toBe(true);
});

test('isStrongPassword false', () => {
    expect(isStrongPassword("azzzzzzzzzzzzzzzzzzzzzzzzzz")).toBe(false);
});

test('isStrongPassword false2', () => {
    expect(isStrongPassword("123456")).toBe(false);
});

//Date
test('isDate true', () => {
    expect(isDate("03/99/5555")).toBe(true);
});

test('isDate true2', () => {
    expect(isDate("9/9/7777")).toBe(true);
});

test('isDate false', () => {
    expect(isDate("5555/3/2")).toBe(false);
});

test('isDate false2', () => {
    expect(isDate("2//1234")).toBe(false);
});

//isHexColor
test('isHexColor true', () => {
    expect(isHexColor("#198dbc")).toBe(true);
});

test('isHexColor true2', () => {
    expect(isHexColor("45230a")).toBe(true);
});

test('isHexColor false', () => {
    expect(isHexColor("1")).toBe(false);
});

test('isHexColor false2', () => {
    expect(isHexColor("99999999999999999999")).toBe(false);
});