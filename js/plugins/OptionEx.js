//=============================================================================
// RPG Maker MZ - OptionEx
//=============================================================================

/*:
 * @target MZ
 * @plugindesc 扩展选项场景。
 * @author nz_prism
 * @url https://github.com/nz-prism/RPG-Maker-MZ/blob/master/OptionEx/js/plugins/OptionEx.js
 *
 * @help OptionEx.js
 * ver. 1.3.1
 * 
* [历史]
 * 2021 年 2 月 28 日 1.0.0 发布
 * 03/03/2021 1.0.1 更正了默认音调故障并校准了窗口
 *                  高度。
 * 03/05/2021 1.0.2 修复了未使用冲刺速度或快速消息时的错误。
 * 04/05/2021 1.1.0 添加了开关 A/B 按钮和插件参数以禁用
 * 标准项目。
 * 06/22/2021 1.2.0 添加了几个参数并使其与子兼容
 *                  文件夹。
 * 07/06/2021 1.2.1 支持 RMMZ 1.3.2 的子文件夹改进
 * 02/20/2022 1.2.2 支持 NovelGameUI.js
 * 2022 年 2 月 21 日 1.2.3 改进了与其他提供选项的插件的冲突。
 * 2022 年 2 月 24 日 1.3.0 添加了一个插件参数以降低窗口下方
 * 按钮并重写此描述。
 * 03/03/2022 1.3.1 已修复以反映新游戏的默认值。
 *
 * 这个插件扩展了选项场景。
 *功能不仅包括更改选项窗口化妆品
 * 并为某些选项放置仪表，例如体积，但也添加新的
 * 选项项目；
 *
 * 1. 切换 A/B 按钮
 * 2. 快速留言
 * 3. 冲刺速度
 * 4. 视窗皮肤
 * 5. 窗口颜色
 * 6. 窗口不透明度
 *
 * 它还添加了一个按钮以将所有选项值重置为默认值。
 * 对于数字和仪表选项，玩家可以使用向上/向下翻页按钮
 *（触摸 UI 按钮可用）以极大地改变值。对于仪表，
 *玩家可以拖动/滑动来更改值。
 * 您可以选择是否启用每个选项。
 *
 * 关于尺寸/位置有几个插件参数
 * 选项窗口。如果选项项目由于太多而无法放入窗口中
 * 项目，尝试更改它们的值。 “选项高度”是高度
 * 每个项目。通过降低该值，您可以增加可见的数量
 * 项目。如果项目的文本超过矩形，降低“字体大小”，
 * 也。 “默认命令偏移量”是最下方项目和最下方项目之间的距离
 * 重置为默认按钮。通过设置“在按钮下放置选项窗口”
 * true，窗口将放置在触摸 UI 按钮区域下方。如果是这样，则
 * 窗口高度会变小。然后，尝试将上面的参数降低到
 * 使所有项目可见。
 *
 * 如果设置了插件参数“Hide Touch UI Option for Mobile Devices”
 * true（默认为true），“Touch UI”选项不会出现在
 * 平板电脑/智能手机。它可以防止玩家无意中出现的问题
 * 将选项设置为 OFF，菜单按钮消失，需要 2 指点击
 * 调用菜单，这对玩家来说并不出名。
 *
 * 1. 切换 A/B 按钮
 * 如果打开，游戏手柄的 OK/Cancel 按钮将被交换。如果插件
 * 参数“如果游戏手柄未连接，则隐藏开关 A/B 按钮”设置为 true
 *（默认为true），未连接游戏手柄时不会出现此选项。
 *
 * 2. 快速留言
 * 如果打开，文本会立即出现在消息窗口中。
 *
 * 3. 冲刺速度
 * 可以选择 3 种速度。 “1”与 MZ 默认速度相同。
 *
 * 4. 视窗皮肤
 * 提供替代的windowskins。要使用此选项，请添加窗口图像
 * 文件（最初是“Window.png”，但任何文件名都可以接受）到
 * img/系统文件夹。然后，将它们添加到插件参数“Windowskin
 * Images"。如果参数只有一个图像文件，则该选项项没有
 * 出现。
 *
 * 5. 窗口颜色
 * 改变窗户的色调。仪表已放置，玩家可以
 *拖动/滑动仪表。
 *
 * 6. 窗口不透明度
 * 更改窗口的不透明度。仪表已放置，玩家可以
 *拖动/滑动仪表。
 *
 *
 * 这个插件是在 MIT 许可下发布的。
 * https://opensource.org/licenses/mit-license.php
 *
 *
 * @param placeWindowUnderButtonArea
 * @text 在按钮下放置选项窗口
 * @desc 指定选项窗口是否放置在 UI 按钮下方。
 * @default false
 * @type boolean
 * 
 * @param windowWidth
 * @text 选项窗口宽度
 * @desc 指定选项窗口的宽度。
 * @default 560
 * @type number
 * @min 400
 * @max 3840
 * 
 * @param itemHeight
 * @text 选项项目高度
 * @desc 指定各个选项的高度。
 * @default 28
 * @type number
 * @min 8
 * @max 64
 * 
 * @param fontSize
 * @text 字体大小
 * @desc 指定选项窗口的字体大小。
 * @default 23
 * @type number
 * @min 8
 * @max 48
 * 
 * @param defaultCommandOffset
 * @text 默认命令偏移
 * @desc 指定要重置为默认值的命令的 Y 轴偏移量。
 * @default 12
 * @type number
 * @min 0
 * @max 36
 * 
 * @param titleColor
 * @text 选项名称颜色
 * @desc 为每个选项名称指定颜色。
 * @default 6
 * @type number
 * @min 0
 * @max 31
 * 
 * @param alwaysDash
 * @text 总是冲刺
 * @desc 总是冲刺 选项的设置。
 * 
 * @param useAlwaysDash
 * @text 使用总是冲刺
 * @desc 指定以启用切换自动总是冲刺的选项。
 * @parent alwaysDash
 * @default true
 * @type boolean
 * 
 * @param defaultAlwaysDash
 * @text 默认总是冲刺
 * @desc 总是冲刺 选项的默认值。
 * @parent alwaysDash
 * @default false
 * @type boolean
 * 
 * @param commandRemember
 * @text 命令记住
 * @desc 命令记住选项的设置。
 * 
 * @param useCommandRemember
 * @text 使用命令记住
 * @desc 指定启用切换命令记住的选项。
 * @parent commandRemember
 * @default true
 * @type boolean
 * 
 * @param defaultCommandRemember
 * @text 默认命令记住
 * @desc 命令记住选项的默认值。
 * @parent commandRemember
 * @default false
 * @type boolean
 * 
 * @param touchUI
 * @text 触控界面
 * @desc 触控界面 选项的设置。
 * 
 * @param useTouchUI
 * @text 使用触控 UI
 * @desc 指定以启用切换触摸 UI 的选项。
 * @parent touchUI
 * @default true
 * @type boolean
 * 
 * @param hideTouchUIForMobiles
 * @text 隐藏移动设备的触控 UI 选项
 * @desc 如果玩家使用智能手机或平板电脑，指定隐藏“触摸 UI”选项。
 * @parent touchUI
 * @default true
 * @type boolean
 * 
 * @param defaultTouchUI
 * @text 默认触控 UI
 * @desc 触摸 UI 选项的默认值。
 * @parent touchUI
 * @default true
 * @type boolean
 * 
 * @param volumes
 * @text 音量选项
 * @desc 音量选项的设置。
 * 
 * @param useBgmVolume
 * @text 使用BGM音量
 * @desc 指定启用选项以调整 BGM 音量。
 * @parent volumes
 * @default true
 * @type boolean
 * 
 * @param useBgsVolume
 * @text 使用 BGS 音量
 * @desc 指定启用选项以调整 BGS 音量。
 * @parent volumes
 * @default true
 * @type boolean
 * 
 * @param useMeVolume
 * @text 使用 ME 音量
 * @desc 指定启用选项以调整 ME 音量。
 * @parent volumes
 * @default true
 * @type boolean
 * 
 * @param useSeVolume
 * @text 使用 SE 音量
 * @desc 指定启用选项以调整 SE 音量。
 * @parent volumes
 * @default true
 * @type boolean
 * 
 * @param defaultVolume
 * @text 默认音量
 * @desc 指定 BGM、BGS、ME 和 SE 的默认音量。
 * @parent volumes
 * @default 75
 * @type number
 * @min 0
 * @max 100
 * 
 * @param switchABButtons
 * @text 切换 A/B 按钮
 * @desc 切换 A/B 按钮 选项的设置。
 * 
 * @param useSwitchABButtons
 * @text 使用切换 A/B 按钮
 * @desc 指定以启用切换 A/B 按钮的选项。
 * @parent switchABButtons
 * @default true
 * @type boolean
 * 
 * @param hideSwitchABButtonsIfGamepadUnconnected
 * @text 如果游戏手柄未连接，则隐藏开关 A/B 按钮
 * @desc 指定在未连接游戏手柄时隐藏切换 A/B 按钮的选项。
 * @parent switchABButtons
 * @default true
 * @type boolean
 * 
 * @param switchABButtonsName
 * @text 切换 A/B 按钮名称
 * @desc 指定切换 A/B 按钮的选项名称。
 * @parent switchABButtons
 * @default Switch A/B Buttons
 * @type string
 * 
 * @param defaultSwitchABButtons
 * @text 默认切换 A/B 按钮
 * @desc 切换 A/B 按钮选项的默认值。
 * @parent switchABButtons
 * @default false
 * @type boolean
 * 
 * @param fastMessage
 * @text 快速发送消息
 * @desc 快速消息选项的设置。
 * 
 * @param useFastMessage
 * @text 使用快速消息
 * @desc 指定启用选项以立即显示消息。
 * @parent fastMessage
 * @default true
 * @type boolean
 * 
 * @param fastMessageName
 * @text 快速消息名称
 * @desc 指定选项的名称以立即显示消息。
 * @parent fastMessage
 * @default 快速信息
 * @type string
 * 
 * @param defaultFastMessage
 * @text 默认快速消息
 * @desc 快速消息选项的默认值。
 * @parent fastMessage
 * @default false
 * @type boolean
 * 
 * @param dashSpeed
 * @text 移动速度
 * @desc Dash Speed 选项的设置。
 * 
 * @param useDashSpeed
 * @text 使用移动速度
 * @desc 指定以启用更改玩家冲刺速度的选项。
 * @parent dashSpeed
 * @default true
 * @type boolean
 * 
 * @param dashSpeedName
 * @text 冲刺速度名称
 * @desc 指定选项名称以更改玩家冲刺速度。
 * @parent dashSpeed
 * @default 冲刺速度
 * @type string
 * 
 * @param defaultDashSpeed
 * @text 默认速度
 * @desc 指定 dash-speed (0-2) 的默认值。 请注意，它在屏幕上显示为 +1。
 * @parent dashSpeed
 * @default 0
 * @type number
 * @min 0
 * @max 2
 * 
 * @param windowskin
 * @text 视窗皮肤
 * @desc Windowskin 选项的设置。
 * 
 * @param useWindowskin
 * @text 使用 视窗皮肤
 * @desc 指定以启用更改窗口皮肤的选项。
 * @parent windowskin
 * @default true
 * @type boolean
 * 
 * @param windowskinName
 * @text 视窗名称
 * @desc 指定更改窗口皮肤的选项的名称。
 * @parent windowskin
 * @default Windowskin
 * @type string
 * 
 * @param windowskins
 * @text 视窗皮肤图像
 * @desc 添加您希望用户选择的任意数量的 windowskin 文件。
 * @parent windowskin
 * @default ["Window"]
 * @type file[]
 * @dir img/system
 * 
 * @param windowTone
 * @text 窗口颜色
 * @desc 窗口颜色选项的设置。
 * 
 * @param useWindowTone
 * @text 使用窗口颜色
 * @desc 指定启用选项以更改窗口色调。
 * @parent windowTone
 * @default true
 * @type boolean
 * 
 * @param windowToneRedName
 * @text 窗口颜色 红色 名称
 * @desc 指定选项名称以更改窗口的红色值。
 * @parent windowTone
 * @default 窗口颜色 R
 * @type string
 * 
 * @param windowToneGreenName
 * @text 窗口颜色 绿色 名称
 * @desc 指定选项名称以更改窗口的绿色值。
 * @parent windowTone
 * @default 窗口颜色 G
 * @type string
 * 
 * @param windowToneBlueName
 * @text 窗口颜色 蓝色 名称
 * @desc 指定选项名称以更改窗口的蓝色值。
 * @parent windowTone
 * @default 窗口颜色 B
 * @type string
 * 
 * @param windowOpacity
 * @text 窗口不透明度
 * @desc 窗口不透明度选项的设置。
 * 
 * @param useWindowOpacity
 * @text 使用窗口不透明度
 * @desc 指定以启用更改窗口不透明度的选项。
 * @parent windowOpacity
 * @default true
 * @type boolean
 * 
 * @param windowOpacityName
 * @text 窗口不透明度名称
 * @desc 指定用于更改窗口不透明度的选项的名称。
 * @parent windowOpacity
 * @default 窗口不透明度
 * @type string
 * 
 * @param defaultWindowOpacity
 * @text 默认窗口不透明度
 * @desc 窗口不透明度的默认值。 如果您的 RMMV 版本是 1.3.0 或更高版本，则不必指定它。
 * @parent windowOpacity
 * @default 195
 * @type number
 * @min 0
 * @max 255
 * 
 * @param defaultCommandName
 * @text 默认命令名称
 * @desc 指定要重置为默认值的命令的名称。
 * @default 重置为默认
 * @type string
 * 
 */

/*:ja
 * @target MZ
 * @plugindesc オプション画面を拡張します。
 * @author nz_prism
 * @url https://github.com/nz-prism/RPG-Maker-MZ/blob/master/OptionEx/js/plugins/OptionEx.js
 *
 * @help OptionEx.js
 * ver. 1.3.1
 * 
 * [バージョン履歴]
 * 2021/02/28 1.0.0 リリース
 * 2021/03/03 1.0.1 Wカラーデフォルト値に関するバグ修正、ウィンドウ高さの微調整
 * 2021/03/05 1.0.2 ダッシュ速度やメッセージ瞬間表示が不使用の場合のバグを修正
 * 2021/04/05 1.1.0 A/Bボタン入れ替え機能、標準項目不使用設定追加
 * 2021/06/22 1.2.0 プラグインパラメータ多数追加、本体バージョン1.3.0以降のサブ
 *                  フォルダへの格納に対応
 * 2021/07/06 1.2.1 本体バージョン1.3.2のサブフォルダ機能改善に対応
 * 2022/02/20 1.2.2 NovelGameUI.jsに対応
 * 2022/02/21 1.2.3 オプション系他プラグインとの競合回避を強化
 * 2022/02/24 1.3.0 ボタンよりも下にウィンドウを配置するプラグインパラメータを
 *                  追加、説明文追記
 * 2022/03/03 1.3.1 ニューゲームにデフォルト値を反映するように修正
 * 
 * このプラグインは、オプション画面にさまざまな機能を追加します。
 * オプション画面の外観の変更や音量等のオプションに対するゲージの描画だけでな
 * く、以下のオプション項目の追加機能もあります。
 * 
 * 1. A/Bボタン入れ替え
 * 2. メッセージ瞬間表示
 * 3. ダッシュ速度
 * 4. ウィンドウスキン
 * 5. ウィンドウカラー
 * 6. ウィンドウ不透明度
 * 
 * すべてのオプション項目の値をデフォルト値に戻すボタンも追加されます。
 * 数値・ゲージ系項目ではPageup・Pagedownボタンで大きく値を変更できます（タッチ
 * UI用ボタンも用意されています）。またゲージ系項目では、マウスでドラッグ、ある
 * いはスワイプ操作でも値を操作できます。
 * すべてのオプション項目は使用するかどうかを個別に設定できます。
 * 
 * ウィンドウの大きさや配置に関するプラグインパラメータが多数用意されています。
 * 数が多すぎる等の理由でウィンドウ内に項目が収まらない場合、これらのパラメータ
 * を調整してみてください。「オプション項目高さ」は項目ごとの高さです。この値を
 * 小さくすることにより、ウィンドウ内に描画される項目の数を増やすことができま
 * す。この値を下げたことにより文字がはみ出してしまう場合、「フォントサイズ」の
 * 値も下げてください。「デフォルトコマンドオフセット」はデフォルト値に戻すボ
 * タンを一番下のオプションから下に離す距離です。「オプションウィンドウをボタン
 * より下に配置」はタッチUI用のキャンセルボタン等のボタンが描画される領域よりも
 * ウィンドウの位置を下げるかどうかのオプションです。これをオンにするとウィンド
 * ウ高さがその分小さくなるので、上記パラメータの値を下げて調整してください。
 * 
 * プラグインパラメータ「タッチデバイスでのタッチUIオプションの非表示」をオンに
 * すると（デフォルトはオンです）、タブレットやスマートフォンなどのデバイスでの
 * 実行時「タッチUI」オプションが表示されなくなります。これは誤ってこのオプショ
 * ンをオフにしてしまうと、二本指タップでしかメニューが表示できなくなってしまう
 * ことを防ぐための機能です。
 * 
 * 1. A/Bボタン入れ替え
 * オンにするとゲームパッドの決定ボタンとキャンセルボタンの割り当てが入れ替わり
 * ます。プラグインパラメータ「ゲームパッド未接続時ABボタン入れ替えオプションの
 * 非表示」をオンにすると（デフォルトはオンです）ゲームパッド未接続時、このオプ
 * ション項目が表示されなくなります。
 * 
 * 2. メッセージ瞬間表示
 * オンにするとメッセージが瞬間的に表示されるようになります。
 * 
 * 3. ダッシュ速度
 * ダッシュ時の速度を３段階から選択できます。「1」がツクールデフォルトと同じ速
 * 度です。
 * 
 * 4. ウィンドウスキン
 * 別のウィンドウスキンに変更することができるオプションです。使用するにはまず
 * img/systemフォルダにウィンドウ画像（Window.png）を追加してください（ファイル
 * 名は任意）。続いてファイルプラグインパラメータ「ウィンドウスキン画像」にそれ
 * らの画像を追加してください。なおこのオプションは上記パラメータに2つ以上の画
 * 像ファイルが追加されていない場合表示されません。
 * 
 * 5. ウィンドウカラー
 * ウィンドウの色調を変更するためのオプションです。ゲージが表示され、ドラッグや
 * スワイプでゲージ操作が可能です。
 * 
 * 6. ウィンドウ不透明度
 * ウィンドウの不透明度を変更するためのオプションです。ゲージが表示され、ドラッ
 * グやスワイプでゲージ操作が可能です。
 * 
 * 
 * このプラグインはMITライセンスにてリリースされています。
 * https://opensource.org/licenses/mit-license.php
 *
 *
 * @param placeWindowUnderButtonArea
 * @text オプションウィンドウをボタンより下に配置
 * @desc UIボタン類よりも下にオプションウィンドウを配置するかどうかを設定してください。
 * @default false
 * @type boolean
 * 
 * @param windowWidth
 * @text オプションウィンドウ幅
 * @desc オプションウィンドウの幅を設定してください。
 * @default 560
 * @type number
 * @min 400
 * @max 3840
 * 
 * @param itemHeight
 * @text オプション項目高さ
 * @desc オプション項目の高さを設定してください。
 * @default 28
 * @type number
 * @min 8
 * @max 64
 * 
 * @param fontSize
 * @text フォントサイズ
 * @desc オプション画面のフォントサイズを設定してください。
 * @default 23
 * @type number
 * @min 8
 * @max 48
 * 
 * @param defaultCommandOffset
 * @text デフォルトコマンドオフセット
 * @desc デフォルトに戻すコマンドをY座標にずらす値を設定してください。
 * @default 12
 * @type number
 * @min 0
 * @max 36
 * 
 * @param titleColor
 * @text 項目名文字色
 * @desc オプションの項目名を描画する色番号を設定してください。
 * @default 6
 * @type number
 * @min 0
 * @max 31
 * 
 * @param alwaysDash
 * @text 常時ダッシュ
 * @desc 常時ダッシュオプションに関する設定です。
 * 
 * @param useAlwaysDash
 * @text 常時ダッシュの使用
 * @desc 常時ダッシュオプションを使用するかどうかを設定してください。
 * @parent alwaysDash
 * @default true
 * @type boolean
 * 
 * @param defaultAlwaysDash
 * @text デフォルト常時ダッシュ
 * @desc 常時ダッシュのデフォルト値です。
 * @parent alwaysDash
 * @default false
 * @type boolean
 * 
 * @param commandRemember
 * @text コマンド記憶
 * @desc コマンド記憶オプションに関する設定です。
 * 
 * @param useCommandRemember
 * @text コマンド記憶の使用
 * @desc コマンド記憶オプションを使用するかどうかを設定してください。
 * @parent commandRemember
 * @default true
 * @type boolean
 * 
 * @param defaultCommandRemember
 * @text デフォルトコマンド記憶
 * @desc コマンド記憶のデフォルト値です。
 * @parent commandRemember
 * @default false
 * @type boolean
 * 
 * @param touchUI
 * @text タッチUI
 * @desc タッチUIオプションに関する設定です。
 * 
 * @param useTouchUI
 * @text タッチUIの使用
 * @desc タッチUIオプションを使用するかどうかを設定してください。
 * @parent touchUI
 * @default true
 * @type boolean
 * 
 * @param hideTouchUIForMobiles
 * @text タッチデバイスでのタッチUIオプションの非表示
 * @desc タッチUIオプションをスマートフォンやタブレットにて非表示にするかどうかを設定してください。
 * @parent touchUI
 * @default true
 * @type boolean
 * 
 * @param defaultTouchUI
 * @text デフォルトタッチUI
 * @desc タッチUIのデフォルト値です。
 * @parent touchUI
 * @default true
 * @type boolean
 * 
 * @param volumes
 * @text 音量
 * @desc 音量オプションに関する設定です。
 * 
 * @param useBgmVolume
 * @text BGM音量の使用
 * @desc BGM音量オプションを使用するかどうかを設定してください。
 * @parent volumes
 * @default true
 * @type boolean
 * 
 * @param useBgsVolume
 * @text BGS音量の使用
 * @desc BGS音量オプションを使用するかどうかを設定してください。
 * @parent volumes
 * @default true
 * @type boolean
 * 
 * @param useMeVolume
 * @text ME音量の使用
 * @desc ME音量オプションを使用するかどうかを設定してください。
 * @parent volumes
 * @default true
 * @type boolean
 * 
 * @param useSeVolume
 * @text SE音量の使用
 * @desc SE音量オプションを使用するかどうかを設定してください。
 * @parent volumes
 * @default true
 * @type boolean
 * 
 * @param defaultVolume
 * @text デフォルト音量
 * @desc 音量のデフォルト値です。BGM、BGS、ME、SE全て共通です。
 * @parent volumes
 * @default 75
 * @type number
 * @min 0
 * @max 100
 * 
 * @param switchABButtons
 * @text A/Bボタン入れ替え
 * @desc A/Bボタン入れ替えオプションに関する設定です。
 * 
 * @param useSwitchABButtons
 * @text A/Bボタン入れ替えの使用
 * @desc A/Bボタン入れ替えオプションを使用するかどうかを設定してください。
 * @parent switchABButtons
 * @default true
 * @type boolean
 * 
 * @param hideSwitchABButtonsIfGamepadUnconnected
 * @text ゲームパッド未接続時ABボタン入れ替えオプションの非表示
 * @desc ゲームパッド未接続時、ABボタン入れ替えオプションを非表示にするかどうかを設定してください。
 * @parent switchABButtons
 * @default true
 * @type boolean
 * 
 * @param switchABButtonsName
 * @text A/Bボタン入れ替え名
 * @desc A/Bボタン入れ替えの表示名を設定してください。
 * @parent switchABButtons
 * @default A/Bボタン入れ替え
 * @type string
 * 
 * @param defaultSwitchABButtons
 * @text デフォルトA/Bボタン入れ替え
 * @desc A/Bボタン入れ替えのデフォルト値です。
 * @parent switchABButtons
 * @default false
 * @type boolean
 * 
 * @param fastMessage
 * @text メッセージ瞬間表示
 * @desc メッセージ瞬間表示オプションに関する設定です。
 * 
 * @param useFastMessage
 * @text メッセージ瞬間表示の使用
 * @desc メッセージ瞬間表示オプションを使用するかどうかを設定してください。
 * @parent fastMessage
 * @default true
 * @type boolean
 * 
 * @param fastMessageName
 * @text メッセージ瞬間表示名
 * @desc メッセージ瞬間表示の表示名を設定してください。
 * @parent fastMessage
 * @default メッセージ瞬間表示
 * @type string
 * 
 * @param defaultFastMessage
 * @text デフォルトメッセージ瞬間表示
 * @desc メッセージ瞬間表示のデフォルト値です。
 * @parent fastMessage
 * @default false
 * @type boolean
 * 
 * @param dashSpeed
 * @text ダッシュ速度
 * @desc ダッシュ速度オプションに関する設定です。
 * 
 * @param useDashSpeed
 * @text ダッシュ速度の使用
 * @desc ダッシュ速度オプションを使用するかどうかを設定してください。
 * @parent dashSpeed
 * @default true
 * @type boolean
 *  
 * @param dashSpeedName
 * @text ダッシュ速度名
 * @desc ダッシュ速度の表示名を設定してください。
 * @parent dashSpeed
 * @default ダッシュ速度
 * @type string
 * 
 * @param defaultDashSpeed
 * @text デフォルトダッシュ速度
 * @desc ダッシュ速度のデフォルト値（0〜2）です。ゲーム内表示では +1 される点にご注意ください。
 * @parent dashSpeed
 * @default 0
 * @type number
 * @min 0
 * @max 2
 * 
 * @param windowskin
 * @text ウィンドウスキン
 * @desc ウィンドウスキンオプションに関する設定です。
 * 
 * @param useWindowskin
 * @text ウィンドウスキンの使用
 * @desc ウィンドウスキンオプションを使用するかどうかを設定してください。
 * @parent windowskin
 * @default true
 * @type boolean
 * 
 * @param windowskinName
 * @text ウィンドウスキン名
 * @desc ウィンドウスキンの表示名を設定してください。
 * @parent windowskin
 * @default ウィンドウスキン
 * @type string
 * 
 * @param windowskins
 * @text ウィンドウスキン画像
 * @desc オプションで選択可能にするウィンドウスキンを必要なだけ追加してください。一番上のものがデフォルトです。
 * @parent windowskin
 * @default ["Window"]
 * @type file[]
 * @dir img/system
 * 
 * @param windowTone
 * @text ウィンドウカラー
 * @desc ウィンドウカラーオプションに関する設定です。
 * @default true
 * @type boolean
 * 
 * @param useWindowTone
 * @text ウィンドウカラーの使用
 * @desc ウィンドウカラーオプションを使用するかどうかを設定してください。
 * @parent windowTone
 * @default true
 * @type boolean
 * 
 * @param windowToneRedName
 * @text ウィンドウカラー（赤）名
 * @desc ウィンドウカラー（赤）の表示名を設定してください。
 * @parent windowTone
 * @default ウィンドウカラーR
 * @type string
 * 
 * @param windowToneGreenName
 * @text ウィンドウカラー（緑）名
 * @desc ウィンドウカラー（緑）の表示名を設定してください。
 * @parent windowTone
 * @default ウィンドウカラーG
 * @type string
 * 
 * @param windowToneBlueName
 * @text ウィンドウカラー（青）名
 * @desc ウィンドウカラー（青）の表示名を設定してください。
 * @parent windowTone
 * @default ウィンドウカラーB
 * @type string
 * 
 * @param windowOpacity
 * @text ウィンドウ不透明度
 * @desc ウィンドウ不透明度オプションに関する設定です。
 * 
 * @param useWindowOpacity
 * @text ウィンドウ不透明度の使用
 * @desc ウィンドウ不透明度オプションを使用するかどうかを設定してください。
 * @parent windowOpacity
 * @default true
 * @type boolean
 * 
 * @param windowOpacityName
 * @text ウィンドウ不透明度名
 * @desc ウィンドウ不透明度の表示名を設定してください（高いほど透明でなくなることに注意）。
 * @parent windowOpacity
 * @default ウィンドウ透明度
 * @type string
 * 
 * @param defaultWindowOpacity
 * @text デフォルトウィンドウ不透明度
 * @desc ウィンドウ不透明度のデフォルト値です。本体バージョン1.3.0以降の場合設定不要です。
 * @parent windowOpacity
 * @default 195
 * @type number
 * @min 0
 * @max 255
 * 
 * @param defaultCommandName
 * @text デフォルトコマンド名
 * @desc 全てをデフォルト値に戻すコマンドの名前を設定してください。
 * @default すべてデフォルトに戻す
 * @type string
 * 
 */

(() => {
    'use strict';
    const PLUGIN_NAME = "OptionEx";

    const pluginParams = PluginManager.parameters(PLUGIN_NAME);
    
    const PLACE_WINDOW_UNDER_BUTTON_AREA = pluginParams.placeWindowUnderButtonArea === "true";
    const WINDOW_WIDTH = Number(pluginParams.windowWidth);
    const ITEM_HEIGHT = Number(pluginParams.itemHeight);
    const FONT_SIZE = Number(pluginParams.fontSize);
    const DEFAULT_COMMAND_OFFSET = Number(pluginParams.defaultCommandOffset);
    const TITLE_COLOR = Number(pluginParams.titleColor);

    const HIDE_TOUCH_UI_FOR_MOBILES = pluginParams.hideTouchUIForMobiles === "true";
    const HIDE_SWITCH_AB_BUTTONS_IF_GAMEPAD_UNCONNECTED = pluginParams.hideSwitchABButtonsIfGamepadUnconnected === "true";

    const WINDOWSKINS = JSON.parse(pluginParams.windowskins);

    const USE_ALWAYS_DASH = pluginParams.useAlwaysDash === "true";
    const USE_COMMAND_REMEMBER = pluginParams.useCommandRemember === "true";
    const USE_TOUCH_UI = pluginParams.useTouchUI === "true";
    const USE_BGM_VOLUME = pluginParams.useBgmVolume === "true";
    const USE_BGS_VOLUME = pluginParams.useBgsVolume === "true";
    const USE_ME_VOLUME = pluginParams.useMeVolume === "true";
    const USE_SE_VOLUME = pluginParams.useSeVolume === "true";
    
    const USE_SWITCH_AB_BUTTONS = pluginParams.useSwitchABButtons === "true";
    const USE_FAST_MESSAGE = pluginParams.useFastMessage === "true";
    const USE_DASH_SPEED = pluginParams.useDashSpeed === "true";
    const USE_WINDOWSKIN = pluginParams.useWindowskin === "true";
    const USE_WINDOW_TONE = pluginParams.useWindowTone === "true";
    const USE_WINDOW_OPACITY = pluginParams.useWindowOpacity === "true";

    const SWITCH_AB_BUTTONS_NAME = pluginParams.switchABButtonsName;
    const FAST_MESSAGE_NAME = pluginParams.fastMessageName;
    const DASH_SPEED_NAME = pluginParams.dashSpeedName;
    const WINDOWSKIN_NAME = pluginParams.windowskinName;
    const WINDOW_TONE_RED_NAME = pluginParams.windowToneRedName;
    const WINDOW_TONE_GREEN_NAME = pluginParams.windowToneGreenName;
    const WINDOW_TONE_BLUE_NAME = pluginParams.windowToneBlueName;
    const WINDOW_OPACITY_NAME = pluginParams.windowOpacityName;
    const DEFAULT_COMMAND_NAME = pluginParams.defaultCommandName;

    const DEFAULT_VOLUME = Number(pluginParams.defaultVolume);
    const DEFAULT_ALWAYS_DASH = pluginParams.defaultAlwaysDash === "true";
    const DEFAULT_COMMAND_REMEMBER = pluginParams.defaultCommandRemember === "true";
    const DEFAULT_TOUCH_UI = pluginParams.defaultTouchUI === "true";
    const DEFAULT_SWITCH_AB_BUTTONS = pluginParams.defaultSwitchABButtons === "true";
    const DEFAULT_FAST_MESSAGE = pluginParams.defaultFastMessage === "true";
    const DEFAULT_DASH_SPEED = Number(pluginParams.defaultDashSpeed);
    const DEFAULT_WINDOW_OPACITY = Number(pluginParams.defaultWindowOpacity);
    

    ConfigManager.switchABButtons = false;
    ConfigManager.fastMessage = false;
    ConfigManager.dashSpeed = 0;
    ConfigManager.windowskin = 0;
    ConfigManager.windowToneRed = 0;
    ConfigManager.windowToneGreen = 0;
    ConfigManager.windowToneBlue = 0;
    ConfigManager.windowOpacity = 195;

    ConfigManager.load = function() {
        StorageManager.loadObject("config")
            .then(config => this.applyData(config || {}))
            .catch(() => {
                this.applyData({});
                return 0;
            })
            .then(() => {
                this._isLoaded = true;
                return 0;
            })
            .catch(() => 0);
    };

    const _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        const config = _ConfigManager_makeData.call(this);
        config.switchABButtons = this.switchABButtons;
        config.fastMessage = this.fastMessage;
        config.dashSpeed = this.dashSpeed;
        config.windowskin = this.windowskin;
        config.windowToneRed = this.windowToneRed;
        config.windowToneGreen = this.windowToneGreen;
        config.windowToneBlue = this.windowToneBlue;
        config.windowOpacity = this.windowOpacity;
        return config;
    };

    const _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        _ConfigManager_applyData.call(this, config);
        const tone = $dataSystem.windowTone;
        const opacity = $dataSystem.advanced.windowOpacity ?? DEFAULT_WINDOW_OPACITY;
        this.alwaysDash = this.readFlag(config, "alwaysDash", DEFAULT_ALWAYS_DASH);
        this.commandRemember = this.readFlag(config, "commandRemember", DEFAULT_COMMAND_REMEMBER);
        this.touchUI = this.readFlag(config, "touchUI", DEFAULT_TOUCH_UI);
        this.switchABButtons = this.readFlag(config, "switchABButtons", DEFAULT_SWITCH_AB_BUTTONS);
        this.fastMessage = this.readFlag(config, "fastMessage", DEFAULT_FAST_MESSAGE);
        this.dashSpeed = this.readNumber(config, "dashSpeed", 2, DEFAULT_DASH_SPEED);
        this.windowskin = this.readNumber(config, "windowskin", WINDOWSKINS.length-1, 0);
        this.windowToneRed = this.readTone(config, "windowToneRed", tone[0]);
        this.windowToneGreen = this.readTone(config, "windowToneGreen", tone[1]);
        this.windowToneBlue = this.readTone(config, "windowToneBlue", tone[2]);
        this.windowOpacity = this.readNumber(config, "windowOpacity", 255, opacity);
    };

    ConfigManager.readNumber = function(config, name, maxValue, defaultValue) {
        if (name in config) {
            return Number(config[name]).clamp(0, maxValue);
        } else {
            return defaultValue;
        }
    };

    ConfigManager.readTone = function(config, name, defaultValue) {
        if (name in config) {
            return Number(config[name]).clamp(-255, 255);
        } else {
            return defaultValue;
        }
    };

    ConfigManager.readVolume = function(config, name) {
        if (name in config) {
            return Number(config[name]).clamp(0, 100);
        } else {
            return DEFAULT_VOLUME;
        }
    };

    ConfigManager.windowTone = function() {
        return [this.windowToneRed, this.windowToneGreen, this.windowToneBlue, 0];
    };

    ConfigManager.useTouchUI = function() {
        return USE_TOUCH_UI && (!HIDE_TOUCH_UI_FOR_MOBILES || !Utils.isMobileDevice())
    };

    ConfigManager.useSwitchABButtons = function() {
        return USE_SWITCH_AB_BUTTONS && (!HIDE_SWITCH_AB_BUTTONS_IF_GAMEPAD_UNCONNECTED || Input.isAnyGamepadConnected());
    };

    ConfigManager.useWindowskin = function() {
        return WINDOWSKINS.length > 1;
    };


    const defaultGamepadMapper = {...Input.gamepadMapper};
    const switchedGamepadMapper = {...Input.gamepadMapper};
    defaultGamepadMapper[0] = "ok";
    defaultGamepadMapper[1] = "cancel";
    switchedGamepadMapper[0] = "cancel";
    switchedGamepadMapper[1] = "ok";
    Input.defaultGamepadMapper = defaultGamepadMapper;
    Input.switchedGamepadMapper = switchedGamepadMapper;

    Object.defineProperty(Input, "gamepadMapper", {
        get: function() {
            return (USE_SWITCH_AB_BUTTONS && ConfigManager.switchABButtons) ? this.switchedGamepadMapper : this.defaultGamepadMapper;
        },
        set: function(value) {
            this.defaultGamepadMapper = value;
        },
    });

    Input.isAnyGamepadConnected = function() {
        if (navigator.getGamepads) {
            const gamepads = navigator.getGamepads();
            if (gamepads) return Object.values(gamepads).some(gamepad => gamepad && gamepad.connected);
        }
    };



    const _Game_System_prototype_windowTone = Game_System.prototype.windowTone;
    Game_System.prototype.windowTone = function() {
        if (USE_WINDOW_TONE) {
            if (!this._windowTone) {
                const tone = $dataSystem.windowTone;
                const red = ConfigManager.windowToneRed ?? tone[0];
                const green = ConfigManager.windowToneGreen ?? tone[1];
                const blue = ConfigManager.windowToneBlue ?? tone[2];
                this._windowTone = [red, green, blue, tone[3]];
            }
            return this._windowTone;
        } else {
            return _Game_System_prototype_windowTone.call(this);
        }
    };


    const _Game_Player_prototype_realMoveSpeed = Game_Player.prototype.realMoveSpeed;
    Game_Player.prototype.realMoveSpeed = function() {
        if (USE_DASH_SPEED) {
            if (this.isDashing()) {
                const speed = ConfigManager.dashSpeed;
                return this._moveSpeed + (speed ? speed + 1 : 1);
            } else {
                return this._moveSpeed;
            }
        } else {
            return _Game_Player_prototype_realMoveSpeed.call(this);
        }
    };


    Scene_Options.prototype.optionsWindowRect = function() {
        const n = Math.min(this.maxCommands(), this.maxVisibleCommands());
        const ww = WINDOW_WIDTH;
        const wh = this.calcWindowHeight(n) + DEFAULT_COMMAND_OFFSET;
        const wx = (Graphics.boxWidth - ww) / 2;
        const wy = PLACE_WINDOW_UNDER_BUTTON_AREA ? this.mainAreaTop() : (Graphics.boxHeight - wh) / 2;
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_Options.prototype.calcWindowHeight = function(numLines) {
        return Window_Options.prototype.fittingHeight(numLines);
    };

    const _Scene_Options_prototype_maxCommands = Scene_Options.prototype.maxCommands;
    Scene_Options.prototype.maxCommands = function() {
        let result = _Scene_Options_prototype_maxCommands.call(this) + 1;
        if (!USE_ALWAYS_DASH) result--;
        if (!USE_COMMAND_REMEMBER) result--;
        if (!ConfigManager.useTouchUI()) result--;
        if (!USE_BGM_VOLUME) result--;
        if (!USE_BGS_VOLUME) result--;
        if (!USE_ME_VOLUME) result--;
        if (!USE_SE_VOLUME) result--;
        if (ConfigManager.useSwitchABButtons()) result++;
        if (USE_FAST_MESSAGE) result++;
        if (USE_DASH_SPEED) result++;
        if (ConfigManager.useWindowskin()) result++;
        if (USE_WINDOW_TONE) result += 3;
        if (USE_WINDOW_OPACITY) result++;
        return result;
    };

    Scene_Options.prototype.maxVisibleCommands = function() {
        let height = Graphics.boxHeight - (DEFAULT_COMMAND_OFFSET + $gameSystem.windowPadding() * 2);
        if (PLACE_WINDOW_UNDER_BUTTON_AREA) height -= (this.buttonAreaHeight() + 4);
        return Math.floor(height / Window_Options.prototype.itemHeight());
    };

    Scene_Options.prototype.needsPageButtons = function() {
        return true;
    };

    Scene_Options.prototype.createPageButtons = function() {
        this._pageupButton = new Sprite_Button("pageup");
        this._pageupButton.x = 4;
        this._pageupButton.y = this.buttonY();
        const pageupRight = this._pageupButton.x + this._pageupButton.width;
        this._pagedownButton = new Sprite_Button("pagedown");
        this._pagedownButton.x = pageupRight + 4;
        this._pagedownButton.y = this.buttonY();
        this.addWindow(this._pageupButton);
        this.addWindow(this._pagedownButton);
        this._pageupButton.setClickHandler(this.cursorPageup.bind(this));
        this._pagedownButton.setClickHandler(this.cursorPagedown.bind(this));
    };

    Scene_Options.prototype.cursorPageup = function() {
        this._optionsWindow.cursorPageup();
    };

    Scene_Options.prototype.cursorPagedown = function() {
        this._optionsWindow.cursorPagedown();
    };


    const _Window_Base_prototype_loadWindowskin = Window_Base.prototype.loadWindowskin;
    Window_Base.prototype.loadWindowskin = function() {
        if (USE_WINDOWSKIN) {
            const index = ConfigManager.windowskin ?? 0;
            this.windowskin = ImageManager.loadSystem(WINDOWSKINS[index]);
        } else {
            _Window_Base_prototype_loadWindowskin.call(this);
        }
    };

    const _Window_Base_prototype_updateBackOpacity = Window_Base.prototype.updateBackOpacity;
    Window_Base.prototype.updateBackOpacity = function() {
        if (USE_WINDOW_OPACITY) {
            this.backOpacity = ConfigManager.windowOpacity ?? $dataSystem.advanced.windowOpacity ?? DEFAULT_WINDOW_OPACITY;
        } else {
            _Window_Base_prototype_updateBackOpacity.call(this);
        }
    };


    const _Window_Message_prototype_shouldBreakHere = Window_Message.prototype.shouldBreakHere;
    Window_Message.prototype.shouldBreakHere = function(textState) {
        if (USE_FAST_MESSAGE) {
            if (this.canBreakHere(textState)) {
                if (!(this._showFast || this._lineShowFast || ConfigManager.fastMessage)) {
                    return true;
                }
                if (this.pause || this._waitCount > 0) {
                    return true;
                }
            }
            return false;
        } else {
            return _Window_Message_prototype_shouldBreakHere.call(this, textState);
        }
    };


    const _Window_Options_prototype_initialize = Window_Options.prototype.initialize;
    Window_Options.prototype.initialize = function(rect) {
        _Window_Options_prototype_initialize.call(this, rect);
        this._touchX = 0;
        this._canRepeat = false;
    };

    Window_Options.prototype.itemWidth = function() {
        return this.contentsWidth() / 2;
    };

    Window_Options.prototype.lineHeight = function() {
        return ITEM_HEIGHT;
    };

    Window_Options.prototype.overallHeight = function() {
        return Window_Selectable.prototype.overallHeight.call(this) + DEFAULT_COMMAND_OFFSET;
    };

    Window_Options.prototype.ensureCursorVisible = function(smooth) {
        if (this._cursorAll) {
            this.scrollTo(0, 0);
        } else if (this.innerHeight > 0 && this.row() >= 0) {
            const defaultOffset = this.isDefaultSymbol(this.currentSymbol()) ? DEFAULT_COMMAND_OFFSET : 0;
            const scrollY = this.scrollY();
            const itemTop = this.row() * this.itemHeight() + defaultOffset;
            const itemBottom = itemTop + this.itemHeight() + defaultOffset;
            const scrollMin = itemBottom - this.innerHeight;
            if (scrollY > itemTop) {
                if (smooth) {
                    this.smoothScrollTo(0, itemTop);
                } else {
                    this.scrollTo(0, itemTop);
                }
            } else if (scrollY < scrollMin) {
                if (smooth) {
                    this.smoothScrollTo(0, scrollMin);
                } else {
                    this.scrollTo(0, scrollMin);
                }
            }
        }
    };

    Window_Options.prototype.gaugeValueWidth = function() {
        return this.textWidth("100%");
    };

    Window_Options.prototype.addGeneralOptions = function() {
        this.addBooleanOptions();
        this.addNumericOptions();
        this.addGaugeOptions();
    };

    Window_Options.prototype.addBooleanOptions = function() {
        if (USE_ALWAYS_DASH) this.addCommand(TextManager.alwaysDash, "alwaysDash");
        if (USE_COMMAND_REMEMBER) this.addCommand(TextManager.commandRemember, "commandRemember");
        if (ConfigManager.useTouchUI()) this.addCommand(TextManager.touchUI, "touchUI");
        if (ConfigManager.useSwitchABButtons()) this.addCommand(SWITCH_AB_BUTTONS_NAME, "switchABButtons");
        if (USE_FAST_MESSAGE) this.addCommand(FAST_MESSAGE_NAME, "fastMessage");
    };

    Window_Options.prototype.addNumericOptions = function() {
        if (USE_DASH_SPEED) this.addCommand(DASH_SPEED_NAME, "dashSpeed");
        if (ConfigManager.useWindowskin()) this.addCommand(WINDOWSKIN_NAME, "windowskin");
    };

    Window_Options.prototype.addGaugeOptions = function() {
        if (USE_WINDOW_TONE) {
            this.addCommand(WINDOW_TONE_RED_NAME, "windowToneRed");
            this.addCommand(WINDOW_TONE_GREEN_NAME, "windowToneGreen");
            this.addCommand(WINDOW_TONE_BLUE_NAME, "windowToneBlue");
        }
        if (USE_WINDOW_OPACITY) this.addCommand(WINDOW_OPACITY_NAME, "windowOpacity");
    };

    Window_Options.prototype.addVolumeOptions = function() {
        if (USE_BGM_VOLUME) this.addCommand(TextManager.bgmVolume, "bgmVolume");
        if (USE_BGS_VOLUME) this.addCommand(TextManager.bgsVolume, "bgsVolume");
        if (USE_ME_VOLUME) this.addCommand(TextManager.meVolume, "meVolume");
        if (USE_SE_VOLUME) this.addCommand(TextManager.seVolume, "seVolume");
    };

    const _Window_Options_prototype_makeCommandList = Window_Options.prototype.makeCommandList;
    Window_Options.prototype.makeCommandList = function() {
        _Window_Options_prototype_makeCommandList.call(this);
        this.addExtraOptions();
    };

    Window_Options.prototype.addExtraOptions = function() {
        this.addCommand(DEFAULT_COMMAND_NAME, "defaultCommand");
    };

    Window_Options.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
        const fillW = Math.floor(width * rate);
        this.contents.fillRect(x, y, width, 8, ColorManager.gaugeBackColor());
        this.contents.gradientFillRect(x, y, fillW, 8, color1, color2);
    };

    const _Window_Options_prototype_statusText = Window_Options.prototype.statusText;
    Window_Options.prototype.statusText = function(index) {
        const symbol = this.commandSymbol(index);
        const value = this.getConfigValue(symbol);
        switch (symbol) {
            case "dashSpeed":
            case "windowskin":
                return this.numericStatusText(value, true);
            case "windowToneRed":
            case "windowToneGreen":
            case "windowToneBlue":
            case "windowOpacity":
                return this.numericStatusText(value, false);
            default:
                return _Window_Options_prototype_statusText.call(this, index);
        }
    };

    Window_Options.prototype.gaugeColor1 = function(symbol) {
        if (this.isVolumeSymbol(symbol)) {
            return ColorManager.powerDownColor();
        } else {
            switch (symbol) {
                case "windowToneRed":
                    return "#640000";
                case "windowToneGreen":
                    return "#006400";
                case "windowToneBlue":
                    return "#000064";
                default:
                    return "#646464";
            }
        }
    };

    Window_Options.prototype.gaugeColor2 = function(symbol) {
        if (this.isVolumeSymbol(symbol)) {
            return ColorManager.powerUpColor();
        } else {
            switch (symbol) {
                case "windowToneRed":
                    return "#ff6464";
                case "windowToneGreen":
                    return "#64ff64";
                case "windowToneBlue":
                    return "#6464ff";
                default:
                    return "#ffffff";
            }
        }
    };

    Window_Options.prototype.numericStatusText = function(value, countFromOne) {
        const result = countFromOne ? value + 1 : value;
        return String(result);
    };

    Window_Options.prototype.isGaugeSymbol = function(symbol) {
        return symbol === "windowOpacity" || this.isVolumeSymbol(symbol) || this.isToneSymbol(symbol);
    };

    Window_Options.prototype.isToneSymbol = function(symbol) {
        return symbol.includes("windowTone");
    };

    Window_Options.prototype.isBooleanSymbol = function(symbol) {
        return ["alwaysDash", "commandRemember", "touchUI", "switchABButtons", "fastMessage"].includes(symbol);
    };

    Window_Options.prototype.isNumericSymbol = function(symbol) {
        return ["dashSpeed", "windowskin"].includes(symbol);
    };

    Window_Options.prototype.isDefaultSymbol = function(symbol) {
        return symbol === "defaultCommand";
    };

    const _Window_Options_prototype_select = Window_Options.prototype.select;
    Window_Options.prototype.select = function(index) {
        _Window_Options_prototype_select.call(this, index);
        this._touchX = TouchInput.x;
    };

    const _Window_Options_prototype_itemRect = Window_Options.prototype.itemRect;
    Window_Options.prototype.itemRect = function(index, forStatus=true) {
        const rect = _Window_Options_prototype_itemRect.call(this, index);
        if (this.isDefaultSymbol(this.commandSymbol(index))) {
            rect.y += DEFAULT_COMMAND_OFFSET;
            rect.width *= 2;
        } else {
            if (forStatus) rect.x += rect.width;
        }
        return rect;
    };

    Window_Options.prototype.itemRectWithPadding = function(index, forStatus=true) {
        const rect = this.itemRect(index, forStatus);
        const padding = this.itemPadding();
        rect.x += padding;
        rect.width -= padding * 2;
        return rect;
    };
    
    Window_Options.prototype.itemLineRect = function(index, forStatus=true) {
        const rect = this.itemRectWithPadding(index, forStatus);
        const padding = (rect.height - this.lineHeight()) / 2;
        rect.y += padding;
        rect.height -= padding * 2;
        return rect;
    };

    Window_Options.prototype.drawItem = function(index) {
        const symbol = this.commandSymbol(index);
        const title = this.commandName(index);
        const tRect = this.itemLineRect(index, false);
        this.contents.fontSize = FONT_SIZE;
        if (this.isDefaultSymbol(symbol)) {
            this.drawText(title, tRect.x, tRect.y, tRect.width, "center");
        } else {
            const status = this.statusText(index);
            const sRect = this.itemLineRect(index, true);
            this.changeTextColor(ColorManager.textColor(TITLE_COLOR));
            this.changePaintOpacity(this.isCommandEnabled(index));
            this.drawText(title, tRect.x, tRect.y, tRect.width, "left");
            this.resetTextColor();
            if (this.isGaugeSymbol(symbol)) {
                const value = this.getConfigValue(symbol);
                let rate;
                if (this.isVolumeSymbol(symbol)) {
                    rate = value / 100;
                } else if (this.isToneSymbol(symbol)) {
                    rate = (value + 255) / 510;
                } else {
                    rate = value / 255;
                }
                const gaugeValueWidth = this.gaugeValueWidth();
                const gaugeWidth = sRect.width - gaugeValueWidth;
                const gaugeY = sRect.y + sRect.height / 2 - 4;
                const c1 = this.gaugeColor1(symbol);
                const c2 = this.gaugeColor2(symbol);
                this.drawText(status, sRect.x, sRect.y, gaugeValueWidth, "right");
                this.drawGauge(sRect.x + gaugeValueWidth + 4, gaugeY, gaugeWidth, rate, c1, c2);
            } else {
                this.drawText(status, sRect.x, sRect.y, sRect.width, "center");
            }
        }
    };

    const _Window_Options_prototype_clearItem = Window_Options.prototype.clearItem;
    Window_Options.prototype.clearItem = function(index) {
        _Window_Options_prototype_clearItem.call(this, index);
        const rect = this.itemRect(index, false);
        this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
        this.contentsBack.clearRect(rect.x, rect.y, rect.width, rect.height);
    };

    Window_Options.prototype.changeValue = function(symbol, value) {
        const lastValue = this.getConfigValue(symbol);
        if (lastValue !== value) {
            this.setConfigValue(symbol, value);
            switch (symbol) {
                case "windowskin":
                    this.loadWindowskin();
                    break;
                case "windowToneRed":
                case "windowToneGreen":
                case "windowToneBlue":
                    $gameSystem.setWindowTone(ConfigManager.windowTone());
                    this.updateTone();
                    break;
                case "windowOpacity":
                    this.updateBackOpacity();
                    break;
            }
            this.redrawItem(this.findSymbol(symbol));
            this.playCursorSound();
        }
    };

    Window_Options.prototype.changeNumberBySymbol = function(symbol, forward, skip, wrap, offsetValue=null) {
        let offset, max, min;
        switch (symbol) {
            case "dashSpeed":
                offset = offsetValue ?? (skip ? 2 : 1);
                max = 2;
                min = 0;
                break;
            case "windowskin":
                offset = offsetValue ?? (skip ? 5 : 1);
                max = WINDOWSKINS.length - 1;
                min = 0;
                break;
            case "windowToneRed":
            case "windowToneGreen":
            case "windowToneBlue":
                offset = offsetValue ?? (skip ? 50 : 5);
                max = 255;
                min = -255;
                break;
            case "windowOpacity":
                offset = offsetValue ?? (skip ? 50 : 5);
                max = 255;
                min = 0;
                break;
            default:
                offset = offsetValue ?? (skip ? this.volumeOffset() : 5);
                max = 100;
                min = 0;
        }
        if (!offsetValue && !forward) offset *= -1;
        this.changeNumber(symbol, offset, max, min, wrap);
    };

    Window_Options.prototype.changeNumber = function(symbol, offset, max, min, wrap) {
        const lastValue = this.getConfigValue(symbol);
        const value = lastValue + offset;
        if (value > max && wrap) {
            this.changeValue(symbol, min);
        } else if (value < min && wrap) {
            this.changeValue(symbol, max);
        } else {
            this.changeValue(symbol, value.clamp(min, max));
        }
    };

    const _Window_Options_prototype_processCursorMove = Window_Options.prototype.processCursorMove;
    Window_Options.prototype.processCursorMove = function() {
        _Window_Options_prototype_processCursorMove.call(this);
        if (TouchInput.isPressed() && TouchInput.isMoved()) this.touchMove();
    };

    const _Window_Options_prototype_processOk = Window_Options.prototype.processOk;
    Window_Options.prototype.processOk = function() {
        const index = this.index();
        const symbol = this.commandSymbol(index);
        if (this.isDefaultSymbol(symbol)) {
            SoundManager.playOk();
            this.restoreDefaultValues();
            $gameSystem.setWindowTone(ConfigManager.windowTone());
            this.loadWindowskin();
            this.updateTone();
            this.updateBackOpacity();
            this.refresh();
        } else if (this.isGaugeSymbol(symbol) || this.isNumericSymbol(symbol)) {
            this.changeNumberBySymbol(symbol, true, false, true);
        } else {
            _Window_Options_prototype_processOk.call(this);
        }
    };
    
    const _Window_Options_prototype_cursorRight = Window_Options.prototype.cursorRight;
    Window_Options.prototype.cursorRight = function(wrap) {
        const index = this.index();
        const symbol = this.commandSymbol(index);
        if (!this.isDefaultSymbol(symbol)) {
            if (this.isBooleanSymbol(symbol)) {
                this.changeValue(symbol, true);
            } else if (this.isGaugeSymbol(symbol) || this.isNumericSymbol(symbol)) {
                this.changeNumberBySymbol(symbol, true, false, wrap);
            } else {
                _Window_Options_prototype_cursorRight.call(this);
            }
        }
    };
    
    const _Window_Options_prototype_cursorLeft = Window_Options.prototype.cursorLeft;
    Window_Options.prototype.cursorLeft = function(wrap) {
        const index = this.index();
        const symbol = this.commandSymbol(index);
        if (!this.isDefaultSymbol(symbol)) {
            if (this.isBooleanSymbol(symbol)) {
                this.changeValue(symbol, false);
            } else if (this.isGaugeSymbol(symbol) || this.isNumericSymbol(symbol)) {
                this.changeNumberBySymbol(symbol, false, false, wrap);
            } else {
                _Window_Options_prototype_cursorLeft.call(this);
            }
        }
    };

    const _Window_Options_prototype_cursorPagedown = Window_Options.prototype.cursorPagedown;
    Window_Options.prototype.cursorPagedown = function() {
        const index = this.index();
        const symbol = this.commandSymbol(index);
        if (!this.isDefaultSymbol(symbol)) {
            if (this.isBooleanSymbol(symbol)) {
                this.changeValue(symbol, true);
            } else if (this.isGaugeSymbol(symbol) || this.isNumericSymbol(symbol)) {
                this.changeNumberBySymbol(symbol, true, true, false);
            } else {
                _Window_Options_prototype_cursorPagedown.call(this);
            }
        }
    };
    
    const _Window_Options_prototype_cursorPageup = Window_Options.prototype.cursorPageup;
    Window_Options.prototype.cursorPageup = function() {
        const index = this.index();
        const symbol = this.commandSymbol(index);
        if (!this.isDefaultSymbol(symbol)) {
            if (this.isBooleanSymbol(symbol)) {
                this.changeValue(symbol, false);
            } else if (this.isGaugeSymbol(symbol) || this.isNumericSymbol(symbol)) {
                this.changeNumberBySymbol(symbol, false, true, false);
            } else {
                _Window_Options_prototype_cursorPageup.call(this);
            }
        }
    };

    Window_Options.prototype.touchMove = function() {
        const index = this.index();
        const symbol = this.commandSymbol(index);
        if (this.isGaugeSymbol(symbol)) {
            const touchX = TouchInput.x;
            if (this._touchX !== touchX) {
                const lastX = this._touchX;
                const diff = touchX - lastX;
                this._touchX = touchX;
                this.changeNumberBySymbol(symbol, false, false, false, diff - diff % 5);
            }
        }
    };

    Window_Options.prototype.restoreDefaultValues = function() {
        const tone = $dataSystem.windowTone;
        ConfigManager["alwaysDash"] = DEFAULT_ALWAYS_DASH;
        ConfigManager["commandRemember"] = DEFAULT_COMMAND_REMEMBER;
        ConfigManager["touchUI"] = DEFAULT_TOUCH_UI;
        ConfigManager["switchABButtons"] = DEFAULT_SWITCH_AB_BUTTONS;
        ConfigManager["fastMessage"] = DEFAULT_FAST_MESSAGE;
        ConfigManager["dashSpeed"] = DEFAULT_DASH_SPEED;
        ConfigManager["windowskin"] = 0;
        ConfigManager["windowToneRed"] = tone[0];
        ConfigManager["windowToneGreen"] = tone[1];
        ConfigManager["windowToneBlue"] = tone[2];
        ConfigManager["windowOpacity"] = $dataSystem.advanced.windowOpacity ?? DEFAULT_WINDOW_OPACITY;
        ConfigManager["bgmVolume"] = DEFAULT_VOLUME;
        ConfigManager["bgsVolume"] = DEFAULT_VOLUME;
        ConfigManager["meVolume"] = DEFAULT_VOLUME;
        ConfigManager["seVolume"] = DEFAULT_VOLUME;
    };

})();