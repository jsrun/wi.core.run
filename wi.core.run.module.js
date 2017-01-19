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

let TemplateEngine = require("../wi.core.template.js");

module.exports = {
    /**
     * List of runners
     * @type object
     */
    runners: require("./runners.json"),
        
    /**
     * List module assets
     * @type object
     */
    assets: {
        css: [__dirname + "/wi.core.run.style.css"],
        js: [__dirname + "/wi.core.run.events.js"]
    },
    
    /**
     * Function to get settings value
     * 
     * @param string key
     * @return mixed|null
     */
    getRunners: function(key){
        return this.runners;
    },
    
    /**
     * Module startup function
     * 
     * @param object app
     * @return this
     */
    bootstrap: function(_this){ 
        let __this = this;
        
        _this.commands.addCommand({
            name: "webide:run",
            bind: {mac: "F5", win: "F5"},
        });
                
        _this.navbar.addItem("Run/Run", {
            command: "webide:run",
            divide: true,
            disabled: true
        }, 600);
        
        let runners = this.getRunners().Workspaces;
        var submenuArr = [];
        for(let runner in runners){
            submenuArr.push({
                display: runners[runner].name,
                command: "webide:runwith",
                args: runners[runner]
            });
        }
        
        _this.navbar.addItem("Run/Run With", {
            submenu: submenuArr
        }, 600);
                
        return this;
    }
};