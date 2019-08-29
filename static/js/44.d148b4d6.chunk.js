(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{283:function(n,e){n.exports={title:"1.4.7 Release",description:"Kill count command, prayer bars, and Tears of Guthix plugin",author:"Adam",__content:'<p>A kill count command was added which can share your kill count with other\nplayers who are also using RuneLite. The client must first observe you\ngetting a kill count message to record the kill count. It can not read\nthe kill counts off of the boss log in game yet, but maybe that will come soon.</p>\n<p>Note that as the kill count data is sent from the client it is trusted and is not\ndifficult for someone to fake.</p>\n<p><img src="/img/blog/1.4.7-Release/kc.png" alt="kc"/></p>\n<p>The prayer plugin now can show a prayer bar, below your hitpoints bar, showing\nhow much prayer you have left.</p>\n<p><img src="/img/blog/1.4.7-Release/prayerbar.png" alt="prayerbar"/></p>\n<p>A Tears of Guthix plugin was added which displays time remaining on the blue streams:</p>\n<p><img src="/img/blog/1.4.7-Release/tog.png" alt="tog"/></p>\n<p>The special attack orb now indicates when you have special attack enabled.</p>\n<p><img src="/img/blog/1.4.7-Release/specorb.gif" alt="specorb"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Add broad arrows to the fletching skill calculator</li>\n<li>XP drop plugin will now center text of XP if skill icons are hidden</li>\n<li>Fix agility plugin counting laps on the agility pyramid</li>\n<li>The runecraft plugin can now send a notification when rune pouches degrade</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<pre><code>Adam (12):\n      slayer plugin: don&#39;t lowercase task names\n      slayer plugin: add spiritual creatures, and fix a few other tasks\n      slayer plugin: move target highlight building to use events\n      Add killcount command\n      Add getVarpValue and setVarpValue to RSClientMixin and Client\n      runecraft plugin: add positions for config options\n      runelite-scripts: check length check in chatbox input\n      runelite-client: add immediate event bus\n      chat commands: fix kc command in friends chat\n      plugin manager: register plugins with immediate event bus\n      command manager: post events to immediate eventbus\n      widgetid: update barrows interface ids\n\nForsco (1):\n      Add broad arrows to fletching skill calc\n\nInfinitay (2):\n      Add &quot;getvarp&quot;, &quot;setvarp&quot;, &quot;getvarb&quot;, &quot;setvarb&quot; dev-tool chat commands\n      Add stream progress overlay for Tears of Guthix\n\nIsha Dijcks (1):\n      runecraft plugin: add a notification when a runepouch degrades\n\nJordan Atwood (9):\n      clues: Fix SW-of-deserted-keep hot-cold location\n      xp drop plugin: Move text to use hidden icon&#39;s space\n      xp tracker plugin: Reduce visibilities\n      xp tracker plugin: Remove WorldClient usages\n      agility plugin: Remove unused variables and imports\n      agility plugin: Reduce visibility of classes\n      agility plugin: Fix course spellings\n      agility plugin: Check for endpoints only when defined\n      agility plugin: Add pyramid end point\n\nNathen Sample (1):\n      Add prayer bonus for suffering R and RI\n\nOliver Atkinson (1):\n      Fix #4101 - Add swap options for Decant\n\nTomas Slusny (11):\n      Rename prayer tooltip option\n      Add prayer bar to prayer plugin\n      Add api mappings for oculus orb normal speed\n      Set oculus speed to 36 (x3) in DevTools\n      Add spec active indicator to spec orb\n      Do not explode on illegal unicode chat in settings\n      Fix &quot;verxik&quot; typo in ChatCommandsPlugin\n      Add more !kc abbreviations\n      Check if infobox can render in InfoBoxOverlay\n      Add debuff/buff change indicators\n      Add support for preserving boost indicators\n</code></pre>'}}}]);
//# sourceMappingURL=44.d148b4d6.chunk.js.map