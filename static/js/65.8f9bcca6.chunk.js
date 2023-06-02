(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[65],{666:function(e,n){e.exports={title:"1.4.20 Release",description:"Currently-hovered tile highlight, Control-locked zoom, and removed Runecrafting pouch counter",author:"Jordan",body:'<p>The Tile Indicators plugin can now show your currently hovered tile. Thanks to\n<a href="https://github.com/deathbeam" native="" rel="nofollow">@Deathbeam</a> for this feature.</p>\n<p><img src="/img/blog/1.4.20-Release/tile-indicator-highlighted-tile.gif" alt="Currently-hovered tile indicator"></p>\n<p>The Camera Zoom plugin can now require the Control key be held down to enable zooming via the scroll\nwheel. Thanks to <a href="https://github.com/MagicfTail" native="" rel="nofollow">@MagicfTail</a> for this feature.</p>\n<p>The world map overlay has had its fairy ring icon changed to be easier on the eyes.</p>\n<p><img src="/img/blog/1.4.20-Release/fairy-ring-icon-change.png" alt="Cleaner fairy ring icon"></p>\n<p>The Runecrafting plugin has had its pouch counter removed as the data we relied on to display that\ninformation was removed in last week\'s Runecrafting pouch emptying and filling update.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>An option has been added to hide XP globes and/or XP trackers for skills which have reached level\n99</li>\n<li>A stamina timer will be started when you are the recipient of a dose via the Boost Potion Share\nspell</li>\n<li>Various clues have had their item requirements fixed</li>\n<li>The idle notifier will notify you when you\'ve stopped collecting sand</li>\n<li>The friends list counter now correctly displays the maximum friends list capacity for members</li>\n<li>Obstacle highlighting has been added for the Meiyerditch entrance, the Weiss entrance, and\nthe McGrubor\'s Woods railing</li>\n<li>The raids scouting overlay is now hidden when on Olm\'s floor</li>\n<li>The raids ending message default color has been improved</li>\n<li>Items examined within the clue scroll reward panel or smithing interface-as well as item\nplaceholders within the bank-will now display their price information</li>\n<li>Tars, leather shields, and super antifire potions have been added to the skill calculator</li>\n<li>The cannon spot for ice trolls has been improved via a slight adjustment</li>\n<li>Timers which no longer apply will now clear themselves upon death</li>\n<li>Map clues will now indicate in the clue overlay if you are missing a spade in your inventory</li>\n<li>A Karamja diary requirement has been corrected</li>\n<li>The screenshot plugin can now take screenshots upon player death</li>\n<li>The Salty Peter clue scroll now gives you a hint on his general direction (he may still wander\noutside of view of that spot, so be sure to look out for him!)</li>\n<li>The slayer plugin now displays icons for all missing wilderness task monsters</li>\n<li>Wilderness slayer updates from the slayer gem no longer interfere with the plugin highlighting\nmonsters</li>\n<li>The 2010 interface style has had some icon locations adjusted to be better aligned</li>\n<li>Chat commands now have more descriptive tooltips within the settings menu, indicating the exact\ntext needed to use the command</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 17 contributors this release!</p>\n<pre><code>Andre (2):\n      Truncate NPC name instead of subtitle in Loot Tracker (#5740)\n      Add option to hide both globes and xp tracker after 99 (#5741)\n\nChris Hranj (1):\n      Update stamina potion timer to include shared stamina potions (#5750)\n\nChristopher O\'Hara (2):\n      Fix amulet of glory item requirement for elite clue scroll\n      Add sand collection to idle notifier\n\nForsco (1):\n      Update membership days VarPlayer id\n\nJordan Atwood (6):\n      player indicators plugin: Use ColorUtil functions\n      wasd camera plugin: Use ColorUtil functions\n      corp plugin: Fix settings description typo\n      world map plugin: Update fairy ring icon\n      agility plugin: Highlight Meiyerditch entrance obstacles\n      Revert &quot;Truncate NPC name instead of subtitle in Loot Tracker (#5740)&quot;\n\nKamiel (2):\n      Add default cc info chatcolor and change cc info highlight to red\n      Make raids scout overlay not show at Olm (#5734)\n\nMagic fTail (3):\n      Add option to require control to be held for zooming\n      Add support for examine price to clue scroll reward\n      Rename zoom handling script\n\nMax Weber (2):\n      runelite-client: Don\'t duplicate chatbox input when widget ids are wrong\n      cluescrolls: add bullroarer to items list for bullroarer clue\n\nRobbie McLeod (1):\n      Add Tar to the Herblore Skill calculator\n\nRon Young (1):\n      widget: expose drag methods (#5735)\n\nTomas Slusny (15):\n      Properly name Perspective methods, remove unused\n      Add mappings for checkClick, mouseCanvasHoverX/Y\n      Add currently hovered tile to TileIndicators\n      Remove pouch counter from Runecraft plugin\n      Remove dupe strings from AnagramClue\n      Remove dupe strings from CipherClue\n      Make sprite and widget sprite overrides more flexible\n      Make interface styles not replace entire override map\n      Cleanup GE plugin code\n      Make examine plugin work with placeholders\n      Make examine work for smithing interface\n      Export widget onLoadListener\n      Fix BlastFurnace access levels and subscriber names\n      Fix screenshot plugin access levels\n      Fix special counter access levels and subscriber names\n\nbowlcutmullet (1):\n      Use more optimal location for Jatizso Ice Trolls cannon spot (#5715)\n\njohnhamilto (1):\n      Remove timers on local player death\n\nraiyni (1):\n      Require spade on map dig clues\n\nrbbi (1):\n      Add leather shields to the crafting calculator (#4331)\n\nrobinwithes (9):\n      Add mcgrubor woods railing to agility plugin (#5705)\n      Add super antifire to skill calculator (#5708)\n      Fix achievement diary Brimhaven Dungeon requirement (#5706)\n      Add option to take screenshot on local player death (#5711)\n      Add location for Salty Peter clue scroll (#5730)\n      Add chaos druids, bandits and magic axes to slayer plugin (#5759)\n      Added ALL remaining missing wilderness tasks (#5760)\n      Add support for parsing Wilderness assignment updates to slayer plugin (#5757)\n      Add missing Weiss agility obstacles (#5785)\n\ntrimbe (3):\n      Update location for terrorchick cage hot/cold\n      Adjust tab icon offsets for 2010 interface style\n      Chat Commands: Add hints to config description (#5747)\n</code></pre>\n',image:"/img/blog/1.4.20-Release/tile-indicator-highlighted-tile.gif"}}}]);
//# sourceMappingURL=65.8f9bcca6.chunk.js.map