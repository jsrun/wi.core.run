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

webide.module("run", function(commands){
    //Map command to create terminal
    commands.add("webide:run", function(){
        this.run.default();
    });
    
    commands.add("webide:runwith", function(args){
        this.run.with(args.name, {});//{cwd: }
    });
    
    this.run = {
        "default": function(options){
            
        },
        
        with: function(runner, options){
            
        }
    };
});
