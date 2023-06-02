(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[74],{675:function(n,e){n.exports={title:"1.5.2 Release",description:"UI scaling for GPU, color banding, and expanded outer zoom limit",author:"Adam",body:'<p>Stretched mode combined with the GPU plugin will now scale the UI independently\nof the rest of the game (the game is left unscaled). Thanks to\n<a href="https://github.com/dbolya" native="" rel="nofollow">@dbolya</a> for this great contribution.</p>\n<p><img src="/img/blog/1.5.2-Release/stretched-resizable.png" alt="stretched-rezizable">\n<img src="/img/blog/1.5.2-Release/stretched-fixed.png" alt="stretched-fixed"></p>\n<p>The GPU plugin now shades more similarly to the CPU renderer by default. You can\nturn on the previous behavior by enabling the \'Smooth banding\' option in the GPU\nplugin settings.</p>\n<p>The camera zoom plugin now has a configurable outer zoom limit, which controls\nhow far the ingame zoom can zoom out.</p>\n<p>GPU fixes for this week:</p>\n<ul>\n<li>Fix texturing for volcanic whips, Fountain of Rune, closed bank booths, and others.</li>\n<li>Fix screenshots with stretched mode.</li>\n</ul>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix pasting on the login screen on OSX</li>\n<li>Fix observatory shortcut highlight</li>\n<li>Fix slayer plugin not working on the first assigned slayer task</li>\n<li>Add Ivandis Flail to prayer plugin</li>\n<li>Fix the world map plugin to not noticibly drop FPS when the map is open</li>\n<li>Fix freeze timer not showing when you move on the same tick as being frozen</li>\n<li>Fix incorrect slayer kills remaining count in xp tracker</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 20 contributors this release!</p>\n<pre><code>Adam (9):\n      Remove update check service and client\n      gpu: move priority_map and count_prio_offset to priority_renderer\n      gpu: move common compute header to its own file\n      gpu: add shader for tiles\n      gpu: split camera position from model position\n      gpu: remove duplicate definition of struct modelinfo in comp.glsl\n      gpu: move hslToRgb to its own file\n      gpu: add toggle for color banding\n      runelite-api: add skull icon api for local player\n\nAlexsuperfly (1):\n      MLM Plugin: Add toggle for rocks highlighting (#6181)\n\nDaniel Bolya (2):\n      gpu: add UI scaling when using GPU with stretched mode\n      Fixed screenshots in GPU mode with stretching enabled.\n\nDavis Cook (2):\n      Fix action and time estimates only appearing after 2 actions (#6624)\n      Fix incorrect slayer kill remaining count in xp tracker (#6615)\n\nDennis (2):\n      gpu: fix textured faces with alpha\n      gpu: fix untextured faces\n\nJochim Van Dijck (1):\n      Enable Command-V login screen pasting on macOS\n\nJordan Atwood (1):\n      timers: Correctly add freeze timer upon frozen while moving\n\nJoshua Filby (3):\n      feat: add StructDefinition to cache\n      cache: Add ScriptVarType to Enums\n      cache: prevent dumping enums with no data\n\nLotto (1):\n      stretchedmode: reduce wait time after changing scaling percentage\n\nMagic fTail (2):\n      camera plugin: add expand outer zoom limit option\n      Add id to script output\n\nMax Weber (1):\n      runelite-client: update to use client patch\n\nMaxBartlett (1):\n      Fix observatory shortcut highlight (#6723)\n\nMichael (1):\n      Add support for parsing first slayer task (#6677)\n\nOmar Abdellatif (1):\n      Truncate username and password string before pasting if necessary\n\nSam Beresford (3):\n      Add Ivandis Flail (+5) to prayer plugin (#6664)\n      Correct tooltip for notification when focused in RuneLite settings (#6695)\n      Auto-hide sidebar close button when not hovered (#6694)\n\nTheStonedTurtle (1):\n      Properly update MLM sack values on login/logout (#6627)\n\nTomas Slusny (10):\n      Properly close GL context and lock surface\n      Do not use static imports for GL constants\n      Remove distance check from agility plugin\n      Properly parse stat change value in status bars\n      Change dev tools fonts to constant\n      Unify dev tools toggles to 1 button type\n      Move widget and itemIndex to DevToolsOverlay\n      Fix access levels in dev tools plugin\n      Disable inspector buttons on close in dev tools\n      Check for canvas location being non null in TOG\n\nTwiglet1022 (2):\n      Improve responsiveness of fishing idle notification (#6457)\n      Correct some tick/millis explanatory comments in runelite api (#6383)\n\nl2- (1):\n      gpu: suppress debug messages for generic warnings with severity unknown\n\ntrimbe (1):\n      world map plugin: optimize clipping of world map points\n</code></pre>\n',image:"/img/blog/1.5.2-Release/stretched-resizable.png"}}}]);
//# sourceMappingURL=74.3b27e48b.chunk.js.map