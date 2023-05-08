# What are base encodings?

Base encodings, also known as positional numeral systems, are mathematical notations used to represent numbers using a specific base or radix. In a base encoding, the base determines the number of unique symbols or digits available to represent values in each position. The most common base encoding is base 10 (decimal), which uses ten symbols (0-9).

Each digit in a number's representation corresponds to a power of the base, and the value of the number is determined by multiplying each digit by its corresponding power of the base and summing them together. For example, in base 10, the number 1234 is interpreted as (1 _ 10^3) + (2 _ 10^2) + (3 _ 10^1) + (4 _ 10^0) = 1000 + 200 + 30 + 4 = 1234.

Base encodings are not limited to base 10. Other bases, such as binary (base 2), octal (base 8), hexadecimal (base 16), and many more, use different sets of symbols and have different positional values. These encodings are commonly used in various applications, including computing, mathematics, data encoding, and communication protocols.

Base encodings allow for efficient representation of numbers in different contexts. They can also facilitate compact storage of data, provide easy conversions between different bases, and support specialized calculations in specific domains.

## Commonly used BaseN encodings

### Base2

- Symbols: 0, 1
- Usage: Base2 encoding represents data using only two symbols, 0 and 1, and is widely used in computer systems, digital communication, and binary file formats.

### Base8 (Octal)

- Symbols: 0-7
- Usage: Base8 encoding uses octal (base-8) representation, where each digit represents three bits. It is less commonly used today but was historically used in older computer systems.

### Base10 (Decimal)

- Symbols: 0-9
- Usage: Base10 encoding is the standard decimal system we use in our everyday lives, with symbols ranging from 0 to 9. It is widely used worldwide for numerical representation.

### Base16 (Hexadecimal)

- Symbols: 0-9, A-F
- Usage: Base16 encoding uses hexadecimal (base-16) representation, with symbols ranging from 0 to 9 and A to F. It is commonly used in computing, particularly for representing binary data and memory addresses.

### Base32 (RFC 4648)

- Symbols: A-Z, 2-7
- Usage: Base32 encoding, as defined in RFC 4648, uses 32 symbols including uppercase letters A to Z and digits 2 to 7. It is commonly used for data encoding, such as in MIME email attachments and cryptographic applications.

### Base36

- Symbols: 0-9, A-Z
- Usage: Base36 encoding utilizes 36 symbols, including digits 0 to 9 and uppercase letters A to Z. It is sometimes used in short URLs and as a compact representation for large numbers.

### Base58 (Bitcoin)

- Symbols: 1-9, A-H, J-N, P-Z, a-k, m-z
- Usage: Base58 encoding is primarily associated with Bitcoin addresses. It uses 58 symbols, excluding easily confused characters like 0, O, I, and l, to create a compact representation of data.

### Base64 (RFC 4648)

- Symbols: A-Z, a-z, 0-9, +, /
- Usage: Base64 encoding, specified in RFC 4648, uses 64 symbols, including uppercase letters A to Z, lowercase letters a to z, digits 0 to 9, and the "+" and "/" characters. It is commonly used for encoding binary data in various applications like email attachments and data transmission.

### Base85 (Ascii85)

- Symbols: 33-117 (excluding 34, 39, 92, 96)
- Usage: Base85 encoding, also known as Ascii85, employs 85 printable ASCII characters (33 to 117, excluding a few special characters) to represent binary data. It is often used in file formats like PDF and PostScript to compress or encode data.

## Less commonly used BaseN encodings:

### Base12

- Symbols: 0-9, A-B
- Usage: Base12 encoding utilizes a dozenal (base-12) system, with symbols ranging from 0 to 9 and uppercase letters A and B. It is a less commonly used base encoding in everyday applications.

### Base26 (Alphabet)

- Symbols: A-Z, 0-9
- Usage: Base26 encoding utilizes uppercase letters A to Z and digits 0 to 9 as symbols. It is less common and primarily used for representing data using both letters of the alphabet and numeric digits.

### Base62

- Symbols: 0-9, A-Z, a-z
- Usage: Base62 encoding utilizes a character set consisting of digits 0 to 9, uppercase letters A to Z, and lowercase letters a to z. It is commonly used for shortening URLs, generating unique identifiers, and encoding data in a URL-safe manner.

### Base128

- Symbols: 0-9, A-Z, a-z, symbols, extended ASCII
- Usage: Base128 encoding expands the character set to include digits 0 to 9, uppercase letters A to Z, lowercase letters a to z, various symbols, and potentially extended ASCII characters. It can be used for encoding data that requires a larger character set.

### Base256

- Symbols: 0-255 (byte values)
- Usage: Base256 encoding represents data using byte values ranging from 0 to 255. It is often used in binary file formats or situations where each symbol corresponds to a single byte.
