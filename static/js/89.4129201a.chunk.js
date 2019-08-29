(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{328:function(e,n){e.exports={title:"1.5.25 Release",description:"Stash unit build status, mobile-style clan tab chat, and music list searching",author:"Jordan",__content:'<p>The <a href="https://github.com/runelite/runelite/wiki/Clue-Scroll">Clue Scroll plugin</a> will now display\nwhether you have built the STASH unit for emote clues and will mark the tile of nearby STASH units\nwhen travelling to complete your clue. Thanks to <a href="https://github.com/hex-agon">@hex-agon</a> for this\ncontribution!</p>\n<p><img src="/img/blog/1.5.25-Release/stash-unit-status.gif" alt="STASH unit build status and location indicator"/></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Clan-Chat">Clan Chat plugin</a> now offers an option to\nallow chat typed in the Clan tab to be sent to your clan chat without the need for your message to\nstart with <code>/</code>, just like on mobile!</p>\n<p>A <a href="https://github.com/runelite/runelite/wiki/Music-List">Music List plugin</a> has been added, which\nadds similar functionality as is found in the\n<a href="https://github.com/runelite/runelite/wiki/Quest-List">Quest List plugin</a>, that is ability to show\nonly unlocked or locked songs, and search functionality. Thanks to\n<a href="https://github.com/achencoms">@achencoms</a> for adding this feature.</p>\n<p><img src="/img/blog/1.5.25-Release/music-filter.png" alt="Music filtering and search"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Plugin names in the plugin list panel now display a pop-up menu when clicked, linking directly to\ntheir wiki pages</li>\n<li>The\n<a href="https://github.com/runelite/runelite/wiki/Special-Attack-Counter">Special Attack Counter plugin</a>\nno longer resets recorded special attacks when interacting with NPCs which cannot be attacked</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Cooking">Cooking plugin</a> properly displays the time\nto fermentation when making a full inventory of wines</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Clue-Scroll">Clue Scroll plugin</a> will now display\nsolutions for\n<a href="https://oldschool.runescape.wiki/w/Treasure_Trails/Guide/Maps/Beginner">beginner-level map clues</a></li>\n<li>A bug which would cause the special attack bar to not be updated when hide auto retaliate was on has been fixed</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/World-Map">World Map plugin</a> now shows the location\nof the Camulet teleport</li>\n<li>An option has been added to the\n<a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper">Menu Entry Swapper plugin</a> to swap\n&quot;Send-parcel&quot; and &quot;Quick-pay(100)&quot; for quick and easy access to the hardwood grove in Tai Bwo\nWannai</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Chat-Filter">Chat Filter plugin</a> now has options to\nprevent filtering messages sent by friends and clan members, and will now never filter messages from yourself</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Opponent-Information">Opponent Information plugin</a>\ncan now display both HP value and percent at once on the displayed opponent HP bar</li>\n<li>The Clue Scroll, Time Tracking, and World Map plugins have had updates to reflect last week&#39;s\nHosidius rework</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 14 contributors this release!</p>\n<pre><code>Adam (6):\n      quest list plugin: fix removing widets on shutdown\n      xtea service: fix bulk query returning duplicates\n      clanchat plugin: add clan tab chat option\n      client: fix spec bar not updating with hide auto retaliate on\n      spec counter: ignore non attacakble npcs\n      clue plugin: update Hosidius clue hint from rework\n\nAustin Bryant (1):\n      cooking plugin: fix wine fermentation timer to begin at appropriate time\n\nCistoran (1):\n      worldmap: update Xeric&#39;s Glade teleport location\n\nHexagon (1):\n      clue plugin: add stash unit built status to emote clue overlay\n\nHydrox6 (2):\n      clues: add support for beginner maps\n      Fix Hosidius Easy Cryptic clue after rework (#8940)\n\nJacky Liang (1):\n      Add camulet teleport icon to worldmap (#8934)\n\nJared N (1):\n      menu swapper: add Hardwood Grove menu swap option\n\nJordan Atwood (3):\n      PluginManagerTest: Ensure config keyNames are not duplicated\n      plugins panel: Add wiki link to name labels\n      attack styles: Attach spec bar redraw listener to weapon text\n\nMax Weber (5):\n      runelite-api: Correct WallObject documentation\n      mixins: Correct WallObject&#39;s clickbox\n      mixins: Correct DecorativeObject&#39;s clickbox\n      timetracking: Update farming patches for the Hosidius rework\n      timetracking: Don&#39;t crash when seeing a garbage varbit value\n\nTomas Slusny (1):\n      Add support for center label to ProgressBarComponent\n\nachencoms (1):\n      client: add music list plugin and search filter\n\nosrs-music-map (1):\n      chat filter: add options to filter friends and clan members\n\nseandewar (1):\n      opponentinfo: add option to show both hp value and percent\n\nxDemoN (1):\n      Fix amulet of fury spelling error in ItemMapping.java (#8885)\n</code></pre>'}}}]);
//# sourceMappingURL=89.4129201a.chunk.js.map