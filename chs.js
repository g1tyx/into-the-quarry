/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "[*] key": "[*] 钥匙",
    "[*] Key Finder": "[*] 钥匙查找器",
    "Activity Log": "活动日志",
    "ascension": "转生",
    "automation": "自动化",
    "beacons": "信标",
    "button": "按钮",
    "Buy Max": "购买最大",
    "Buy Max only works on Mining and Enchant upgrades.": "购买 Max 只适用于采矿和附魔升级。",
    "Buy x": "买 x",
    "Buy x1": "购买 x1",
    "challenges": "挑战",
    "Each button hit gives 1 - 3 xp.": "每个按钮点击给出 1 - 3 xp。",
    "Each mine operation gives 1 xp.": "每次矿山作业给予 1 xp。",
    "Efficiency": "效率",
    "enchants": "附魔",
    "Fortune": "财富",
    "gem progress [ ": "宝石进度[",
    "gems": "宝石",
    "gold": "黄金",
    "Haste": "急速",
    "Help!": "帮助！",
    "Hover for Possible Drops": "悬浮鼠标查看可掉落物品表",
    "Improves mining droprates for gold and [*] keys.": "提高黄金和 [*] 钥匙的采矿掉落率。",
    "Increases base mining speed.": "提高基础采矿速度。",
    "Increases gem yield. Improved after level 100.": "增加宝石产量。 100级后提升。",
    "keys": "钥匙",
    "mastery": "精通",
    "mining": "采矿",
    "Mining Level ": "挖矿等级",
    "relocate": "搬迁",
    "Reset": "重置",
    "While mining, you will occasionally find a bundle of T1 [*] keys.\nUpgrades increase progress gained towards this milestone.": "挖矿时，您偶尔会发现一捆 T1 [*] 钥匙。\n升级会增加朝着这个里程碑取得的进展。",
    "x speed": "x速度",
    "Efficiency II": "效率 II",
    "Gold drops are significantly improved.": "黄金掉落得到显着改善。",
    "Increases gem yield again.": "再次提高宝石产量。",
    "Lootmaster I": "战利品大师 I",
    "Lootmaster II": "战利品大师 II",
    "Shiny": "闪亮",
    "Unlocks a new tier of findable drops.": "解锁新的可找到掉落物的层。",
    "x gold from drops": "x 掉落的黄金",
    "HINT: Are you stuck? Each fame multiplier is color-coded based on the resource it deals with. If you are struggling to increase fame gains, you may be able to increase a specific multiplier by checking the tab where that resource is generated/used.": "提示：你卡住了吗？ 每个声誉倍增器都根据其处理的资源进行颜色编码。 如果您正在努力增加声誉收益，您可以通过检查生成/使用该资源的选项卡来增加特定的乘数。",
    "Allocate beacons into paths, leveling them up over time and gaining bonuses. Each color tier requires drastically more power than the previous one, so you'll need to work up to the later paths. ": "将信标分配到路径中，随着时间的推移将它们升级并获得奖励。 每个颜色层都比前一个颜色层需要更多的能量，所以你需要在后面的路径上努力。",
    "Beacons": "信标",
    "Button": "按钮",
    "Click the button to gain crystals, which are used in a variety of upgrades. The center of the button gives better rewards, but you'll have to be precise.": "单击该按钮可获得用于各种升级的水晶。 按钮的中心提供更好的奖励，但你必须精确。",
    "Discord Server": "Discord服务器",
    "Each time the red progress bar fills up, gain gems and have a chance for additional drops.": "每次红色进度条填满时，获得宝石并有机会额外掉落。",
    "Enchants": "附魔",
    "Join our Discord for updates, discussion, and more!": "加入我们的 Discord 以获取更新、讨论等！",
    "Keys": "钥匙",
    "Mining": "矿业",
    "Notes": "笔记",
    "Relocate": "搬迁",
    "Reset to gain fame. Fame can be spent on powerful mining upgrades and enchants. It's recommended for your first relocation to gain at least 25 fame, which should take about 1-2 hours. ": "重置以获得声誉。 声誉可以用于强大的采矿升级和附魔。 建议您第一次搬家至少获得 25 声誉，这大约需要 1-2 小时。",
    "Slurry (unlocked later) - Break down your keys into slurry. With the help of mysterious sigils, you can craft some of the most powerful items in the game (assuming you have already obtained at least one of that item).": "浆液（稍后解锁）- 将你的钥匙分解成浆液。 在神秘印记的帮助下，您可以制作游戏中一些最强大的物品（假设您已经获得至少一件该物品）。",
    "This game is balanced around playing manually without the use of any tools. Most things are automatic by default, and the mechanics that require active play do it for a reason, and/or can be automated in a reasonable time.": "该游戏在不使用任何工具的情况下以手动方式进行平衡。 默认情况下，大多数事情都是自动的，需要主动游戏的机制是有原因的，和/或可以在合理的时间内自动进行。",
    "Use your currencies on upgrades to your mining rig.": "使用您的货币升级您的采矿设备。",
    "Use your found keys here! You unlock more information on drops after receiving at least one of the respective item from the respective key.": "在这里使用你找到的钥匙！ 在从相应的钥匙中至少收到一个相应的项目后，您可以解锁更多关于掉落的信息。",
    "When the enchant bar of each respective color fills, there's a chance for all enchants of the same color as the bar to fire (chance shown on tooltips), giving a very powerful bonus. Upgrade your enchants to increase the proc chance.": "当每种颜色的附魔条填满时，所有与该条颜色相同的附魔都有机会触发（机会显示在工具提示上），提供非常强大的奖励。 升级你的附魔以增加触发机会。",
    "You are free to play however you want, but using autoclickers/scripts will likely ruin some of the experience of the game.": "你可以随心所欲地玩，但使用自动点击器/脚本可能会破坏游戏的某些体验。",
    "You gain beacon power based on your beacon levels. Beacon power can augment your beacon paths.": "您根据信标等级获得信标功率。 信标能量可以增强您的信标路径。",
    "[drops]": "[掉落]",
    "Find a key of this rarity to use it.": "找到一把这种稀有的钥匙来使用它。",
    "Key": "钥匙",
    "more items that can drop from this key.": "更多可以从此钥匙掉落的物品。",
    "Nothing :(": "什么都没有:(",
    "Open All": "全部打开",
    "Requires 1 artifact (any kind)": "需要 1 个神器（任何种类）",
    "Requires 1 beacon": "需要 1 个信标",
    "Requires 1 holy light": "需要1个圣光",
    "Requires 1 sigil": "需要 1 个印记",
    "T1 [*]": "T1 [*]",
    "There are": "这里有",
    "Total Keys Opened:": "打开的总钥匙数：",
    "Unlock a new feature at 1,000,000 gold": "以 1,000,000 黄金解锁一项新功能",
    "Use": "使用",
    "You received the following rewards:": "您获得了以下奖励：",
    "orbs": "宝珠",
    "Increases the number of keys found when a Key Finder of any rarity triggers.": "增加任何稀有度的钥匙查找器触发时找到的钥匙数量。",
    "Key Mastery": "钥匙精通",
    "x keys": "x 钥匙",
    "/ sec": "/ 秒",
    "This upgrade is at max level.": "这个升级已达最高级。",
    "Buy challenges with fame to unlock.": "使用声誉购买挑战来解锁。",
    "Find a beacon while mining to unlock.": "挖掘解锁时找到信标。",
    "Have at least 1e25 fame and 10,000 challenge points to unlock.": "至少有 1e25 声誉和 10,000 个挑战点可以解锁。",
    "Reach level 10,000 on any mining upgrade to unlock.": "任何采矿升级达到 10,000 级即可解锁。",
    "Reach Mining Level 8 to unlock.": "达到采矿等级 8 即可解锁。",
    "Relocate and gain at least 1 fame to unlock.": "搬迁并获得至少 1 声誉以解锁。",
    "Relocate and gain at least 100 fame to unlock.": "搬迁并获得至少 100 点声誉以解锁。",
    "Use 1,000 total keys to unlock.": "总共使用 1,000 个钥匙解锁。",
    "Beacon Power": "信标能量",
    "Beacon Power Multiplier": "信标功率倍增器",
    "beacon power.": "信标能量。",
    "beacons per level": "每级信标",
    "bonus": "奖励",
    "Droprate Multiplier I": "掉落倍数 I",
    "Each level in a beacon path gives beacons.": "信标路径中的每个等级都提供信标。",
    "Earn more beacon power by leveling your beacon paths.": "通过平衡你的信标路径来获得更多的信标能量。",
    "Increases all beacon path progress.": "增加所有信标路径进度。",
    "Mine Speed Multiplier": "采矿速度倍增器",
    "Ramping Power": "斜坡功率",
    "Recall Beacons": "召回信标",
    "Shining Light": "闪光",
    "Split Beacons Evenly": "平均拆分信标",
    "Supercharged": "超级充能",
    "Unlock at mining level": "解锁于采矿等级",
    "Unspent beacon power boosts beacon path progress. Upgrades multiply this amount.": "未用完的信标能量会提升信标路径的进度。 升级乘以这个数量。",
    "[**] key": "[**] 钥匙",
    "Beacon Paths": "信标路径",
    "Fame Bonus (Beacons)": "声誉奖励（信标）",
    "fame by relocating.": "声誉通过搬迁。",
    "Gem Amount": "宝石数量",
    "High-tier keys are not reset.": "高层级钥匙不会重置。",
    "Keys Used:": "使用的钥匙：",
    "Mining Level": "挖矿等级",
    "Relocate to a new mine and gain\n        fame based on your past success.": "搬迁到一个新矿山并根据您过去的成功\n 获得声誉。",
    "Relocating resets all previous resources and upgrades.": "搬迁重置所有以前的资源和升级。",
    "You will gain ": "你将获得",
    "(Upgrades in orange aren't reset when you relocate.)": "（橙色的升级不会在您搬迁时重置。）",
    "beacon progress": "信标进度",
    "chance for fame gain": "获得声誉的机会",
    "Clockwork": "发条",
    "Deep Pockets": "财大气粗",
    "Except for Lootmaster I and II, mining upgrades are not reset on relocation": "除了 战利品大师 I 和 II，采矿升级不会在搬迁时重置",
    "Expansive": "夸张",
    "fame": "声誉",
    "Gain a small chance to gain 1 fame per mining cycle.": "每个挖矿周期有很小的机会获得 1 个声誉。",
    "Game On": "游戏开始",
    "gem bonus": "宝石奖励",
    "Jumpstart": "启动",
    "Key Finder speed/amount is dramatically increased.": "钥匙查找器 的速度/数量显着提高。",
    "Lockpicks": "开锁器",
    "Lootmaster I and II stay unlocked on relocate.": "战利品大师 I 和 II 在重新定位时保持解锁状态。",
    "Mythical": "神话",
    "Omnipotent": "无所不能",
    "Reflectors": "反光板",
    "Requires 1 [*] key": "需要 1 个 [*] 键",
    "Significantly improves beacon path progress.": "显着提高信标路径进度。",
    "Significantly improves drop amounts (mining only).": "显着提高掉落量（仅限采矿）。",
    "Significantly improves gem gains. Improved after level 100.": "显着提高宝石收益。 100级后提升。",
    "Start with 5000 gems and 100 gold.": "从 5000 颗宝石和 100 金币开始。",
    "Unlocks challenges 1 - 3. [NOT IMPLEMENTED YET]": "解锁挑战 1 - 3。[尚未实施]",
    "x amount from drops": "x 掉落量",
    "x speed/amount": "x 速度/数量",
    "You need to gain at least 10 fame to relocate.": "您需要至少获得 10 点声誉才能搬迁。",
    "(no bonus)": "(无奖励)",
    "Accumulate a multiplier to crystals as more clicks are made (max 10,000).": "随着点击次数的增加（最多 10,000 次），累积乘数到水晶。",
    "Clicks Today:": "今日点击：",
    "crystal bonus": "水晶奖励",
    "Fame Bonus": "声誉奖励",
    "Gem Bonus": "宝石奖励",
    "Hot Button": "热键",
    "I'm Feeling Nice": "我感觉很好",
    "Insanity!": "疯狂！",
    "Key Finder Speed": "钥匙查找器速度",
    "Stability": "稳定性",
    "The button moves less after each click.": "每次点击后按钮移动较少。",
    "The center of the button is highlighted.": "按钮的中心突出显示。",
    "Total Clicks:": "总点击次数：",
    "x movement multiplier": "x 移动乘数",
    "x speed multiplier": "x 速度乘数",
    "Your lifetime Incredible and Perfect clicks increase mining speed; Perfect clicks have a drastically higher impact.": "你的一生难以置信的完美点击提高了挖掘速度；完美的点击会产生更大的影响。",
    "Lootmaster III": "战利品大师 III",
    "sigils": "印记",
    "Blinding Lights": "炫光",
    "crystal gain": "水晶增益",
    "crystals": "水晶",
    "Drop chances above 100% increase the amount of drops.": "掉落几率高于 100% 会增加掉落数量。",
    "Efficiency III": "效率 III",
    "fame bonus": "声誉奖励",
    "Fortune II": "财富 II",
    "gem gain": "宝石增益",
    "Geodes": "大地测量仪",
    "Hardened": "硬化",
    "Increases all droprates.": "增加所有掉落率。",
    "Increases beacon path progress.": "增加信标路径进度。",
    "Increases crystal gain from the button.": "增加按钮的水晶增益。",
    "Increases fame gain on relocation.": "增加搬迁时的声誉。",
    "Increases gem gain again.": "再次增加宝石获得。",
    "Legendary": "传说",
    "Legendary II": "传说 II",
    "Legendary Upgrades": "传说升级",
    "Overload": "过载",
    "While mining, you will occasionally find a bundle of T2 [**] keys.\nUpgrades increase progress gained towards this milestone.": "挖矿时，您偶尔会发现一捆 T2 [**] 钥匙。\n升级会增加朝着这个里程碑取得的进展。",
    "x droprates": "x 掉率",
    "Your lifetime number of quality button clicks increase gem gain.": "您一生中点击质量按钮的次数会增加宝石的获得。",
    "[**] Key Finder": "[**] 钥匙查找器",
    "[***] key": "[***] 钥匙",
    "/ sec ]": "/秒]",
    "Burst": "爆裂",
    "chance": "机会",
    "enchant progress\n        [": "附魔进度\n [",
    "Has a chance to clear a mine level, instantly giving mining cycles (the number of mining cycles is equal to mine size).": "有几率清除一个矿山层，立即给予采矿周期（采矿周期数等于矿山大小）。",
    "Has a chance to dramatically increase mining speed for 3 seconds (speed based on mine size).": "有机会显着提高采矿速度 3 秒（速度取决于矿山大小）。",
    "Has a chance to give orbs based on mine quality.": "有机会根据矿山质量给予宝珠。",
    "Has a chance to increase a random mining upgrade level by 1.": "有机会使随机采矿升级等级提高 1 级。",
    "Increases the quality of your mine, which increases the effect of many enchants below.": "提高矿山的质量，从而提高下方许多附魔的效果。",
    "Increases your mine size, which increases the effect of many enchants below..": "增加矿山的大小，从而增加下面许多附魔的效果。",
    "Lightning Blast": "闪电冲击",
    "Mine Quality": "矿山质量",
    "Mine Size": "矿山规模",
    "Orb Rush": "宝珠冲刺",
    "quality rating": "质量评级",
    "Scavenger": "清道夫",
    "tiles": "瓷砖",
    "Convert Keys Into Slurry": "将钥匙转换为浆料",
    "Converts all keys into key slurry.": "将所有钥匙转换为钥匙浆料。",
    "You will gain": "你将得到",
    "slurry.": "浆料。",
    "[***] Key Finder": "[***] 钥匙查找器",
    "Challenge 1: Rusty": "挑战一：生锈",
    "Challenge 2: Clicker Hell": "挑战 2：点击地狱",
    "challenge points": "挑战点数",
    "Each time your mine collects gems, your mine speed is decreased by 0.01% (multiplicatively).": "每次您的矿山收集宝石时，您的矿山速度都会降低 0.01%（乘法）。",
    "Exit": "退出",
    "THIS TAB IS NOT IMPLEMENTED YET": "此选项卡尚未实施",
    "While mining, you will occasionally find a bundle of T3 [***] keys.\nUpgrades increase progress gained towards this milestone.": "挖矿时，您偶尔会发现一捆 T3 [***] 钥匙。\n升级会增加朝着这个里程碑取得的进展。",
    "You start unable to buy upgrades. Every 20 button clicks allows you to buy 1 upgrade level.": "您开始无法购买升级。 每点击 20 次按钮，您就可以购买 1 个升级级别。",
    "[***] Key": "[***] 钥匙",
    "Concoct a potion that improves key rates for ALL keys.": "配制一种可以提高所有键的键率的药水。",
    "cost ratio": "成本比率",
    "Craft ": "制作",
    "crafts ]": "制作]",
    "Decreases the cost ratio for energized crystals.": "降低能量晶体的成本比率。",
    "Energized Crystal": "能量水晶",
    "Increases slurry gain.": "增加浆液增益。",
    "Mysterious Potion": "神秘药水",
    "Refinery": "精炼厂",
    "Rift Control": "裂缝控制",
    "seconds": "秒",
    "Skill": "技能",
    "slurry": "浆液",
    "time": "时间",
    "x craft yields]": "x制作产量]",
    "x slurry": "x 浆液",
    "x speed]": "x速度]",
    "Crafting...": "制作中...",
    "[NOT IMPLEMENTED] The precision point of the button is highlighted red. Incredible clicks that are lucky become Perfect instead.": "[未实现] 按钮的精确点以红色突出显示。 令人难以置信的幸运点击变成了完美。",
    "[PLACEHOLDER]": "[占位符]",
    "1,000 fame every": "1,000 声誉",
    "artifacts": "神器",
    "Button clicks give fame over time. [CURRENTLY DISABLED]": "随着时间的推移，按钮点击会成名。 [当前禁用]",
    "clicks": "点击次数",
    "Deadly Precision": "致命精准",
    "Fractals": "分形",
    "Increases the chance you get \"lucky\" and multiply your crystals.": "增加您获得“幸运”的机会并增加您的水晶。",
    "PLACEHOLDER": "占位符",
    "The Duck": "鸭子",
    "Time Multiplier (Everlasting)": "时间倍增器（永恒）",
    "[****] key": "[****] 钥匙",
    "[****] Key": "[****] 钥匙",
    "Crafting Yield": "制作产量",
    "\n    / sec - multiplied for each beacon path above level 10,000": "\n / 秒 - 为 10,000 级以上的每个信标路径相乘",
    "\"Clicks\" the button for you. Mine size increases crystal gain, Mine quality increases click quality.": "为您“点击”按钮。 矿井大小增加晶体增益，矿井质量增加点击质量。",
    "All non-fame mining upgrades except Lootmaster are reset. You cannot buy mining upgrades.": "除了 战利品大师 之外的所有非名望采矿升级都会重置。 您不能购买采矿升级。",
    "Artifact droprate from keys is improved.": "钥匙的神器掉落率得到改善。",
    "Artifacts": "神器",
    "artifacts.": "文物。",
    "Beacon Tools": "信标工具",
    "C1: Rusty": "C1：生锈",
    "C2: Muted": "C2：静音",
    "C3: Slowdown": "C3：减速",
    "Click the outer area of the button once to enable key-clicking.": "单击按钮的外部区域一次即可启用按键单击。",
    "Clicker Hero": "唱首歌英雄",
    "Convert Keys Into Slurry ": "将钥匙转换为浆液",
    "convert sigils": "转换符号",
    "Converting a high amount of keys into slurry will also give sigils. Increase the amount by 20% per level.": "将大量钥匙转化为浆料也会产生印记。 每级增加 20% 的数量。",
    "droprate": "掉率",
    "droprate bonus": "掉落率奖励",
    "Every time a mining cycle completes, the next one takes slightly longer. (Each completion increases the slowdown).": "每完成一个采矿周期，下一个采矿周期就会花费稍长的时间。 （每次完成都会增加减速）。",
    "Excavator": "挖掘机",
    "Gain a total of 25 trophies.": "总共获得 25 个奖杯。",
    "Gives you keys. Mine size increases key amount, mine quality increases the chance for higher tier keys.": "给你钥匙。 矿山的大小会增加钥匙的数量，矿山的质量会增加获得更高级别钥匙的机会。",
    "Increases key open droprates when using keys. Note that some drop chances are capped.": "使用钥匙时增加钥匙打开的掉落率。 请注意，某些掉落机会是有上限的。",
    "Increases the droprate for beacons (mining only).": "增加信标的掉落率（仅限采矿）。",
    "Key Boon": "钥匙恩赐",
    "Key Droprate": "钥匙掉落率",
    "key droprates": "钥匙掉落率",
    "Legendary III": "传说 III",
    "Lootmaster I and II are automatially unlocked and stay unlocked on relocate.": "战利品大师 I 和 II 会自动解锁并在重新定位时保持解锁状态。",
    "Mining and key finder progress is drastically slowed. (It gets reduced more on each completion).": "采矿和钥匙寻找进度急剧放缓。 （每次完成都会减少更多）。",
    "Multiplying artifact drop chance by": "神器掉落几率乘以",
    "Multiplying gem gain by": "将宝石增益乘以",
    "Multiplying mining speed by": "挖矿速度乘以",
    "Show purchased upgrades": "显示购买的升级",
    "Significantly improves mining drop quantity.": "显着提高采矿掉落数量。",
    "Special Slurry": "特种浆料",
    "The precision point of the button is highlighted red. Incredible clicks that are lucky become Perfect instead.": "按钮的精确点以红色突出显示。 令人难以置信的幸运点击反而变得完美。",
    "Unlock the ability to split beacons evenly across all paths, and to recall all beacons at once.": "解锁在所有路径上均匀分割信标并立即召回所有信标的能力。",
    "Unlocks challenges 1 - 3.": "解锁挑战 1 - 3。",
    "x ALL craft yields]": "x 所有工艺产量]",
    "x fame gain": "x 声誉增益",
    "About": "关于",
    "Anti-Flickering - Bar will appear as solid when enabled": "防闪烁 - 启用后栏将显示为实心",
    "Challenges": "挑战",
    "Crafting": "制作",
    "created by bejewelled, all rights reserved": "由 bejewelled 创建，保留所有权利",
    "Enable/disable activity log entries": "启用/禁用活动日志条目",
    "Mining (gems)": "采矿（宝石）",
    "Mining (key finder)": "采矿（关键发现者）",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "s": "s",
    "i": "i",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Good +": "不错 +",
    "Okay +": "一般 +",
    "Great +": "很好 +",
    "Excellent +": "优秀 +",
    "INCREDIBLE +": "不可思议 +",
    "PERFECT! +": "完美! +",
    "Multiplying global game speed by ": "将全局游戏速度乘以 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "times / sec ]": "次/秒]",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)\%$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^(.+) \[ LUCKY! x(.+) \]$/, '$1 \[ 幸运! x$2 \]'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);