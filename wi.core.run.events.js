/**
 *  __          __  _    _____ _____  ______   _____             
 *  \ \        / / | |  |_   _|  __ \|  ____| |  __ \            
 *   \ \  /\  / /__| |__  | | | |  | | |__    | |__) |   _ _ __  
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|   |  _  / | | | '_ \ 
 *     \  /\  /  __/ |_) || |_| |__| | |____ _| | \ \ |_| | | | |
 *      \/  \/ \___|_.__/_____|_____/|______(_)_|  \_\__,_|_| |_| 
 *                                                                                                                                             
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

(function(){
    //Map command to create terminal
    webide.commands.add("webide:run", function(){
        webide.run.default();
    });
    
    webide.commands.add("webide:runwith", function(args){
        webide.run.with(args.name, {});//{cwd: }
    });
    
    webide.run = {
        "default": function(options){
            
        },
        
        with: function(runner, options){
            
        }
    };
})();
