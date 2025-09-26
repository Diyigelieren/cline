import { SystemPromptSection } from "../templates/placeholders"
import { TemplateEngine } from "../templates/TemplateEngine"
import type { PromptVariant, SystemPromptContext } from "../types"

export const TECH_STACK_CONTENT = `
## 技术栈支持

### 支持的框架
- **Lightning Web Components (LWC)**
  - 标签: <lightning-component>
  - 基类: LightningElement
  - 导入: 'lwc'
  - 应用场景: Salesforce 平台开发

- **Kingdee Web Components (KWC)**
  - 标签: <kd-component>
  - 基类: KingdeeElement
  - 导入: '@kdcloudjs/kwc'
  - 应用场景: 金蝶平台开发

### 语法要求
  - 使用正确的导入语句
  - 继承正确的基类
  - 严格遵循LWC和KWC语法, 在LWC和KWC组件时, 避免出现React、Angular、Vue等其他框架的语法
  - KWC与LWC的语法差异:
    1. KWC的 标签、基类、导入 与LWC不同
    2. KWC不用创建 .js-meta.xml 文件
    3. 其余语法与LWC语法高度相似
  - 文件命名禁止出现'-'符号。

### 技术栈选择算法
1. 关键词检测: 扫描用户输入中的技术栈关键词
2. 上下文分析: 检查对话历史和当前工作区
3. 默认回退: 如果无法确定，使用 LWC 作为默认值
4. 确认机制: 对于重要操作，确认技术栈选择

### 代码转换规则
当检测到技术栈不匹配时:
- 自动将 LightningElement 转换为 KingdeeElement
- 自动将 'lwc' 导入转换为 '@kdcloudjs/kwc' 导入
- 保持组件逻辑不变，只调整框架特定部分


Kingdee Web Components (KWC) 开发者文档

欢迎使用 Kingdee Web Components (KWC)！KWC 是一套基于现代 Web 标准的企业级前端组件库，旨在帮助开发者快速、高效地构建功能强大、体验一致的 Web 应用程序。

## 核心理念

KWC 遵循组件化开发的思想，将 UI 拆分为一系列可复用、可组合的独立组件。每个组件都封装了自己的 HTML 结构、CSS 样式和 JavaScript 逻辑，实现了高度的内聚和低耦合。

  * **标准化**：基于 Web Components 标准，确保了良好的浏览器兼容性和未来的可扩展性。
  * **高性能**：优化的渲染机制，提供流畅的用户体验。
  * **易于使用**：简洁明了的 API 设计，上手简单，学习成本低。
  * **企业级**：提供丰富、健壮的组件，满足复杂企业应用场景的需求。

-----

## 快速上手

### 1\. 组件结构

一个 KWC 组件由三个核心文件组成：

  * **HTML (\`.html\`)**: 定义组件的 DOM 结构。
  * **JavaScript (\`.js\`)**: 定义组件的业务逻辑和行为。
  * **CSS (\`.css\`)**: 定义组件的样式（可选）。

**示例：\`myComponent.js\`**

\`\`\`javascript
import { KingdeeElement, api } from 'kwc';

export default class MyComponent extends KingdeeElement {
    @api greeting = '你好, KWC!';

    handleClick() {
        alert('按钮被点击了!');
    }
}
\`\`\`

**示例：\`myComponent.html\`**

\`\`\`html
<template>
    <kwc-card title="我的第一个KWC组件">
        <p>{greeting}</p>
        <kwc-button label="点击我" onclick={handleClick}></kwc-button>
    </kwc-card>
</template>
\`\`\`

### 2\. 数据绑定

使用 \`{propertyName}\` 的方式将 JavaScript 类中的属性绑定到 HTML 模板中。当属性值改变时，UI 会自动更新。

### 3\. 事件处理

使用 \`on<eventname}={handlerName}\` 的语法在 HTML 模板中监听事件。例如 \`onclick={handleClick}\`。

-----

## 组件参考

### 基础 (Base)

#### **按钮 (Button)**

  * **组件名**: \`kwc-button\`
  * **说明**: 用于触发操作的按钮。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 按钮上显示的文本。 | |
| \`variant\` | String | 按钮样式。可选值：\`base\`, \`neutral\`, \`brand\`, \`outline-brand\`, \`destructive\`, \`success\`。 | \`neutral\` |
| \`icon-name\` | String | 在按钮文本左侧显示的图标名称。 | |
| \`icon-position\` | String | 图标位置。可选值： \`left\`, \`right\`。 | \`left\` |
| \`disabled\` | Boolean | 是否禁用按钮。 | \`false\` |
| \`icon-size\` | String | 图标大小。可选值：\`xx-small\`, \`x-small\`, \`small\`, \`medium\`, \`large\`。 | \`medium\` |
| \`full-width\` | Boolean | 按钮是否占据其父容器的全部宽度。 | \`false\` |
| \`type\` | String | 按钮在表单中的类型，可选值：\`button\`, \`submit\`, \`reset\`。 | \`button\` |
| \`title\` | String | 鼠标悬停时显示的提示文本。 | |
| \`loading\` | Boolean | 是否显示加载状态。 | \`false\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`click\` | 点击按钮时触发。 |
| \`focus\` | 按钮获得焦点时触发。 |
| \`blur\` | 按钮失去焦点时触发。 |
| \`loading\` | 当\`loading\`属性为\`true\`时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 按钮内部的内容。 |
| \`icon\` | 用于自定义按钮的图标。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-button label="确认" variant="brand"></kwc-button>

    <kwc-button label="设置" variant="neutral" icon-name="utility:settings"></kwc-button>

    <kwc-button label="提交" variant="brand" disabled></kwc-button>
    
    <kwc-button>
      <span>自定义</span>
      <kwc-icon icon-name="utility:success" slot="icon"></kwc-icon>
    </kwc-button>
</template>
\`\`\`

#### **图标 (Icon)**

  * **组件名**: \`kwc-icon\`
  * **说明**: 显示一个矢量图标。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`icon-name\` | String | 图标名称，例如 \`utility:home\`。 | |
| \`size\` | String | 图标大小。可选值：\`xx-small\`, \`x-small\`, \`small\`, \`medium\`, \`large\`, \`x-large\`, \`xx-large\`。 | \`medium\` |
| \`variant\` | String | 图标颜色。可选值：\`inverse\`, \`warning\`, \`error\`, \`success\`, \`brand\`, \`info\`, \`light\`, \`dark\`。 | |
| \`title\` | String | 鼠标悬停时显示的提示文本。 | |
| \`role\` | String | 辅助功能角色，例如 \`img\`。 | \`presentation\` |
| \`aria-label\` | String | 为屏幕阅读器提供的标签。 | |
| \`color\` | String | 自定义图标颜色，优先级高于 \`variant\`。 | |
| \`spin\` | Boolean | 是否旋转。 | \`false\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`click\` | 点击图标时触发。 |
| \`load\` | 图标加载完成时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 用于自定义图标内容，例如 SVG。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-icon icon-name="utility:success" size="large"></kwc-icon>
    <kwc-icon icon-name="utility:error" size="x-large" variant="error" title="错误"></kwc-icon>
</template>
\`\`\`

#### **超链接 (Hyperlink)**

  * **组件名**: \`kwc-hyperlink\`
  * **说明**: 标准的超链接元素。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 链接显示的文本。 | |
| \`href\` | String | 链接的目标 URL。 | \`javascript:void(0);\` |
| \`target\` | String | 链接打开方式，如 \`_blank\`。 | |
| \`disabled\` | Boolean | 是否禁用链接。 | \`false\` |
| \`rel\` | String | 指定链接与当前文档的关系。 | |
| \`title\` | String | 鼠标悬停时显示的提示文本。 | |
| \`variant\` | String | 链接样式，可选值：\`default\`, \`destructive\`, \`inverse\`。 | \`default\` |
| \`aria-label\` | String | 为屏幕阅读器提供的标签。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`click\` | 点击链接时触发。 |
| \`Maps\` | 链接跳转前触发，可阻止默认行为。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 链接内部的内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-hyperlink href="https://www.kingdee.com" label="访问官网" target="_blank"></kwc-hyperlink>
    <kwc-hyperlink label="删除链接" variant="destructive" onclick={handleDeleteLink}></kwc-hyperlink>
</template>
\`\`\`

#### **分页 (Pagination)**

  * **组件名**: \`kwc-pagination\`
  * **说明**: 用于在多个页面之间导航。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`total-records\` | Number | 总记录数。 | |
| \`record-size\` | Number | 每页显示的记录数。 | 20 |
| \`current-page\` | Number | 当前页码。 | 1 |
| \`page-size-options\`| Array | 每页记录数的可选值。 | \`[10, 20, 50, 100]\` |
| \`show-page-input\` | Boolean | 是否显示页码输入框。 | \`false\` |
| \`show-total\` | Boolean | 是否显示总记录数。 | \`true\` |
| \`layout\` | Array | 分页组件的布局元素，如\`['prev', 'pager', 'next']\`。 | \`['total', 'sizes', 'prev', 'pager', 'next', 'jumper']\` |
| \`size\` | String | 组件大小，可选\`small\`, \`default\`。 | \`default\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`page-change\` | 页码改变时触发，返回 \`{ detail: { page: newPage } }\`。 |
| \`page-size-change\`| 每页记录数改变时触发，返回 \`{ detail: { size: newSize } }\`。|

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 可自定义分页组件内部的额外内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-pagination total-records={100} record-size={10}></kwc-pagination>
    <kwc-pagination total-records={250} current-page={2} onpage-change={handlePageChange}></kwc-pagination>
</template>
\`\`\`

### 导航 (Navigation)

#### **页签 (Tabs)**

  * **组件名**: \`kwc-tabs\` / \`kwc-tab\`
  * **说明**: 将内容分组，方便用户在不同视图间切换。
  * **属性 (kwc-tabs)**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`active-tab\` | String | 当前激活的 Tab 的名称。 | |
| \`variant\` | String | 样式类型，可选 \`standard\`, \`pill\`。 | \`standard\` |
| \`size\` | String | 大小，可选 \`small\`, \`default\`, \`large\`。 | \`default\` |
| \`vertical\` | Boolean | 是否垂直布局。 | \`false\` |
| \`label-visible\`| Boolean | 是否显示标签文本。 | \`true\` |

  * **属性 (kwc-tab)**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 页签显示的文本。 | |
| \`name\` | String | 唯一标识符。 | |
| \`disabled\` | Boolean | 是否禁用该页签。 | \`false\` |
| \`icon-name\` | String | 标签上的图标名称。 | |
| \`badge-label\` | String | 页签上显示的徽标文本。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`tab-change\` | 激活的页签改变时触发，返回 \`{ detail: { name: tabName } }\`。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-tab>\` 组件。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-tabs ontab-change={handleTabChange}>
        <kwc-tab label="项目一" name="tab-1">
            这是项目一的内容。
        </kwc-tab>
        <kwc-tab label="项目二" name="tab-2">
            这是项目二的内容。
        </kwc-tab>
    </kwc-tabs>
</template>
\`\`\`

#### **树组件 (Tree)**

  * **组件名**: \`kwc-tree\`
  * **说明**: 以层级结构展示数据。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`items\` | Array | 树组件的数据源。 | |
| \`selection-type\`| String | 选择模式，可选\`single\`, \`multiple\`, \`none\`。 | \`none\` |
| \`expanded-items\`| Array | 展开节点的名称数组。 | \`[]\` |
| \`selected-items\`| Array | 选中节点的名称数组。 | \`[]\` |
| \`hide-check-box\`| Boolean | 是否隐藏多选框。 | \`false\` |
| \`show-line\` | Boolean | 是否显示连接线。 | \`true\` |
| \`expand-on-click\`| Boolean | 点击节点时是否自动展开/收起。 | \`true\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`item-select\` | 节点被选中时触发，返回 \`{ detail: { name: itemName } }\`。 |
| \`item-toggle\` | 节点展开/收起时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 用于自定义节点内容。 |
| \`item-icon\` | 自定义节点图标。 |

  * **使用示例**:

<!-- end list -->

\`\`\`javascript
// myTree.js
import { KingdeeElement } from 'kwc';

export default class MyTree extends KingdeeElement {
    treeItems = [
        {
            label: '节点 1',
            name: '1',
            expanded: true,
            items: [
                {
                    label: '子节点 1.1',
                    name: '1.1',
                    expanded: true,
                    items: []
                }
            ]
        },
    ];
}
\`\`\`

\`\`\`html
<template>
    <kwc-tree items={treeItems}></kwc-tree>
</template>
\`\`\`

#### **侧导航 (Vertical Navigation)**

  * **组件名**: \`kwc-vertical-navigation\`
  * **说明**: 页面左侧的垂直导航菜单。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`selected-item\` | String | 当前选中的菜单项的 \`name\`。 | |
| \`items\` | Array | 菜单数据源，可替代插槽使用。 | |
| \`variant\` | String | 样式类型，可选 \`standard\`, \`compact\`。 | \`standard\` |
| \`expanded-sections\`| Array | 展开的分组名称数组。 | \`[]\` |
| \`expand-all\` | Boolean | 初始时是否全部展开。 | \`false\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`item-select\` | 菜单项被选中时触发，返回 \`{ detail: { name: itemName } }\`。 |
| \`section-toggle\`| 分组展开/收起时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-vertical-navigation-section>\` 或 \`<kwc-vertical-navigation-item>\`。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-vertical-navigation>
        <kwc-vertical-navigation-section label="报表" name="reports">
            <kwc-vertical-navigation-item label="销售报表" name="sales_report"></kwc-vertical-navigation-item>
            <kwc-vertical-navigation-item label="财务报表" name="financial_report"></kwc-vertical-navigation-item>
        </kwc-vertical-navigation-section>
        <kwc-vertical-navigation-section label="客户" name="customers" expanded></kwc-vertical-navigation-section>
    </kwc-vertical-navigation>
</template>
\`\`\`

#### **全功能菜单 (App Launcher)**

  * **组件名**: \`kwc-app-launcher\`
  * **说明**: 应用启动器，用于在不同应用或功能模块间导航。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`title\` | String | 启动器标题。 | \`应用中心\` |
| \`size\` | String | 启动器大小，可选 \`small\`, \`medium\`, \`large\`。 | \`medium\` |
| \`apps\` | Array | 应用数据源，格式为 \`{ label: '...', icon: '...', url: '...' }\`。 | \`[]\` |
| \`show-search\` | Boolean | 是否显示搜索框。 | \`true\` |
| \`show-footer\` | Boolean | 是否显示底部。 | \`false\` |
| \`columns\` | Number | 应用列表的列数。 | \`4\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`app-click\` | 点击应用图标时触发，返回 \`{ detail: { app: appData } }\`。 |
| \`search\` | 搜索输入时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`header\` | 自定义启动器头部。 |
| \`footer\` | 自定义启动器底部。 |
| \`default\` | 容纳自定义应用图标。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-app-launcher></kwc-app-launcher>
</template>
\`\`\`

#### **顶部菜单导航 (Horizontal Navigation)**

  * **组件名**: \`kwc-horizontal-navigation\`
  * **说明**: 页面顶部的水平导航菜单。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`selected-item\` | String | 当前选中的菜单项的 \`name\`。 | |
| \`items\` | Array | 菜单数据源，可替代插槽使用。 | |
| \`variant\` | String | 样式类型，可选 \`standard\`, \`inverse\`, \`utility\`。 | \`standard\` |
| \`compact\` | Boolean | 是否紧凑模式。 | \`false\` |
| \`show-overflow\` | Boolean | 当菜单项过多时是否显示溢出菜单。 | \`true\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`item-select\` | 菜单项被选中时触发，返回 \`{ detail: { name: itemName } }\`。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-horizontal-navigation-item>\` 或 \`<kwc-horizontal-navigation-menu>\`。 |
| \`logo\` | 菜单左侧的 logo。 |
| \`action\` | 菜单右侧的额外操作区域。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-horizontal-navigation>
        <kwc-horizontal-navigation-item label="首页" name="home"></kwc-horizontal-navigation-item>
        <kwc-horizontal-navigation-item label="产品" name="products"></kwc-horizontal-navigation-item>
        <kwc-horizontal-navigation-item label="关于我们" name="about"></kwc-horizontal-navigation-item>
    </kwc-horizontal-navigation>
</template>
\`\`\`

#### **锚点 (Anchor)**

  * **组件名**: \`kwc-anchor\`
  * **说明**: 用于页面内部的跳转。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`active-link\` | String | 当前激活的锚点链接 \`href\`。 | |
| \`affix\` | Boolean | 是否固定在页面某个位置。 | \`false\` |
| \`offset-top\` | Number | 固定时距离顶部的偏移量。 | \`0\` |
| \`container\` | HTMLElement | 指定滚动容器。 | \`document.body\` |
| \`show-rail\` | Boolean | 是否显示侧边栏。 | \`true\` |
| \`target\` | String | 链接打开方式，如 \`_blank\`。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | \`active-link\`改变时触发。 |
| \`click\` | 点击锚点链接时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<a>\` 标签。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-anchor>
        <a href="#section1">第一节</a>
        <a href="#section2">第二节</a>
    </kwc-anchor>
    <div id="section1" style="height: 300px;">...</div>
    <div id="section2" style="height: 300px;">...</div>
</template>
\`\`\`

#### **下拉菜单 (Dropdown Menu)**

  * **组件名**: \`kwc-dropdown-menu\`
  * **说明**: 点击按钮后弹出的菜单列表。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 触发下拉菜单的按钮文本。 | |
| \`icon-name\` | String | 按钮上的图标。 | |
| \`variant\` | String | 按钮样式。 | \`neutral\` |
| \`visible\` | Boolean | 是否可见。 | \`false\` |
| \`position\` | String | 菜单位置，可选 \`auto\`, \`top-left\`, \`top-right\`, etc. | \`auto\` |
| \`trigger-icon-name\` | String| 触发器图标。 | \`utility:chevrondown\` |
| \`max-height\` | String | 菜单最大高度。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`item-select\` | 选中菜单项时触发，返回 \`{ detail: { value: itemValue } }\`。 |
| \`open\` | 菜单打开时触发。 |
| \`close\` | 菜单关闭时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-menu-item>\` 和 \`<kwc-menu-divider>\`。 |
| \`trigger\` | 自定义触发下拉菜单的元素。 |
| \`footer\` | 菜单底部的额外内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-dropdown-menu label="更多操作">
        <kwc-menu-item value="Option A" label="选项 A"></kwc-menu-item>
        <kwc-menu-item value="Option B" label="选项 B"></kwc-menu-item>
        <kwc-menu-divider></kwc-menu-divider>
        <kwc-menu-item value="Option C" label="选项 C"></kwc-menu-item>
    </kwc-dropdown-menu>
</template>
\`\`\`

#### **步骤条 (Progress Indicator)**

  * **组件名**: \`kwc-progress-indicator\`
  * **说明**: 显示流程中的步骤。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`current-step\` | String | 当前步骤的 \`value\`。 | |
| \`size\` | String | 步骤条大小。 | \`default\` |
| \`variant\` | String | 样式，可选\`standard\`, \`dots\`, \`arrows\`。 | \`standard\` |
| \`label-visible\`| Boolean | 是否显示步骤标签。 | \`true\` |
| \`orientation\` | String | 方向，可选\`horizontal\`, \`vertical\`。 | \`horizontal\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`step-click\` | 点击步骤时触发，返回 \`{ detail: { value: stepValue } }\`。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-progress-step>\`。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-progress-indicator current-step="step-2">
        <kwc-progress-step label="第一步" value="step-1"></kwc-progress-step>
        <kwc-progress-step label="第二步" value="step-2"></kwc-progress-step>
        <kwc-progress-step label="第三步" value="step-3"></kwc-progress-step>
    </kwc-progress-indicator>
</template>
\`\`\`

### 录入 (Data Entry)

#### **开关 (Switch/Toggle)**

  * **组件名**: \`kwc-switch\`
  * **说明**: 表示两种状态之间的切换。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 开关的标签。 | |
| \`checked\` | Boolean | 是否选中。 | \`false\` |
| \`disabled\` | Boolean | 是否禁用。 | \`false\` |
| \`size\` | String | 尺寸，可选 \`small\`, \`medium\`, \`large\`。 | \`medium\` |
| \`name\` | String | 表单提交时的名称。 | |
| \`label-position\`| String | 标签位置，可选 \`left\`, \`right\`, \`hidden\`。| \`right\` |
| \`aria-label\` | String | 为屏幕阅读器提供的标签。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 状态改变时触发，返回 \`{ detail: { checked: isChecked } }\`。 |
| \`input\` | 实时输入时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`label\` | 自定义开关标签。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-switch label="启用通知" checked></kwc-switch>
    <kwc-switch label="夜间模式" onchange={handleToggle}></kwc-switch>
</template>
\`\`\`

#### **单选 (Radio Group)**

  * **组件名**: \`kwc-radio-group\`
  * **说明**: 在多个选项中选择一个。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 组的标签。 | |
| \`options\` | Array | 选项数组，格式为 \`{label: '...', value: '...', disabled: false}\`。 | |
| \`value\` | String | 当前选中的值。 | |
| \`type\` | String | 显示方式，可选值为 \`radio\`, \`button\`。 | \`radio\` |
| \`required\` | Boolean | 是否必填。 | \`false\` |
| \`variant\` | String | 样式，可选 \`standard\`, \`button\`。 | \`standard\` |
| \`name\` | String | 表单提交时的名称。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 选中项改变时触发，返回 \`{ detail: { value: newValue } }\`。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-radio>\` 组件，可替代 \`options\` 属性。 |
| \`label\` | 自定义标签。 |

  * **使用示例**:

<!-- end list -->

\`\`\`javascript
// myRadio.js
import { KingdeeElement } from 'kwc';
export default class MyRadio extends KingdeeElement {
    options = [
        { label: '销售', value: 'option1' },
        { label: '市场', value: 'option2' },
    ];
    value = 'option1';
}
\`\`\`

\`\`\`html
<template>
    <kwc-radio-group
        label="部门"
        options={options}
        value={value}
        type="radio">
    </kwc-radio-group>
</template>
\`\`\`

#### **多选 (Checkbox Group)**

  * **组件名**: \`kwc-checkbox-group\`
  * **说明**: 在多个选项中选择零个或多个。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 组的标签。 | |
| \`options\` | Array | 选项数组，格式为 \`{label: '...', value: '...', disabled: false}\`。 | |
| \`value\` | Array | 当前选中的值数组。 | \`[]\` |
| \`required\` | Boolean | 是否必填。 | \`false\` |
| \`variant\` | String | 样式，可选 \`standard\`, \`toggle\`, \`button\`。 | \`standard\` |
| \`name\` | String | 表单提交时的名称。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 选中项改变时触发，返回 \`{ detail: { value: newValue } }\`。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-checkbox>\` 组件，可替代 \`options\` 属性。 |
| \`label\` | 自定义标签。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-checkbox-group label="兴趣" options={hobbyOptions} value={selectedHobbies}></kwc-checkbox-group>
</template>
\`\`\`

#### **表单 (Form)**

  * **组件名**: \`kwc-form\`
  * **说明**: 各种输入组件的容器，便于统一管理和布局。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`columns\` | Number | 表单的列数。 | \`1\` |
| \`label-position\`| String | 标签位置，可选 \`top\`, \`left\`, \`right\`。 | \`left\` |
| \`label-width\` | String | 标签的宽度。 | \`120px\` |
| \`variant\` | String | 样式，可选 \`standard\`, \`inline\`。 | \`standard\` |
| \`disabled\` | Boolean | 是否禁用表单内所有输入组件。 | \`false\` |
| \`read-only\` | Boolean | 是否只读。 | \`false\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`submit\` | 表单提交时触发，返回 \`{ detail: { values: formData } }\`。 |
| \`reset\` | 表单重置时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳表单内的输入组件。 |
| \`footer\` | 表单底部的操作按钮区域。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-form>
        <kwc-input label="用户名" required></kwc-input>
        <kwc-input type="password" label="密码" required></kwc-input>
        <div slot="footer">
            <kwc-button label="登录" variant="brand"></kwc-button>
        </div>
    </kwc-form>
</template>
\`\`\`

#### **输入框 (Input)**

  * **组件名**: \`kwc-input\`
  * **说明**: 基础的文本输入字段。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 输入框的标签。 | |
| \`type\` | String | 输入类型。可选值：\`text\`, \`password\`, \`email\`, \`tel\`, \`number\`, \`date\`, \`time\` 等。 | \`text\` |
| \`value\` | String/Number | 输入框的值。 | |
| \`placeholder\` | String | 占位文本。 | |
| \`required\` | Boolean | 是否必填。 | \`false\` |
| \`disabled\` | Boolean | 是否禁用。 | \`false\` |
| \`read-only\` | Boolean | 是否只读。 | \`false\` |
| \`maxlength\` | Number | 最大输入长度。 | |
| \`minlength\` | Number | 最小输入长度。 | |
| \`prefix-icon-name\`| String | 左侧图标。 | |
| \`suffix-icon-name\`| String | 右侧图标。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`input\` | 输入时触发。 |
| \`change\` | 值改变时（失焦）触发。 |
| \`focus\` | 获得焦点时触发。 |
| \`blur\` | 失去焦点时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`prefix\` | 输入框左侧内容。 |
| \`suffix\` | 输入框右侧内容。 |
| \`help-text\` | 帮助文本。 |
| \`label\` | 自定义标签。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-input label="邮箱地址" type="email" placeholder="请输入..."></kwc-input>
</template>
\`\`\`

#### **数值输入框 (Input Number)**

  * **组件名**: \`kwc-input-number\`
  * **说明**: 专门用于输入数值，可带步进器。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 标签。 | |
| \`step\` | Number | 每次增减的步长。 | 1 |
| \`min\` | Number | 最小值。 | |
| \`max\` | Number | 最大值。 | |
| \`value\` | Number | 当前值。 | |
| \`disabled\` | Boolean | 是否禁用。 | \`false\` |
| \`precision\` | Number | 小数精度。 | |
| \`show-controls\`| Boolean | 是否显示步进器控制按钮。 | \`true\` |
| \`formatter\` | Function| 格式化显示函数。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`input\` | 输入时触发。 |
| \`change\` | 值改变时（失焦）触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`label\` | 自定义标签。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-input-number label="数量" step="1" min="0" max="10"></kwc-input-number>
</template>
\`\`\`

#### **选择器 (Select/Combobox)**

  * **组件名**: \`kwc-combobox\`
  * **说明**: 下拉选择器。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 标签。 | |
| \`options\` | Array | 选项数组，格式为 \`{label: '...', value: '...'}\`。 | |
| \`value\` | String/Array | 当前选中的值。 | |
| \`placeholder\` | String | 占位文本。 | |
| \`multiple\` | Boolean | 是否多选。 | \`false\` |
| \`clearable\` | Boolean | 是否可清空。 | \`true\` |
| \`disabled\` | Boolean | 是否禁用。 | \`false\` |
| \`searchable\` | Boolean | 是否可搜索。 | \`true\` |
| \`size\` | String | 尺寸，可选\`small\`, \`default\`, \`large\`。 | \`default\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 值改变时触发。 |
| \`select\` | 选中选项时触发。 |
| \`clear\` | 清空时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`option\` | 自定义选项模板。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-combobox label="状态" value={status} options={statusOptions}></kwc-combobox>
</template>
\`\`\`

#### **日期/时间选择器 (Date/Time Picker)**

  * **组件名**: \`kwc-datepicker\`, \`kwc-timepicker\`
  * **说明**: 用于选择日期或时间。
  * **属性 (kwc-datepicker)**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 标签。 | |
| \`value\` | String/Date | 当前选中的日期。 | |
| \`format\` | String | 日期格式化。 | \`yyyy-MM-dd\` |
| \`disabled\` | Boolean | 是否禁用。 | \`false\` |
| \`min-date\` | String/Date | 可选的最小日期。 | |
| \`max-date\` | String/Date | 可选的最大日期。 | |
| \`show-clear\` | Boolean | 是否显示清空按钮。 | \`true\` |

  * **属性 (kwc-timepicker)**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 标签。 | |
| \`value\` | String | 当前选中的时间。 | |
| \`format\` | String | 时间格式化。 | \`HH:mm\` |
| \`disabled\` | Boolean | 是否禁用。 | \`false\` |
| \`steps\` | Object | 步长，例如 \`{ hour: 1, minute: 15 }\`。 | \`{}\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 值改变时触发。 |
| \`input\` | 输入时触发。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-datepicker label="出生日期"></kwc-datepicker>
    <kwc-timepicker label="会议时间"></kwc-timepicker>
</template>
\`\`\`

#### **其他输入组件**

  * **\`kwc-lookup\`**: 基础资料选择，用于搜索和选择关联记录。
      * **属性**: \`label\`, \`value\`, \`placeholder\`, \`disabled\`, \`clearable\`, \`lookup-api\` (查询接口)
      * **事件**: \`change\`, \`input\`, \`lookup\`
  * **\`kwc-city-selector\`**: 城市选择器。
      * **属性**: \`label\`, \`value\`, \`placeholder\`, \`disabled\`, \`level\` (选择级别)
      * **事件**: \`change\`
  * **\`kwc-rating\`**: 评分组件。
      * **属性**: \`value\`, \`count\`, \`disabled\`, \`allow-half\`, \`show-text\`
      * **事件**: \`change\`
  * **\`kwc-slider\`**: 滑动条，用于在一定范围内选择值。
      * **属性**: \`value\`, \`min\`, \`max\`, \`step\`, \`disabled\`, \`range\`
      * **事件**: \`change\`, \`input\`
  * **\`kwc-cascader\`**: 级联选择，用于选择层级关系的数据。
      * **属性**: \`label\`, \`options\`, \`value\`, \`placeholder\`, \`clearable\`
      * **事件**: \`change\`
  * **\`kwc-transfer\`**: 穿梭框，在两个列表之间移动项目。
      * **属性**: \`data\`, \`titles\`, \`target-keys\`, \`filterable\`
      * **事件**: \`change\`
  * **\`kwc-file-upload\`**: 附件上传。
      * **属性**: \`label\`, \`multiple\`, \`disabled\`, \`accept\`, \`max-size\`, \`auto-upload\`
      * **事件**: \`change\`, \`success\`, \`error\`, \`remove\`
  * **\`kwc-color-picker\`**: 颜色选择器。
      * **属性**: \`value\`, \`disabled\`, \`show-alpha\`, \`size\`
      * **事件**: \`change\`
  * **\`kwc-region-picker\`**: 行政区划选择。
      * **属性**: \`label\`, \`value\`, \`disabled\`, \`placeholder\`, \`level\`
      * **事件**: \`change\`
  * **\`kwc-tree-select\`**: 树选择器。
      * **属性**: \`label\`, \`data\`, \`value\`, \`placeholder\`, \`show-check-box\`
      * **事件**: \`change\`
  * **\`kwc-signature-pad\`**: 手写签名板。
      * **属性**: \`width\`, \`height\`, \`disabled\`, \`pen-color\`
      * **事件**: \`change\`, \`end\`

#### **在线表格 (SpreadJS)**

  * **组件名**: \`kwc-spreadjs\`
  * **说明**: 强大的嵌入式电子表格组件，支持类似 Excel 的功能。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`data-source\` | Array | 表格的数据源。 | |
| \`columns\` | Array | 列配置，如宽度、类型等。 | |
| \`options\` | Object | SpreadJS 的配置选项。 | \`{}\` |
| \`allow-edit\` | Boolean | 是否允许编辑。 | \`true\` |
| \`allow-formula\` | Boolean | 是否支持公式。 | \`true\` |
| \`sheet-count\` | Number | 工作表数量。 | \`1\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`data-change\` | 数据改变时触发。 |
| \`selection-change\`| 单元格选择改变时触发。 |
| \`cell-click\` | 单元格点击时触发。 |
| \`workbook-ready\` | SpreadJS 实例加载完成时触发。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-spreadjs data-source={sheetData}></kwc-spreadjs>
</template>
\`\`\`

### 展示 (Display)

#### **列表 (List)**

  * **组件名**: \`kwc-list\`
  * **说明**: 通用的列表展示组件。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`bordered\` | Boolean | 是否带边框。 | \`false\` |
| \`size\` | String | 大小，可选 \`small\`, \`default\`, \`large\`。 | \`default\` |
| \`striped\` | Boolean | 是否带斑马纹。 | \`false\` |
| \`header\` | String | 列表头部文本。 | |
| \`footer\` | String | 列表底部文本。 | |
| \`selectable\` | Boolean | 列表项是否可选中。 | \`false\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`item-click\` | 列表项点击时触发。 |
| \`item-select\` | 列表项选中时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-list-item>\`。 |
| \`header\` | 列表头部内容。 |
| \`footer\` | 列表底部内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-list>
        <kwc-list-item>列表项 1</kwc-list-item>
        <kwc-list-item>列表项 2</kwc-list-item>
    </kwc-list>
</template>
\`\`\`

#### **头像 (Avatar)**

  * **组件名**: \`kwc-avatar\`
  * **说明**: 用于展示用户头像。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`src\` | String | 图片 URL。 | |
| \`initials\` | String | 当图片不存在时显示的姓名缩写。 | |
| \`size\` | String | 大小，可选 \`x-small\`, \`small\`, \`medium\`, \`large\`, \`x-large\`, \`xx-large\`。 | \`medium\` |
| \`fallback-icon-name\`| String | 当无图片也无缩写时显示的默认图标。 | \`utility:user\` |
| \`variant\` | String | 形状，可选 \`square\`, \`circle\`。 | \`circle\` |
| \`alt\` | String | 图片替代文本。 | |
| \`title\` | String | 鼠标悬停时显示的提示文本。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`error\` | 图片加载失败时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 自定义内容，例如 SVG。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-avatar src=".../avatar.png" initials="KWC" size="large"></kwc-avatar>
</template>
\`\`\`

#### **图片 (Image)**

  * **组件名**: \`kwc-image\`
  * **说明**: 带懒加载和响应式功能的图片组件。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`src\` | String | 图片 URL。 | |
| \`alt\` | String | 图片替代文本。 | |
| \`width\` | String/Number | 宽度。 | \`auto\` |
| \`height\` | String/Number | 高度。 | \`auto\` |
| \`lazy\` | Boolean | 是否懒加载。 | \`false\` |
| \`fit\` | String | 图片适应方式，可选 \`fill\`, \`contain\`, \`cover\`, \`none\`。| \`cover\` |
| \`placeholder\`| String | 占位图 URL。 | |
| \`fallback\` | String | 备用图片 URL。 | |
| \`title\` | String | 鼠标悬停时显示的提示文本。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`load\` | 图片加载完成时触发。 |
| \`error\` | 图片加载失败时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`placeholder\`| 自定义占位图。 |
| \`error\` | 自定义错误提示。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-image src=".../image.jpg" alt="风景图"></kwc-image>
</template>
\`\`\`

#### **富文本 (Rich Text Display)**

  * **组件名**: \`kwc-rich-text-display\`
  * **说明**: 用于安全地显示HTML格式的富文本内容。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`value\` | String | 包含HTML的字符串。 | |
| \`sanitize\` | Boolean | 是否进行内容净化（去除恶意脚本）。 | \`true\` |
| \`variant\` | String | 样式，可选 \`standard\`, \`light\`。 | \`standard\` |
| \`max-height\` | String | 最大高度。 | |
| \`ellipsis\` | Boolean | 内容超出是否显示省略号。 | \`false\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`content-render\`| 内容渲染完成时触发。 |
| \`link-click\` | 点击链接时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 可直接放入 HTML 内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-rich-text-display value={htmlContent}></kwc-rich-text-display>
</template>
\`\`\`

#### **徽标 (Badge)**

  * **组件名**: \`kwc-badge\`
  * **说明**: 通常出现在头像或图标的角落，用于显示数字或状态。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 徽标上显示的文本。 | |
| \`variant\` | String | 样式，可选 \`default\`, \`brand\`, \`destructive\`, \`success\`, \`warning\`, \`inverse\`。 | \`default\` |
| \`dot\` | Boolean | 是否只显示一个点。 | \`false\` |
| \`max\` | Number | 当数字超过此值时显示\`max+\`。 | |
| \`offset\` | Array | 偏移量，例如 \`[10, 10]\`。 | \`[0, 0]\` |
| \`color\` | String | 自定义徽标颜色。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`click\` | 点击徽标时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 被徽标包裹的内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-badge label="99+"></kwc-badge>
</template>
\`\`\`

#### **标签 (Tag)**

  * **组件名**: \`kwc-tag\`
  * **说明**: 用于标记和分类。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 标签文本。 | |
| \`variant\` | String | 样式，可选 \`default\`, \`brand\`, \`destructive\`, \`success\`, \`warning\`, \`inverse\`。 | \`default\` |
| \`closable\` | Boolean | 是否可关闭。 | \`false\` |
| \`size\` | String | 大小，可选 \`small\`, \`medium\`, \`large\`。 | \`medium\` |
| \`icon-name\` | String | 左侧图标。 | |
| \`color\` | String | 自定义背景颜色。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`close\` | 点击关闭按钮时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 标签内部的内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-tag>待审核</kwc-tag>
</template>
\`\`\`

#### **时间轴 (Timeline)**

  * **组件名**: \`kwc-timeline\`
  * **说明**: 垂直展示一系列按时间排序的事件。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`pending\` | Boolean | 是否显示“待办”节点。 | \`false\` |
| \`pending-label\`| String | “待办”节点的文本。 | \`待处理\` |
| \`reverse\` | Boolean | 是否反向排序。 | \`false\` |
| \`variant\` | String | 样式，可选 \`default\`, \`horizontal\`。 | \`default\` |
| \`mode\` | String | 模式，可选 \`left\`, \`right\`, \`alternate\`。 | \`left\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`item-click\` | 节点点击时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-timeline-item>\`。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-timeline>
        <kwc-timeline-item>
            <h4>创建订单</h4>
            <p>2023-01-01 10:00</p>
        </kwc-timeline-item>
        <kwc-timeline-item>
            <h4>订单支付</h4>
            <p>2023-01-01 10:05</p>
        </kwc-timeline-item>
    </kwc-timeline>
</template>
\`\`\`

#### **表格 (Datatable)**

  * **组件名**: \`kwc-datatable\`
  * **说明**: 功能强大的数据表格，支持排序、筛选、自定义列等。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`key-field\`| String | 每行数据的唯一标识字段。 | |
| \`data\` | Array | 表格显示的数据。 | \`[]\` |
| \`columns\` | Array | 列定义。 | \`[]\` |
| \`loading\` | Boolean | 是否显示加载状态。 | \`false\` |
| \`striped\` | Boolean | 是否带斑马纹。 | \`false\` |
| \`bordered\` | Boolean | 是否带边框。 | \`false\` |
| \`selectable\` | Boolean | 是否可多选。 | \`false\` |
| \`selected-rows\`| Array | 选中行的数据。 | \`[]\` |
| \`resizable-columns\`| Boolean | 列是否可拖拽改变宽度。 | \`false\` |
| \`show-row-number\`| Boolean | 是否显示行号。 | \`false\` |
| \`min-height\` | Number | 最小高度。 | |

  * **表格字段展示**: \`kwc-datatable\` 的列定义支持多种 \`type\`，以展示不同格式的数据，如 \`date\` (日期)、\`number\` (数量)、\`text\` (文本)、\`lookup\` (基础资料) 等。

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`row-select\` | 行被选中或取消选中时触发。 |
| \`sort\` | 点击列头排序时触发。 |
| \`cell-click\` | 点击单元格时触发。 |
| \`row-action\` | 点击行内操作按钮时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`actions\` | 自定义行内操作。 |
| \`toolbar\` | 表格上方的工具栏。 |

  * **使用示例**:

<!-- end list -->

\`\`\`javascript
// myTable.js
import { KingdeeElement } from 'kwc';
const columns = [
    { label: '客户名称', fieldName: 'name', type: 'text' },
    { label: '注册日期', fieldName: 'regDate', type: 'date' },
    { label: '合同金额', fieldName: 'amount', type: 'number' },
];
export default class MyTable extends KingdeeElement {
    data = [
        { id: 1, name: '客户A', regDate: '2023-01-15', amount: 50000 },
        { id: 2, name: '客户B', regDate: '2023-02-20', amount: 120000 },
    ];
    columns = columns;
}
\`\`\`

\`\`\`html
<template>
    <kwc-datatable
        key-field="id"
        data={data}
        columns={columns}>
    </kwc-datatable>
</template>
\`\`\`

#### **卡片 (Card)**

  * **组件名**: \`kwc-card\`
  * **说明**: 内容的容器，可包含标题、内容和页脚。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`title\` | String | 卡片标题。 | |
| \`icon-name\`| String | 标题旁的图标。 | |
| \`variant\` | String | 样式，可选 \`base\`, \`brand\`, \`inverse\`。 | \`base\` |
| \`bordered\` | Boolean | 是否带边框。 | \`true\` |
| \`hide-header\`| Boolean | 是否隐藏头部。 | \`false\` |
| \`collapsible\`| Boolean | 是否可折叠。 | \`false\` |
| \`collapsed\` | Boolean | 初始是否折叠。 | \`false\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`collapse\` | 卡片折叠或展开时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 卡片主体内容。 |
| \`title\` | 自定义标题区域。 |
| \`actions\` | 标题右侧的额外操作。 |
| \`footer\` | 卡片底部。 |
| \`header\` | 头部整个区域。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-card title="销售机会" icon-name="utility:opportunity">
        <p>这是卡片内容区域。</p>
        <div slot="footer">
            <kwc-button label="查看更多"></kwc-button>
        </div>
    </kwc-card>
</template>
\`\`\`

#### **抽屉 (Drawer)**

  * **组件名**: \`kwc-drawer\`
  * **说明**: 从屏幕边缘滑出的面板。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`is-open\` | Boolean | 是否可见。 | \`false\` |
| \`title\` | String | 抽屉标题。 | |
| \`width\` | String/Number| 抽屉宽度。 | \`480px\` |
| \`placement\` | String | 弹出位置，可选 \`left\`, \`right\`, \`top\`, \`bottom\`。 | \`right\` |
| \`mask-closable\`| Boolean | 点击遮罩层是否关闭。 | \`true\` |
| \`show-close\` | Boolean | 是否显示关闭按钮。 | \`true\` |
| \`closable\` | Boolean | 是否可关闭。 | \`true\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`open\` | 抽屉打开时触发。 |
| \`close\` | 抽屉关闭时触发。 |
| \`mask-click\` | 点击遮罩层时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 抽屉主体内容。 |
| \`title\` | 自定义标题区域。 |
| \`footer\` | 抽屉底部。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-button label="打开抽屉" onclick={openDrawer}></kwc-button>
    <kwc-drawer is-open={isDrawerOpen} title="详情">
        <p>抽屉内容...</p>
    </kwc-drawer>
</template>
\`\`\`

#### **分割线 (Divider)**

  * **组件名**: \`kwc-divider\`
  * **说明**: 分隔不同内容的水平线。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`orientation\`| String | 文本位置，可选 \`left\`, \`right\`, \`center\`。 | \`center\` |
| \`variant\` | String | 样式，可选 \`standard\`, \`inverse\`。 | \`standard\` |
| \`type\` | String | 类型，可选 \`horizontal\`, \`vertical\`。 | \`horizontal\` |
| \`dashed\` | Boolean | 是否虚线。 | \`false\` |
| \`text-color\` | String | 文本颜色。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`click\` | 点击分割线时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 分割线中间的文本内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <p>内容一</p>
    <kwc-divider></kwc-divider>
    <p>内容二</p>
</template>
\`\`\`

#### **二维码 (QR Code)**

  * **组件名**: \`kwc-qrcode\`
  * **说明**: 生成并显示二维码。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`value\` | String | 二维码包含的字符串。 | |
| \`size\` | Number | 二维码大小（像素）。 | 128 |
| \`color-light\` | String | 背景色。 | \`#ffffff\` |
| \`color-dark\` | String | 前景色。 | \`#000000\` |
| \`level\` | String | 容错率，可选 \`L\`, \`M\`, \`Q\`, \`H\`。 | \`M\` |
| \`logo\` | String | 中间logo图片URL。 | |
| \`logo-size\` | Number | logo大小。 | 30 |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`render\` | 二维码渲染完成时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 额外内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-qrcode value="https://www.kingdee.com" size="128"></kwc-qrcode>
</template>
\`\`\`

### 反馈 (Feedback)

#### **文字提示 (Tooltip)**

  * **组件名**: \`kwc-tooltip\`
  * **说明**: 鼠标悬停时出现的提示信息。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`value\` | String | 提示框显示的文本。 | |
| \`variant\` | String | 样式，可选 \`default\`, \`inverse\`。 | \`default\` |
| \`position\` | String | 提示框位置。 | \`auto\` |
| \`delay\` | Number | 延迟显示时间（毫秒）。 | \`300\` |
| \`visible\` | Boolean | 是否可见。 | \`false\` |
| \`interactive\`| Boolean | 提示框内容是否可交互。 | \`false\` |
| \`max-width\` | String | 最大宽度。 | \`300px\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`open\` | 提示框打开时触发。 |
| \`close\` | 提示框关闭时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 触发提示的元素。 |
| \`content\` | 提示框内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-tooltip value="保存此记录">
        <kwc-button icon-name="utility:save"></kwc-button>
    </kwc-tooltip>
</template>
\`\`\`

#### **警告提示 (Alert)**

  * **组件名**: \`kwc-alert\`
  * **说明**: 用于显示重要的警告或通知信息。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`message\` | String | 提示信息。 | |
| \`variant\` | String | 样式，可选 \`info\`, \`warning\`, \`error\`, \`success\`, \`brand\`, \`light\`。| \`info\` |
| \`is-dismissible\` | Boolean| 是否可关闭。 | \`false\` |
| \`title\` | String | 提示标题。 | |
| \`icon-name\` | String | 左侧图标。 | |
| \`closable\` | Boolean | 是否显示关闭按钮。 | \`true\` |
| \`show-icon\` | Boolean | 是否显示图标。 | \`true\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`dismiss\` | 点击关闭按钮时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 提示信息内容。 |
| \`icon\` | 自定义图标。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-alert message="您的密码即将过期。" variant="warning" is-dismissible></kwc-alert>
</template>
\`\`\`

#### **消息提示 (Message/Toast)**

  * **组件名**: \`kwc-message\`
  * **说明**: 全局展示的轻量级消息提醒，通常会自动消失。
  * **属性 (通过JS调用)**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`message\` | String | 消息内容。 | |
| \`title\` | String | 消息标题。 | |
| \`variant\` | String | 样式，可选 \`success\`, \`error\`, \`warning\`, \`info\`。 | \`info\` |
| \`duration\` | Number | 自动关闭的延迟时间（毫秒）。 | \`3000\` |
| \`closable\` | Boolean | 是否可关闭。 | \`true\` |
| \`position\` | String | 消息位置，可选 \`top-right\`, \`top-left\`, \`bottom-right\`, \`bottom-left\`。 | \`top-right\` |

  * **使用方法**: 通常通过 JavaScript 调用。

<!-- end list -->

\`\`\`javascript
// myComponent.js
import { showToast } from 'kwc/toast';

showToast({
    title: '成功',
    message: '记录已保存。',
    variant: 'success'
});
\`\`\`

#### **气泡确认框 (Popconfirm)**

  * **组件名**: \`kwc-popconfirm\`
  * **说明**: 点击元素时弹出气泡式的确认框。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`title\` | String | 确认框标题。 | |
| \`description\` | String | 详细描述。 | |
| \`ok-text\` | String | 确认按钮文本。 | \`确认\` |
| \`cancel-text\` | String | 取消按钮文本。 | \`取消\` |
| \`placement\` | String | 弹出位置，可选 \`top\`, \`bottom\`, \`left\`, \`right\`。| \`top\` |
| \`icon-name\` | String | 标题旁图标。 | \`utility:warning\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`confirm\` | 点击确认按钮时触发。 |
| \`cancel\` | 点击取消按钮时触发。 |
| \`open\` | 气泡确认框打开时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 触发确认框的元素。 |
| \`title\` | 自定义标题。 |
| \`description\`| 自定义描述。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-popconfirm title="确定要删除吗？" onconfirm={handleDelete}>
        <kwc-button label="删除" variant="destructive"></kwc-button>
    </kwc-popconfirm>
</template>
\`\`\`

#### **弹出框 (Dialog/Modal)**

  * **组件名**: \`kwc-dialog\`
  * **说明**: 模态对话框，用于需要用户响应的关键操作。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`is-open\` | Boolean | 是否可见。 | \`false\` |
| \`title\` | String | 对话框标题。 | |
| \`width\` | String/Number| 宽度。 | \`600px\` |
| \`closable\` | Boolean | 是否显示关闭按钮。 | \`true\` |
| \`mask-closable\`| Boolean | 点击遮罩层是否关闭。 | \`true\` |
| \`footer-visible\`| Boolean | 是否显示底部。 | \`true\` |
| \`drag-enabled\` | Boolean | 是否可拖动。 | \`false\` |
| \`fullscreen\` | Boolean | 是否全屏。 | \`false\` |
| \`min-height\` | String | 最小高度。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`open\` | 对话框打开时触发。 |
| \`close\` | 对话框关闭时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 对话框主体内容。 |
| \`title\` | 自定义标题。 |
| \`footer\` | 底部操作区域。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-dialog is-open={isDialogOpen} title="确认操作">
        <p>这是对话框内容。</p>
        <div slot="footer">
            <kwc-button label="取消" onclick={closeDialog}></kwc-button>
            <kwc-button label="确认" variant="brand"></kwc-button>
        </div>
    </kwc-dialog>
</template>
\`\`\`

#### **通知提示 (Notification)**

  * **组件名**: \`kwc-notification\`
  * **说明**: 显示在页面角落的通知消息。
  * **属性 (通过JS调用)**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`title\` | String | 消息标题。 | |
| \`message\` | String | 消息内容。 | |
| \`variant\` | String | 样式，可选 \`success\`, \`error\`, \`warning\`, \`info\`。 | \`info\` |
| \`duration\` | Number | 自动关闭延迟时间（毫秒）。 | \`4500\` |
| \`closable\` | Boolean | 是否可手动关闭。 | \`true\` |
| \`placement\` | String | 位置，可选 \`top-right\`, \`bottom-right\`, \`top-left\`, \`bottom-left\`。 | \`top-right\` |
| \`icon-name\` | String | 图标。 | |

  * **使用方法**: 通过 JavaScript 调用。

<!-- end list -->

\`\`\`javascript
import { showNotification } from 'kwc/notification';

showNotification({
    title: '新消息',
    message: '您有新的待办事项。',
    variant: 'info'
});
\`\`\`

#### **新手向导 (Guide)**

  * **组件名**: \`kwc-guide\`
  * **说明**: 分步引导用户了解页面功能。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`steps\` | Array | 引导步骤配置数组。 | |
| \`current-step\` | Number | 当前步骤索引。 | \`0\` |
| \`visible\` | Boolean | 是否可见。 | \`false\` |
| \`placement\` | String | 引导框位置。 | \`auto\` |
| \`mask-closable\`| Boolean | 点击遮罩是否关闭。 | \`false\` |
| \`highlight-element\`| String | 高亮元素的 CSS 选择器。 | |
| \`ok-text\` | String | 确认按钮文本。 | \`下一步\` |
| \`skip-text\` | String | 跳过按钮文本。 | \`跳过\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 步骤改变时触发。 |
| \`finish\` | 引导完成时触发。 |
| \`skip\` | 跳过引导时触发。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-guide steps={guideSteps}></kwc-guide>
</template>
\`\`\`

#### **进度条 (Progress Bar)**

  * **组件名**: \`kwc-progress-bar\`
  * **说明**: 可视化地展示任务的完成进度。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`value\` | Number | 进度百分比 (0-100)。 | \`0\` |
| \`variant\` | String | 样式，可选 \`circular\`, \`linear\`。 | \`linear\` |
| \`size\` | String | 大小，可选 \`small\`, \`medium\`, \`large\`。 | \`medium\` |
| \`status\` | String | 状态，可选 \`success\`, \`exception\`, \`warning\`。| |
| \`show-info\` | Boolean | 是否显示进度百分比。 | \`true\` |
| \`stroke-width\`| Number | 进度条线条宽度。 | \`6\` |
| \`color\` | String | 自定义颜色。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 进度值改变时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`info\` | 自定义进度信息。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-progress-bar value="50"></kwc-progress-bar>
</template>
\`\`\`

#### **加载中 (Spinner)**

  * **组件名**: \`kwc-spinner\`
  * **说明**: 表示正在加载或处理中。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`size\` | String | 大小，可选 \`x-small\`, \`small\`, \`medium\`, \`large\`, \`x-large\`, \`xx-large\`。 | \`medium\` |
| \`variant\` | String | 样式，可选 \`standard\`, \`brand\`, \`inverse\`。 | \`standard\` |
| \`assistive-text\`| String | 辅助文本，用于屏幕阅读器。 | \`加载中\` |
| \`container-less\`| Boolean | 是否无容器包裹。 | \`false\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`show\` | 显示时触发。 |
| \`hide\` | 隐藏时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 额外内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <div if:true={isLoading}>
        <kwc-spinner size="medium"></kwc-spinner>
    </div>
</template>
\`\`\`

#### **水印 (Watermark)**

  * **组件名**: \`kwc-watermark\`
  * **说明**: 为页面或特定区域添加文本水印。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`content\` | String/Array| 水印文本。 | |
| \`image\` | String | 图片水印 URL。 | |
| \`width\` | Number | 水印宽度。 | \`120\` |
| \`height\` | Number | 水印高度。 | \`64\` |
| \`rotate\` | Number | 旋转角度。 | \`-22\` |
| \`color\` | String | 字体颜色。 | \`rgba(0,0,0,.15)\` |
| \`font-size\` | Number | 字体大小。 | \`16\` |
| \`gap-x\` | Number | 水平间距。 | \`200\` |
| \`gap-y\` | Number | 垂直间距。 | \`200\` |
| \`fixed\` | Boolean | 是否固定在页面上。 | \`false\` |
| \`z-index\` | Number | 层叠顺序。 | \`9\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`ready\` | 水印生成完成时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 需要加水印的内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-watermark content="内部资料">
        </kwc-watermark>
</template>
\`\`\`

### 筛选 (Filtering)

#### **搜索 (Search)**

  * **组件名**: \`kwc-search\`
  * **说明**: 一个专用的搜索输入框。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`value\` | String | 搜索框的值。 | |
| \`placeholder\` | String | 占位文本。 | \`搜索...\` |
| \`disabled\` | Boolean | 是否禁用。 | \`false\` |
| \`size\` | String | 尺寸，可选 \`small\`, \`default\`, \`large\`。 | \`default\` |
| \`clearable\` | Boolean | 是否可清空。 | \`true\` |
| \`delay\` | Number | 延迟触发搜索事件（毫秒）。 | \`300\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 值改变时触发。 |
| \`search\` | 点击搜索按钮或回车时触发。 |
| \`clear\` | 清空按钮被点击时触发。 |
| \`input\` | 实时输入时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`prefix\` | 输入框左侧内容。 |
| \`suffix\` | 输入框右侧内容。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-search onchange={handleSearch}></kwc-search>
</template>
\`\`\`

#### **列表过滤 (List Filter)**

  * **组件名**: \`kwc-list-filter\`
  * **说明**: 为列表或表格提供的一组过滤控件。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`filters\` | Array | 过滤项的配置数组。 | |
| \`value\` | Object | 当前的过滤值。 | \`{}\` |
| \`disabled\` | Boolean | 是否禁用。 | \`false\` |
| \`variant\` | String | 样式，可选 \`standard\`, \`compact\`。| \`standard\` |
| \`label-visible\`| Boolean | 是否显示标签。 | \`true\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 过滤值改变时触发。 |
| \`clear\` | 清空过滤条件时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳自定义过滤组件。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-list-filter filters={filterOptions} value={currentFilters} onchange={handleFilterChange}></kwc-list-filter>
</template>
\`\`\`

#### **通用过滤 (Filter)**

  * **组件名**: \`kwc-filter\`
  * **说明**: 更通用的筛选组件，可自定义筛选条件。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`schema\` | Array | 筛选条件的配置。 | |
| \`value\` | Object | 当前的筛选值。 | \`{}\` |
| \`collapsed\` | Boolean | 初始是否折叠。 | \`false\` |
| \`expand-text\` | String | 展开按钮文本。 | \`展开\` |
| \`collapse-text\`| String | 收起按钮文本。 | \`收起\` |
| \`submit-on-change\`| Boolean | 值改变时是否自动提交。 | \`false\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 值改变时触发。 |
| \`submit\` | 点击查询按钮时触发。 |
| \`reset\` | 点击重置按钮时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳自定义筛选表单。 |
| \`actions\` | 筛选区域的操作按钮。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-filter schema={filterSchema} onsubmit={handleFilterSubmit}></kwc-filter>
</template>
\`\`\`

### 布局 (Layout)

#### **弹性布局 (Flex)**

  * **组件名**: \`kwc-flex\`
  * **说明**: 基于 CSS Flexbox 的布局容器，用于灵活地对齐和分布子元素。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`direction\` | String | 主轴方向，如 \`row\`, \`column\`。 | \`row\` |
| \`justify\` | String | 主轴对齐方式，如 \`start\`, \`center\`, \`end\`, \`space-between\`, \`space-around\`。 | \`start\` |
| \`align\` | String | 交叉轴对齐方式，如 \`start\`, \`center\`, \`end\`, \`stretch\`, \`baseline\`。 | \`stretch\` |
| \`wrap\` | String | 是否换行，可选 \`nowrap\`, \`wrap\`, \`wrap-reverse\`。 | \`nowrap\` |
| \`gap\` | String | 项目间距。 | \`0\` |
| \`inline\` | Boolean | 是否行内flex。 | \`false\` |
| \`grow\` | Number/Boolean| 扩展比例。 | \`false\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`click\` | 点击容器时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 Flex 项目。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-flex justify="space-between">
        <div>左侧内容</div>
        <div>右侧内容</div>
    </kwc-flex>
</template>
\`\`\`

#### **栅格容器 (Grid)**

  * **组件名**: \`kwc-grid\`, \`kwc-col\`
  * **说明**: 24列栅格系统，用于创建响应式页面布局。
  * **属性 (kwc-grid)**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`gutter\` | Number/Array| 栅格间距。 | \`0\` |
| \`justify\` | String | 水平对齐方式。 | \`start\` |
| \`align\` | String | 垂直对齐方式。 | \`top\` |
| \`wrap\` | Boolean | 是否自动换行。 | \`true\` |
| \`span\` | Number | 栅格总列数。 | \`24\` |
| \`prefix\` | Number | 列前缀。 | \`0\` |

  * **属性 (kwc-col)**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`span\` | Number | 占据的列数。 | \`24\` |
| \`offset\` | Number | 左侧偏移的列数。 | \`0\` |
| \`push\` | Number | 向右偏移的列数。 | \`0\` |
| \`pull\` | Number | 向左偏移的列数。 | \`0\` |
| \`xs\` | Object | 响应式配置 \`{ span: 6, offset: 0 }\`。| |
| \`sm\` | Object | 响应式配置。 | |
| \`md\` | Object | 响应式配置。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`click\` | 点击容器时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-col>\`。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-grid>
        <kwc-col span="12">
            <p>占据一半宽度</p>
        </kwc-col>
        <kwc-col span="12">
            <p>占据另一半宽度</p>
        </kwc-col>
    </kwc-grid>
</template>
\`\`\`

#### **分割容器 (Splitter)**

  * **组件名**: \`kwc-splitter\`
  * **说明**: 包含一个可拖动分隔条的容器，用于调整相邻面板的大小。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`orientation\`| String | 分割方向，可选 \`horizontal\`, \`vertical\`。 | \`vertical\` |
| \`pane-1-min-size\`| String | 第一个面板的最小尺寸。 | \`0\` |
| \`pane-2-min-size\`| String | 第二个面板的最小尺寸。 | \`0\` |
| \`size\` | String | 分隔条的尺寸，如\`50%\`。 | |
| \`allow-collapse\`| Boolean | 是否可折叠面板。 | \`false\` |
| \`disabled\` | Boolean | 是否禁用拖拽。 | \`false\` |
| \`fixed-pane\` | Number | 固定大小的面板，可选 \`1\` 或 \`2\`。 | \`0\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`resize\` | 面板大小改变时触发。 |
| \`collapse\` | 面板折叠时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`pane1\` / \`start\`| 第一个面板的内容。 |
| \`pane2\` / \`end\` | 第二个面板的内容。 |
| \`handle\` | 自定义分隔条。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-splitter style="height: 200px;">
        <div slot="start">左侧面板</div>
        <div slot="end">右侧面板</div>
    </kwc-splitter>
</template>
\`\`\`

#### **轮播容器 (Carousel)**

  * **组件名**: \`kwc-carousel\`
  * **说明**: 循环播放一组图片或内容的容器。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`autoplay\` | Boolean | 是否自动播放。 | \`true\` |
| \`interval\` | Number | 自动播放间隔（毫秒）。 | \`3000\` |
| \`indicator-position\`| String | 指示器位置，可选 \`top\`, \`bottom\`。 | \`bottom\` |
| \`arrow-visibility\`| String | 箭头显示模式，可选 \`always\`, \`hover\`, \`never\`。 | \`hover\` |
| \`loop\` | Boolean | 是否循环播放。 | \`true\` |
| \`initial-index\`| Number | 初始显示项的索引。 | \`0\` |
| \`height\` | String | 轮播容器高度。 | |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 切换幻灯片时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-carousel-item>\`。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-carousel>
        <kwc-carousel-item src="image1.jpg"></kwc-carousel-item>
        <kwc-carousel-item src="image2.jpg"></kwc-carousel-item>
    </kwc-carousel>
</template>
\`\`\`

#### **页签容器 (Tab Container)**

  * **组件名**: \`kwc-tab-container\`
  * **说明**: 类似 \`kwc-tabs\`，但更侧重于作为布局容器。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`active-tab\` | String | 当前激活的 Tab 的名称。 | |
| \`variant\` | String | 样式类型，可选 \`standard\`, \`pill\`。 | \`standard\` |
| \`lazy-load\` | Boolean | 是否延迟加载内容。 | \`false\` |
| \`direction\` | String | 页签方向，可选 \`horizontal\`, \`vertical\`。 | \`horizontal\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`tab-change\` | 激活的页签改变时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-tab-panel>\`。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-tab-container>
        <kwc-tab-panel name="tab1" label="标签一">
            <p>内容一</p>
        </kwc-tab-panel>
        <kwc-tab-panel name="tab2" label="标签二">
            <p>内容二</p>
        </kwc-tab-panel>
    </kwc-tab-container>
</template>
\`\`\`

#### **字段容器 (Field Container)**

  * **组件名**: \`kwc-field-container\`
  * **说明**: 在表单中用于对齐标签和输入控件。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`label\` | String | 标签文本。 | |
| \`label-position\`| String | 标签位置，可选 \`top\`, \`left\`, \`right\`。 | \`left\` |
| \`required\` | Boolean | 是否必填。 | \`false\` |
| \`help-text\` | String | 帮助文本。 | |
| \`error-text\` | String | 错误提示文本。 | |
| \`label-width\` | String | 标签宽度。 | \`120px\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`click\` | 点击容器时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 输入组件。 |
| \`label\` | 自定义标签。 |
| \`help-text\` | 自定义帮助文本。 |
| \`error-text\` | 自定义错误提示。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-field-container label="用户名" required>
        <kwc-input></kwc-input>
    </kwc-field-container>
</template>
\`\`\`

#### **折叠面板 (Collapse/Accordion)**

  * **组件名**: \`kwc-collapse\`
  * **说明**: 可以展开和折叠内容区域。
  * **属性**:

| 属性名 | 类型 | 说明 | 默认值 |
| :--- | :--- | :--- | :--- |
| \`active-section-name\`| String/Array | 当前展开的面板名称。 | |
| \`accordion\` | Boolean | 是否手风琴模式，即一次只能展开一个面板。 | \`false\` |
| \`bordered\` | Boolean | 是否带边框。 | \`true\` |
| \`ghost\` | Boolean | 是否无边框和背景。 | \`false\` |
| \`expand-icon-position\`| String | 展开图标位置，可选 \`left\`, \`right\`。 | \`left\` |

  * **事件 (Events)**:

| 事件名 | 说明 |
| :--- | :--- |
| \`change\` | 展开/收起状态改变时触发。 |

  * **插槽 (Slots)**:

| 插槽名 | 说明 |
| :--- | :--- |
| \`default\` | 容纳 \`<kwc-collapse-section>\`。 |

  * **使用示例**:

<!-- end list -->

\`\`\`html
<template>
    <kwc-collapse active-section-name="A">
        <kwc-collapse-section name="A" label="面板标题 A">
            <p>这是面板A的内容。</p>
        </kwc-collapse-section>
        <kwc-collapse-section name="B" label="面板标题 B">
            <p>这是面板B的内容。</p>
        </kwc-collapse-section>
    </kwc-collapse>
</template>
\`\`\`
`

export async function getTechStackSection(variant: PromptVariant, _context: SystemPromptContext): Promise<string> {
	const template = variant.componentOverrides?.[SystemPromptSection.TECH_STACK]?.template || TECH_STACK_CONTENT
	return new TemplateEngine().resolve(template, {})
}
