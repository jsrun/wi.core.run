``` 
 __          __  _    _____ _____  ______   _____             
 \ \        / / | |  |_   _|  __ \|  ____| |  __ \            
  \ \  /\  / /__| |__  | | | |  | | |__    | |__) |   _ _ __  
   \ \/  \/ / _ \ '_ \ | | | |  | |  __|   |  _  / | | | '_ \ 
    \  /\  /  __/ |_) || |_| |__| | |____ _| | \ \ |_| | | | |
     \/  \/ \___|_.__/_____|_____/|______(_)_|  \_\__,_|_| |_| 
                                                                                                                                                                                                                                                                                                                           
```                                                                                                                                                 

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/jsrun/wi.core.run/master/LICENSE)

WebIDE + Docker workspaces execution interface
 
## Usage

```js
webide.run.default({cwd: "express-hello-world"});//Run with default runner
webide.run.with("node", {cwd: "express-hello-world"});//Run with outher runner
```

## License

  MIT
  
  Copyright (C) 2016 André Ferreira

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.