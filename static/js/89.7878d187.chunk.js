(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[89],{690:function(e,n){e.exports={title:"1.5.16 Release",description:"Grand Exchange item stats and multicolor ground markers",author:"Adam",body:'<p>The item stats plugin will now show the stats of gear when selected in a buy\noffer on the Grand Exchange.</p>\n<p><img src="/img/blog/1.5.16-Release/ge.png" alt="ge"></p>\n<p>The ground markers plugin now supports having multiple ground markers of\ndifferent colors. The plugin will remember the color that was in use at the time\nthe marker was placed. Existing markers from prior to the update have no color\nand will use whatever the current color is.</p>\n<p><img src="/img/blog/1.5.16-Release/markers.png" alt="markers"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fixed XP tracker sometimes not initializing correctly on login, which caused it\nto show very wrong XP rates</li>\n<li>Fix friend notes to work on players with spaces on their names</li>\n<li>Update Chaos Fanatic\'s slayer task icon to match respawn timer icon</li>\n<li>Fix Ardougne easy diary combat training camp requirement</li>\n<li>Add Hydra slayer helm to examine and bank value prices</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 9 contributors this release!</p>\n<pre><code>Adam (4):\n      config manager: throttle config saves to file\n      friend notes: replace nbsp from friend names in config keys\n      chat commands: check message length before use\n      xptracker: fix initiailizing overall xp on login\n\nDennis (1):\n      wiki plugin: add deselect on shutdown\n\nHydrox6 (1):\n      wiki: Update the Fixed Minimap Clickbox to account for the spec orb\n\nJordan Atwood (5):\n      ground markers plugin: Clean up legacy code\n      ground markers: Fix startup and shutdown bug\n      worldpoint: Add static fromRegion method\n      worldpoint: Add getRegionX() and getRegionY()\n      ground markers: Allow different colored markers\n\nMax Weber (2):\n      runelite-client: Remove ChatboxInputManager\n      cache: use RuneStar cs2 opcode names\n\nNate Brown (1):\n      Change Chaos Fanatic\'s slayer task icon to match respawn timer icon (#8162)\n\nSeven-Ate (1):\n      Add missing item mappings for hydra slayer helm\n\nTomas Slusny (1):\n      Remove unnecessary .get() on OkHttp request\n\ntrimbe (6):\n      diary requirements: add missing period in combat camp task\n      add GE offer building script\n      item stats: add item information panel when buying items in the ge\n      mixins: use last non-null child to determine index for new widgets\n      item stats: use GameTick to determine when GE is closed\n      item stats: use ClientThread where necessary for resetting\n</code></pre>\n',image:"/img/blog/1.5.16-Release/ge.png"}}}]);
//# sourceMappingURL=89.7878d187.chunk.js.map