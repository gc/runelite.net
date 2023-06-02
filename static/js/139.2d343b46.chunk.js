(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[139],{740:function(e,n){e.exports={title:"1.7.0 Release",description:"Extended draw distance on MacOS & farming tracker notifications",author:"Adam",body:'<h1>MacOS extended draw distance</h1>\n<p>On MacOS, the GPU plugin now supports extending the draw distance further. To do so, enable the\n<code>Compute Shaders</code> option in the <code>GPU</code> plugin and then restart the plugin. Big thanks to\n<a href="https://github.com/LlemonDuck/" native="" rel="nofollow">@LlemonDuck</a> for doing a lot of work on this.</p>\n<p>We\'ve also fixed some symbols on the clue scroll and barrows overlay showing incorrectly on MacOS,\nas well as the dropdown menu on the plugin search bar.</p>\n<p>While we still do not have an MacOS launcher that runs native on the Apple M1, the core client has been\nupdated so it can run natively if you run the launcher <code>RuneLite.jar</code> <a href="https://github.com/runelite/runelite/wiki/MacOS-Arm64-(M1-chips)-Native-Support" native="" rel="nofollow">directly with a native JVM</a>.\nIf you are technically apt enough to do this, it may be worth it if you have one of these new machines.\nWe still plan on providing a native launcher for the M1 in the future.</p>\n<h1>Farming tracker notifications</h1>\n<p>The time tracking plugin now has an option to send notifications when crops are done growing.\nIt can be enabled per-crop by clicking the bell icon.</p>\n<p><img src="/img/blog/1.7.0-Release/farming_notif.png" alt="Farming Notification"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The tag tab named <code>clue</code> now works once again</li>\n<li>The entity hider now allows hiding ignored players</li>\n<li>Chat messages replayed by the chat history plugin on login no longer re-trip commands or notifications.\nThey also no longer lose their coloring.</li>\n<li>The fishing plugin can now send notifications for flying fish when fishing minnows</li>\n<li>The idle notifier now works at the Ectofuntus and at looms</li>\n<li>Spoon and weary face emojis have been added (<code>--o</code> and <code>Dx</code> respectively)</li>\n<li>The loot tracker now tracks the new chests from the Shades of Morton and Isle of Souls</li>\n<li>The chat notifications plugin has a new option to send you notifications for receiving private messages</li>\n<li>The despawn timer in the ground items plugin was fixed for the Nightmare instance, and one has been added for items placed on tables</li>\n<li>A <code>Use</code> swap has been added for battlestaves</li>\n<li>The chat color username recolor option now works correctly on ironmen and player moderators</li>\n<li>The player name of the client which sends tray notifications is now included in notification title</li>\n<li>The screenshot plugin now has an configurable threshold for which Valuable drops to screenshot. This allows\nsetting a very low valuable drop notification in order to see the drops in the chat box, but still\nscreenshot certain valuable ones</li>\n<li>The music volume percentage is now shown when hovering the draggable handle, instead of just the track</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 20 contributors in this release &amp; 1.6.39!</p>\n<pre><code>Adam (26):\n      menu manager: preserve managed menu option ordering\n      api: remove npc action changed event\n      world hopper: move hop() to client thread\n      tile: add setter for ground object\n      Apply default font to text with unicode characters\n      Revert &quot;runelite-client: Don\'t use system specific modifier key names&quot;\n      image component: support setPreferredSize\n      Revert &quot;image component: support setPreferredSize&quot;\n      config manager: use createTempFile for config temp file\n      bank tags: allow plugins to register their own tag names\n      clue scroll plugin: fix test\n      config manager: require config group and key when setting configuration\n      api: add an addChatMessage method overload to allow skipping events\n      chat command manager: remove unnecessary null tests\n      chat message manager: format runelite messages prior to adding\n      chat history: fix replaying runelite-formatted messages\n      friends chat: use return value of addChatMessage\n      icon text field: use only awt key listener\n      bank tags: fix tag named clue coexisting with the special &quot;clue&quot; tab\n      perspective: support rectangular tile areas\n      devtools: fix drawing game object overlays multiple times\n      farming tracker: don\'t send notifications for empty crop state\n      chat commands: comma separate values in several commands\n      gpu: add opencl support for macos\n      entity hider: add option to hide ignored players\n      Bump to 1.7.0-SNAPSHOT\n\nAlexsuperfly (2):\n      timers: Remove cannon timer when cannon is destroyed\n      cannon: Remove cannon when it is destroyed\n\nAnjaneya Bhardwaj (1):\n      fishing: Add minnows flying fish notification (#13126)\n\nAuenc (1):\n      idle notifier: Add Ectofuntus animations (#13177)\n\nBroooklyn (14):\n      emoji: Add spoon emoji with trigger `--o`\n      itemstats: Update Soul Wars Bandages healing\n      npc indicators: remove tags from minimap npc name\n      hotkey button: use default font\n      loottracker: add Gold Chest tracking (Shades of Mort\'ton)\n      worldmap: add Shades of Mort\'ton minigame location\n      chatnotifications: add private message notification\n      discord: Isle of Souls region additions\n      fishing: add Isle of Souls NPC IDs to enum\n      worldmap: add Isle of Souls locations\n      slayer: add Isle of Souls task location\n      discord: Use regions instead of varbits for raiding activity\n      discord: Remove code for handling of varbits\n      ground items: add Nightmare instance to normal despawn timers\n\nCyborger1 (3):\n      clues: Improve Lovakengj Sulphur Mine area descriptions (#13180)\n      emoji: Replace spoon and fork-and-knife emojis\n      emoji plugin: set message node message instead of rl format message\n\nDavid (1):\n      menu entry swapper: Add battlestaff use swap (#13140)\n\nHydrox6 (4):\n      clues: add Isle of Souls Hot/Cold location\n      ground markers: show existing label when labeling a marker\n      chat color: fix usernames not being recoloured if they have an icon\n      chat color: fix nonsensical test\n\nJonathan Lee (1):\n      loot tracker: add support for isle of souls chests\n\nJonatino (1):\n      Fix incorrect named value when storing FlatStorage caches\n\nJordan Atwood (5):\n      MenuOptionClicked: Add selectedItemIndex field\n      clues: Add Isle of Souls coordinate clues\n      cluescrolls: Fix beginner/master clue step reset\n      notifier: Add username to tray notification title\n      cluescrolls: Re-check named object highlights after hopping\n\nLiam Schmidt (1):\n      screenshot: Add valuable drop threshold config\n\nMax Weber (3):\n      don\'t use gson\'s reflection serialization on non RuneLite classes\n      ReflectUtil: allow privateLookupIn cross-classloader with JDK-8173978\n      http-api: allow gsoning classes outside of net.runelite\n\nNick Wolff (1):\n      emoji: Add weary face emoji\n\nObsoleteXero (1):\n      idle notifier: Add Loom crafting animation (#13154)\n\nPsikoi (1):\n      Resize and tweak hiscores boss icons\n\nTaylor Abraham (1):\n      music: Make volume percent visible when hovering handle\n\nUsman Akhtar (2):\n      worldmap: use boosted level for map icon tooltips\n      grounditems: Add despawn timer for items placed on tables\n\nbuttonpoker (1):\n      cannon: Remove Mourner Headquarters elf cannon spot (#13196)\n\nloldudester (3):\n      TimeTracking: Move birdhouse schedule to ScheduledExecutorService\n      TimeTracking: Add farming notifications\n      TimeTracking: Return shortened weekdays in doneEstimates\n</code></pre>\n',image:"/img/blog/1.7.0-Release/farming_notif.png"}}}]);
//# sourceMappingURL=139.2d343b46.chunk.js.map