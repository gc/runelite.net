(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[125],{726:function(e,n){e.exports={title:"1.6.14 Release",description:"MacOS GPU rasterizer and configurable XP tracker labels",author:"Jordan",body:'<p>The <a href="https://github.com/runelite/runelite/wiki/GPU" native="" rel="nofollow">GPU plugin</a> now supports rasterization on MacOS! Users using Mac OSX\nshould notice significant performance improvements with the GPU plugin on; we have seen 20+ FPS as well as lower CPU\nutilization. Due to limitations of OpenGL on MacOS the plugin does not offer extended draw distance at this time. We\nplan to continue development of the plugin to add extended draw distance support on MacOS in the future.</p>\n<p><a href="/img/blog/1.6.14-Release/mac-gpu-rasterizer.png" native="" rel="nofollow"><img src="/img/blog/1.6.14-Release/mac-gpu-rasterizer-small.png" alt="GPU enabled on MacOS"></a></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/XP-Tracker" native="" rel="nofollow">XP Tracker plugin</a> now allows customizing the labels on\nthe tracker boxes both in the sidebar panel and on the ingame overlays. Additionally, the progress bar can be configured\nto show percentage to goal, or time to goal. Thanks to <a href="https://github.com/while-loop" native="" rel="nofollow">@while-loop</a> for adding this\nenhancement!</p>\n<p><img src="/img/blog/1.6.14-Release/xp-tracker-customizable-labels.png" alt="Configurable XP tracker labels"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>We have removed the option to hide the <a href="https://github.com/runelite/runelite/wiki/NPC-Aggression-Timer" native="" rel="nofollow">NPC Aggression Timer\nplugin</a>\'s overlay hint so it is clearer to users what\nmust be done to get the plugin working</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Chambers-of-Xeric" native="" rel="nofollow">Chambers of Xeric plugin</a> now continues to scout\nunknown rooms when loading new areas</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Loot-Tracker" native="" rel="nofollow">Loot Tracker plugin</a> can now hide unwanted loot events</li>\n<li>You can now right-click chat messages to copy them to your clipboard using the <a href="https://github.com/runelite/runelite/wiki/Chat-History" native="" rel="nofollow">Chat History\nplugin</a></li>\n<li>Clue scrolls will now always stack when recorded in the <a href="https://github.com/runelite/runelite/wiki/Loot-Tracker" native="" rel="nofollow">Loot Tracker\nplugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/World-Map" native="" rel="nofollow">World Map plugin</a> has seen several additions, such as\ntooltips for dungeon names, hunter areas, fishing spots, and agility courses</li>\n<li>Barbarian fish have been added to the agility <a href="https://github.com/runelite/runelite/wiki/Skill-Calculator" native="" rel="nofollow">skill\ncalculator</a></li>\n<li>The ending door of the penguin agility course is now highlighted via the <a href="https://github.com/runelite/runelite/wiki/Agility" native="" rel="nofollow">Agility\nplugin</a></li>\n<li><a href="https://github.com/runelite/runelite/wiki/Timers" native="" rel="nofollow">Teleblock timers</a> are now correctly added when playing with the\ntransparent chatbox enabled</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Loot-Tracker" native="" rel="nofollow">Loot Tracker plugin</a> now has options to display chat\nmessages after NPC and/or PVP kills</li>\n<li>Some <a href="https://github.com/runelite/runelite/wiki/Clue-Scroll" native="" rel="nofollow">clue scroll</a> locations and descriptions have been updated</li>\n<li>A bug was fixed causing the ground items menu color to sometimes not match the overlay color</li>\n<li>An acorn emoji has been added to the <a href="https://github.com/runelite/runelite/wiki/Emojis" native="" rel="nofollow">Emoji plugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Item-Stats" native="" rel="nofollow">Item Stats plugin</a> has learned the correct healing amount\nfor castle wars bandages while wearing the castle wars bracelet</li>\n<li>New <a href="https://github.com/runelite/runelite/wiki/Player-owned-House" native="" rel="nofollow">POH icons</a> have been added for Weiss and Troll\nstronghold teleport portals</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 23 contributors this release!</p>\n<pre><code>Adam (5):\n      client: update to jogl 2.4.0-rc-20200429\n      gpu: add support for osx\n      travis: force tls 1.2\n      loot tracker: cleanup clue scroll stacking and test\n      key remapper: consume key typed events for remapped keys\n\nAnthony Alves (4):\n      xp-tracker: add configurable labels to XpInfoBox\n      xp-tracker: add more configurable labels to canvas overlay\n      xp-tracker: add option to show ttl or percentage til goal\n      loot-tracker: make clue scroll drops stackable\n\nArman S (1):\n      worldmap: Add dungeon names (#11419)\n\nAtroxide (2):\n      game: Center Fossil Island agility shortcut icons\n      worldmap: Center Otto\'s Grotto tree icon\n\nBKOSRS (2):\n      skill calc: add barbarian fishing to agility skill calculator\n      agility: highlight ending door of penguin agility course (#11478)\n\nDock (1):\n      client session manager: fix shutdown race deleting a null session\n\nHydrox6 (1):\n      Revert &quot;npc aggro timer: Add option to hide hint overlay (#8610)&quot;\n\nJordan Atwood (2):\n      timers: Remove color matching for teleblock messages\n      loottracker: Show chat message after NPC and PVP kills\n\nMax Weber (3):\n      rl-api, rl-client: Remove core logger\n      runelite-client: Make RuneScape Bold actually Bold\n      runelite-client: support warning field on external plugins\n\nNicholas Kimball (1):\n      coordinateclue: Add information to hardwood grove clue (#11489)\n\nOmar Khan (1):\n      grandexchange: Improve geSearchMode description (#11474)\n\nRangvaldr (1):\n      discord: Add missing Iorwerth Dungeon region (#11451)\n\nRobert N\xf6nnig (1):\n      grounditems: update menu highlight logic to match overlay logic\n\nSam Rosenthal (2):\n      clues: Add Viggora cryptic clue item requirement description\n      ItemMapping: Add Blade of Saeldor (c)\n\nTheStonedTurtle (3):\n      loottracker - Reword syncPanel config description\n      loot tracker - add ability to ignore loot events\n      loot tracker - Fix ignoredItems config value ordering\n\nTomas Slusny (1):\n      Add option to copy chat message contents to clipboard\n\nTrevor (1):\n      raids plugin: make scouter scout unknown rooms on new area loaded\n\nben (1):\n      coordinateclue: Add missing Lithkren clue step (#11490)\n\ndekvall (1):\n      emojis: add acorn emoji\n\ngfidder (1):\n      worldmap: Fix Hosidius farming patch location\n\nivanfeli (1):\n      item stats: Fix Castle Wars bracelet bandage heal amount\n\nmelkypie (6):\n      worldmap: add hunter area tooltips\n      client: move FishingSpot to net.runelite.client.game\n      fishing: add unmapped fishing spots\n      worldmap: add fishing spot tooltips\n      worldmap: add tooltips to agility courses\n      worldmap: add the ability to indicate rooftop courses\n\nraynerrebello (1):\n      poh: Add new POH overlay icons for Weiss and Troll Stronghold portals (#11360)\n</code></pre>\n',image:"/img/blog/1.6.14-Release/mac-gpu-rasterizer-small.png"}}}]);
//# sourceMappingURL=125.e7ba8ce2.chunk.js.map