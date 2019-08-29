(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{256:function(e,n){e.exports={title:"1.2.14 Release",description:"RuneLite 1.2.14 is released!",author:"Adam",__content:'<p><a href="https://github.com/abextm">@Abextm</a> added an item stats plugin which shows a\ntooltip on food and potions to show its effect and whether or not it would be\nwasteful to consume it.</p>\n<p><img src="/img/blog/1.2.14-Release/itemstats.png" alt="itemstats"/></p>\n<p>A new zoom plugin was added which extends the zoom limits on the built in client\nZoom feature:</p>\n<p><img src="/img/blog/1.2.14-Release/zoom.png" alt="zoom"/></p>\n<p>A new motherlode mine plugin was added to mark the locations of ore veins and\nrocks, thanks to <a href="https://github.com/sethtroll">@Sethtroll</a>. Additionally, many\nnew potions and freeze spells have been added to the timer plugin.</p>\n<p><img src="/img/blog/1.2.14-Release/mlm.png" alt="mlm"/></p>\n<p><a href="https://github.com/deathbeam">@deathbeam</a> reworked the XP tracker plugin to have a nice new UI:</p>\n<p><img src="/img/blog/1.2.14-Release/xptracker.png" alt="xptracker"/></p>\n<p><a href="https://github.com/oplosthee">@oplosthee</a> added an achievement diary indicator\nplugin which shows which sections of diaries have been completed.</p>\n<p><img src="/img/blog/1.2.14-Release/diary.png" alt="diary"/></p>\n<p>There are also several smaller improvements, including:</p>\n<ul>\n<li>XP drop plugin to recolor xp drops when prayers are activated</li>\n<li>Fix BA plugin for recent game update</li>\n<li>Add granite cannonballs to cannon plugin</li>\n<li>Add configuration option for the runepouch overaly to only show on hover</li>\n<li>Added configurable tick delay to metronome plugin</li>\n</ul>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 10 contributors this release!</p>\n<pre><code>Adam (52):\n      injector: fix detecting if garbage value should be appended\n      runelite-api: rename InventoryItemQuery -&gt; InventoryWidgetItemQuery\n      runelite-api: add ItemContainer\n      runelite-api: add inventory item query\n      Add item stats plugin\n      screenshot plugin: add test for different level up messages\n      checkstyle: enforce whitespace after comma\n      cache: remove script interpreter\n      cache: allow passing instruction set to assembler\n      runelite-api: add Script\n      cache: add set_zoom_distance\n      cache: add get_zoom_distance\n      cache: add comment to rs2asm grammar\n      cache: add set_camera_focal_point_height\n      cache: add get_camera_focal_point_height\n      cache: add script id to grammar\n      runescape-api: add IndexData and IndexDataBase\n      runescape-client: method1102 -&gt; execute6500\n      runescape-client: rename conflicting getConfigData method in IndexDataBase\n      Add slf4j to mixins and expose logger in Hooks for them\n      mixin injector: remove assert for moved code to not have exceptions\n      Add ability to overlay cache archives\n      Add runelite vm opcode and event\n      Add int and string script stack to api\n      Add script assembler plugin for packing scripts at build time\n      Add runelite-scripts project for packaging overlaid scripts and dependency\n      Add zoom plugin\n      cache service: fix findArchive to select distinct\n      runelite-client: add xp drop plugin which colors based on prayers\n      metronome plugin: remove configurable sound ids until a better solution is found\n      runelite-api: add rigour and augury prayers\n      xo drop plugin: add rigour and augury\n      xo drop plugin: set back xp drops to default color too\n      mlm plugin: disable until it can be rewritten without scene scans every frame\n      ground items: only loop tiles which are within distance\n      ground items: REGION_SIZE - 1 since this is inclusive now\n      cache: allow carriage returns in newlines in scripts\n      Remote projectile target and length tracking\n      mixins: fix getProjectiles queue iteration logic\n      Remove unused imports\n      Remove even more unused imports\n      item manager: fix trying to cache null in getItemPrice\n      config manager: thread config flushes to disk too\n      slayer plugin: fix getting -1 count left on tasks\n      runelite-client: fix exception from --no-rs\n      xp tracker: don&#39;t add duplicate entries if nothing changes\n      xp tracker plugin: update on logout\n      runelite-api: add game object and wall object spawn/change/despawn events\n      cannon plugin: update for event change\n      hunter plugin: update for event change\n      mlm plugin: rewrite to use events\n      mlm plugin: default to enabled once again\n\nC Gibson (1):\n      Disable screenshots on login screen\n\nCameron Moberg (1):\n      Fixed Barbarian Assault plugin to work with osrs update on 2018/25/1\n\nKamiel (1):\n      Add granite cannonball support to plugin\n\nMax Weber (6):\n      method2965 &gt; getScript\n      method1752 &gt; getScriptByFile\n      Enable custom window border warning\n      Add low-memory mode warning\n      itemstats: Fix SuperRestore and friends\n      runescape-api: remove RSCacheableNode::getNext() and getPrevious(). They are different than RSNode&#39;s next and previous, but have the same signature so they can get called instead. This caused the ground overlay to only show 1 item because it was iterating the cache, not the item list.\n\nSeth (14):\n      Add hover option to runepouch\n      Add graphic changed event\n      timers plugin: add more timers\n      Fix for screenshot HP level\n      Add Wrath rune to Runepouch\n      Add timer tooltips\n      Fix spelling inconsistencies/add rest of potions\n      Add Motherlode plugin\n      Add custom colors to ground items\n      Fix motherlode Ids\n      timers plugin: check config before checking message\n      timers plugin: add raids potions\n      Fix spelling error on timer\n      Add raid varbit check to remove timers\n\nSomeoneWithAnInternetConnection (3):\n      Fishing plugin: Add fishing spots north of seers&#39; village\n      Remove unused import\n      Include unit prices in examine messages\n\nTomas Slusny (7):\n      Change conversion of config stream to map to pairs\n      Fix coloring of warned attack styles\n      Fix the frame is displayable exception\n      Update XP tracking plugin to include more info\n      Preserve guava classes in the shaded jar\n      Change AccountSession to use lombok features\n      Fix access levels of WSClient\n\nUniquePassive (6):\n      Add Dimension to configs\n      Add a config setting for the game applet&#39;s size\n      Add a Reset button to config panels for resetting to defaults\n      Shift local indices only once\n      Make sure injected methods don&#39;t invoke copied methods\n      screenshot plugin: fix okhttp resource leak on imgur upload\n\noplosthee (5):\n      Add Diary Progress Indicator plugin (#429)\n      Change duration of Super Antifire Potions from 2 to 3 minutes\n      Extend Metronome Plugin with configurable sound and tick delay (#454)\n      Fix Karamja diary displaying incorrect progress\n      Remove modification of original diary entry colors\n</code></pre>'}}}]);
//# sourceMappingURL=17.40dca083.chunk.js.map