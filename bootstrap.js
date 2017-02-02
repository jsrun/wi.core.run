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

let fs = require("fs");

module.exports = {
    /**
     * List of runners
     * @type object
     */
    runners: require("./runners.json"),
    
    /**
     * Function to get settings value
     * 
     * @return mixed|null
     */
    getRunners: function(){
        return this.runners;
    },
    
    /**
     * Function to get runner settings by name
     * 
     * @param string name
     * @return mixed|null
     */
    getRunner: function(name){
        for(let groupKey in this.runners){
            for(let runnerKey in this.runners[groupKey]){
                if(this.runners[groupKey][runnerKey].image === name){
                    return this.runners[groupKey][runnerKey];
                    break;
                }
            }
        }
        
        return null;
    },
    
    /**
     * Function to return Dockerfile by name
     * 
     * @param string name
     * @return string|null
     */
    getDockerFile: function(name){
        try{ return fs.readFileSync(__dirname + "/" + name).toString(); } catch(e) { return null; }
    },
    
    /**
     * Module startup function
     * 
     * @param object app
     * @return this
     */
    bootstrap: function(commands, navbar, run){         
        commands.addCommand({ name: "webide:run", bind: {mac: "F5", win: "F5"} });
                
        navbar.addItem("Run/Run", {
            command: "webide:run",
            divide: true,
            disabled: true
        }, 600);
        
        let runners = run.getRunners().Workspaces;
        var submenuArr = [];
        for(let runner in runners){
            submenuArr.push({
                display: runners[runner].name,
                command: "webide:runwith",
                args: runners[runner]
            });
        }
        
        navbar.addItem("Run/Run With", { submenu: submenuArr }, 600);
    }
};