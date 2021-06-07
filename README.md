# MessageParser
## Importing
```js
const _MessageParser = require("message_parser.js");
const MessageParser = new _MessageParser("!"); // "!" would be the prefix
```
### **- OR -**
```js
const MessageParser = new (require("message_parser.js"))("!"); 
// "!" would be the prefix
```
## Usage
```js
const MessageParser = new (require("message_parser.js"))("!"); 
// "!" would be the prefix
let text = "!help moderation";
text = MessageParser.parse(text);
if(text.parsed) {          // If it was parsed
    switch(text.command){  // ...
        case "help":       // and the command is help:
            console.log("You asked for help on \"" + text.arguments[0] + "\".");
            break;
    }
}
```
## Output
```
> You asked for help on "moderation".
```
## Return
```json
{
    "command": "string",
    "arguments": ["argument", "argument"],
    "parsed": true
}
```

# LICENSE
![gnu-logo](logos/gplv3-88x31.png)

This program is free software: you can redistribute it and/or modify
it under the terms of the [GNU General Public License](https://github.com/NeutronX-dev/ws.js/blob/main/LICENSE) as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.