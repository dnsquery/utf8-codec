import { encode, decode, encodingLength, name } from 'utf8-codec';
import { Buffer } from 'buffer';

encode('hello'); // $ExpectType Uint8Array
encode('hello', new Uint8Array(0));
encode('hello', new Uint8Array(0), 0);
encode('hello', Buffer.alloc(0)); // $ExpectType Buffer
encode.bytes; // $ExpectType number
decode(new Uint8Array([0])); // $ExpectType string
decode(new Uint8Array([0]), 0);
decode(new Uint8Array([0]), 0, 0);
decode.bytes; // $ExpectType number
encodingLength('hello'); // $ExpectType number
name; // $ExpectType "utf8"
